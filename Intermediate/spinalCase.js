function spinalCase(str) {
	var regex = /[_\s]/g;
	var regexUpper = /[A-Z]/g;
	var regexDuplicate = /[\s]|(-)\1/gi
	var brandNewStr = str.replace(regexUpper, '-$&').toLowerCase();
    var newStr = brandNewStr.replace(regex,'-');
    var noDuplicateStr = newStr.replace(regexDuplicate, '-')
	if(newStr[0]=="-"){
      	var newNewStr = noDuplicateStr.substring(1);
      	return newNewStr;
    }
	return noDuplicateStr;
}

spinalCase("Teletubbies say Eh-oh");