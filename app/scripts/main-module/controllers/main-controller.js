'use strict';
/**
 * The MainController is to get the dummy data for the main-module from the service.
 * @module myTmoApp.main-module.controllers
 */

angular.module('myTmoApp.main-module.controllers').controller('MainController', [function() {
    var params = {userName:'John', userLast:'Smith'};

    this.userName = params.userName + " " + params.userLast;
    console.log(this.userName);

    this.userFName = params.userName;
    this.userLName = params.userLast;


}]);