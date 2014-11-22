'use strict';

describe('Controller: MainController', function () {

    // load the controller's module
    beforeEach(module('ng-twapp.main'));
    var ctrl,
        scope;
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('MainController', {
            $scope: scope
        });
    }));

    it('should have set mainUserData scope variable correctly', function () {
        expect(scope.mainUserData.userFirstName).to.equal("John");
        expect(scope.mainUserData.userLastName).to.equal("Smith");
        expect(scope.userName).to.equal("John Smith");
    });

});
