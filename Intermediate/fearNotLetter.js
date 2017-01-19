function fearNotLetter(str) {
	for (var i = 0; i < str.length; i++) {
		var charCode = str.charCodeAt(i)
        if(i==str.length-1){
          return undefined
        }
		else if(charCode + 1!= str.charCodeAt(i+1)){
			return String.fromCharCode(charCode+1)
		}
        
	}
  	return str;
}

fearNotLetter("bcd")
