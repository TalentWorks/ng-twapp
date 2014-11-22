'use strict';
/**
 * @author josefsosa on 9/18/14.
 * @ngdoc directive
 * @name ng-twapp.modal.modelDirective
 * @description # modelDirective
 */
angular.module('ng-twapp.modal').directive('customModals', function () {
  return {
    restrict: 'A',
    require: '?ngModel',
    transclude: true,
    scope: false,

    link: function (scope, el, attrs) {
      scope.modalId = attrs.modalId;
    },
    templateUrl: function (elem, attrs) {
      return attrs.templateUrl;
    }
  };
});
