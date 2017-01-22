function sumPrimes(num) {
 	var arr = [];
 	var numbers = [];
 	var numDivide = true;
 	var sum = 0
 	for (var i = 1; i <= 9999; i++) {
 		numbers.push(i)
 	}
 	for (var y = 1; y <= num; y++) {
 		numDivide = true;
 		for (var x = 0; x < numbers.length; x++) {
	 		if(y%numbers[x]==0&&y!=numbers[x]&&numbers[x]!=1){
	 			numDivide = false
	 		}
	 		else if(x==numbers.length-1&&numDivide&&y!=1){
	 			console.log(x)
	 			arr.push(y)
	 		}
	 	}
 	}
 	console.log(arr)
 	for (var z = 0; z < arr.length; z++) {
 		sum = sum + arr[z]
 	}
 	return sum
}

sumPrimes(10);
