'use strict';
/**
 * @ngdoc config
 * @name ng-twapp.bindFile.bindFile
 * @description  bindFile directive
 */
angular.module('ng-twapp.imageCamera').directive('bindFile', function () {
  return {
    restrict: 'A',
    link: function (scope, element) {
      element.bind('change', function (e) {
        scope.file = (e.srcElement || e.target).files[0];
        scope.getFile();
      });
    }
  };
});
