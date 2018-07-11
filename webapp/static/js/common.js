function lightonRow(obj){
   obj.style.backgroundColor="#d0e0ff";
}

function unlightonRow(obj){
   obj.style.backgroundColor="#FFFFFF";
}

function newWin(winURL,winName) {       
	winName = window.open(winURL,winName,"width=400,height=280,resizable=yes,scrollbars=yes");
	winName.focus();
}

String.prototype.trim=function() {  
    return this.replace(/(^\s*)|(\s*$)/g,'');  
}; 