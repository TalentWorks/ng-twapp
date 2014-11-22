'use strict';
angular.module('ng-twapp.carousel')
  .service('carouselService', function () {
    this.getSliderImages = function () {
      var images = [{
        image: 'http://lorempixel.com/400/200/'
      }, {
        image: 'http://lorempixel.com/400/200/food'
      }, {
        image: 'http://lorempixel.com/400/200/sports'
      }, {
        image: 'http://lorempixel.com/400/200/people'
      }];

      return images;
    };
  });
