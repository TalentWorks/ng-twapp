describe('Service: SpinnerHttpInterceptorFactory', function () {
    'use strict';

    var spinnerHttpInterceptorFactory,
        $httpBackend;

    // load the service's module
    beforeEach(function () {
        module('ng-twapp');
        inject(function (_SpinnerHttpInterceptorFactory_, _$httpBackend_) {
            spinnerHttpInterceptorFactory = _SpinnerHttpInterceptorFactory_;
            $httpBackend = _$httpBackend_;
        });
    });
	
	it('should be defined', function () {
        expect(!!spinnerHttpInterceptorFactory).to.be.true;
    });
});