'use strict';

describe('ng-twapp.deviceDetector DeviceDetectorController', function() {
    var $controller;
    var scope;
	var $window;

    beforeEach(function() {
        module('ng-twapp');
        inject(function(_$controller_, _$rootScope_, _$window_) {
            $controller = _$controller_;
			$window = _$window_;
			var $rootScope = _$rootScope_;
			scope = $rootScope.$new();
            var DeviceDetectorController = $controller('DeviceDetectorController', {
                $scope: scope
            });
        });
    });
	it('should be defined', function () {
		expect(!!scope).to.be.true;
	});
	it('should recognize a phone', function() {
		resizeWidth(250);
		expect(scope.deviceType).to.equal('Phone');
	});
	it('should recognize a tablet', function() {
		resizeWidth(800);
		expect(scope.deviceType).to.equal('Tablet');
	});
	it('should recognize a desktop', function() {
		resizeWidth(1000);
		expect(scope.deviceType).to.equal('Desktop');
	});
	it('should recognize a large device', function() {
		resizeWidth(2000);
		expect(scope.deviceType).to.equal('Large Device');
	});
	it('should recognize a change in width', function() {
		resizeWidth(100);
		expect(scope.deviceType).to.equal('Phone');

		resizeWidth(5000);
		expect(scope.deviceType).to.equal('Large Device');
	});
	it('should have a device detector defined', function () {
		expect(!!scope.deviceDetector).to.be.true;
	});

	function resizeWidth(width) {
		$window.resizeTo(width, 200);
		$window.innerWidth = width;
		scope.$apply();
	}
});
