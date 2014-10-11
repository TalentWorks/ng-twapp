angular.module('ng-twapp').controller('InfiniteScrollController', function($scope, $http) {
	$scope.busy = false;
	$scope.after = '';
	$scope.items = [];
	$scope.nextPage = function() {
		if (this.busy) return;
		this.busy = true;

		var url = "http://api.reddit.com/hot?after=" + this.after + "&jsonp=JSON_CALLBACK";
		$http.jsonp(url).success(function(data) {
			var items = data.data.children;
			for (var i = 0; i < items.length; i++) {
				$scope.items.push(items[i].data);
			}
			$scope.after = "t3_" + $scope.items[$scope.items.length - 1].id;
			$scope.busy = false;
		});
	};
});