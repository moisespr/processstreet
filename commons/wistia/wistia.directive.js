(function() {
	'use strict';

	angular.module('commons.wistia')
		.directive('wistia', Wistia);

	function Wistia() {
    var directive = {
      restrict: 'E',
      templateUrl: 'commons/wistia/wistia.html',
      scope: {
        apiPassword: '@',
        projectId: '@'
      },
      controller: WistiaController,
      controllerAs: 'vm',
      bindToController: true
    };
    return directive;
	}

  WistiaController.$inject = ['$http'];
  function WistiaController($http) {
    var vm = this;

    setup();

    function setup() {
      $(function () {
        $('#fileupload').fileupload({
            dataType: 'json',
            add: function (e, data) {
              $('#progress .bar').show();
              data.submit().success(function (result, textStatus, jqXHR) {
                var videoUrl = "//fast.wistia.net/embed/iframe/" + result.hashed_id;
                $('#progress .bar').hide();
                $('#video').html(
                  "<iframe src='" + videoUrl + "' allowtransparency='true' frameborder='0' scrolling='no' class='wistia_embed' name='wistia_embed' allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width='640' height='361'></iframe><script src="//fast.wistia.net/assets/external/E-v1.js" async></script>"
                );
                var i = setInterval(function() {
                  $http.get("https://api.wistia.com/v1/medias/" + result.hashed_id + ".json?api_password=" + vm.apiPassword)
                    .then(function (data){
                      if(data.data.status == "ready") {
                        $('#video').html(
                          "<iframe src='" + videoUrl + "' allowtransparency='true' frameborder='0' scrolling='no' class='wistia_embed' name='wistia_embed' allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width='640' height='361'></iframe>"
                        );
                        clearInterval(i);
                      }
                    })
                    .catch(function() {
                      clearInterval(i);
                    });
                }, 2500);
              });
            },
            progressall: function (e, data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $('#progress .bar').css(
                'width',
                progress + '%'
            );
          }
        });
      });
    }
  }
})();
