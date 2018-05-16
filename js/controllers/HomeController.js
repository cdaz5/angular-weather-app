WeatherApp.controller('HomeController', [
	'$scope',
	'$resource',
	'$location',
	'cityService',
	function($scope, $resource, $location, cityService) {
		$scope.city = cityService.city;

		$scope.$watch('city', function() {
			cityService.city = $scope.city;
		});

		$scope.submit = function() {
			$location.path('/forecast');
		};
	}
]);
