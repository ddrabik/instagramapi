angular.module('mainApp.home').config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'modules/home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'ctrl'
    });
}]);