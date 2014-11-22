'use strict';
/**
 * @ngdoc controller
 * @name ng-twapp.searchAndSelect.SearchAndSelectController
 * @description A controller for the ng-twapp.searchAndSelect module.
 */
angular.module('ng-twapp.searchAndSelect').controller('SearchAndSelectController', function ($scope) {
  $scope.architect = {};
  $scope.architects = [
    {name: 'Sosa, Jose', email: 'josefsosa@gmail.com'},
    {name: 'Saslavsky, Alejandro', email: 'Saslavsky@gemail.com'},
    {name: 'Ragi, Federico', email: 'fragi@gmail.com'}
  ];
});
