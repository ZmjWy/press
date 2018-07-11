String.prototype.trim = function() { 
	return this.replace(/(^\s*)|(\s*$)/g, "");
}
function dgGotoPage(url,page){
	if(!page || page=="undefined" || page.trim()!=parseInt(page)){
		alert("Please check your input numer!");
		return;
	}
	if(page>2147483647 || page<-2147483648){
		alert("Your input number is overflowed.")
		return;
	}
	location.href=url+page.trim();
}