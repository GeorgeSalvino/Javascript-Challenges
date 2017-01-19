function spinalCase(str) {
	var regex = /[_\s]/g;
	var regexUpper = /[_A-Z\s]/g;
	var brandNewStr = str.replace(regexUpper, '-$&').toLowerCase();
	if(brandNewStr[0]=="-"){
      var newNewStr = brandNewStr.substring(1)
      return newNewStr
    }
	return brandNewStr;
}

spinalCase("Teletubbies say Eh-oh")


function spinalCase(str) {
	var regex = /[_\s]/g;
	var regexUpper = /[A-Z]/g;
	var brandNewStr = str.replace(regexUpper, '-$&').toLowerCase();
    var newStr = brandNewStr.replace(regex,'')
	if(newStr[0]=="-"){
      var newNewStr = newStr.substring(1)
      return newNewStr
    }
	return newStr;
}

spinalCase("Teletubbies say Eh-oh")
