var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatControllers',
  'ngAnimate'
]);
 
phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
	  when('/', {
        templateUrl: 'login.html',
        controller: 'IndexCtrl'
      }).
	  when('/index', {
        templateUrl: 'login.html',
        controller: 'IndexCtrl'
      }).
	  when('/register', {
        templateUrl: 'register.html',
        controller: 'RegisterCtrl'
      }).
	  when('/log', {
        templateUrl: 'log.html',
        controller: 'LogCtrl'
      }).
	  when('/send', {
        templateUrl: 'send.html',
        controller: 'SendCtrl'
      }).
      otherwise({
        redirectTo: '/index'
      });
}]);
  
  
  function HomeFragmentController($scope) {
    $scope.$on("$routeChangeSuccess", function (scope, next, current) {
        $scope.transitionState = "active"
    });
}