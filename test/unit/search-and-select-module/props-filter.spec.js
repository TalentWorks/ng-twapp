'use strict';

describe('Filter', function() {
	var props;
	beforeEach(function() {
        module('ng-twapp');
		inject(function(_$filter_) {
            props = _$filter_('props');
        });
    });

    describe('props', function() {
        it('should filter out one item', function() {
			var expectedItem = {id: 2, color: 'blue', cool:true};
			var items = [
				{id: 1, color: 'red', cool: true},
				expectedItem,
				{id: 3, color: 'pink', cool:false}
			];
			expect(props(items, {color:'blue'})[0]).to.deep.equal(expectedItem);
        });
		it('should find the only item', function() {
			var expectedItem = {id: 2, color: 'blue', cool:true};
			expect(props(expectedItem, {color:'blue'})).to.deep.equal(expectedItem);
		});

    });
});