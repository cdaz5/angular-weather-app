var WeatherApp = angular.module('WeatherApp', ['ngRoute', 'ngResource']);

WeatherApp.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

	$routeProvider
		.when('/', {
			controller: 'HomeController',
			templateUrl: 'views/home.html'
		})
		.when('/forecast', {
			controller: 'ForecastController',
			templateUrl: 'views/forecast.html'
		});
});
