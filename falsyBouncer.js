function bouncer(arr) {
  	return arr.filter(Boolean);
}

bouncer([1, null, NaN, 2, undefined]);
