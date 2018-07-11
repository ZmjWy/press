function _(a){
	return (typeof a=="string")?document.getElementById(a):a;
}
function addEvt(oTarget,sEvtType,fnHandle){
	if(!oTarget){return;}
	if(oTarget.addEventListener){
		oTarget.addEventListener(sEvtType,fnHandle,false);
	}else if(oTarget.attachEvent){
		oTarget.attachEvent("on" + sEvtType,fnHandle);
	}else{
		oTarget["on" + sEvtType] = fnHandle;
	}
};

var MULTI_CHECKBOX={mainCheckTop:{id:""},mainCheckBottom:{id:""},otherChecks:[],init:function(a){
	var e=this;
	e.mainCheckTop.id=a[0];
	if(a[1]) e.mainCheckBottom.id=a[1];
	var checkinput=document.getElementsByTagName("input");
	for(var i=0,length=checkinput.length;i<length;i++){
		if(typeof checkinput[i]=="object" && checkinput[i].type=="checkbox"){
			if(checkinput[i].id==a[0]) addEvt(checkinput[i],"click",e.checkall(a[0]));
			else if(a[1] && checkinput[i].id==a[1]) addEvt(checkinput[i],"click",e.checkall(a[1]));
			else{
				e.otherChecks.push(checkinput[i]);
				addEvt(checkinput[i],"click",e.checkothers(checkinput[i].id));
			}
		}
	}
},checkall:function(b){
	var a=this;
	return function(f){
		if(_(b).checked){
			for(var i=0,length=a.otherChecks.length;i<length;i++){
				if(a.otherChecks[i].value!=b){
					a.otherChecks[i].checked=true;
				}
			}
			_(a.mainCheckTop.id).checked=true;
			if(_(a.mainCheckBottom.id)) _(a.mainCheckBottom.id).checked=true;
		}else{
			for(var i=0,length=a.otherChecks.length;i<length;i++){
				if(a.otherChecks[i].value!=b){
					a.otherChecks[i].checked=false;
				}
			}
			_(a.mainCheckTop.id).checked=false;
			if(_(a.mainCheckBottom.id)) _(a.mainCheckBottom.id).checked=false;
		}
	};
},checkothers:function(b){
	var a=this;
	return function(f){
		var l=0;
		if(_(b).checked){
			for(var i=0,length=a.otherChecks.length;i<length;i++){
				if(a.otherChecks[i].checked){
					l++;
					if(l==a.otherChecks.length) {
						_(a.mainCheckTop.id).checked=true;
						if(_(a.mainCheckBottom.id)) _(a.mainCheckBottom.id).checked=true;
						l=0;
					}
					continue;
				}
			}
		}else{
			_(a.mainCheckTop.id).checked=false;
			if(_(a.mainCheckBottom.id)) _(a.mainCheckBottom.id).checked=false;
		}
	};
},getCheckboxs:function(b){
	var a=this,param,uparam,result={check:[],uncheck:[],checkparam:"",uncheckparam:""};
	param=uparam='';
	for(var i=0,length=a.otherChecks.length;i<length;i++){
		if(a.otherChecks[i].value!=b){
			if(a.otherChecks[i].checked){
				result.check.push(a.otherChecks[i].value);
				param+=a.otherChecks[i].value+',';
			}else{
				result.uncheck.push(a.otherChecks[i].value);
				uparam+=a.otherChecks[i].value+',';
			}
		}
	}
	if(param!='') result.checkparam=param.substring(0,param.length-1);
	if(uparam!='') result.uncheckparam=uparam.substring(0,uparam.length-1);
	return result;
}}