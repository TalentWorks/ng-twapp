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

    //Emails
    $scope.appEmails = [];
    $scope.addEmails = function () {
      $scope.appEmails.push({
        email: $scope.formData.email,
        primary: $scope.checkPrimaryEmail($scope.formData.primary)
      });
      $scope.emails = $scope.appEmails;
    };

    $scope.deleteEmail = function (index) {
      $scope.appEmails.splice($scope.appEmails.indexOf(index), 1);
    };

    //languages
    $scope.languageList = [];
    $scope.addLanguage = function () {
      $scope.languageList.push({
        language: $scope.formData.language,
        proficiency: $scope.formData.proficiency
      });
      $scope.emails = $scope.appEmails;
    };

    $scope.deleteLanguage = function (index) {
      $scope.languageList.splice($scope.languageList.indexOf(index), 1);
    };

    $scope.getLanguageName = function (id) {
      var data = $scope.list_languages;
      var languageName = data.languages[id -1].name;
      //var result = _.find(languageList, {'languages.id': id});
      return languageName;
    };

    $scope.getProficiencyName = function (id) {
      var data = $scope.list_proficiencies;
      var proficiencieName = data.proficiencies[id -1].name;
      return proficiencieName;
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
    //Utilities
    $scope.checkPrimaryEmail = function(primary){
      var result = false;
      if(primary === true){
        result = true;
      }
      return result;
    };

  }).filter('getInput', function() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  }).filter('makeTwo', function () {
    return function (input) {
      return input + 1;
    };
  });


