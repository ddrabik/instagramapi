angular.module('mainApp.view').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/view/:id', {
            templateUrl: 'modules/view/view.html',
            controller: 'ViewCtrl',
            controllerAs: 'ctrl'
        });
}]);