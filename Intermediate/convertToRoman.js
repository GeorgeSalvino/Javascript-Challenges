function convertToRoman(num) {
	romanNumber = ""
	var digits = (""+num).split("");
	if(digits.length==1){
		unidade.call(digits[0])
		return romanNumber
	}
	else if(digits.length==2){
		dezena.call(digits[0]);
		unidade.call(digits[1]);
		return romanNumber;
	}
	else if(digits.length==3){
		centena.call(digits[0])
		dezena.call(digits[1])
		unidade.call(digits[2])
		return romanNumber
	}
	else if(digits.length==4){
		milhares.call(digits[0]);
		centena.call(digits[1]);
		dezena.call(digits[2]);
		unidade.call(digits[3]);
		return romanNumber
	}
}

function unidade(){
	console.log(this)
	if(this<4){
		for (var i = 0; i < this; i++) {
			romanNumber+="I";
		}
		return
	}
	else if(this==4){
		romanNumber +="IV";
		return
	}
	else if (this==5){
		romanNumber +="V";
		return;
	}
	else if(this>5&&this<9){
		romanNumber +="V"
		for (var i = 0; i < this-5; i++) {
			romanNumber +="I"
		}
		return
	}
	else if(this==9){
		romanNumber +="IX";
		return
	}
}

function dezena(){
	if(this==1){
		romanNumber+="X";
		return
	}
	else if(this==2){
		romanNumber +="XX";
		return
	}
	else if (this==3){
		romanNumber +="XXX";
		return;
	}
	else if(this==4){
		romanNumber +="XL"
		return
	}
	else if(this==5){
		romanNumber +="L";
		return
	}
	else if(this==6){
		romanNumber +="LX"
		return
	}
	else if(this==7){
		romanNumber +="LXX"
		return
	}
	else if(this==8){
		romanNumber +="LXXX"
		return
	}
	else if(this==9){
		romanNumber +="XC"
		return
	}
}	

function centena(){
	if(this==1){
		romanNumber+="C";
		return
	}
	else if(this==2){
		romanNumber +="CC";
		return
	}
	else if (this==3){
		romanNumber +="CCC";
		return;
	}
	else if(this==4){
		romanNumber +="CD"
		return
	}
	else if(this==5){
		romanNumber +="D";
		return
	}
	else if(this==6){
		romanNumber +="DC"
		return
	}
	else if(this==7){
		romanNumber +="DCC"
		return
	}
	else if(this==8){
		romanNumber +="DCCC"
		return
	}
	else if(this==9){
		romanNumber +="CM"
		return
	}
}
function milhares(){
	for (var i = 0; i < this; i++) {
			romanNumber+="M";
	}
}



convertToRoman(68);