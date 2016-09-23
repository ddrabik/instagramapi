(function () {

    angular.module('mainApp.common.components').component('mediaList', {
        templateUrl : 'modules/common/components/mediaList/mediaList.html',
        controller  : MediaListCtrl,
        controllerAs: 'ctrl',
        bindings    : {
            media: '<'
        }
    });

    function MediaListCtrl($scope, $element, $attrs) {
        var self = this;

        self.$onInit = function () {

        };
    }

}());

