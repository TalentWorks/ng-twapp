'use strict';
describe('Accordion Directive', function() {
	var $compile, $rootScope;

	beforeEach(module('ng-twapp.accordion'));

	beforeEach(inject(function(_$compile_, _$rootScope_) {
			$compile = _$compile_;
			$rootScope = _$rootScope_;
	}));

	it('should display the welcome text properly', function() {
		var element = $compile('<div data-app-welcome>User</div>')($rootScope);
		expect(element.html()).to.match(/User/i);
	});
});
