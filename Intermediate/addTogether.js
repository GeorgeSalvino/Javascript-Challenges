var addTogether = function() {
	var arg0 = arguments[0]
	if(arguments[1]===undefined&&typeof arguments[0]==="number"){
  		return function(y){
            if(Array.isArray(y)){
              	return undefined
            }
            else{
            	return arg0 + y
            }
  			
  		}
  	}
  	else if(arguments[0]===undefined||typeof arguments[0]!="number"||typeof arguments[1]!="number"){
  		return undefined
  	}
  	else if(arguments[1]!==undefined&&arguments[0]!==undefined){
  		return arguments[0]+arguments[1]
  	}
  	
}

addTogether(2)(3);
