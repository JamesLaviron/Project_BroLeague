angular.module('authService', []).service('auth',authFnc);

authFnc.$inject=['$http','$q','$log'];

function authFnc($http,$q,$log) {
	
	var userMap={};
	userMap['jdoe']='jdoepwd';
	userMap['psmith']='psmithpwd';
	userMap['tp']='tp';

	var fncContainer={
		localAuthAsk:localAuthAsk,
		checkUser: checkUser,
		userList: userList,
		httpRequestLOL: httpRequestLOL
	};

	function localAuthAsk(login,pwd){
		var deferred = $q.defer();
		setInterval(function(login,pwd){
			if( userMap[login] == pwd){	
			//TODO
			var data = login	;
			deferred.resolve(data);
		}else{
			//TODO
			deferred.reject(status);
		}
		clearInterval(this);
	},3000,login,pwd);
		return deferred.promise;
	};

	function userList(){
// TODO
for( key in userMap){
	// $log.info('user login', key);
	// $log.info('user pwd', userMap[key]);
	return Object.keys(userMap);
}
};

function httpRequestLOL(summonerName,region){
	//ASYNC
	var deferred = $.Deferred();

	//HTTP REQUEST
	//Configuration request
	var url = "https://euw.api.pvp.net/api/lol/"+region+"/v1.4/summoner/by-name/"+summonerName+"?api_key=RGAPI-c7adce2b-7680-432e-9a83-1a8d37adefd5";
	var config = {
		headers : {'Accept' : 'application/json'}
	};
	//http request to LOL API
	$http.get(url,config)
	.then(function(response) {
		// alert("http status code: "+response.status);  
		var status = response.status;
		var data = response.data;
        var json = JSON.stringify( data,null,2);
        $log.info(json);
        alertngular.forEach(response.data[summonerName], function(value, key) {
        	$log.info("key:"+key+"- value: "+value);
        });
		deferred.resolve(json);
	}, function(response) {
		alert("Error, can't access this data");
		deferred.reject(status);
	});		

	return deferred.promise();
};

// function httpRequestLOL(summonerName,region){
// 	var url = "https://euw.api.pvp.net/api/lol/"+region+"/v1.4/summoner/by-name/"+summonerName+"?api_key=RGAPI-c7adce2b-7680-432e-9a83-1a8d37adefd5";
// 	$http.get(url)
// 	.then(function(response) {
//         //First function handles success
//         var object = response.data;
//         var json = JSON.stringify( object,null,2);
//         $log.info(json);
//         // $log.info(Object.keys(object));
//         // $log.info(Object.getOwnPropertyNames(object));
//         // $log.info(Object.keys(object)[0]);

//         angular.forEach(response.data.bob, function(value, key) {
//         	$log.info("key:"+key+"- value: "+value);
//         });
//         alert("http status code: "+response.status);  
//     }, function(response) {
//         //Second function handles error
//         // $scope.content = "Something went wrong";
//         alert("Error, can't access this data");
//         alert("http status code: "+response.status);   
//     });
// };

function checkUser(userlogin,userpwd){
// TODO
if (userlogin in userMap) {
	if(userMap[userlogin] == userpwd){
		return true;
	}
}
};

return fncContainer;
};