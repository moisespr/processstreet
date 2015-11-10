(function () {
  'use strict';

  angular
    .module('processstreet.video')
    .factory('VideoService', VideoService);

  VideoService.$inject = ['$http', 'URLS', '$location'];
  function LoginService($http, URLS, $location) {
    return {
    };
  }
})();
