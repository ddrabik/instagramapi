(function () {
    'use strict';

    angular.module('mainApp.home')

        .constant('HOME_TOGGLE_STATES', {
            list: 'list',
            grid: 'grid'
        })

        .controller('HomeCtrl', ['AuthSrvc', 'UserRestSrvc', 'MediaRestSrvc', 'HOME_TOGGLE_STATES',
            function (AuthSrvc, UserRestSrvc, MediaRestSrvc, HOME_TOGGLE_STATES) {
            var self = this;

            self.switchView = switchView;
            self.HOME_TOGGLE_STATES = HOME_TOGGLE_STATES;
            self.logout = AuthSrvc.logout;

            onInit();

            function onInit() {
                self.viewMode = HOME_TOGGLE_STATES.grid;

                UserRestSrvc.getOwner().then(function (owner) {
                    self.owner = owner;
                });

                MediaRestSrvc.getOwnerMedia().then(function (media) {
                    self.media = media;
                });
            }


            function switchView(newView) {
                self.viewMode = newView;
            }

        }]);

}());
