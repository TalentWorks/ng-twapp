'use strict';
/**
 * @ngdoc controller
 * @name ng-twapp.modal.ModalController
 * @description # ModalController
 */
angular.module('ng-twapp.modal').controller('ModalController', function ($scope, Pdl, Restangular) {
  Pdl.processData($scope);
  $scope.data = 'modalData';

  //var parms = [];

  //_.each()

  // Only stating the main reusable route
  $scope.users = Restangular.all('users').getList();
  console.log($scope.users);

  // GET One /api/users First item
  Restangular.all('users').getList().then(function (users) {
    // returns a list of users
    $scope.user = users[0]; // first Restangular obj in list: { id: xxxxxx }
  });
  console.log($scope.users);

  // GET One /api/users
  $scope.oneUser = Restangular.one('users', '05e83b49-d5e7-4f96-95ff-f6b76389e7d5').get();
  console.log($scope.oneUser);

  //var oneUser = Restangular.one('users', '05e83b49-d5e7-4f96-95ff-f6b76389e7d5');
  //var userlist = oneUser.getList();
  //
  //console.log(oneUser);
  //console.log(userlist);
  //
  //// GET /api/users
  //var allUsers = Restangular.getList(); //Returns a collection of animals
  //console.log(allUsers);

  //UserService.getUsers().then(function(data){ $scope.users = data});
  //UserService.getUserContent().then(function(data){ $scope.content = data});
});

