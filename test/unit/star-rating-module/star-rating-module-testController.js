'use strict';

describe('Controller: StarRatingController', function () {

    // load the controller's module
    beforeEach(module('ng-twapp.starRating'));
    var ctrl,
        scope;
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('StarRatingController', {
            $scope: scope
        });
    }));
    it('should have load a StarRatingController correctly', function () {

        expect(ctrl).to.be.ok;

    });

});
