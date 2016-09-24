angular.module('mainApp.nearby').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/nearby', {
            templateUrl: 'modules/nearby/nearby.html',
            controller: 'NearbyCtrl',
            controllerAs: 'ctrl'
        })
}]);