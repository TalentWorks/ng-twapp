'use strict';
describe('Service: loginService', function () {

    // load the controller's module
    beforeEach(module('ui.router','ng-twapp.login', 'ng-twapp.commonApi'));

    var LoginService,UserService,user;

    beforeEach(inject(function (_LoginService_,_UserService_) {
        LoginService = _LoginService_;
        UserService = _UserService_;
        sinon.stub(UserService,'authenticate');
        user = {
            authenticate: function () {
                return true;
            },
            setPassword: function () {
            }
        };
        sinon.stub(user,'setPassword');
        sinon.stub(UserService,'getUser').returns(user);
    }));

    //to test the existence of the service to make sure the service exists
    //uninitiated ctrl will have undefined value
    it('should have a LoginController controller', function () {
        expect(LoginService).to.be.exist;
    });

    //an example of a test where a service has a dependency (UserService) and the dependency's
    //method is tested
    it('should have the authenticate method of LoginService called once', function () {
        LoginService.authenticateUser(user);
        expect(UserService.authenticate).to.have.been.called;
    });

    //an example of a test where a service method's receive an object parameter whose
    //method is to be called once
    it('should have the setPassword method of user object invoked sucessfully ', function () {
        LoginService.resetPassword(user,"pass");
        expect(user.setPassword).to.have.been.called;
    });



});
