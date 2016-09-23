(function () {
    'use strict';

    angular
        .module('mainApp.common.rest')
        .factory('InstagramRestUtils', InstagramRestUtils);

    function InstagramRestUtils(AuthSrvc, $http, $q, $httpParamSerializer ) {
        var api = 'https://api.instagram.com/v1/';

        return {
            sendRequest: sendRequest
        };

        ////////////////

        function sendRequest(reqData) {

            var token = AuthSrvc.getToken();
            if (!token || !token.oauth || !token.oauth.access_token) {
                return $q.reject(new Error('error.user.unauthenticated'));
            }

            var url = api + reqData.path + "?" + $httpParamSerializer({
                access_token: token.oauth.access_token,
                callback: 'JSON_CALLBACK'
            });

            return $http.jsonp(url).then(function (response) {
                console.log(response);
                return response.data;
            }).catch(function (error) {
                console.error(error.data);
                return $q.reject(error.data);
            });
        }

    }

})();