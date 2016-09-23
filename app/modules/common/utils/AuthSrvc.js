(function () {
    'use strict';

    angular
        .module('mainApp.common.utils', [])
        .factory('AuthSrvc', ['$window', AuthSrvc]);

    function AuthSrvc($window) {
        return {
            isLoggedIn: isLoggedIn,
            getToken: getToken
        };

        ////////////////

        function isLoggedIn() {
            var token = getToken();
            return token && token.oauth.access_token;
        }

        function getToken() {
            var token = $window.localStorage.getItem('token');
            if (token) {
                token = JSON.parse(token);
            }

            return token;
        }

    }

})();

