(function () {

    angular.module('mainApp.common.components').component('mediaCard', {
        templateUrl : 'modules/common/components/mediaCard/mediaCard.html',
        controller  : MediaCardCtrl,
        controllerAs: 'ctrl',
        bindings    : {
            item: '<',
            resolution: '@'
        }
    });

    function MediaCardCtrl($scope, $element, $attrs) {
        var self = this;

        self.$onInit = function () {
            switch(self.resolution) {
                case 'low':
                    self.src = self.item.images.low_resolution.url;
                    break;
                case 'thumb':
                    self.src = self.item.images.thumbnail.url;
                    break;
                case 'high':
                    self.src = self.item.images.standard_resolution.url;
                    break;
                default:
                    self.src = self.item.images.low_resolution.url;
            }
        };
    }

}());

