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

        .constant('HOME_TOGGLE_STATES', {
            list: 'list',
            grid: 'grid'
        })

        .controller('HomeCtrl', ['AuthSrvc', 'UserRestSrvc', 'MediaRestSrvc', 'HOME_TOGGLE_STATES',
            function (AuthSrvc, UserRestSrvc, MediaRestSrvc, HOME_TOGGLE_STATES) {
            var self = this;

            self.switchView = switchView;
            self.HOME_TOGGLE_STATES = HOME_TOGGLE_STATES;

            onInit();

            function onInit() {
                self.loggedIn = AuthSrvc.isLoggedIn();
                self.viewMode = HOME_TOGGLE_STATES.grid;

                UserRestSrvc.getOwner().then(function (owner) {
                    console.log(owner);
                    self.owner = owner;
                });

                MediaRestSrvc.getOwnerMedia().then(function (media) {
                    console.log(media);
                    self.media = media;
                });
            }


            function switchView(newView) {
                self.viewMode = newView;
            }

        }]);

}());
