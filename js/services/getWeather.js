WeatherApp.service('getWeather', [
	'$resource',
	function($resource) {
		return $resource(`https://api.openweathermap.org/data/2.5/forecast/daily?q=:city,us&cnt=:cnt&appid=:appid`, {
			get: {
				method: 'JSONP'
			}
		});
	}
]);
