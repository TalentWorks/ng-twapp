'use strict';
/**
 * @author Jose F. Sosa
 * @ngdoc factory
 * @name ng-twapp.common-api.FormDataService
 * @description # FormDataService
 */

angular.module('ng-twapp.common-api').factory('FormDataService', function ($q, $http, Restangular) {
  // Public API
  var factory = {};
  //var baseUrl = 'http://54.174.36.93:8888';

  factory.actingInterest= function () {
    var data = Restangular.all('data/acting-interest.json').getList();
    return data;
  };

  //factory.getUnions = function () {
  //var data = Restangular.all('data/unions.json').getList();
  //   return data;
  //};

  factory.getUnions = function () {
    var deferred = $q.defer(),
    //httpPromise = $http.get(baseUrl + '/data/unions.json');
    httpPromise = $http.get('/data/unions.json');
    httpPromise.success(function (data) {
      deferred.resolve(data);
    })
      .error(function (error) {
        console.error('Error: ' + error);
      });
    return deferred.promise;
  };

  factory.getDisabilities = function () {
    var deferred = $q.defer(),
    //httpPromise = $http.get(baseUrl + '/data/disability-type.json');
    httpPromise = $http.get('/data/disability-type.json');
    httpPromise.success(function (data) {
      deferred.resolve(data);
    })
      .error(function (error) {
        console.error('Error: ' + error);
      });
    return deferred.promise;
  };

  factory.getEyes = function () {
    var deferred = $q.defer(),
    //httpPromise = $http.get(baseUrl + '/data/eyes.json');
      httpPromise = $http.get('/data/eyes.json');
    httpPromise.success(function (data) {
      deferred.resolve(data);
    })
      .error(function (error) {
        console.error('Error: ' + error);
      });
    return deferred.promise;
  };

  factory.getNationalities = function () {
    var deferred = $q.defer(),
    //httpPromise = $http.get(baseUrl + '/data/nationality.json');
    httpPromise = $http.get('/data/nationality.json');
    httpPromise.success(function (data) {
      deferred.resolve(data);
    })
      .error(function (error) {
        console.error('Error: ' + error);
      });
    return deferred.promise;
  };

  factory.getRelationships = function () {
    var deferred = $q.defer(),
    //httpPromise = $http.get(baseUrl + '/data/relationship-status.json');
    httpPromise = $http.get('/data/relationship-status.json');
    httpPromise.success(function (data) {
      deferred.resolve(data);
    })
      .error(function (error) {
        console.error('Error: ' + error);
      });
    return deferred.promise;
  };

  factory.getEthnicities = function () {
    var deferred = $q.defer(),
    //httpPromise = $http.get(baseUrl + '/data/ethnicities.json');
    httpPromise = $http.get('/data/ethnicities.json');
    httpPromise.success(function (data) {
      deferred.resolve(data);
    })
      .error(function (error) {
        console.error('Error: ' + error);
      });
    return deferred.promise;
  };

  factory.getPhysiques = function () {
    var deferred = $q.defer(),
    //httpPromise = $http.get(baseUrl + '/data/physique.json');
      httpPromise = $http.get('/data/physique.json');
    httpPromise.success(function (data) {
      deferred.resolve(data);
    })
      .error(function (error) {
        console.error('Error: ' + error);
      });
    return deferred.promise;
  };

  factory.getHairstyles = function () {
    var deferred = $q.defer(),
    //httpPromise = $http.get(baseUrl + '/data/hair.json');
      httpPromise = $http.get('/data/hair.json');
    httpPromise.success(function (data) {
      deferred.resolve(data);
    })
      .error(function (error) {
        console.error('Error: ' + error);
      });
    return deferred.promise;
  };

  factory.getFacialHairstyles = function () {
    var deferred = $q.defer(),
    //httpPromise = $http.get(baseUrl + '/data/facial-hair.json');
    httpPromise = $http.get('/data/facial-hair.json');
    httpPromise.success(function (data) {
      deferred.resolve(data);
    })
      .error(function (error) {
        console.error('Error: ' + error);
      });
    return deferred.promise;
  };

  factory.getLanguages = function () {
    var deferred = $q.defer(),
    //httpPromise = $http.get(baseUrl + '/data/language.json');
    httpPromise = $http.get('/data/language.json');
    httpPromise.success(function (data) {
      deferred.resolve(data);
    })
      .error(function (error) {
        console.error('Error: ' + error);
      });
    return deferred.promise;
  };

  factory.getProficiencies = function () {
    var deferred = $q.defer(),
    //httpPromise = $http.get(baseUrl + '/data/language-proficiancy.json');
    httpPromise = $http.get('/data/language-proficiancy.json');
    httpPromise.success(function (data) {
      deferred.resolve(data);
    })
      .error(function (error) {
        console.error('Error: ' + error);
      });
    return deferred.promise;
  };

  factory.getExpertises = function () {
    var deferred = $q.defer(),
    //httpPromise = $http.get(baseUrl + '/data/expertise.json');
    httpPromise = $http.get('/data/expertise.json');
    httpPromise.success(function (data) {
      deferred.resolve(data);
    })
      .error(function (error) {
        console.error('Error: ' + error);
      });
    return deferred.promise;
  };

  factory.getArtistRoles = function () {
    var deferred = $q.defer(),
    //httpPromise = $http.get(baseUrl + '/data/artist-roles.json');
      httpPromise = $http.get('/data/artist-roles.json');
    httpPromise.success(function (data) {
      deferred.resolve(data);
    })
      .error(function (error) {
        console.error('Error: ' + error);
      });
    return deferred.promise;
  };

  factory.getCharacterTypes = function () {
    var deferred = $q.defer(),
    //httpPromise = $http.get(baseUrl + '/data/character-type.json');
      httpPromise = $http.get('/data/character-type.json');
    httpPromise.success(function (data) {
      deferred.resolve(data);
    })
      .error(function (error) {
        console.error('Error: ' + error);
      });
    return deferred.promise;
  };

  factory.getArtistCategories = function () {
    var deferred = $q.defer(),
    //httpPromise = $http.get(baseUrl + '/data/artist-actor-categories.json');
    httpPromise = $http.get('/data/artist-actor-categories.json');
    httpPromise.success(function (data) {
      deferred.resolve(data);
    })
      .error(function (error) {
        console.error('Error: ' + error);
      });
    return deferred.promise;
  };

  factory.getMajors = function () {
    var deferred = $q.defer(),
    //httpPromise = $http.get(baseUrl + '/data/majors.json');
    httpPromise = $http.get('/data/majors.json');
    httpPromise.success(function (data) {
      deferred.resolve(data);
    })
      .error(function (error) {
        console.error('Error: ' + error);
      });
    return deferred.promise;
  };

  factory.getStates = function () {
    var deferred = $q.defer(),
    httpPromise = $http.get('/data/states-usa.json');
    //httpPromise = $http.get(baseUrl + '/data/states-usa.json');
    httpPromise.success(function (data) {
      deferred.resolve(data);
    })
      .error(function (error) {
        console.error('Error: ' + error);
      });
    return deferred.promise;
  };


  return factory;

});

