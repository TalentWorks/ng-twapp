'use strict';
/**
 * @ngdoc profileEditController
 * @name ng-twapp.profileEditController
 * @description # profileEditController
 */

angular.module('ng-twapp.profileEdit')
  .controller('profileEditController', function ($scope, FormDataService) {
    FormDataService.getUnions().then(function (data) {
      $scope.list_unions = data;
    });

    FormDataService.getStates().then(function (data) {
      $scope.list_states = data;
    });

    FormDataService.getDisabilities().then(function (data) {
      $scope.list_disabilities = data;
    });

    FormDataService.getEyes().then(function (data) {
      $scope.list_eyes = data;
    });

    FormDataService.getNationalities().then(function (data) {
      $scope.list_nationalities = data;
    });

    FormDataService.getRelationships().then(function (data) {
      $scope.list_relationships = data;
    });

    FormDataService.getEthnicities().then(function (data) {
      $scope.list_ethnicities = data;
    });

    FormDataService.getPhysiques().then(function (data) {
      $scope.list_physiques = data;
    });

    FormDataService.getHairstyles().then(function (data) {
      $scope.list_hairstyles = data;
    });

    FormDataService.getFacialHairstyles().then(function (data) {
      $scope.list_facialhairstyles = data;
    });

    FormDataService.getLanguages().then(function (data) {
      $scope.list_languages = data;
    });

    FormDataService.getProficiencies().then(function (data) {
      $scope.list_proficiencies = data;
    });

    FormDataService.getExpertises().then(function (data) {
      $scope.list_expertises = data;
    });

    FormDataService.getArtistRoles().then(function (data) {
      $scope.list_artistRoles = data;
    });

    FormDataService.getCharacterTypes().then(function (data) {
      $scope.list_characterTypes = data;
    });

    FormDataService.getArtistCategories().then(function (data) {
      $scope.list_artistCategories = data;
    });

    FormDataService.getMajors().then(function (data) {
      $scope.list_majors = data;
    });


    $scope.formData = {};
    $scope.appEmails = [];

//  $scope.loadEmails = function() {
//      $scope.emails = angular.fromJson(localStorage.getItem('emails'));
//  };

    $scope.addEmails = function () {
      $scope.appEmails.push($scope.emails);
      $scope.appEmails.push({
        email: $scope.formData.email,
        default: false
      });

      //$scope.loadEmails();
      $scope.emails = $scope.appEmails;
    };

    /**
     * @function $scope.open
     * @description Opens the calendar popup
     */
    $scope.open = function ($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.opened = true;
    };

    $scope.opend = function ($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.opened = true;
    };

//      $scope.emailPattern = (function() {
//        var regexp = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
//        return {
//          test: function(value) {
//            if( $scope.formData.email === false ) return true;
//            else return regexp.test(value);
//          }
//        };
//      })();
//
//      $scope.phoneNumberPattern = (function() {
//        var regexp = /^\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})$/;
//        return {
//          test: function(value) {
//            if( $scope.formData === false ) return true;
//            else return regexp.test(value);
//          }
//        };
//      })();

    //      $scope.processForm = function () {
//        alert('Created User! ' + $scope.formData.name);
//      };


  });

