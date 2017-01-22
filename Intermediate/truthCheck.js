function truthCheck(collection, pre) {
  	for (var i = 0; i < collection.length; i++) {
  		if(collection[i].hasOwnProperty(pre)){
  			for(var prop in collection[i]){
  				if(collection[i][prop]===""||collection[i][prop]===undefined||collection[i][prop]===0||collection[i][prop]===null||(typeof collection[i][prop] === 'number' && isNaN(collection[i][prop]))){
  					return false
  				}
  				else{
  					var ret = true
  				}
  			}
  		}
  		else if(!collection[i].hasOwnProperty(pre)){
  			return false
  		}
  	}
  	return ret
}

truthCheck([{"single": "yes"}], "single")