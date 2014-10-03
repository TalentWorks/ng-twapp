angular.module('ng-twapp').controller('InventoryCtrl', [ function() {
    var self = this;
//    var i, _i;
    var items = []
//    for (i = _i = 0; _i <= 30; i = ++_i) {
//        items.push("Item "+i);
//    }
    self.items = items;
    self.sideBarOpened = true;
}]);
