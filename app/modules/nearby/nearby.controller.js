(function () {
    'use strict';

    angular.module('mainApp.nearby')
        .controller('NearbyCtrl', ['MediaRestSrvc', 'HOME_TOGGLE_STATES', 'UserLocationSrvc', '$routeParams', '$q',
            function (MediaRestSrvc, HOME_TOGGLE_STATES, UserLocationSrvc, $routeParams, $q) {
                var self = this;

                self.switchView = switchView;
                self.HOME_TOGGLE_STATES = HOME_TOGGLE_STATES;

                onInit();

                function onInit() {
                    self.viewMode = HOME_TOGGLE_STATES.grid;
                    self.state = 'location';

                    var locationPromise;

                    if ($routeParams.latitude && $routeParams.longitude) {
                        locationPromise = $q.when({
                            latitude: $routeParams.latitude,
                            longitude: $routeParams.longitude
                        });
                    } else {
                        locationPromise = UserLocationSrvc.getLocation();
                    }

                    locationPromise.then(function (coords) {
                            self.state = 'media';
                            return MediaRestSrvc.getMediaByLocation(coords.latitude, coords.longitude);
                        }).then(function (media) {
                            self.media = media;
                        }).catch(function (error) {
                            self.error = error;
                        }).finally(function () {
                            self.state = undefined;
                        });
                }

                function switchView(newView) {
                    self.viewMode = newView;
                }

            }]);

}());
