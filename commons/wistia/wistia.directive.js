(function() {
	'use strict';

	angular.module('commons.wistia')
		.directive('wistia', Wistia);

	function Wistia() {
    var directive = {
      restrict: 'E',
      templateUrl: 'commons/wistia/wistia.html',
      scope: {
      },
      controller: WistiaController,
      controllerAs: 'vm',
      bindToController: true
    };
    return directive;
	}

  WistiaController.$inject = [];
  function WistiaController() {
    var vm = this;
  }
})();
