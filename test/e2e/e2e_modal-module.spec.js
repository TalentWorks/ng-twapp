describe('ng-inventory modal', function() {
    it('should have a title', function() {
        browser.get('http://localhost:9000/#/inventory/modal');
        element(by.id('btnShowModal')).click();
        expect(element(by.id('myModal')).isDisplayed()).toBeTruthy();
    });
});
