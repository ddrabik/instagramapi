(function () {

    angular.module('mainApp.common.components').component('mediaCard', {
        templateUrl : 'modules/common/components/mediaCard/mediaCard.html',
        controller  : MediaCardCtrl,
        controllerAs: 'ctrl',
        bindings    : {
            item: '<'
        }
    });

    function MediaCardCtrl($scope, $element, $attrs) {
        var self = this;

        self.$onInit = function () {

        };
    }

}());

