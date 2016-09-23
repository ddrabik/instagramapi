angular.module('mainApp.login').config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'modules/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'ctrl'
    });
}]);