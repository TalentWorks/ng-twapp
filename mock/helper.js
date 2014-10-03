angular.module('myTmoApp.mocks')
    .service('mockHelper', function () {
      return {
        uuid: function () {
          return 'ASDFASDFASDF';
        },
        dateTime: {
          now: function () {
            return "2014-10-02 20:10:55";
          }
        }
      }
    });