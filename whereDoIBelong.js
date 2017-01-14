function getIndexToIns(arr, num) {
	var newArr = []
	var index = arr.indexOf(num)
	while(arr.indexOf(num)>-1){
		arr.splice(index, 1)
	}
  	arr.push(num)
  	var newArr = arr.sort(function(a,b){
  		return a - b;
  	});
  	return newArr.indexOf(num)
}

getIndexToIns([3, 10, 5], 3)