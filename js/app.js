var WeatherApp = angular.module('WeatherApp', ['ngRoute', 'ngResource']);

WeatherApp.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');

	$routeProvider
		.when('/', {
			controller: 'HomeController',
			templateUrl: 'views/home.html'
		})
		.when('/forecast', {
			controller: 'ForecastController',
			templateUrl: 'views/forecast.html'
		})
		.when('/forecast/:days', {
			controller: 'ForecastController',
			templateUrl: 'views/forecast.html'
		});
});
