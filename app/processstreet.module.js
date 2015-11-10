(function() {
	'use strict';

	angular.module('processstreet', [
    /* Angular modules */
    'ngRoute',
    /* 3rd-party modules */
    'ui.bootstrap',
    'ui.bootstrap.tpls',
   	'angular-loading-bar',
    /* Features */
    'processstreet.video'
  ])
  .run(runBlock);

  runBlock.$inject = ['$route'];
  function runBlock($route) {
    $route.reload();
  }
})();
