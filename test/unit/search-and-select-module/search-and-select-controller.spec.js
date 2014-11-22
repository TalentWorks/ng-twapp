'use strict';

describe('ng-twapp.searchAndSelect', function() {
    var $controller;
    var $httpBackend;
    var $location;
    var $q;
    var $rootScope;
    var scope;

    beforeEach(function() {
        module('ng-twapp');
        inject(function(_$controller_, _$httpBackend_, _$location_, _$q_, _$rootScope_) {
            $controller = _$controller_;
            $httpBackend = _$httpBackend_;
            $location = _$location_;
            $q = _$q_;
            $rootScope = _$rootScope_;
        });
    });

    describe('SearchAndSelectController controller', function() {
        beforeEach(function () {
            scope = $rootScope.$new();
            var SearchAndSelectController = $controller('SearchAndSelectController as ctrl', {
                $scope: scope
            });
        });
		it('should be defined', function () {
			expect(!!scope.ctrl).to.be.true;
		});
    });
});
