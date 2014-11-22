'use strict';
/**
 * @ngdoc config
 * @name ng-twapp.infiniteScroller.RedditFeedFactory
 * @description  A JSON Feeding factory. The getFeed requires one variable:
 * after: The current index of the feed.
 */
angular.module('ng-twapp.infiniteScroller').factory('RedditFeedFactory', function ($q, $http) {
  var factory = {};
  factory.getFeed = function (after) {
    var deferred = $q.defer();
    $http.get('http://api.reddit.com/hot?after=' + after).success(function (data) {
      deferred.resolve(data);
    });
    return deferred.promise;
  };
  return factory;
});
//Wrong way to wrap a promise.
// //Page controller
// angular.module("app").controller("testCtrl", function($scope, $location, test){
//
//   /**
//    * Responds to click events on the save button
//    * Saves the items and advances to the next page if successful
//    */
//   $scope.onSaveClick = function(){
//     test.saveItem($scope.data.item,
//         //success callback
//         function(){
//           $scope.data.backgroundColor = "red";
//
//           //go to next page
//           $location.path("/place1");
//         },
//         //error callback
//         function(){
//           //go to next page
//           $location.path("/place2");
//         });
//   }
// }
//
// //Helper service
// angular.module("app").service("test", function(){
//   function saveItem(item, success, fail){
//     var promise = $http.post("/item", item);
//
//     //wrap the callback in another callback, because that's the cool way
//     promise.success(function(itemData){
//       if(success){
//         success(itemData);
//       }
//     });
//
//     //do it a different way here.  Because two ways is always better than one!
//     promise.error(fail);
//   }
//
//   return {
//     saveItem : saveItem
//   }
// })
