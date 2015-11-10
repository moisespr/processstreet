(function() {
	'use strict';

  angular
    .module('processstreet.video')
    .config(configure);
	configure.$inject = ['$routeProvider'];
	function configure($routeProvider) {
		$routeProvider.when('/video', {
			controller : 'VideoController',
			templateUrl : 'app/video/video.view.html',
			controllerAs : 'vm'
		});
	}
})();
