app.controller('index_controller', function ($scope, $location, $rootScope) {
	//switched tab
	$rootScope.current_tab = 'test'
	
	$scope.redirect = function(route, tab) {
		$rootScope.current_tab = tab
		$location.url(route)
	}
})