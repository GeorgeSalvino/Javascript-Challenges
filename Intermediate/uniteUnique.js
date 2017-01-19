function uniteUnique(arr) {
	var newArr = [];
	for (var i = 0; i < arguments.length; i++) {
		newArr.push(arguments[i])
	}
	var merge = [].concat.apply([],newArr)
	for (var x = 0; x < merge.length; x++) {
		for (var y = x+1; y < merge.length; y++) {
			if(merge[x]===merge[y]){
				merge.splice(y,1)
			}
		}
	}
	return merge
	
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
