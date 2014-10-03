angular.module('mytmoNgApp').controller('PaginationExampleController', function ($scope) {
	$scope.items = setupItems();
	$scope.totalItems = $scope.items.length;
	$scope.currentPage = 1;
	$scope.numPerPage = 5;
  
	$scope.paginate = function(value) {
		var begin = ($scope.currentPage - 1) * $scope.numPerPage;
		var end = begin + $scope.numPerPage;
		var index = $scope.items.indexOf(value);
		return (begin <= index && index < end);
	};
});

function setupItems() {
	var allItems = [];
	for (var i = 0; i < 100; i++) { 
		var item = {
			number: i,
			numSquared: i*i
		}
		allItems.push(item);
	}
	return allItems;
};