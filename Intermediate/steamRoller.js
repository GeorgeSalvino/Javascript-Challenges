function steamrollArray(arr) {
	var ret = [];
    for(var i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            ret = ret.concat(steamrollArray(arr[i]));
        } else {
            ret.push(arr[i]);
        }
    }
    return ret;
}

steamrollArray([1, [2], [3, [[4]]]]);

