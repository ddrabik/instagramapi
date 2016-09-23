(function () {
    'use strict';

    angular
        .module('mainApp.common.rest')
        .factory('UserRestSrvc', ['InstagramRestUtils', UserRestSrvc]);

    function UserRestSrvc(InstagramRestUtils) {

        return {
            getOwner: getOwner
        };

        ////////////////

        function getOwner() {
            var req = {
                path: 'users/self/',
                method: 'GET'
            };

            return InstagramRestUtils.sendRequest(req).then(function (response) {
                return response.data;
            });
        }


    }

})();

