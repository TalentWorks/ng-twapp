'use strict';

describe('ng-inventory homepage', function() {
  it('should have a title', function() {
    browser.get('http://localhost:9000/#/');
    expect(browser.getTitle()).toEqual('ng-inventory');
  });
});

describe('perform login',function() {
  it('should login', function () {
    browser.get('http://localhost:9000/#/form/login');
    element(by.model('formData.username')).sendKeys('wylie');
    element(by.model('formData.password')).sendKeys('coyote');
    element(by.className('btn')).click();
  });
});

describe('navigate to inventory',function() {
  it('should go to inventory', function () {
    browser.get('http://localhost:9000/#/inventory');
  });
});
