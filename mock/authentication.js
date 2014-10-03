angular.module('myTmoApp.mocks')
    .service('mockAuthentication', function () {
      var service = {
        getApiService: function () {
          return "mockApiService";
        },
        currentUser: function () {
          return "mockUser";
        }
      }
      return service;
    });