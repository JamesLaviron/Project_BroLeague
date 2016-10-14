angular.module('loginApp').controller('loginCtrl',loginCrtFnt);

loginCrtFnt.$inject=['$scope','$log','$window', '$location', 'auth','prof'];

function loginCrtFnt($scope, $log, $window, $location, auth, prof){
	$scope.logAuth = function() {
		$log.info('user summonerName', $scope.user.summonerName);
		$log.info('user region', $scope.user.region);
		var futurContent=auth.localAuthAsk($scope.user.summonerName,$scope.user.region);
	};

	$scope.logAuthObject = function(user) {
		$log.info('user-summonerName:', user.summonerName);
		$log.info('user-region:', user.region);

		$log.info('user list', auth.userList());
		$log.info(auth.localAuthAsk(user.summonerName, user.region));
		// if(auth.localAuthAsk(user.summonerName, user.region). ){
		// 	// $window.location.href = "file:///home/victor/TP%20ANGULAR/TP1_Form/summonerName.html";
		// 	// $log.info('if passé');
		// 	return true;
		// }
		var futurContent=auth.localAuthAsk($scope.user.summonerName,$scope.user.region);
		$log.info(futurContent);
		futurContent.then(
			function(status){
				alert( status + ", things are going well" );
			},
			function(status){
				alert( status + ", you fail this time" );
			},
			function(status){
				alert( status + ", things are going well" );
			}
		// $window.location.href = "file:///home/victor/TP%20ANGULAR/TP1_Form/summonerName.html";
		);
		return false;
	};
	$scope.checkUser = function(summonerName, region) {
		$log.info(auth.localAuthAsk(summonerName, region));
		if(auth.localAuthAsk(summonerName, region).equals(summonerName)){
			
			$log.info(auth.localAuthAsk(summonerName, region));
			$window.location.href = "file:///home/victor/TP%20ANGULAR/TP1_Form/summonerNameSuccess.html";
			return true;
		}
		return false;
	};
	$scope.getInfo = function(summonerName,region){
		$log.info('user summonerName', summonerName);
		$log.info('user region', region);
		var regionLC = region.toLowerCase();
		$log.info(regionLC);
		var checkUser = auth.httpRequestLOL(summonerName,regionLC);
		checkUser.then(function(result){
			alert(result);
			window.location.href = "/profile";
			prof.setIcon("662");
		});
	};
}