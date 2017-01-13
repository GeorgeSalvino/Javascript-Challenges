var count=1

function factorial(x) {
	var count=1
	if(x==0||x==1){
		return 1
	}
	else{
		while(x>=2){
		count=count*x;
		x--;
		}
	}
	
	
	return count
}

console.log(factorial(20))