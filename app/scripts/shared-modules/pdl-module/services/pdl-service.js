'use strict';

angular.module('ng-twapp.pdl').service('Pdl', function ($rootScope, $location) {
  console.log('PdlService');
  console.log($rootScope);
  console.log($location);

  this.processData = function (scope) {
    console.log(scope);
  };
});
