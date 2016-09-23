(function () {
    'use strict';

    angular
        .module('mainApp.common.utils', [])
        .factory('AuthSrvc', ['$window', '$location', AuthSrvc]);

    function AuthSrvc($window, $location) {
        return {
            isLoggedIn: isLoggedIn,
            getToken: getToken,
            logout: logout
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

        function logout() {
            $window.localStorage.removeItem('token');
            var body = angular.element('body');
            var elem = angular.element('<img src="http://instagram.com/accounts/logout/" width="0" height="0" />');
            angular.element(elem).appendTo(body);

            $location.path('/login');
        }

    }

})();

