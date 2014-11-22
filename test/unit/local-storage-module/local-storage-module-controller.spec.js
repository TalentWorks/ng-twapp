/*
'use strict';

describe('Controller: localStoreController', function () {

    beforeEach(module('ui.router'));
    beforeEach(module('ng-twapp.localStorage'));
    var ctrl, scope;

    beforeEach(inject(function ($controller, $rootScope, $state) {
        scope = $rootScope.$new();
        ctrl = $controller('localStoreController', {
            $scope: scope,
            $state: $state
        });
    }));

    it('should have a local Store Controller', function () {
        expect(ctrl).not.to.equal(null);
    });

});


//describe('ItemService', function() {
//    var store = {};
//    var ls = function() {
//        return JSON.parse(store.storage);
//    };
//
//    beforeEach(function() {
//        // setUp.
//        module('MinimalistApp');
//
//        // LocalStorage mock.
//        spyOn(localStorage, 'getItem').andCallFake(function(key) {
//            return store[key];
//        });
//        Object.defineProperty(sessionStorage, "setItem", { writable: true });
//        spyOn(localStorage, 'setItem').andCallFake(function(key, value) {
//            store[key] = value;
//        });
//    });
//
//    afterEach(function () {
//        store = {};
//    });
//
//    it('migrate from legacy to version 0.', function() {
//        store = {
//            lastViewedList: 0,
//            lists: ['sample', 'sample_two'],
//            sample: {
//                id: 0,
//                list: [
//                    {
//                        id: 1,
//                        items: ['item1', 'item2'],
//                        rank: 2
//                    },
//                    {
//                        id: 2,
//                        items: ['item3', 'item4'],
//                        rank: 1
//                    }
//                ]
//            },
//            sample_two: {
//                id: 1,
//                list: [
//                    {
//                        id: 1,
//                        items: ['item5'],
//                        rank: 1,
//                    }
//                ]
//            },
//
//        };
//        localStorage.setItem('storage', JSON.stringify(store));
//
//        inject(function(ItemService) {
//            var sample = ItemService.getList(0);
//            expect(sample.itemIndex.length, 2);
//            expect(sample.items[0].text).toEqual('item3\nitem4');
//            expect(sample.items[1].text).toEqual('item1\nitem2');
//
//            sample = ItemService.getLists()[1];
//            expect(sample.itemIndex.length, 1);
//            expect(sample.items[0].text).toEqual('item5');
//        });
//    });
//});
*/