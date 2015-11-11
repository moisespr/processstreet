(function () {
  'use strict';

  angular
    .module('processstreet.video')
    .factory('VideoService', VideoService);

  VideoService.$inject = ['$http', 'URLS', '$location'];
  function VideoService($http, URLS, $location) {
    return {
    };
  }
})();
