function dropElements(arr, func) {
	var index = 0
  	for (var i = 0; i < arr.length; i++) {
  		if(func(arr[i])){
  			return arr.slice(i,arr.length)
  		}
        else if(i==arr.length-1){
          return []
        }
  	}
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;})
