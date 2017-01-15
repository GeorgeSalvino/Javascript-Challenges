function sumAll(arr) {
  	var min = Math.min(arr[0],arr[1]);
  	var max = Math.max(arr[0],arr[1]);
  	var number = 0;
  	for (var i = min; i <= max; i++) {
  		number = number + i;
  	}
  	return number
}

sumAll([1, 4]);
