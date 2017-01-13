
function largestOfFour(arr) {
	var number = -99999999999999999999999999999999999999999999999999999999;
	var largest = [];
  	arr.forEach(function(arrayOfFour){
  		for (var i = 0; i < arrayOfFour.length; i++) {
  			if(arrayOfFour[i]>number){
  				number = arrayOfFour[i]
  			}
  		}
  		largest.push(number);
  		number = -99999999999999999999999999999999999999999999999999999999;
  	})
  	return largest

}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  