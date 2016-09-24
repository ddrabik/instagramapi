(function () {

    angular.module('mainApp.common.components').component('siteHeader', {
        templateUrl : 'modules/common/components/header/header.html',
        controller  : SiteHeaderCtrl,
        controllerAs: 'ctrl',
        bindings    : {
            currentState: '<?',
            displayStates: '@?',
            onStateChange: '&?'
        }
    });

    function SiteHeaderCtrl($scope, $element, $attrs, AuthSrvc, HOME_TOGGLE_STATES, UserRestSrvc) {
        var self = this;

        self.logout = AuthSrvc.logout;
        self.HOME_TOGGLE_STATES = HOME_TOGGLE_STATES;

        self.$onInit = function () {
            UserRestSrvc.getOwner().then(function (owner) {
                self.owner = owner;
            });
        };
    }

}());

