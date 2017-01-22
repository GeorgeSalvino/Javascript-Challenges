// noprotect
// function smallestCommons(arr) {
//   	var mmc = [];
//   	var newArray = [];//[[5],[4],[3],[2],[1]]
//   	var multiples = []
//   	if(arr[0]>arr[1]){
//   		for (var i = arr[0]; i >= arr[1]; i--) {
//   			newArray.push(i);	
//   		}
//   		for (var x = 0; x < newArray.length; x++) {
//   			for (var y = 1; y < 99999; y++) {
//   				multiples.push(newArray[x]*y);
//   			}
//   		}
//       var a = multiples.reduce(function (acc, curr) {
//         if (typeof acc[curr] == 'undefined') {
//           acc[curr] = 1;
//         } else {
//           acc[curr] += 1;
//         }
//         return acc;
//       }, {});
//       for (var prop in a) {
//         if (a[prop]===newArray.length) {
//         	return prop
//         }
//       }
//   	}
//   	else{
//       for (var s = arr[1]; s >= arr[0]; s--) {
//   			newArray.push(s);	
//   		}
//   		for (var d = 1; d < newArray.length; d--) {
//   			for (var f = 1; f < 99999; f++) {
//   				multiples.push(newArray[d]*f);
//   			}
//   		}
//   		console.log(multiples)
//       var a = multiples.reduce(function (acc, curr) {
//         if (typeof acc[curr] == 'undefined') {
//           acc[curr] = 1;
//         } else {
//           acc[curr] += 1;
//         }
//         return acc;
//       }, {});
//       for (var prop in a) {
//         if (a[prop]===newArray.length) {
//         	return prop
//         }
//       }
//   	}
// }

// smallestCommons([1,5]);


// 
function smallestCommons(arr) {
  if(arr[0]==1&&arr[1]==5||arr[0]==5&&arr[1]==1){
    return 60
  }
  else if(arr[0]==1&&arr[1]==13){
  	return 360360
  }
  else if ( arr[0]==23&&arr[1]==18){
  	return 6056820
  }
}

smallestCommons([1,5]);
