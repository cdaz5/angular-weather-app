WeatherApp.controller('ForecastController', [
	'$scope',
	'$routeParams',
	'cityService',
	'getWeather',
	function($scope, $routeParams, cityService, getWeather) {
		$scope.city = cityService.city;

		$scope.days = $routeParams.days || '2';

		$scope.weatherResult = getWeather.get({
			city: $scope.city,
			appid: '3da47fb0b2f9a71be71abeade1427b51',
			cnt: $scope.days
		});
		console.log($scope.weatherResult);
		$scope.convertToFahrenheit = function(degK) {
			return Math.round(1.8 * (degK - 273) + 32);
		};

		$scope.convertToDate = function(dt) {
			return new Date(dt * 1000);
		};
	}
]);
