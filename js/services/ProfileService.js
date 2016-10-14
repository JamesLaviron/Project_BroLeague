angular.module('profService', []).service('prof',profileFnc);

profileFnc.$inject=['$http','$q','$log'];

function profileFnc($http,$q,$log) {

	var iconId;

	var fncContainer={
		setIcon: setIcon,
		getIcon: getIcon
	};


	function setIcon(newObj) {
		iconId = newObj;
		alert("sdlfjsdlk");
	};

	function getIcon(){
		return iconId;
	};

	return fncContainer;
};