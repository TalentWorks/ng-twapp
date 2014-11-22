'use strict';

describe('Controller: AccController', function () {

    // load the controller's module
    beforeEach(module('ng-twapp.accordion'));
    var ctrl,
        scope;
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('AccController', {
            $scope: scope
        });
    }));

    it('should have set mesg scope variable correctly', function () {
        expect(scope.mesg).to.equal('Hello');
    });

});
