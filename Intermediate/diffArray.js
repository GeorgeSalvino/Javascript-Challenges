function diffArray(arr1, arr2) {
  	var newArr = [];
  	for (var i = 0; i < arr2.length; i++) {
  		if(arr1.indexOf(arr2[i])==-1&&arr2[i]!=undefined){
  			if(arr1.indexOf(arr2[i])==-1){
            if(arr2[i]===undefined){
              return arr2
            }
          else{
  			newArr.push(arr2[i])
          }
  		}
  	}}
  	for (var i = 0; i < arr1.length; i++) {
  		if(arr2.indexOf(arr1[i])==-1){
            if(arr1[i]===undefined){
              return arr2
            }
          else{
  			newArr.push(arr1[i])
          }
  			
  		}
  	}
  	return newArr;
}

diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
