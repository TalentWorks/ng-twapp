'use strict';
/**
 * @ngdoc config
 * @name ng-twapp.googleMaps.GoogleMapsExampleController
 * @description  Google Maps Example controller to handle calling the required services for passing the data into the model
 */
angular.module('ng-twapp.googleMaps').controller('GoogleMapsExampleController', function ($scope) {
  $scope.map = {
    center: {
      latitude: 47.576,
      longitude: -122.167
    },
    zoom: 15
  };
  $scope.options = {
    scrollwheel: true
  };
});
