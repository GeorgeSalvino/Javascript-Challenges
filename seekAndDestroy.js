function destroyer(arr) {
	var arrToPush = [];
	var args = Array.prototype.slice.call(arguments);
	var numbersToExclude = args.slice(1, args.length);
	var filtered = numbersToExclude.forEach(function(number){
		console.log(arrToPush)
		var filtered = args[0].filter(function DESTROY(searching){
			console.log(searching + " " + number)
			if(searching==number){
				console.log("true")
				return true
			}
			else{
				console.log("false")
				return false
			}
		})
		arrToPush.push(filtered)
		console.log(arrToPush)	
	})
	console.log(arrToPush)
	return filtered
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
