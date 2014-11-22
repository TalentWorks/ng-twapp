'use strict';

describe('RedditFeedFactory Unit Tests', function() {
	var RedditFeedFactory = null;
 
	beforeEach(module('ng-twapp.infiniteScroller'));
	beforeEach(inject(function(_RedditFeedFactory_){
        RedditFeedFactory = _RedditFeedFactory_;
    }));
 
	afterEach(function() {
		RedditFeedFactory = null;
	});
 
	it('should not be null', function() {
		assert.isNotNull(RedditFeedFactory);
	});

	it('should invoke getFeed with no problems', function() {
		RedditFeedFactory.getFeed('');
	});
	
//	it('should not be busy after it is complete', function() {
//		RedditFeedFactory.getFeed($scope).then(function() {
//			expect($scope.busy).to.be.false;
//		});
//	});
});