function whatIsInAName(collection, source) {
	var arr = [];
	// Only change code below this line
	for(var i = 0; i<collection.length;i++){
		for (var prop in source) {
            if(collection[i].hasOwnProperty(prop)){
                if(collection[i][prop]==source[prop]){
                  var returned = true;
                }
                else{
                  var returned = false;
                }
			}
        else{
            var returned = false;
          }
		}
        if(returned===true){
          arr.push(collection[i])
        }
	}
	return arr;
	// Only change code above this line
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })
