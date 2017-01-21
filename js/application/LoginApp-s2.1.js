//Creation of an application not needed to bind it to a global variable;
var myApp = angular.module('broApp',['authService','profService','ngRoute','factoryServices']);
myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.
    when('/', {
        templateUrl: "/template/auth.html",
        controller: 'loginCtrl'
    }).when('/profile', {
        templateUrl: "/template/profile.html",
        controller: 'profileCtr'
    }).when('/somepage', {
        templateUrl: '/template/profile.html',
        controller: 'loginCtrl',
        resolve: {
            "check": function ($location, $scope, popup) {
                console.log($scope.loggedUser);
                if ($scope.loggedUser != "") {
                    console.log($scope.loggedUser);
                } else {
                    $location.path('/');    //redirect user to home.
                    alert("You don't have access here");
                }
            }
        }
    }).otherwise({
        redirectTo: '/'
    });
}]);
myApp.filter('capitalizeFL', function() {
    return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});