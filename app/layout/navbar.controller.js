(function() {
	'use strict';

	angular
		.module('processstreet')
		.controller('NavbarController', NavbarController);

	NavbarController.$inject = ['$location'];
	function NavbarController($location) {
		var vm = this;

		vm.isActive = isActive;

		function isActive(viewLocation) {
			return $location.path().indexOf(viewLocation) === 0;
		}

	}
})();
