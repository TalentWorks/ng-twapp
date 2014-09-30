/**
 * Created by josefsosa on 9/29/14.
 */
angular.module('ng-twapp')
.directive('commonFooter', ['$location', function ($location) {
  return {
    restrict: 'E',
    templateUrl: 'scripts/footer-module/views/footer.html',
    scope: {

    },
    link: function (scope, element, attrs) {
      scope.isActive = function(route) {
        return route === $location.path();
      }
    }
  }
}]);