'use strict';
/**
 * @ngdoc module
 * @name  ng-twapp.inventory
 * @description # ng-twapp inventory module loader
 */
angular.module('ng-twapp.inventory', []).config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('inventory', {
      url: '/inventory',
      templateUrl: '/scripts/inventory-module/views/inventory.html',
      controller: 'InventoryController',
      controllerAs: 'inventory'
    })
    .state('inventory.storage', {
      url: '/storage',
      templateUrl: 'scripts/local-storage-module/views/local-storage-navigation.html',
      controller: 'LocalStoreController'
    })
    .state('inventory.modal', {
      url: '/modal',
      templateUrl: '/scripts/modal-module/views/modal.html',
      controller: 'ModalController'
    })
    .state('inventory.weather', {
      url: '/weather',
      templateUrl: '/scripts/shared-modules/weather-module/views/weather.html',
      controller: 'WeatherController'
    })
    .state('inventory.pager', {
      url: '/pager',
      templateUrl: '/scripts/pagination-module/views/pagination-example.html',
      controller: 'PaginationExampleController'
    })
    .state('inventory.login', {
      url: '/login',
      templateUrl: '/scripts/login-module/views/form.html',
      controller: 'LoginController'
    })
    .state('inventory.calendar', {
      url: '/calendar',
      templateUrl: '/scripts/shared-modules/calendar-picker-module/views/calendar.html'
    })
    .state('inventory.responsive', {
      url: '/responsive',
      templateUrl: '/scripts/responsive-module/views/responsive.html'
    })
    .state('inventory.infinite-scroller', {
      url: '/infinite-scroller',
      templateUrl: '/scripts/infinite-scroll-module/views/infinite-scroll.html',
      controller: 'InfiniteScrollController'
    })
    .state('inventory.google-maps', {
      url: '/google-maps',
      templateUrl: '/scripts/google-maps-module/views/google-maps.html',
      controller: 'GoogleMapsExampleController'
    })
    .state('inventory.image-camera', {
      url: '/image-camera',
      templateUrl: '/scripts/image-camera-module/views/image-camera.html',
      controller: 'ImageCameraController'
    })
    .state('inventory.throw-exception', {
      url: '/throw-exception',
      templateUrl: '/scripts/throw-exception-module/views/throw-exception.html',
      controller: 'ThrowExceptionController'
    })
    .state('inventory.item', {
      url: '/:itemID',
      templateUrl: '/scripts/inventory-module/views/inventory-item.html',
      controller: 'InventoryItemController as inventory'
    })
    .state('inventory.carousel', {
      url: '/carousel',
      templateUrl: '/scripts/carousel-module/views/carousel-component.html',
      controller: 'TmCarouselController'
    })
    .state('inventory.filter', {
      url: '/filter',
      templateUrl: '/scripts/filter-module/views/filter.html',
      controller: 'FilterController'
    })
    .state('inventory.accordion', {
      url: '/accordion',
      templateUrl: '/scripts/accordion-module/views/accordion-main.html',
      controller: 'AccController'
    })
    .state('inventory.popover', {
      url: '/popover',
      templateUrl: '/scripts/shared-modules/popover-module/views/popover.html'
    })
    .state('inventory.star-rating', {
      url: '/star-rating',
      templateUrl: '/scripts/star-rating-module/views/star-rating-main.html',
      controller: 'StarRatingController'
    })
    .state('inventory.compare-phone', {
      url: '/compare-phone',
      templateUrl: '/scripts/compare-phone-module/views/compare-phone-main.html',
      controller: 'ComparePhoneController'
    })
    .state('inventory.spinner', {
      url: '/spinner',
      templateUrl: 'scripts/shared-modules/global-spinner-module/views/test-spinner.html',
      controller: 'SpinnerController'
    })
    .state('inventory.device-detector', {
      url: '/device-detector',
      templateUrl: 'scripts/device-detector-module/views/device-detector.html',
      controller: 'DeviceDetectorController'
    })
    .state('inventory.cart', {
      url: '/cart',
      templateUrl: '/scripts/ngcart-module/views/cartView.html',
      controller: 'CartController'
    })
    .state('inventory.autocomplete', {
      url: '/autocomplete',
      templateUrl: '/scripts/autocomplete-module/views/autocomplete.html',
      controller: 'AutocompleteController'
    })
    .state('inventory.validation', {
      url: '/validation',
      templateUrl: '/scripts/validation-module/views/validation.html',
      controller: 'ValidationController'
    })
    .state('inventory.searchAndSelect', {
      url: '/search-and-select',
      templateUrl: 'scripts/search-and-select-module/views/search-and-select.html',
      controller: 'SearchAndSelectController'
    })
    .state('inventory.signature', {
      url: '/signature',
      templateUrl: 'scripts/signature-module/views/signature.html',
      controller: 'SignatureController'
    })
    .state('inventory.restNg', {
      url: '/restNg',
      templateUrl: '/scripts/rest-angular-module/views/reast-angular-nav.html',
      controller: 'RestAngularController'
    });

  $urlRouterProvider.otherwise('/');
});
