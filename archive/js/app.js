var app = angular.module('app', []);

// app.config(['$routeProvider', '$locationProvider',
// 	function($routeProvider, $locationProvider) {
// 		$routeProvider.when('/:team', {
// 			templateUrl: 'team.html',
// 			controller: 'teamctrl',
// 			controllerAs: 'team'
// 		})
// 		$locationProvider.html5Mode({
// 			enabled: true,
// 			requireBase: false
// 		});
// 	}
// ])

app.controller('appctrl', ['$scope', function($scope) {
	$scope.angular = "Angular Works";
	$scope.type = function(variable) {
		return typeof variable;
	};
	$scope.call = function(method) {
		return method.call();
	};
}]);
