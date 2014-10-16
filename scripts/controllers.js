var phonecatControllers = angular.module('phonecatControllers', []);

//var serverurl = "http://localhost/urban_heartbeat/services/";
var serverurl = "http://lalithkaushik.com/urban/";



Storage.prototype.setArray = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getArray = function(key) {
    return JSON.parse(this.getItem(key))
}

phonecatControllers.controller('IndexCtrl', ['$scope',
function($scope) {
	
	var member_id = window.localStorage.getItem("member_id");
	if(parseInt(member_id)==member_id && parseInt(member_id)>0 ){
		window.location = '#/log';	
	}
	else{
		window.location = '#/register';	
	}
		
}]);

phonecatControllers.controller('RegisterCtrl', ['$scope',
function($scope) {
	
	console.log("register");
	var member_id = window.localStorage.getItem("member_id");
	if(parseInt(member_id)==member_id && parseInt(member_id)>0 ){
		window.location = '#/log';	
	}
	
		
}]);



phonecatControllers.controller('LogCtrl', ['$scope',
function($scope) {
	
		console.log("log");
}]);


phonecatControllers.controller('SendCtrl', ['$scope',
function($scope) {
	console.log("send");
	
	var pictureSource;   // picture source
    var destinationType; // sets the format of returned value 
	var imageData_name;
   
    document.addEventListener("deviceready",onDeviceReady,false);
		
}]);






