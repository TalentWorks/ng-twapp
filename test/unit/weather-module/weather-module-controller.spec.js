'use strict';

describe('Controller: MainController', function () {
    var ctrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(function() {
		module('ui.router', 'ng-twapp');
		inject(function ($controller, $rootScope) {
			scope = $rootScope.$new();
			ctrl = $controller('WeatherController', {
				$scope: scope
			});
		});
    });

    it('should have a WeatherController controller', function () {
        expect(ctrl).not.to.equal(null);
    });
});