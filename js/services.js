app.service('functions_provider', function() {
	var selected_functions = {}
	var results = {
		correctAnswers : 0,	
		incorrectAnswers : 0
	} 

	// contains all necessary functions and data to use in testing
	var operations_type = {
		'addition': {
			sign:'+',
			// calculates result value
			perform: function(a,b) {return a+b;},
			// generating a and b 
			generate_values: function() {
				var a = parseInt(Math.random()*100);
				var b = parseInt(Math.random()*(100-a));
				return {a: a, b: b}
			}
		},
		'substraction': {
			sign:'-',
			perform: function(a,b) {return a-b;},
			generate_values: function() {
				var a = parseInt(Math.random()*100);
				var b = parseInt(Math.random()*a);
				return {a: a, b: b}
			}
		},
		'multiplication': {
			sign:'*',
			perform: function(a,b) {return a*b;},
			generate_values: function() {
				var a = parseInt(Math.random()*10);
				var b = parseInt(Math.random()*10);
				return {a: a, b: b}
			}
		},
		'division': {
			sign:':',
			perform: function(a,b) {return a/b;},
			generate_values: function() {
				var a = parseInt(Math.random()*9+1);
				var b = parseInt(Math.random()*9+1);
				
				return {a: a*b, b: Math.min(a,b)}
			}
		}
	}
	// returns selected functions
	var get_selected_functions = function() {
		return Object.keys(operations_type).filter(function(d) {
			return operations_type[d]['selected'] == true
		})
	}

	// generates final version of test
	var generate = function() {
		var ls = get_selected_functions()
		var func = Math.round(Math.random() * ls.length);
		func = operations_type[ls[func]]

		if(ls.length == 0)
			return null;
		else {
			var _ = func.generate_values()

		 	return {operation: func, a: _.a, b: _.b};
		}
	}

	return {
		set_functions: function(f) {selected_functions = {}},
		get_selected_functions: get_selected_functions,
		get_functions: function() {
			return operations_type;
		},
		increment: function(correct) {
			// increments results
			if(correct) results.correctAnswers++;
			else results.incorrectAnswers++;
		},
		get_results: function() {
			return results
		},
		generate: generate 
	}
})
