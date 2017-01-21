angular.module('broApp').controller('profileCtr',profileCrtFnt);
profileCrtFnt.$inject=['$scope','$log','$window','auth','prof'];
function profileCrtFnt($scope, $log, $window, auth, prof){
	$scope.icon = prof.getIcon();
	alert(prof.getIcon());
}