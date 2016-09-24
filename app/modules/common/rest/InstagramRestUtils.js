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

            var params = _.extend(reqData.params, {
                access_token: token.oauth.access_token,
                callback: 'JSON_CALLBACK'
            });

            var url = api + reqData.path + "?" + $httpParamSerializer(params);

            return $http.jsonp(url)
                .catch(function (error) {
                    console.error(error.data);
                    return $q.reject(error.data);
                })
                .then(function (response) {
                    console.debug(response.data);

                    if (response.data.meta.code >= 400) {
                        return $q.reject(response.data.meta['error_message']);
                    }
                    return response.data;
                });
        }

    }

})();