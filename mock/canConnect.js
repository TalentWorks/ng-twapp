angular.module('myTmoApp.mocks')
    .service('mockCanConnect', function () {
        return {
            isOnline: function () {
                return true;
            }
        }
    });