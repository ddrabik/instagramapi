(function () {
    'use strict';

    angular
        .module('mainApp.view')
        .controller('ViewCtrl', ViewCtrl);

    function ViewCtrl(MediaRestSrvc, $routeParams, $location) {
        var self = this;

        self.goToLocation = goToLocation;

        activate();

        ////////////////

        function activate() {
            MediaRestSrvc.getMediaById($routeParams.id).then(function (media) {
                self.media = media;
            });
        }

        function goToLocation(location) {
            $location.path('/view/location').search('latitude', location.latitude).search('longitude', location.longitude);
        }

    }

})();

