var app = angular.module('math_checker',['ngRoute'])

/**
 * path configuring
 */
app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/setup', {
			templateUrl:'/partials/setup.html',
			controller: 'test_controller'
		})
		.when('/revise', {
			templateUrl:'/partials/revision.html',
			controller: 'revision_controller'
		})
		.otherwise({
			redirectTo: '/setup'
		})
}])