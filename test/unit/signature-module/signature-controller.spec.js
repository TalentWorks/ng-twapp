'use strict';

describe('ng-twapp.signature', function() {
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

    describe('SignatureController controller', function() {
        beforeEach(function () {
            scope = $rootScope.$new();
            var SignatureController = $controller('SignatureController as ctrl', {
                $scope: scope
            });
        });
		it('should be defined', function () {
			expect(!!scope.ctrl).to.be.true;
		});
    });
});
