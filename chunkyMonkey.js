
function chunkArrayInGroups(arr, size) {
  var array = []
	for (var i = 0; i < arr.length; i+=size) {
		var slice = arr.slice(i,i+size);
		array.push(slice)
	}
  	return array
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
