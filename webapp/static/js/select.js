var SYNCH_SELECT={multiSelect:[],init:function(a){
	var e=this;
	if(a&&a.length>0){
		for(var i=0;i<a.length;i++){
			e.multiSelect.push(a[i]);
			addEvt(_(a[i]),"change",e.changeoption(a[i]));
		}
	}
},changeoption:function(b){
	var a=this;
	return function(f){
		var length = _(b).options.length;
		var option;
		for(var i=0; i<a.multiSelect.length; i++){
			if(b!=a.multiSelect[i]){
				for(j=0;j<length;j++){
					option = _(b).options[j];
					if(option.value==_(b).value){
						_(a.multiSelect[i]).value=option.value;
					}
				}
			}
		}
	}
},getSelected:function(e){
	if(null == e || null == e.options){
		return null;
	}
	var length = e.options.length;
	var option;
	for(var i=0; i<length; i++){
		option = e.options[i];
		if(option.selected == true){
			return [option.value, option.text];
		}
	}
	return null;
}}