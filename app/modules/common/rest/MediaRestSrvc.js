(function () {
    'use strict';

    angular
        .module('mainApp.common.rest')
        .factory('MediaRestSrvc', MediaRestSrvc);

    function MediaRestSrvc(InstagramRestUtils) {

        return {
            getOwnerMedia: getOwnerMedia
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


    }

})();

