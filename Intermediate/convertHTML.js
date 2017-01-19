function convertHTML(str) {
  	var eStr = str.replace(/&/g,'&amp;');
  	var setaTrasStr = eStr.replace(/</g,'&lt;')
  	var setaFrenteStr = setaTrasStr.replace(/>/g,'&gt;')
  	var quoteStr = setaFrenteStr.replace(/"/g,'&quot;')
    var singleQuoteStr = quoteStr.replace(/'/g,'&apos;')
  	return singleQuoteStr;
}

convertHTML("Shindler's List")
