(function () {
    'use strict';

    angular.module('mainApp.home', ['ngRoute'])

        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'modules/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'ctrl'
            });
        }])

        .controller('HomeCtrl', [function () {
            var self = this;
            self.message = 'hello world';
        }]);

}());
