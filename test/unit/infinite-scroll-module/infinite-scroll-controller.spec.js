'use strict';

describe('InfiniteScrollController Unit Tests', function() {
	var scope = null;
	var InfiniteScrollController = null;
	var FEED_RETURN_LENGTH = 15;
	
	beforeEach(module('ng-twapp.infiniteScroller'));
	beforeEach(inject(function($rootScope, $controller){
		scope = $rootScope.$new();
        InfiniteScrollController = $controller('InfiniteScrollController', {$scope: scope});
    }));
 
	afterEach(function() {
		scope = null;
		InfiniteScrollController = null;
	});
 
	it('should not be null', function() {
		assert.isNotNull(InfiniteScrollController);
	});
	
	it('should have default values', function() {
		expect(scope.busy).to.be.false;
		expect(scope.items).to.be.empty;
		expect(scope.after).to.be.empty;
	});
    
});