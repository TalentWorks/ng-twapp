'use strict';
/**
 * @ngdoc controller
 * @name ng-twapp.logingCtrl
 * @description # logingCtrl
 */

angular.module('ng-twapp')
    .controller('loginCtrl', ['$scope', 'loginFactory','authenticationService', function ($scope, loginFactory, authenticationService)  {

      $scope.formData = {};
      loginFactory.all()
          .then(function (users) {
            $scope.formData2 = users;
          }, function (error) {
            console.error(error);
          });

      $scope.formData2 = {};
      var userId = '5433698078b5d6674be9680c';
      loginFactory.find(userId)
          .then(function (user) {
            $scope.formData2 = user;
          }, function (error) {
            console.error(error);
          });

      console.log($scope.formData2);

      $scope.login = function () {
        loginFactory.find($scope.formData);
      };

      // function to process the profile form
      $scope.processForm = function () {
        loginFactory.add($scope.formData);
        alert('Created User! ' + $scope.formData.name);
      };

  }]).factory("authenticationService", function($http, $q, $window) {
      var userInfo;

      function getUserInfo() {
        return userInfo;
      }
      function login(userName, password) {
        var deferred = $q.defer();

        $http.post("http://localhost:9005/api/users/", {
          userName: userName,
          password: password
        }).then(function(result) {
              userInfo = {
                accessToken: result.data.access_token,
                userName: result.data.userName
              };
              $window.sessionStorage["userInfo"] = JSON.stringify(userInfo);
              deferred.resolve(userInfo);
            }, function(error) {
              deferred.reject(error);
            });

        return deferred.promise;
      }
      return {
        login: login,
        getUser: getUserInfo
      };
    });
