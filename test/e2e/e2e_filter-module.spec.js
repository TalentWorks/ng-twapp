describe('Filter header module', function () {
	browser.get('http://localhost:9000/#/inventory/filter');
	  it('Display all result', function () {
	    element(by.linkText('All')).click();
	  });
	  it('Display corporate result', function () {
			element(by.linkText('Corporate')).click();
	  });
	  it('Display ratail result', function () {
			element(by.linkText('Retail')).click();
	  });
	  it('Display technology result', function () {
			element(by.linkText('Technology')).click();
	  });
});

describe('Price Filter', function () {
	  it('Display data price filter', function () {
		browser.get('http://localhost:9000/#/inventory/filter');
	    element(by.className('opnePriceFilter')).click();
	    element(by.model('priceFilter.startRange')).sendKeys('10');
	    element(by.model('priceFilter.endRange')).sendKeys('50');
	    element(by.className('applyRangeDataFilter')).click();
	  })
});
describe('Date  Filter', function () {
	  it('Display data date filter', function () {
		browser.get('http://localhost:9000/#/inventory/filter');
	    element(by.className('openDateFilter')).click();
	    element(by.model('dateFilter.startRange')).sendKeys('05/06/2014');
	    element(by.model('dateFilter.endRange')).sendKeys('10/15/2014');
	    element(by.className('applyDateFilter')).click();
	  });
});
describe('Search  Filter', function () {
	  it('Result data search filter', function () {
		browser.get('http://localhost:9000/#/inventory/filter');
	    element(by.model('searchText')).sendKeys('aaron');
	    element(by.model('searchText')).clear();
	    element(by.model('searchText')).sendKeys('11');
	  });
});
describe('Sorting  Filter', function () {
	  it('Sorting filter result', function () {
		browser.get('http://localhost:9000/#/inventory/filter');
		element(by.partialLinkText('Type')).click();
		element(by.partialLinkText('Name')).click();
	  });
});