app.directive('integer', function() {
	// va;odates if input is integer or not
  	return {
	    require: 'ngModel',
	    link: function(scope, elm, attrs, ctrl) {
			var INTEGER_REGEXP = /^\-?\d+$/;
	      	ctrl.$validators.integer = function(modelValue, viewValue) {
		        // handles empty string
		        if (ctrl.$isEmpty(modelValue)) {
		          return false;
		        }
		        // it's valid
		        if (INTEGER_REGEXP.test(viewValue)) {
		          return true;
		        }
		        return false;
	      	};
	    }
  	};
});
