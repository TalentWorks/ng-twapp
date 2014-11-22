'use strict';

angular.module('ng-twapp.popover')
  .directive('tmPopover', function ($compile, $http) {
    return {
      restrict: 'A',
      templateUrl: function (elem, attrs) {
        return attrs.templateUrl;
      },
      link: function (scope, el, attrs) {
        scope.label = attrs.popoverLabel;
        var url = attrs.popoverContent;
        var htmlContent;
        $http.get(url)
          .success(function (data) {
            htmlContent = data;
            el.popover({
              trigger: 'hover',
              html: true,
              content: $compile(htmlContent)(scope),
              placement: attrs.popoverPlacement
            });
          });
      }
    };
  });
