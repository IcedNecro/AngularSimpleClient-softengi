app.controller('revision_controller', function ($scope, $rootScope, functions_provider) {
	// switches tabs
	$rootScope.current_tab = 'revise'
	
	// reference to functions
	$scope.functions = functions_provider.get_selected_functions()
	$scope.results = functions_provider.get_results()
	$scope.warning = false;

	var generate_excercise = function() {
		// generates test from the subset of chosen math operations
		var ex = functions_provider.generate()
		$scope.answer = 0
		// if nothing choosen
		if(!ex) {
			$scope.empty = true;
			return
		} else {
			$scope.empty = false;
		}
		$scope.current_operation = ex;
		$scope.sample = ex.a+' '+ex.operation.sign+' '+ex.b+' = ';
		$scope.answered = false;
	}

	$scope.generate_excercise = generate_excercise
	$scope.submit_answer = function(answer) {
		// submitting
		if($scope.answered==false) {
			var current = $scope.current_operation
			var correct_result = current.operation.perform(current.a, current.b)
			$scope.ok = correct_result==$scope.answer
			// changing counters
			functions_provider.increment(correct_result==$scope.answer)
			$scope.answered = true;
		}
	}

	generate_excercise()
})