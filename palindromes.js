
function palindrome(str) {
	var strNoPonctuation = str.replace(/[/\s+.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
	console.log(strNoPonctuation);
	var reversed = str.split('').reverse().join('').toLowerCase();
	var reversedNoPonctuation = reversed.replace(/[/\s+.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
	console.log(reversedNoPonctuation)
	if(strNoPonctuation===reversedNoPonctuation){
		return true
	}
	else{
		return false
	}
}

palindrome("nope");