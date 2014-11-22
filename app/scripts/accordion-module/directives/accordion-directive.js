'use strict';
/**
 * @author
 * @ngdoc directive
 * @name ng-twapp.accordion.tAccordion
 * @description # tAccordion
 */
angular.module('ng-twapp.accordion')
  .directive('tAccordion', function() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/scripts/accordion-module/views/accordion.html',
      controller: function($scope, accordionService) {
        accordionService.getAccordionData()
          .then(function(data) {
            $scope.items = data;
          });
      },
      link: function(scope, el, attrs) {
        scope.isOpen = attrs.isFirstOpen;
      }
    };
  });
