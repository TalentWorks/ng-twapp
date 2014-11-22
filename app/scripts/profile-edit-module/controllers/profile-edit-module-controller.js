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


//      $scope.colors = [
//        {name:'black', value:'dark'},
//        {name:'white', value:'light'},
//        {name:'red', value:'dark'},
//        {name:'blue', value:'dark'},
//        {name:'yellow', value:'light'}
//      ];

    $scope.list_categories = {
      data: [{
        id: 'id1',
        name: 'name1'
      }, {
        id: 'id2',
        name: 'name2'
      }]
    };

    $scope.list_category = 'id2';

    //$scope.unions = FormDataService.getUnions();

    $scope.proficiencies = [
      {name: 'Basic', value: 'Basic'},
      {name: 'Limited Working', value: 'Limited Working'},
      {name: 'Professionally Working', value: 'Professionally Working'},
      {name: 'Native', value: 'Native'},
      {name: 'Bilingual', value: 'Bilingual'}
    ];

    $scope.types = [
      {name: 'Film', value: 'Film'},
      {name: 'Theathre', value: 'Theathre'},
      {name: 'Commercial', value: 'Commercial'},
      {name: 'Short Film', value: 'Short Film'},
      {name: 'Print', value: 'Print'}
    ];

    $scope.colorSelector =

      $scope.unionsSelector = [{
        unions: [
          {
            'id': 1,
            'name': 'APTRA',
            'description': null,
            'position': 1
          },
          {
            'id': 2,
            'name': 'AEA',
            'description': null,
            'position': 2
          },
          {
            'id': 3,
            'name': 'AFTRA',
            'description': null,
            'position': 3
          },
          {
            'id': 4,
            'name': 'AGMA',
            'description': null,
            'position': 4
          },
          {
            'id': 5,
            'name': 'AGVA',
            'description': null,
            'position': 5
          }
        ]
      }];

    $scope.roles = [
      {name: 'Actor', value: 'Actor'},
      {name: 'Musician', value: 'Musician'},
      {name: 'Singer', value: 'Singer'},
      {name: 'Dancer', value: 'Dancer'},
      {name: 'Entertainer', value: 'Entertainer'},
      {name: 'Fashion Model', value: 'Fashion Model'},
      {name: 'Visual Arts', value: 'Visual Arts'},
      {name: 'Professional Theater', value: 'Professional Theater'},
      {name: 'Professional Film', value: 'Professional Film'},
      {name: 'Professional Fashion', value: 'Professional Fashion'},
      {name: 'Professional Music', value: 'Professional Music'},
      {name: 'Professional Other', value: 'Professional Other'},
      {name: 'Professional TV', value: 'Professional TV'}
    ];

    $scope.categories = [
      {name: 'Crime', value: 'Crime'},
      {name: 'Legal', value: 'Legal'},
      {name: 'Historical', value: 'Historical'},
      {name: 'Docudrama', value: 'Docudrama'},
      {name: 'Melodrama', value: 'Melodrama'},
      {name: 'Romance', value: 'Romance'},
      {name: 'Tragedy', value: 'Tragedy'},
      {name: 'Blue', value: 'Blue'},
      {name: 'Character', value: 'Character'},
      {name: 'Improvisational', value: 'Improvisational'},
      {name: 'Observational', value: 'Observational'},
      {name: 'Alternative', value: 'Alternative'},
      {name: 'Physical', value: 'Physical'}
    ];

    //$scope.emails = angular.fromJson(localStorage.getItem('emails'));
    $scope.formData = {};
    $scope.appEmails = [];

//      $scope.loadEmails = function() {
//        $scope.emails = angular.fromJson(localStorage.getItem('emails'));
//      };

    $scope.addEmails = function () {
      $scope.appEmails.push($scope.emails);
      $scope.appEmails.push({
        email: $scope.formData.email,
        default: false
      });
      //localStorage.setItem("emails", localStorage.getItem("emails") + JSON.stringify($scope.appEmails));
      //localStorage.setItem('emails', JSON.stringify($scope.appEmails));
      //$scope.loadEmails();
      $scope.emails = $scope.appEmails;
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

