function translatePigLatin(str) {
    var substring2 =str.substring(0,2)
    var substring3 = str.substring(0,3)
	if(str[0]=="a"||str[0]=="e"||str[0]=="i"||str[0]=="o"||str[0]=="u"){
		newStr = str+"way";
		return newStr
	}
    else if (substring2 =="br"||substring2 =="cr"||substring2 =="fl"||substring2 =="gl"||substring2 =="sk"||substring2 =="sm"){
        return str.substr(2) + str[0] +str[1] + "ay"
    }
    else if(substring3=="thr"){
    	return str.substr(3) + str[0] +str[1]+ str[2] + "ay"
    }
  	else{
  		return str.substr(1)+ str[0] + "ay"
  	}
}

translatePigLatin("algorithm")
