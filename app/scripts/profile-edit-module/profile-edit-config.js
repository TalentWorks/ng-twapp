'use strict';
/**
 * @author josefsosa on 9/18/14.
 * @ngdoc profileEdit
 * @name ng-twapp.profileEdit
 * @description # profileEdit
 */

angular.module('ng-twapp.profileEdit', []).config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    // route to show our basic form (/form)
    .state('profile', {
      url: '/profile',
      templateUrl: '/scripts/profile-edit-module/views/profile.html',
      controller: 'profileEditController'
    })

    // url will be /profile/profile
    .state('profile.profile', {
      url: '/profile',
      templateUrl: '/scripts/profile-edit-module/views/profile-page-profile.html'
    })

    // url will be /profile/skills
    .state('profile.skills', {
      url: '/skills',
      templateUrl: 'scripts/profile-edit-module/views/profile-page-skills.html'
    })

    // url will be /profile/experience
    .state('profile.experience', {
      url: '/experience',
      templateUrl: '/scripts/profile-edit-module/views/profile-page-experience.html'
    })

    // url will be /profile/education
    .state('profile.education', {
      url: '/education',
      templateUrl: '/scripts/profile-edit-module/views/profile-page-education.html'
    })

    // url will be /profile/auditions
    .state('profile.auditions', {
      url: '/auditions',
      templateUrl: '/scripts/profile-edit-module/views/profile-page-auditions.html'
    })

    // url will be /profile/tv
    .state('profile.tv', {
      url: '/tv',
      templateUrl: '/scripts/profile-edit-module/views/profile-page-tv.html'
    })

    // url will be /profile/training
    .state('profile.training', {
      url: '/training',
      templateUrl: '/scripts/profile-edit-module/views/profile-page-training.html'
    })

    // url will be /profile/awards
    .state('profile.awards', {
      url: '/awards',
      templateUrl: '/scripts/profile-edit-module/views/profile-page-awards.html'
    })

    // url will be /profile/bibliography
    .state('profile.bibliography', {
      url: '/bibliography',
      templateUrl: '/scripts/profile-edit-module/views/profile-page-bibliography.html'
    })

    // url will be /profile/exhibitions
    .state('profile.exhibitions', {
      url: '/exhibitions',
      templateUrl: '/scripts/profile-edit-module/views/profile-page-exhibitions.html'
    })

    // url will be /profile/collections
    .state('profile.collections', {
      url: '/collections',
      templateUrl: '/scripts/profile-edit-module/views/profile-page-collections.html'
    })

    // url will be /profile/affiliations
    .state('profile.affiliations', {
      url: '/affiliations',
      templateUrl: '/scripts/profile-edit-module/views/profile-page-affiliations.html'
    })

    // url will be /profile/interest
    .state('profile.interest', {
      url: '/interest',
      templateUrl: '/scripts/profile-edit-module/views/profile-page-interest.html'
    })

    // url will be /profile/bio
    .state('profile.bio', {
      url: '/bio',
      templateUrl: '/scripts/profile-edit-module/views/profile-page-personal-bio.html'
    })

    // url will be /profile/news
    .state('profile.news', {
      url: '/news',
      templateUrl: '/scripts/profile-edit-module/views/profile-page-news.html'
    })

    // url will be /profile/links
    .state('profile.links', {
      url: '/links',
      templateUrl: '/scripts/profile-edit-module/views/profile-page-links.html'
    })

    // url will be /profile/wish
    .state('profile.wish', {
      url: '/wish',
      templateUrl: '/scripts/profile-edit-module/views/profile-page-wish-list.html'
    });

  // catch all route
  $urlRouterProvider.otherwise('/');
});
