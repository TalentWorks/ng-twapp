'use strict';

describe('Controller: LoginController', function () {
  var ctrl, scope;

  beforeEach(module('ui.router', 'ng-twapp.login', 'ng-twapp.commonApi'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('LoginController', {
      $scope: scope
    });
  }));

  //to test the existence of the controller to make sure the controller exists
  //uninitiated ctrl will have undefined value
  it('should have a LoginController controller', function () {
    expect(ctrl).to.be.exist;
  });

  //to test the passed data is correctly passed
  it("should have the formData contain the correct data", function () {
    var data = {username: 'jsmith', first_name:'john',last_name:'smith'};
    scope.processForm(data);
    expect(scope.formData).to.deep.equal(data);
  });

});
