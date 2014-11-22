'use strict';
/**
 * @ngdoc module
 * @name ng-twapp
 * @description A controller to pick a random number and possibly throw an error.
 */
angular.module('ng-twapp.throwException')
  .controller('ThrowExceptionController', function ($scope, $exceptionHandler, $modal, $q) {
    $scope.throwException = function () {
      var e = $exceptionHandler('Exception is Thrown!', 'you');
      $modal.open({
        template: '<h2>' + e + '</h2>'
      });
    };

    $scope.printStackTrace = function () {
      $scope.stacktrace = $scope.printStackTrace;
    };

    var rejectPromise = function () {
      var deferred = $q.defer();

      setTimeout(function () {
        deferred.reject('I am rejecting you!');
      }, 3000);

      return deferred.promise;
    };

    $scope.doSomethingWithRejectedPromise = function () {
      rejectPromise()
        .then(
        function () {
        },
        function (error) {
          $scope.promiseError = error;
        });
    };
  });
