'use strict';
angular.module('ng-twapp.cart')
  .factory('NgCartItem', ['$rootScope', 'store', function ($rootScope) {
    var item = function (id, name, price, quantity, data) {
      this.setId(id);
      this.setName(name);
      this.setPrice(price);
      this.setQuantity(quantity);
      this.setData(data);
    };
    item.prototype.setId = function (id) {
      if (id) {
        this._id = id;
      } else {
        console.error('An ID must be provided');
      }
    };
    item.prototype.getId = function () {
      return this._id;
    };
    item.prototype.setName = function (name) {
      if (name) {
        this._name = name;
      } else {
        console.error('A name must be provided');
      }
    };
    item.prototype.getName = function () {
      return this._name;
    };
    item.prototype.setPrice = function (price) {
      price = parseFloat(price);
      if (price) {
        if (price <= 0) {
          console.error('A price must be over 0');
        }
        this._price = (price);
      } else {
        console.error('A price must be provided');
      }
    };
    item.prototype.getPrice = function () {
      return this._price;
    };
    item.prototype.setQuantity = function (quantity,
                                           relative) {
      quantity = parseInt(quantity);
      if (quantity % 1 === 0) {
        if (relative === true) {
          this._quantity += quantity;
        } else {
          this._quantity = quantity;
        }
        if (this._quantity < 1) {
          this._quantity = 1;
        }
      } else {
        this._quantity = 1;
        console.info('Quantity must be an integer and was defaulted to 1');
      }
      $rootScope.$broadcast('ngCart:change', {});
    };
    item.prototype.getQuantity = function () {
      return this._quantity;
    };
    item.prototype.setData = function (data) {
      if (data) {
        this._data = data;
      }
    };
    item.prototype.getData = function () {
      if (this._data) {
        return this._data;
      } else {
        console.info('This item has no data');
      }
    };
    item.prototype.getTotal = function () {
      return this.getQuantity() * this.getPrice();
    };
    return item;
  }]);
