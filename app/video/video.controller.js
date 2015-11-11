(function() {
	'use strict';

	angular.module('processstreet.video').controller('VideoController',
  	VideoController);

  VideoController.$inject = ['VideoService', '$location'];
	function VideoController(VideoService, $location) {
		var vm = this;
	}
})();
