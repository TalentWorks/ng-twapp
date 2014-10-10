/**
 * The MainService acts as a service to supply main user data.
 * @module myTmoApp.main-module.services
 */
angular.module('myTmoApp').factory('MainService', [function() {

    var mainDummyData = {
        userFirstName: "John",
        userLastName: "Smith",
        userPhoneNumber: "206-355-9999"
    };

    return {
        getData: function(){
            return mainDummyData;
        }
    };
}]);