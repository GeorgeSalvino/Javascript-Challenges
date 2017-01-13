
function findLongestWord(str) {
	var arrOfStrings =  str.split(' ')
	var longestWord = 0
	for (var i = 0; i < arrOfStrings.length; i++) {
		if(arrOfStrings[i].length>longestWord)
			var longestWord = arrOfStrings[i].length
			console.log(arrOfStrings[i])
		}
		return longestWord;
}
  	

findLongestWord("The quick brown fox jumped over the lazy dog");