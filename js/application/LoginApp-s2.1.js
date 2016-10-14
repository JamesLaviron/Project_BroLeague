//Creation of an application not needed to bind it to a global variable;
var myApp = angular.module('loginApp',['authService','profService','ngRoute']);

myApp.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl : "/TP_Perso/index.html"
	})
	.when("/profile", {
		templateUrl : "/TP_Perso/profile.html"
	})
});