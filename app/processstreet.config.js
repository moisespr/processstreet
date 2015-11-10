(function() {
	'use strict';

  angular
    .module('processstreet')
    .config(configure)
		.constant('URLS', {
       BASE: 'http://localhost'
   	});

	configure.$inject = ['$routeProvider'];
	function configure($routeProvider) {
		$routeProvider.otherwise({
			redirectTo : '/video'
		});
	}
})();
