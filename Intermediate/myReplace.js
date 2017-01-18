function myReplace(str, before, after) {
	if(before[0]==before[0].toUpperCase()){
      var newAfter = after.replace(after[0],after[0].toUpperCase());
      var newStr = str.replace(before,newAfter)
      console.log(newStr)
      return newStr
	}
    else{
	var newStr = str.replace(before,after)
  	return newStr;
    }
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
