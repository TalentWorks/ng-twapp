describe('perform login', function () {
  it('should login', function () {
    browser.get('http://localhost:9000/#/form/multi');
    element(by.model('formData.username')).sendKeys('wylie');
    element(by.model('formData.password')).sendKeys('coyote');
    element(by.className('btn')).click();
  });
});

describe('profile screen', function () {
  it('should see profile screen', function () {
    browser.get('http://localhost:9000/#/form/profile');
    element(by.model('formData.name')).sendKeys('bob');
    element(by.model('formData.email')).sendKeys('bob@mail.com');
    element(by.className('btn')).click();
  });
});

describe('interest screen', function () {
  it('should see profile screen', function () {
    browser.get('http://localhost:9000/#/form/interests');
    element(by.model('formData.type')).click();
    element(by.className('btn')).click();
  });
});

describe('verify screen', function () {
  it('should see verify screen', function () {
    browser.get('http://localhost:9000/#/form/verify');
    element(by.className('btn')).click();
  });
});
