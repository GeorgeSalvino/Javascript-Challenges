function titleCase(str)
{
    //                 select words and exclude whitespaces
    return str.replace(/\w\S*/g, function(txt){
      // if is the first character, make it uppercase if not the first character, make it lower case
    	return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

titleCase("sHoRt AnD sToUt");