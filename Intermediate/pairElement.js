function pairElement(str) {
	var splitStr = str.split('')
	var newArr = []
    console.log(splitStr)
	for (var i = 0; i < splitStr.length; i++) {
		if(splitStr[i]=="G"){
			newArr.push(["G","C"])
		}
		else if(splitStr[i]=="C"){
			newArr.push(["C","G"])
		}
		else if(splitStr[i]=="A"){
			newArr.push(["A","T"])
		}
		else if(splitStr[i]=="T"){
			newArr.push(["T","A"]);
		}
	}
  	return newArr
}

pairElement("TTGAG")
