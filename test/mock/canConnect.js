angular.module('ng-twapp.mocks')
    .service('mockCanConnect', function () {
        return {
            isOnline: function () {
                return true;
            }
        }
    });