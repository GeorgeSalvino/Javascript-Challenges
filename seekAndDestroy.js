function destroyer(arr) {
	var args = Array.prototype.slice.call(arguments);
	var numbersToExclude = args.slice(1, args.length);
	var filtered = args[0].filter(function(searching) {
    	for (var i = 0; i < numbersToExclude.length; i++) {
      		if (searching == numbersToExclude[i]) {
      			console.log("false")
        		return false;
      		}
    	}
    	return true;
  	}
	); 
	return filtered
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);