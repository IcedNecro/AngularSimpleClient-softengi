app.controller('test_controller', function ($scope, $rootScope,functions_provider) {
	
	//switching tab
	$rootScope.current_tab = 'test'

	$scope.functions = functions_provider.get_functions()
})