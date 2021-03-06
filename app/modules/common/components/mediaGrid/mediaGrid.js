(function () {

    angular.module('mainApp.common.components').component('mediaGrid', {
        templateUrl : 'modules/common/components/mediaGrid/mediaGrid.html',
        controller  : MediaGridCtrl,
        controllerAs: 'ctrl',
        bindings    : {
            media: '<',
            itemsPerGroup: '@'
        }
    });

    function MediaGridCtrl($scope, $element, $attrs) {
        var self = this;

        self.$onInit = function () {
            if (self.media) {
                self.mediaGroups = partition(self.media, self.itemsPerGroup);
            }
        };


        self.$onChanges = function (changesObj) {
            if (changesObj.media) {
                self.mediaGroups = partition(self.media, self.itemsPerGroup);
            }

        };

        function partition(items, itemsPerGroup) {
            var groups = [];
            var group = [];
            _.each(items, function (item, index) {
                if (index % itemsPerGroup === 0) {
                    if (group) {
                        groups.push(group);
                    }
                    group = [item];
                } else {
                    group.push(item);
                }
            });

            groups.push(group);

            return groups;
        }
    }

}());	

