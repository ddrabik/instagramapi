(function () {
    'use strict';

    angular
        .module('mainApp.common.rest')
        .factory('MediaRestSrvc', MediaRestSrvc);

    function MediaRestSrvc(InstagramRestUtils) {

        return {
            getOwnerMedia: getOwnerMedia,
            getMediaById: getMediaById,
            getMediaByLocation: getMediaByLocation
        };

        ////////////////

        function getOwnerMedia() {
            var req = {
                path: 'users/self/media/recent/',
                method: 'GET'
            };

            return InstagramRestUtils.sendRequest(req).then(function (response) {
                return response.data;
            });
        }

        function getMediaById(id) {
            var req = {
                path: 'media/' + id,
                method: 'GET'
            };

            return InstagramRestUtils.sendRequest(req).then(function (response) {
                return response.data;
            });
        }

        function getMediaByLocation(latitude, longitude) {
            var req = {
                path: 'media/search',
                params: {
                    lat: latitude,
                    lng: longitude,
                    distance: 5000
                },
                method: 'GET'
            };

            return InstagramRestUtils.sendRequest(req).then(function (response) {
                return response.data;
            });
        }


    }

})();

