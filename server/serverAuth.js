var express = require('express');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

var passport = require('passport');
var passportlocal = require('passport-local');


var app =  express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(expressSession({
    secret: process.env.SESSION_SECRET || 'secret',
    resave: false,
    saveUninitilized: false
  }));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new passportlocal.Strategy(function(username, password, done){
  //need to use mongo
  if (username === password){
    done(null, {id:username, name:username});
  } else{
    done(null, null);
  }
}));

passport.serializeUser(function(user, done){
  done(null, user.id);
});

passport.deserializeUser(function(id, done){
  done(null, { id: id, name:id });
});

app.get('/', function(req, res){
  res.render('index',{
    isAuthenticated: req.isAuthenticated(),
    user: req.user
  });
});

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.get('/login', function(req, res){
  res.render('login');
});

//passport instead
app.post('/login', passport.authenticate('local'), function(req, res){
  res.redirect('/')
});

var port =  process.env.PORT || 1337;

app.listen(port, function(){
  console.log('http://127.0.0.1:' + port + '/')
});
