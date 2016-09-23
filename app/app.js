'use strict';

angular
    .module('mainApp', [
        'ngCookies',
        'ngRoute',
        'mainApp.common.rest',
        'mainApp.common.utils',
        'mainApp.common.components',
        'mainApp.home',
        'mainApp.login'
    ])
    .config(function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        // For unmatched url
        $routeProvider.otherwise({redirectTo: '/'});

    })

    .run( function($rootScope, $location, AuthSrvc) {

        // register listener to watch route changes
        $rootScope.$on( "$routeChangeStart", function(event, next, current) {
            if (!AuthSrvc.isLoggedIn() && next.templateUrl != "/login.html") {
                $location.path("/login");
            }
        });
    });