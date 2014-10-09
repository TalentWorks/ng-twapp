angular.module('ng-twapp.inventory').controller('InventoryItemCtrl', ['$stateParams',
    function ($stateParams) {
        var self = this;
        console.log($stateParams);
        self.itemId = $stateParams.itemID;
    }]);