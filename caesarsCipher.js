
function rot13(str) { // LBH QVQ VG!
	var regex = /^[\s/a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g
  	var cypher = String.prototype;
  	//make a loop
  	for (var i = 0; i < str.length; i++) {
        if(str[i]==" "||(str[i]==".")||(str[i]=="!")||(str[i]=="?")){
        	console.log(str[i]);
          	cypher += str[i];
        }
        else{
          //get the unicode value of the character + 13, save it to a variable
  		  var unicode = str.charCodeAt(i)-13;
  		  //if the unicode-63 is < 65,
  		  if(unicode<65){
  		  	//get the value passed the 65
  		  	var unicodeLessThan65 = 65 - unicode;
  		  	//use that value but now coming from 91 to get the character . It's like a loop: The alphabet goes from 65 to 91 on unicode so if it goes to less than 65 it continues from 91
  		  	var characterLessThan65 = String.fromCharCode(91 - unicodeLessThan65);
  		  	//push inth cypher string
  		  	cypher += characterLessThan65;
  		  }
  		  else{
  		  	//transform the unicode value into a character
  		  	var character = String.fromCharCode(unicode);
  		  	//push into cypher string
  		  	cypher += character;
  		  }
        }
    //end loop
  	}
  	//return cypher
  	return cypher;
}

rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")


// E = 45
// i = 69             12 DE DIFERENÇA
// O ALFABETO VAI DE 65 A 91 EM UNICODE