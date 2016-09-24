(function () {
    'use strict';

    angular
        .module('mainApp.common.utils')
        .factory('UserLocationSrvc', UserLocationSrvc);

    function UserLocationSrvc($q, $window) {
        return {
            getLocation: getLocation
        };

        ////////////////

        function getLocation() {
            var deferred = $q.defer();

            if (!$window.navigator.geolocation) {
                deferred.reject($q.reject('Geolocation not supported'));
            } else {
                $window.navigator.geolocation.getCurrentPosition(
                    function (position) {
                        deferred.resolve(position.coords);
                    },
                    function (err) {
                        deferred.reject(err);
                    });
            }

            return deferred.promise;

        }

    }

})();