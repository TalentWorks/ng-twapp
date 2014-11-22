'use strict';
angular.module('ng-twapp.carousel', [])
  .controller('TmCarouselController', function ($scope, carouselService) {
    $scope.slides = carouselService.getSliderImages();
  });
