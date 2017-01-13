function mutation(arr) {
    var returned = undefined;
	var firstStr = arr[0];
	var secondStr = arr[1];
    var firstStrLow = firstStr.toLowerCase()
    var secondStrLow = secondStr.toLowerCase()
	for (var i = 0; i < secondStrLow.length; i++) {
		if(firstStrLow.indexOf(secondStrLow[i])==-1){
            console.log(secondStrLow.indexOf(firstStrLow[i]))
			return false
		}
		else if(firstStrLow.indexOf(secondStrLow[i])>-1){
			if(i==secondStrLow.length-1){
				return true
			}
			returned = true
		}
    console.log(secondStrLow[i] + " - " +arr)
	}
}

mutation(["Mary", "Aarmy"])

