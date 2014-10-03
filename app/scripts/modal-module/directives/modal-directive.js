'use strict';
/**
 * @author josefsosa on 9/18/14.
 * @ngdoc directive
 * @name ng-twapp.modelDirective
 * @description # modelDirective
 */
angular.module('ng-twapp')
    .directive('customModals', function () {
        return {
            restrict: 'A',
            require: '?ngModel',
            transclude: true,
            scope: false,

            link: function(scope, el, attrs, transcludeFn){
                scope.modalId = attrs.modalId;
            },
            templateUrl:function(elem,attrs) {
                return attrs.templateUrl
            }
        };
    });