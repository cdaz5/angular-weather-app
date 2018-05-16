WeatherApp.directive('forecastListItem', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/directives/forecastListItem.html',
		scope: {
			day: '=',
			convertToStandard: '&',
			convertToDate: '&',
			dateFormat: '@'
		},
		replace: true
	};
});
