'use strict';
/**
 * @author tanuja patil
 * @ngdoc directive
 * @name ng-twapp.starRating.tRating
 * @description # tRating
 */
angular.module('ng-twapp.starRating')
  .directive('tRating', function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: function (elem, attrs) {
        return attrs.ratingUrl;
      },
      controller: function ($scope) {
        $scope.rate = 4;
        $scope.max = 10;
      },
      link: function (scope) {
        var reviewsData = [2, 4, 4, 5, 5];
        scope.rateFunction = function (rate) {
          reviewsData.push(rate);
          scope.reviewDataLength = reviewsData.length;
          scope.averageReview = function () {
            if (reviewsData.length) {
              for (var i = 0, sum = 0, dataLength = reviewsData.length; i < dataLength; i++) {
                sum = parseInt(sum + reviewsData[i]);
              }
              return sum / dataLength;
            }
          };
        };
      }
    };
  });
