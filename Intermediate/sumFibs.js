function sumFibs(num) {
	var arr = [1,1];
	var fibonacciNum = 0;
	var sum = 0;
  	for (var i = 2; i < num; i++) {
  		fibonacciNum = arr[i-1] + arr[i-2] ;
  		arr.push(fibonacciNum);
  	}
  	for (var x = 0; x < arr.length; x++) {
  		if(arr[x]%2!==0&&arr[x]<=num){
  			sum = arr[x] + sum
  		}
  	}
  	return sum;
}

sumFibs(1000);
