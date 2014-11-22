'use strict';
/**
 * @ngdoc service
 * @name ng-twapp.login.loginService
 * @description # loginService
 */

angular.module('ng-twapp.login').service('LoginService', function (UserService) {
  return {
    //a method that is supposedly to return boolean whether a user is authenticated or not
    authenticateUser: function (user) {
      UserService.authenticate(user);
    },
    resetPassword: function (user, newPassword) {
      user.setPassword(newPassword);
    },
    requestAuthenticationID: function (user) {
      console.log(user);
    }
  };
});
