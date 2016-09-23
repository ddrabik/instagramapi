'use strict';

angular
    .module('mainApp', [
        'ngCookies',
        'ngRoute',
        'mainApp.common.rest',
        'mainApp.common.utils',
        'mainApp.common.components',
        'mainApp.home'
    ])
    .config(function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        // For unmatched url
        $routeProvider.otherwise({redirectTo: '/'});

    });