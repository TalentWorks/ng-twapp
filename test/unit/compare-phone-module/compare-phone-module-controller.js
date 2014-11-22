'use strict';

describe('Controller: ComparePhoneController', function () {

    // load the controller's module
    beforeEach(module('ng-twapp.comparePhone'));
    var ctrl,
        scope;
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('ComparePhoneController', {
            $scope: scope
        });
    }));

/* // bootstrap app module
    it("should bootstrap the nng-twappcomparePhone module", function () {
        angular.bootstrap(window, ["ng-twapp.comparePhone"]);
    });

    // check scope is define or not
    it('should have scope defined in ComparePhoneController', function () {
        angular.isDefined(scope);
    });


    it('should have set mesg scope variable correctly', function () {
    	angular.isDefined(scope.toggleCheck);
    });
    */
    it('ComparePhoneController to be ok', function () {
    	expect(ctrl).to.be.ok;
    	expect(scope.compareData).to.be.empty;
		expect(scope.phoneDetails).to.be.empty;
		expect(ctrl).not.to.equal(null);

    });

});
