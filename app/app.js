'use strict';

angular
    .module('mainApp', [
        'ngCookies',
        'ngRoute',
        'mainApp.home'
    ])
    .config(function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        // For unmatched url
        $routeProvider.otherwise({redirectTo: '/'});
    });