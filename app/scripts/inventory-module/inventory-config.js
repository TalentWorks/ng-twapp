'use strict';

angular
    .module('mytmoNgApp')
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider.state('inventory', {
            url: '/inventory',
            templateUrl: '/scripts/inventory-module/views/inventory.html',
            controller: 'InventoryCtrl',
            controllerAs: 'inventory'
        })
            .state('inventory.modal', {
                url: '/modal',
                templateUrl: '/scripts/modal-module/views/modal.html'
            })
            .state('inventory.weather', {
                url: '/weather',
                templateUrl: '/scripts/shared-modules/weather-module/views/weather.html'
            })
            .state('inventory.pager', {
                url: '/pager',
                templateUrl: '/scripts/pagination-module/views/pagination-example.html'
            })
            .state('inventory.login', {
                url: '/forms/login',
                templateUrl: '/scripts/login-module/views/form.html'
            })
            .state('inventory.calendar', {
                url: '/calendar',
                templateUrl: '/scripts/shared-modules/calendar-picker-module/views/calendar.html'
            })
            .state('inventory.item', {
                url: '/:itemID',
                templateUrl: '/scripts/inventory-module/views/inventory-item.html',
                controller: 'InventoryItemCtrl as inventory'
            });

        $urlRouterProvider.otherwise('/');
    });
