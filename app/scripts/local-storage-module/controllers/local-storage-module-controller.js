'use strict';
/**
 * @author josefsosa on 9/18/14.
 * @ngdoc controller
 * @name ng-twapp.localstore
 * @description # localstore
 */

angular.module('ng-twapp.localstore').controller('LocalStoreController', function ($scope, localStorageService) {
  $scope.appTitle = 'ng-twapp ToDo App';
  $scope.appHeadline = 'This will save to local storage!';

  $scope.todos = localStorageService.get('todos');
  $scope.saved = localStorageService.get('todos');

  $scope.$watch('todos', function (data) {
    localStorageService.set('todos', data);
    $scope.todos = (localStorageService.get('todos') !== null) ? JSON.parse($scope.saved) : [{
      text: 'Test 1',
      done: false
    }, {text: 'Test 2', done: false}];
  });

  $scope.addTodo = function () {
    $scope.todos.push({
      text: $scope.todoText,
      done: false
    });
    $scope.todoText = ''; //clear the input after adding
    localStorageService.set('todos', JSON.stringify($scope.todos));
  };

  $scope.remaining = function () {
    var count = 0;
    angular.forEach($scope.todos, function (todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  $scope.archive = function () {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function (todo) {
      if (!todo.done) {
        $scope.todos.push(todo);
      }
    });
    localStorageService.set('todos', JSON.stringify($scope.todos));
  };
});
