'use strict';
/**
 * @ngdoc module
 * @name  ng-twapp.imageCamera
 * @description InventoryItemController to manage image uploads.
 */
angular.module('ng-twapp.imageCamera').controller('ImageCameraController', function ($scope, fileReaderService) {
  console.log(fileReaderService);
  $scope.getFile = function () {
    $scope.progress = 0;
    fileReaderService.readAsDataURL($scope.file, $scope).then(function (result) {
      $scope.imageSrc = result;
    });
  };
  $scope.$on('fileProgress', function (e, progress) {
    $scope.progress = progress.loaded / progress.total;
  });
});
