'use strict';

describe('ng-twapp.throwException ThrowExceptionController', function() {
    var $controller;
    var scope;

    beforeEach(function() {
        module('ng-twapp');
        inject(function(_$controller_, _$rootScope_) {
            $controller = _$controller_;
			var $rootScope = _$rootScope_;
			scope = $rootScope.$new();
            var DeviceDetectorController = $controller('ThrowExceptionController', {
                $scope: scope
            });
        });
    });
	it('should print a stack trace', function() {
		scope.printStackTrace();
		var stacktrace = scope.stacktrace.toString() || '';
		assert(stacktrace.contains('throw-exception-controller.js'));
	});
});
