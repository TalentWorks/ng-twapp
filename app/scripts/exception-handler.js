'use strict';
/**
 * @ngdoc module
 * @file exception-handler.js
 * @description # ng-twapp exception-handler module loader
 */

angular.module('ng-twapp').factory('$exceptionHandler', function () {
  return function (exception, cause) {
    var message = exception + ' (caused by "' + cause + '")';
    ///console.error(message);
    return message;
    //Place an HTTP call back to the server here to report the message!
  };
});
