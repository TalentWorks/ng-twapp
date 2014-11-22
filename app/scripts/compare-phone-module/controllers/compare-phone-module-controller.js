'use strict';
/**
 * @ngdoc controller
 * @name ng-twapp.comparePhone.ComparePhoneController
 * @description # ComparePhoneController
 */

angular.module('ng-twapp.comparePhone')
  .controller('ComparePhoneController', ['$scope', 'comparePhoneService', 'COMPARE_CONSTANTS', function ($scope, comparePhoneService, COMPARE_CONSTANTS) {

    var selectedPhone = [];
    var selectedPhoneLength = 0;
    $scope.compareData = [];
    $scope.phoneDetails = [];

    comparePhoneService.getPhoneDetailsData()
      .then(function (data) {
        $scope.phoneDetails = data;
      });

    // toggle selection for a given name
    $scope.toggleCheck = function (phone) {
      var idx = selectedPhone.indexOf(phone);

      if (idx > -1) { // is currently selected
        selectedPhone.splice(idx, 1);
      } else { // is newly selected
        selectedPhone.push(phone);
      }
      selectedPhoneLength = selectedPhone.length;
      $scope.compareData = [];
    };

    $scope.doCompare = function () {
      var min = COMPARE_CONSTANTS.MIN_PHONE_SELECT;
      var max = COMPARE_CONSTANTS.MAX_PHONE_SELECT;

      if (selectedPhoneLength < min) {
        console.log('Please select at least ' + min + ' phones for comparision');
        return false;
      } else if (selectedPhoneLength > max) {
        console.log('Please select maximum ' + max + ' phones for comparision');
        return false;
      } else {
        comparePhoneService.getCompareData(selectedPhone)
          .then(function (data) {
            // to get number of phone details selected by user
            var filteredData = data.filter(function (result) {
              if (selectedPhone.indexOf(result.id) > -1) {
                return result;
              }
            });
            $scope.compareData = $scope.getDataIntoTable(filteredData);
          });
      }
    };

    $scope.getDataIntoTable = function (data) {
      var finalObject = {};
      // to get row wise object
      angular.forEach(data, function (value, key) {
        angular.forEach(value, function (tableValue, tableKey) {
          if (key === 0) {
            finalObject[tableKey] = {};
          }
          finalObject[tableKey][key] = tableValue;
        });
      });
      return finalObject;
    };
  }]);
