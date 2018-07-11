/*判断浏览器*/
var Browser={IE:0,isIE6:false,Firefox:0,Opera:0,Safari:0};
(function(){
	var a=navigator.userAgent.match(/(IE|Firefox|Opera|Safari)[ \/](\d+(\.\d+)?)/i);
	if(a&&a.length){
		Browser[a[1]]=parseInt(a[a.length-2],10);
	}
	if(Browser.IE>0&&Browser.IE<7){
		Browser.isIE6=true;
	}
})();

/*统一根据id获取元素对象*/ 
function _(a){
	return (typeof a=="string")?document.getElementById(a):a;
}
/*统一根据TagName获取元素对象*/ 
function gt(e,a){
	e=_(e);
	return (e.getElementsByTagName(a));
}
/*创建元素对象*/ 
function ce(a){
	return document.createElement(a);
}
/*添加元素对象*/ 
function ap(a,b){
	a.appendChild(b);
}
/*创建元素并添加,sType,oParent*/
function crtE(sType,oP){
	var oE = null;
	if (document.createElementNS) {
		// use the XHTML namespace; IE won't normally get here unless
		// _they_ "fix" the DOM2 implementation.
		oE = document.createElementNS("http://www.w3.org/1999/xhtml", sType);
	} else {
		oE = document.createElement(sType);
	}
	if (typeof oP != "undefined") {
		try{
			oP.appendChild(oE);
		}catch(e){}
	}
	return oE;
};
/*删除oP下的子元素oE*/
function de(oE,oP){
	try{
		oP.removeChild(oE);
	}catch(e){}
	return oE;
};
/*根据name获取元素对象*/
function ne(a){
	try{
		return document.getElementsByName(a)[0];
	}catch(e){
		return null;
	}
}
/*统一根据name获取Form元素对象*/
function nf(a){
	try{
		return document.forms[a];
	}catch(e){
		return null;
	}
}
/*统一根据name获取指定Form元素的输入框对象*/
function ni(a,b){
	try{
		if(typeof a == "string"){
			return (nf(a))[b];
		}else{
			return a[b];
		}
	}catch(e){
		return null;
	}
}
/*获取元素的属性*/
function ga(oE,sAttr){
	try{
		var rs = oE.getAttribute(sAttr);
		if(typeof rs == "object" && Browser.IE){
			rs = gaIE(oE,sAttr);
		}
		rs = (rs === null)?"" : rs;
		return rs;
	}catch(e){
		return "";
	}
}
/*为IE浏览器获取属性，解决IE浏览器的无奈*/
function gaIE(oE,sAttr){
	if(oE === null){
		return "";
	}
	sAttr = trim(sAttr);
	try{
		var tagNm = oE.tagName;
		var html = oE.outerHTML;
		var regStr = "<"+tagNm+"[^>]* "+sAttr+"=[^ ]*";
		var reg = crtReg(regStr,"i");
		var rs = html.match(reg);
		if(rs !== null){
			var tmpStr = rs[0];
			regStr = sAttr + "=[^ ]*";
			reg = crtReg(regStr,"i");
			rs = tmpStr.match(reg);
			if(rs !== null){
				return rs[0].replace(sAttr+"=","");
			}
		}
	}catch(e){
		/*do nothing*/
	}
	return "";
}
/*设置元素属性*/
function sa(oE,sAttr,sValue){
	if(!oE){return;}	
	oE.setAttribute(sAttr,sValue);
}
/*设置元素样式*/
function ss(oE,sStyle,sValue){
	if(!oE){return;}
	oE.style[sStyle] = sValue;	
}
/*设置元素显示*/
function show(e,a){
	e=_(e);
	if(e){
		if(a===""||a==1){
			e.style.display="";
		}else {
			e.style.display=a||"block";
		}
	}
}
/*设置元素隐藏*/
function hide(a){
	a=_(a);
	if(a){
		a.style.display="none";
	}
}
/*设置元素隐现*/
function toggle(a){
	a=_(a);
	if(a.style.display=="none"){
		show(a);
	}else {
		hide(a);
	}
}
/*判别元素隐藏*/
function isHide(a){
	a=_(a);
	if(a){
		return (getStyle(a,"display")=="none");
	}
	return false;
}
/*判别元素隐藏*/
function html(e,a){
	e=_(e);
	if(e){
		if(typeof a=="undefined"){
			return e.innerHTML;
		}else {
			e.innerHTML=a;
		}
	}
}
/*获取元素绝对位置*/
function gp(oE){
	var iL = 0, iT = 0;
	var bIsDiv = /^div$/i.test(oE.tagName);
	if (bIsDiv && oE.scrollLeft){
		iL = oE.scrollLeft;
	}
	if (bIsDiv && oE.scrollTop){
		iT = oE.scrollTop;
	}
	var oRs = { x: oE.offsetLeft - iL, y: oE.offsetTop - iT };

	if (oE.offsetParent) {
		var otmp = gp(oE.offsetParent);
		oRs.x += otmp.x;
		oRs.y += otmp.y;
	}
	return oRs;
}
/*设置ie6下拉框隐藏*/
function selectDisable(e){
	if(Browser.IE&&Browser.IE<7){
		oSel=gt(document,"select");
		for(var a=0;a<oSel.length;a++){
			oSel[a].disabled=e;
		}
	}
}
/*设置ie6下拉框显隐*/
function toggleSelect(e){
	if(Browser.IE&&Browser.IE<7){
		e=e||"";
		oSel=gt(document,"select");
		for(var a=0;a<oSel.length;a++){
			if(e){
				show(oSel[a],"");
			}else {
				hide(oSel[a]);
			}
		}
	}
}

/*删除目标字符串两端的空白字符*/
function trim(a){
	a=""+a;
	return a.replace(/(^[\s　]*)|([\s　]*$)/g, "");
}
/*删除目标字符串左端的空白字符*/
function lTrim(a){
	a=""+a;
	return a.replace(/(^[\s　]*)/g, "");
}
/*删除目标字符串右端的空白字符*/
function rTrim(a){
	a=""+a;
	return a.replace(/([\s　]*$)/g, "");
}
/*转义脚本<>&*/
function escapeHTML(a){
	a=""+a;
	return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}
/*还原脚本<>&*/
function unescapeHTML(a){
	a=""+a;
	return a.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");
}
/*字符串长度计算*/
function getLengthCase(e){
  var a=e.length;
  e.replace(/[\u0080-\ufff0]/g,function(){
    a++;
  });
  return a;
}
/*数组相关*/
function arrayRemoveAt(a,e){
	return a.splice(e,1);
}
function arrayRemoveBy(e,h){
	h=h||"";
	var g=[];
	for(var f=0,a=e.length;f<a;f++){
		if(e[f]!=h){
			g.push(e[f]);
		}
	}
	return g;
}
function arrayDistinct(e){
	var h=[];
	if(e.length!=0){
		h[0]=e[0];
		var a=false;
		for(var g=1,k=e.length;g<k;g++){
			a=false;
			for(var f=0,l=h.length;f<l;f++){
				if(equal(e[g],h[f])){
					a=true;
					break ;
				}
			}
			if(!a){
				h.push(e[g]);
			}
		}
	}
  return h;
}
function arrayHas(e,g){
	for(var f=0,a=e.length;f<a;f++){
		if(equal(e[f],g)){
			return f;
		}
	}
	return -1;
}

/*跨浏览器添加事件*/
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
/*跨浏览器删除事件*/
function delEvt(oTarget,sEvtType,fnHandle){
	if(!oTarget){return;}
	if(oTarget.addEventListener){
		oTarget.addEventListener(sEvtType,fnHandle,false);
	}else if(oTarget.attachEvent){
		oTarget.attachEvent("on" + sEvtType,fnHandle);
	}else{
		oTarget["on" + sEvtType] = fnHandle;
	}
};
/*格式化事件对象，将IE事件对象统一成DOM标准对象*/
function fmtEvt(oEvt){
	if(Browser.IE){
		oEvt.charCode = (oEvt.type == "keypress") ? oEvt.keyCode : 0;
		oEvt.eventPhase = 2;
		oEvt.isChar = (oEvt.charCode > 0);
		oEvt.pageX = oEvt.clientX + document.body.scrollLeft;
		oEvt.pageY = oEvt.clientY + document.body.scrollTop;
		oEvt.preventDefault = function(){
			this.returnValue = false;
		};
		if(oEvt.type == "mouseout"){
			oEvt.relatedTarget = oEvt.toElement;
		}else if(oEvt.type == "mouseover"){
			oEvt.relatedTarget = oEvt.fromElement;
		}
		oEvt.stopPropagation = function(){
			this.cancelBubble = true;
		};
		oEvt.target = oEvt.srcElement;
		oEvt.time = (new Date()).getTime();		
	}
	return oEvt;
};
/*跨浏览器获取事件对象事件*/
var getEvt = function(){
	if(window.event){
		return fmtEvt(window.event);
	}else{
		return getEvt.caller.arguments[0];
	}
};

/*获取对象元素类型*/
function getObjectType(a){
	if(Object.prototype.toString.apply(a)==="[object Array]"){
		return "array";
	}
	return (typeof (a));
}
/*判别目标ab是否想等*/
function equal(g,f){
	if(typeof g==typeof f){
		switch(getObjectType(g)){
			case "string":
			case "number":
				return (g==f);
			case "array":
				if(g.length==f.length){
					for(var e=0,a=g.length;e<a;e++){
						if(equal(g[e],f[e])){
							continue ;
						}else {
							return false;
						}
					}
					return true;
				}else {
					return false;
				}
			case "object":
				if(getLength(g)==getLength(f)){
					for(v in g){
						if(equal(g[v],f[v])){
							continue ;
						}else {
							return false;
						}
					}
					return true;
				}else {
					return false;
				}
		}
	}else {
		return false;
	}
}
/*获取数组对象长度*/
function getLength(e){
	switch(getObjectType(e)){
		case "string":
		case "number":
		case "array":
			return e.length;
		case "object":
		var a=0;
		for(v in e){
			if(e.hasOwnProperty(v)){
				a++;
			}
		}
		return a;
	}
	return 0;
}
/*去掉url前缀*/
function removeUrlPrefix(a){
  a=a.replace(/：/g,":").replace(/．/g,".").replace(/／/g,"/");
  while(trim(a).toLowerCase().indexOf("http://")==0){
    a=trim(a.replace(/http:\/\//i,""));
  }
  return a;
}
/*插入wbr*/
function insertWbr(a){
  return String(a).replace(/(?:<[^>]+>)|(?:&[0-9a-z]{2,6};)|(.{1})/g,"$&<wbr>").replace(/><wbr>/g,">");
}

/*随机数时间戳*/
function uniqueId(){
	var a=Math.random,b=parseInt;
	return Number(new Date()).toString()+b(10*a())+b(10*a())+b(10*a());
}
/*dom元素后插入*/
function insertAfter(a,e){
	a.parentNode.insertBefore(e,a.nextSibling);
}
/*动态加载css*/
function loadCss(a){
	var e=ce("link");
	sa(e,"rel","stylesheet");
	sa(e,"type","text/css");
	sa(e,"href",a);
	ap(document.getElementsByTagName("head")[0],e);
}
/*动态加载script*/
function loadScript(e,g){
	var f=ce("SCRIPT"),a=0;
	f.onload=f.onreadystatechange=function(){
	if(a){
	  return ;
	}
	var h=f.readyState;
	if("undefined"==typeof h||h=="loaded"||h=="complete"){
	  a=1;
	  try{
		("function"==typeof g)&&g();
	  }
	  finally{
		if(f&&f.parentNode){
		  f.parentNode.removeChild(f);
		}
		f.onload=f.onreadystatechange=null;
		f=null;
	  }
	}
	};
	sa(f,"type","text/javascript");
	sa(f,"src",e);
	ap(document.getElementsByTagName("head")[0],f);
}
/*获取缓存内容*/
function getCookie(e){
	var f=new RegExp("(^| )"+e+"=([^;]*)(;|$)");
	var a=f.exec(document.cookie);
	if(a){
		return a[2]||null;
	}
	return null;
}
/*设置缓存内容*/
function setCookie(f,g,e){
	e=e||{};
	var a=e.expires;
	if("number"==typeof e.expires){
		a=new Date();
		a.setTime(a.getTime()+e.expires);
	}
	document.cookie=f+"="+g+(e.path?"; path="+e.path:"")+(a?"; expires="+a.toGMTString():"")+(e.domain?"; domain="+e.domain:"")+(e.secure?"; secure":"");
}
/*创建正则表达式creatRegExp*/
function crtReg(sReg){
	try{
		if(arguments.length > 1){
			return new RegExp(sReg,arguments[1]);
		}
		return new RegExp(sReg);
	}catch(e){
		return null;
	}
}
/*全角半角转换,iCase: 0全到半，1半到全，其他不转化*/
function chgCase(sStr,iCase){
	if(typeof sStr != "string" || sStr.length <= 0 || !(iCase === 0 || iCase == 1)){
		return sStr;
	}
	var i,oRs=[],iCode;
	if(iCase){/*半->全*/
		for(i=0; i<sStr.length;i+=1){ 
			iCode = sStr.charCodeAt(i);
			if(iCode == 32){
				iCode = 12288;				
			}else if(iCode < 127){
				iCode += 65248;
			}
			oRs.push(String.fromCharCode(iCode)); 
		}		
	}else{/*全->半*/
		for(i=0; i<sStr.length;i+=1){ 
			iCode = sStr.charCodeAt(i);
			if(iCode == 12288){
				iCode = 32;
			}else if(iCode > 65280 && iCode < 65375){
				iCode -= 65248;				
			}
			oRs.push(String.fromCharCode(iCode)); 
		}		
	}		
	return oRs.join("");		
}
/*确认是否键盘有效输入值*/
function checkKey(iKey){
	if(iKey == 32 || iKey == 229){return true;}/*空格和异常*/
	if(iKey>47 && iKey < 58){return true;}/*数字*/
	if(iKey>64 && iKey < 91){return true;}/*字母*/
	if(iKey>95 && iKey < 108){return true;}/*数字键盘1*/
	if(iKey>108 && iKey < 112){return true;}/*数字键盘2*/
	if(iKey>185 && iKey < 193){return true;}/*符号1*/
	if(iKey>218 && iKey < 223){return true;}/*符号2*/
	return false;
}

/*
 * Ajax调用类
 */
function BzAjax(args) {
    this.url = args.url || "";
    this.params = args.parameters || "";
    this.mime = args.mime || "text/html";
    this.onComplete = args.onComplete || this.defaultOnCompleteFunc;
    this.onLoading= args.onLoading || this.defaultOnLoadingFunc;
    this.onError = args.onError || this.defaultOnErrorFunc;
    this.method = args.method || "post";
    if (typeof(args.sync) == "undefined" || args.sync === null) { 
		this.sync = true;
    } else {
		this.sync = args.sync ? true : false; 
    }
    this.loadData();
}
BzAjax.prototype = {
    READY_STATE_COMPLETE : 4,
    getRequest : function () {
			var funcs = [
			    function() {return new ActiveXObject('Msxml2.XMLHTTP.5.0');},
			    function() {return new ActiveXObject('Msxml2.XMLHTTP.4.0');},
			    function() {return new ActiveXObject('Msxml2.XMLHTTP.3.0');},
			    function() {return new ActiveXObject('Msxml2.XMLHTTP');},
			    function() {return new ActiveXObject('Microsoft.XMLHTTP');},
			    function() {return new XMLHttpRequest();}
			];

			var req = null;
			for (var i = 0; i < funcs.length; i+=1) {
			    var f = funcs[i];
			    try {
						req = f();
						break;
			    } catch (e) {}
			}

			return req || false;
   		},
    parseParams : function () {
			if (typeof (this.params) == "string") {
			    return this.params;
			} else {
			    var oPs = [];
			    try{
				    for (var sP in this.params) {
							oPs.push(sP + "=" + this.params[sP]);
				    }
			    }catch(e){}
			    return oPs.join("&");
			}
    	},
    loadData : function () {
			this.req = this.getRequest();	
			if (this.req) {
	  	  		this.onLoading();
		    	try {
					var loader = this;
					this.req.onreadystatechange = function () {
					    if (loader.req.readyState == loader.READY_STATE_COMPLETE) {
								loader.onComplete.call(loader, loader.req);
					    }
					};
					this.req.open(this.method, this.url, this.sync);		
					if (this.method == "post") {
					    this.req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
					}
					if (this.req.overrideMimeType) {
					    this.req.overrideMimeType(this.mime);
					}
					this.req.send(this.method == "post" ? this.parseParams(this.params) : null);
			    } catch (e) {
					this.onError.call(this, e);
			    }
			}
    	},
    defaultOnCompleteFunc : function () {},
    defaultOnLoadingFunc : function () {},
    defaultOnErrorFunc : function (error) {}
};
BzAjax.get = function(sUrl,fnF,bSyn){
	var oArg = {};
	oArg.url = sUrl;
	if(typeof fnF == "function"){
		oArg.onComplete = fnF;		
	}	
	if(typeof bSyn == "boolean"){
		oArg.sync = bSyn;		
	}
	oArg.method = "get";
	new BzAjax(oArg);
};
BzAjax.post = function(sUrl,xParas,fnF,bSyn){
	var oArg = {};
	oArg.url = sUrl;
	if(typeof fnF == "function"){
		oArg.onComplete = fnF;		
	}
	oArg.parameters = xParas;
	if(typeof bSyn == "boolean"){
		oArg.sync = bSyn;		
	}
	oArg.method = "post";
	new BzAjax(oArg);
};
/*根据输入的form元素组装参数*/
BzAjax.assemPara = function(oForm){
	var oP = [],oIn;
	try{
		for(var i=0;i<oForm.length;i+=1){
			oIn = oForm[i];
			if(oIn.name !== "" && oIn.name !== null){
				oP.push(oIn.name + "=" + oIn.value);			
			}
		}
	}catch(e){}
	return oP.join("&");
};
/*提交form,传入表单,回调函数和附加参数*/
BzAjax.postForm = function(oForm,fnF,bSyn){
	var oArg = {};
	oArg.url = oForm.action;
	oArg.parameters = BzAjax.assemPara(oForm);
	if(typeof fnF == "function"){
		oArg.onComplete = fnF;		
	}	
	if(typeof bSyn == "boolean"){
		oArg.sync = bSyn;		
	}	
	oArg.method = "post";
	new BzAjax(oArg);
};