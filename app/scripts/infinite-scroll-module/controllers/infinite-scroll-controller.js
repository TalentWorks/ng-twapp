'use strict';
/**
 * @ngdoc config
 * @name ng-twapp.infiniteScroller.infinite-scroll
 * @description  Infinite Scroll Example controller to handle calling the required services for passing the data into the model
 */
angular.module('ng-twapp.infiniteScroller').controller('InfiniteScrollController', function ($scope, $http, RedditFeedFactory, $exceptionHandler) {
  $scope.busy = false;
  $scope.items = [];
  $scope.after = '';
  $scope.nextPage = function () {
    if ($scope.busy) {
      return;
    }
    $scope.busy = true;
    RedditFeedFactory.getFeed($scope.after).then(
      function (data) {
        var newItems = data.data.children;
        angular.forEach(newItems, function (item) {
          this.push(item.data);
        }, $scope.items);
        $scope.after = 't3_' + $scope.items[$scope.items.length - 1].id;
        $scope.busy = false;
      },
      function (error) {
        $exceptionHandler('Error parsing the feed response.', error);
      }
    );
  };
});
