angular.module('ng-twapp').controller('InventoryItemCtrl', ['$stateParams',
    function ($stateParams) {
        var self = this;
        console.log($stateParams);
        self.itemId = $stateParams.itemID;
    }]);