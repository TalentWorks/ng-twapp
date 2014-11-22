'use strict';
describe('Main Module Directive', function () {
	var $compile, $rootScope;
	var element;
	beforeEach(function() {
		module('ng-twapp.main');
		inject(function(_$compile_, _$rootScope_) {
			$compile = _$compile_;
			$rootScope = _$rootScope_;
		});
	});

	it("should display the text properly", function() {
		element = angular.element('<div data-app-welcome>User</div>');
		element = $compile(element)($rootScope);
		expect(element.text()).to.equal('User');
	});
});