angular.module('loginApp').controller('profileCrt',profileCrtFnt);

profileCrtFnt.$inject=['$scope','$log','$window','auth','prof'];

alert("qsdojqsd");	
// $scope.Data = Data;
// alert(Data.profileId);
// var icon ="http://ddragon.leagueoflegends.com/cdn/5.12.1/img/profileicon/"+Data+".png";

// $("#profileIcon").attr("src",icon);
// alert(icon);

function profileCrtFnt($scope, $log, $window, auth, prof){

	$scope.icon = prof.getIcon();
	alert(prof.getIcon());
}