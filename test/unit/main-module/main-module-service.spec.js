'use strict';

describe('Service: MainService', function () {
    var mainService;
    // load the controller's module
    beforeEach(module('ng-twapp.main'));

    // Initialize the service
    beforeEach(inject(function (_MainService_) {
        mainService = _MainService_
    }));

    it('should contain an $ service',
        inject(function () {
            expect(mainService).not.to.equal(null);
        }));

    it('should return correct data object from getData() method', function () {
        var data = mainService.getData();
        expect(data.userFirstName).to.equal("John");
        expect(data.userLastName).to.equal("Smith");
        expect(data.userPhoneNumber).to.equal("206-355-9999");
    });
});
