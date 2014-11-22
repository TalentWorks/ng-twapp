'use strict';
/**
 * The MainService acts as a service to supply main user data.
 * @module myTmoApp.main-module.services
 */
angular.module('ng-twapp.main').factory('MainService', [function () {
  var mainUserData = {
    userFirstName: 'John',
    userLastName: 'Smith',
    userPhoneNumber: '206-355-9999'
  };

  return {
    getData: function () {
      return mainUserData;
    }
  };
}]);
