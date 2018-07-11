/*
 *	summary: bizdev部门专用js库，主要统一解决表单验证问题和通用调用方法集成，所有对象使用Bz前缀
 *  作者： 李剑 lijian@sohu-rd.com
 */
/*系统配置和常量汇总，方便维护*/
Bz = {};
Bz.REG = "bzReg";/*boolean 表单是否使用本库*/
Bz.SUB = "bzSub";/*提交时是否校验*/
Bz.QUERY = "bzQuery";/*boolean 提交表单时是否确认*/
Bz.QUERYSTR = "确认提交么？";/*string 提交表单时确认用语*/
Bz.NAME = "bzName";/*元素描述，用户生成提示*/
Bz.VALIDE = "bzValid";/*boolean是否参加统一校验,false不参与*/
Bz.NULL = "bzNull";/*元素输入是否可以为空*/
Bz.NULLVALUE = "bzNullValue";/*指定空值*/
Bz.IDPER = "bz_";/*id前缀*/
Bz.TYPE = "bzType";/*元素输入类型：number,float,string...*/
	Bz.TYPE_NUMBER = "number";
	Bz.TYPE_INT = "int";
	Bz.TYPE_FLOAT = "float";
	Bz.TYPE_STRING = "string";
	Bz.TYPE_EMAIL = "email";
	Bz.TYPE_IDCARD = "idcard";	
	Bz.TYPE_URL = "url";
	Bz.TYPE_TEXT = "text";
	Bz.TYPE_DATE = "date";
	Bz.TYPE_KEY = "KEY";
	Bz.TYPE_PWD = "pwd";
Bz.MAX = "bzMax";/*最大数值*/
Bz.MIN = "bzMin";/*最小数值*/
Bz.DIGIT = "bzDigit"; /*浮点小数位数*/
Bz.MAXLEN = "bzMaxLen";/*允许的最大长度*/
Bz.MINLEN = "bzMinLen";/*允许的最小长度*/
Bz.CODE = "bzCode";/*编码计算方式*/
	Bz.CODE_ONE = "1";/*汉字按一个字节计算*/
	Bz.CODE_TWO = "2";/*汉字按两个字节计算*/
Bz.BCCASE = "bzCase";
	Bz.BCCASE_D = "0";
	Bz.BCCASE_s = "1";
Bz.REPLACE = "bzReplace";
Bz.REPLACEV = "bzReplaceValue";
Bz.EQUAL = "bzEqual";/*关联对象，与某个对象的取值一致*/
Bz.FORM = "bzForm";/*所属的form名*/
Bz.CONTROL = "bzControl";/*元素输入控制类型：i(input)c(change)*/
	Bz.CONTROL_INPUT = "i";
	Bz.CONTROL_CHANGE = "c";
Bz.BOX = "bzBox"; 
Bz.ALLOW = "bzAllow";/*禁止出现的字母*/
Bz.REFUSE = "bzRefuse";/*允许出现的字母*/
Bz.MAXLINE = "bzMaxLine";/*文本域允许输入的最大行数*/
Bz.LENCOUNTER = "bzLenCt";/*文本域字数计数区*/
Bz.LENCOUNTERSEQ = "bzLenCtSeq";/*文本域字数计数的方式*/
	Bz.LENCOUNTERSEQ_O = "1";/*倒序的，其他顺续*/
Bz.LINECOUNTER = "bzLineCt";/*文本域行数计数区*/
Bz.LINECOUNTERSEQ = "bzLineSeq";/*文本域行数计数的方式*/
	Bz.LINECOUNTERSEQ_O = "1";/*倒序的，其他顺续*/
Bz.LINELEN = "bzLineLen";/*每行的最大长度*/
Bz.NULLLINE = "bzNullLine";/*boolean,是否允许空行*/
Bz.REPEATLINE = "bzRepeatLine";/*boolean,是否允许重复行*/
Bz.SPACE = "bzSpace";/*是否删除每行首尾空格*/
Bz.DT_INPUT = "bzInput";/*时间输入方式，默认手写加控件*/
	Bz.DT_INPUT_D = "mw";/*默认值*/
	Bz.DT_INPUT_M = "m";/*手写*/
	Bz.DT_INPUT_W = "w";/*控件*/
Bz.DT_BUTTON = "bzButton";/*触发按钮的时候有效，不允许手动输入时间时必须声明*/
Bz.DT_START = "bzStart";/*允许输入的起始时间*/
	Bz.DT_START_D = 1900;/*默认开始时间*/
Bz.DT_END = "bzEnd";/*允许输入的终止时间*/
	Bz.DT_END_D = 2099;/*默认结束时间*/
Bz.DT_FORMAT = "bzFormat";/*时间格式*/
	Bz.DT_FORMAT_D = "%Y-%m-%d";/*默认时间格式*/
Bz.DT_TIME = "bzTime";/*boolean 是否输入时间，默认false*/
Bz.DT_TIMEFMT = "bzTimeFmt";/*时间格式，12或24，默认24*/
Bz.DT_BEHIND = "bzBehind";/*晚于的对象名称*/
Bz.DT_DEFAULT = "bzDefault";
	Bz.DT_DEFAULT_N = "now";
	Bz.DT_DEFAULT_Y = "yst";
Bz.REGEXP = "bzRegExp";/*元素校验规则描述，正则表达式*/
	Bz.REG_NUMBER = /^\d+[\u0000-\u0020\u007F-\u00A0]*$/; /*数字*/
	Bz.REG_NUMBER2 = /^\d*/; /*数字，用于动态校验，以下同*/
	Bz.REG_INT = /^-?\d+$/; /*整数*/
	Bz.REG_INT2 = /^-?\d*/;
	Bz.REG_FLOAT = /^(-?\d+)(\.\d+)?$/;/*浮点数*/
	Bz.REG_FLOAT2 = /^-?\d+(\.\d*)?|-?/;
	Bz.REG_STRING = /^[^\r\n<>]+$/;/*字符串,除换行和回车外的任意字符*/
	Bz.REG_STRING2 = /^[^\r\n<>]*/;
	Bz.REG_WORD = /^[a-zA-Z]\w*$/;/*单词字符，所有字母、数字和下划线,必须用字母打头*/
	Bz.REG_WORD2 = /^[a-zA-Z]\w*/;
	Bz.REG_EMAIL = /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/i;/*email格式*/
	Bz.REG_EMAIL2 = /^([a-zA-Z0-9_-]+\.)*([a-zA-Z0-9_-]+(@([a-zA-Z0-9_-]+((\.[a-zA-Z0-9_-]+)*(\.)?)?)?)?)?/i;
	Bz.REG_IDCARD = /^\d{0,17}[\dx]$/;/*身份证*/
	Bz.REG_IDCARD2 = /^\d{1,17}([\dx])?/;
	Bz.REG_URL = /^https?:\/\/([\w-\|@]+\.)+[\w-\|@]+(:\d+)?(\/[^\s\?#]+)*([\/#\?\\].*)?$/i;/*URL*/
	Bz.REG_URL2 = /^h(t{1,2}(p(s?(:(\/{1,2}(([\w-\|@]+\.)*([\w-\|@]+((:\d+([\/#\?\\](.*)?)?)|([\/#\?\\](.*)?)|:)?)?)?)?)?)?)?)?/i;/*首部分检验*/
	Bz.REG_URL_1 = /^https?:\/\/.*$/i;/*校验url开头时使用*/
	Bz.REG_URL_2 = /^https?:\/\/(([a-zA-Z0-9\|@-])+\.)*[a-zA-Z0-9\|@-]+:\d+/i;/*校验url端口号时使用，获取端口号*/
	Bz.REG_URL_3 = /^https?:\/\/(([a-zA-Z0-9\|@-])+\.)*[a-zA-Z0-9\|@-]+:/i;/*校验url端口号时使用,获取端口号*/
	Bz.REG_TEXT = /^[\s\S]*$/;/*任意字符*/
	Bz.REG_TEXT2 = /^[\s\S]+/;
	Bz.REG_CHINESE = /[\u4E00-\u9FA5]*/;/*中文*/
	Bz.REG_CODE = /[^\x00-\xff]/g;/*编码长度为2的字符，包括汉字以及全角*/
	Bz.REG_MOBILE = /^0?1((3\d)|(59)){1}[0-9]{8}$/; /*手机号码*/
	Bz.REG_TEL = /^(0[\d]{2,3}-?)?\d{6,8}(-\d{3,4})?$/; /*电话号码*/ 
	Bz.REG_PWD = /^[a-zA-Z0-9-_]+$/;/*用户密码*/
	Bz.REG_PWD2 = /^[a-zA-Z0-9-_]*/;
/*提示语以及默认提示语定义*/
Bz.NT_NOTNULL = "bzNullNt";
Bz.NT_NOTNULL_D = "对不起，#0#必须输入！";
Bz.NT_INVALID = "bzValidNt";/*效验失败提示语*/
Bz.NT_INVALID_D = "对不起，#0#输入非法！";
Bz.NT_MAXLEN = "bzMaxLenNt";
Bz.NT_MAXLEN_D = "对不起，#0#不能超过长度#1#！";
Bz.NT_MINLEN = "bzMinLenNt";
Bz.NT_MINLEN_D = "对不起，#0#不能小于长度#1#！";
Bz.NT_MINLEN = "bzMinLenNt";
Bz.NT_MINLEN_D = "对不起，#0#不能小于长度#1#！";
Bz.NT_EQUAL = "bzEqualNt";
Bz.NT_EQUAL_D = "对不起，#0#必须和#1#一致！";
Bz.NT_MAX = "bzMaxNt";
Bz.NT_MAX_D = "对不起，#0#不能超过最大值#1#！";
Bz.NT_MIN = "bzMinNt";
Bz.NT_MIN_D = "对不起，#0#不能低于最小值#1#！";
Bz.NT_START = "bzStartNt";
Bz.NT_START_D = "对不起，#0#不能在#1#年之前！";
Bz.NT_END = "bzEndNt";
Bz.NT_END_D = "对不起，#0#不能在#1#年之后！";
Bz.NT_BEHIND = "bzBehindNt";
Bz.NT_BEHIND_D = "对不起，#0#必须大于#1#！";
Bz.NT_MAXLINE = "bzMaxLineNt";
Bz.NT_MAXLINE_D = "对不起，#0#的行数不能超过最大行#1#！";
Bz.NT_MINLINE = "bzMinLineNt";
Bz.NT_MINLINE_D = "对不起，#0#的行数不能低于最小行#1#！";
Bz.NT_NULLLINE = "bzNullLineNt";
Bz.NT_NULLLINE_D = "对不起，#0#不能有空行！";
Bz.NT_REPEATLINE = "bzRepeatLineNt";
Bz.NT_REPEATLINE_D = "对不起，#0#不能有重复行！";
Bz.NT_LINELEN = "bzLineLenNt";
Bz.NT_LINELEN_D = "对不起，#0#第#1#行超过最大长度#2#！";

/*新增String对象各种方法*/
String.prototype.trim = function() {
	return this.replace(/(^[\s　]*)|([\s　]*$)/g, "");
};
String.prototype.lTrim = function() {
	return this.replace(/(^[\s　]*)/g, "");
};
String.prototype.rTrim = function() {
	return this.replace(/([\s　]*$)/g, "");
};
String.prototype.startWith = function(sStr){
	if(this.indexOf(sStr) === 0){
		return true;
	}
	return false;
};
String.prototype.codeLength = function(){
	return this.replace(Bz.REG_CODE,"aa").length;
};
//替换全部
String.prototype.replaceAll  = function(s1,s2){    
	return this.replace(new RegExp(s1,"gm"),s2);    
}  


/*跑龙套BizUtil*/
BzUtl = {};
/*判断是否浏览器*/
BzUtl.isIE = function(){
	var sUserAgt = navigator.userAgent;
	var isOpera = sUserAgt.indexOf("Opera") > -1;
	return sUserAgt.indexOf("compatible") > -1 && sUserAgt.indexOf("MSIE") > -1	&& !isOpera;
};
/*是否IE浏览器标识*/
BzUtl.IE = BzUtl.isIE();
/*统一根据id获取元素对象*/ 
BzUtl.$ = function(sId){
	try{
		return document.getElementById(sId);
	}catch(e){
		return null;
	}
};
/*根据name获取元素对象*/
BzUtl.$n = function(sName){
	try{
		return document.getElementsByName(sName)[0];
	}catch(e){
		return null;
	}
};
/*统一根据name获取Form元素对象*/
BzUtl.$f = function(sName){
	try{
		return document.forms[sName];
	}catch(e){
		return null;
	}
};
/*统一根据name获取指定Form元素的输入框对象*/
BzUtl.$fi = function(xF,sName){
	try{
		if(typeof xF == "string"){
			return (BzUtl.$f(xF))[sName];
		}else{
			return xF[sName];
		}		
	}catch(e){
		return null;
	}
};
/*创建元素,sType,oParent*/
BzUtl.crtE = function(sType,oP){
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
BzUtl.delE = function(oE,oP){
	try{
		oP.removeChild(oE);
	}catch(e){}
	return oE;	
};
/*跨浏览器添加事件*/
BzUtl.addEvt = function(oTarget,sEvtType,fnHandle){
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
BzUtl.delEvt = function(oTarget,sEvtType,fnHandle){
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
BzUtl.fmtEvt = function(oEvt){
	if(BzUtl.IE){
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
BzUtl.getEvt = function(){
	if(window.event){
		return BzUtl.fmtEvt(window.event);
	}else{
		return BzUtl.getEvt.caller.arguments[0];
	}
};
/*获取元素绝对位置,getPosition*/
BzUtl.getPst = function(oE){
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
		var otmp = BzUtl.getPst(oE.offsetParent);
		oRs.x += otmp.x;
		oRs.y += otmp.y;
	}
	return oRs;
}; 
/*获取元素的属性*/
BzUtl.getAttr = function(oE,sAttr){
	try{
		var rs = oE.getAttribute(sAttr);
		if(typeof rs == "object" && BzUtl.isIE()){
			rs = BzUtl.getAttrForIE(oE,sAttr);
		}
		rs = (rs === null)?"" : rs;
		return rs;		
	}catch(e){
		return "";
	}
};
/*为IE浏览器获取属性，解决IE浏览器的无奈*/
BzUtl.getAttrForIE = function(oE,sAttr){
	if(oE === null){
		return "";
	}
	sAttr = sAttr.trim();
	try{
		var tagNm = oE.tagName;
		var html = oE.outerHTML;			
		var regStr = "<"+tagNm+"[^>]* "+sAttr+"=[^ ]*";
		var reg = BzUtl.crtReg(regStr,"i");
		var rs = html.match(reg);
		if(rs !== null){
			var tmpStr = rs[0];
			regStr = sAttr + "=[^ ]*";
			reg = BzUtl.crtReg(regStr,"i");
			rs = tmpStr.match(reg);
			if(rs !== null){
				return rs[0].replace(sAttr+"=","");
			}				
		}			
	}catch(e){
		/*do nothing*/
	}
	return "";
};
/*设置元素属性*/
BzUtl.setAttr = function(oE,sAttr,sValue){
	if(!oE){return;}	
	oE.setAttribute(sAttr,sValue);
};
/*设置元素样式*/
BzUtl.setStyle = function(oE,sStyle,sValue){
	if(!oE){return;}
	oE.style[sStyle] = sValue;	
};
/*提示消息*/
BzUtl.alert = function(sNotice){
	window.alert(sNotice);
};
/*确认信息*/
BzUtl.confirm = function(sNotice){
	return window.confirm(sNotice);
};
/*焦点事件*/
BzUtl.focus = function(oE){
	oE.focus();
};
/*创建正则表达式creatRegExp*/
BzUtl.crtReg = function(sReg){
	try{
		if(arguments.length > 1){
			return new RegExp(sReg,arguments[1]);
		}
		return new RegExp(sReg);
	}catch(e){
		return null;
	}
};
/*禁用元素*/
BzUtl.disable = function(oE){
	try{
		oE.disabled = true;
	}catch(e){
	}
};	
/*只读元素*/
BzUtl.readonly = function(oE){
	try{
		oE.readOnly = true;		
	}catch(e){
	}
};
/*全角半角转换,iCase: 0全到半，1半到全，其他不转化*/
BzUtl.chgCase = function(sStr,iCase){
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
};
BzUtl.isMonthEnd = function (){
	var oDt = new Date();
	var iDay = oDt.getDate();
	var iMon = oDt.getMonth();
	var iYear = oDt.getFullYear();
	switch(iDay){
		case 31:return true;
		case 30:return iMon == 4 || iMon == 6 || iMon == 9 || iMon == 11;
		case 29:return iMon == 2;
		case 28:return iMon == 2 && !((iYear % 400 === 0)||(iYear % 4 === 0)&&(iYear % 100 !== 0));
		default:return false;			 
	}		
};	
/*确认是否键盘有效输入值*/
BzUtl.checkKey = function(iKey){
	if(iKey == 32 || iKey == 229){return true;}/*空格和异常*/
	if(iKey>47 && iKey < 58){return true;}/*数字*/
	if(iKey>64 && iKey < 91){return true;}/*字母*/
	if(iKey>95 && iKey < 108){return true;}/*数字键盘1*/
	if(iKey>108 && iKey < 112){return true;}/*数字键盘2*/
	if(iKey>185 && iKey < 193){return true;}/*符号1*/
	if(iKey>218 && iKey < 223){return true;}/*符号2*/
	return false;
};

/*表单设置对象,用于使用js配置form中的各种属性*/
BzFmReg = function(sName){
	this.oF = BzUtl.$f(sName);
	if(this.oF !== null){
		try{
			BzUtl.setAttr(this.oF,Bz.REG,"true");
			if(arguments.length>1){
				if(arguments[1] === true){
					BzUtl.setAttr(this.oF,Bz.QUERY,"true");
				}
			} 
			if(arguments.length>2){
				if(arguments[2] === false){
					BzUtl.setAttr(this.oF,Bz.SUB,"false");
				}
			} 			
		}catch(e){
			/*do nothing*/		
		}
	}
};
/*配置表单中元素的各种属性*/
BzFmReg.prototype.set = function(sName,sAttr,sValue){
	if(this.oF === null){return;}
	var oIn = BzUtl.$fi(this.oF,sName);
	if(oIn !== null){
		try{
			BzUtl.setAttr(oIn,sAttr,sValue); 
		}catch(e){
			/*不提示错误，什么也不做*/			
		}
	}	
};

/*表单处理对象*/
BzForm = {};
/*初始化页面中的form*/
BzForm.init = function(){
	var oForms = document.forms;
	var oForm;
	for(var i=0;i<oForms.length;i+=1){
		oForm = oForms[i];
		if(BzUtl.getAttr(oForm,Bz.REG) == "true"){
			BzForm.reg(oForm);
		}
	}
};
/*为form注册事件*/
BzForm.reg = function(oForm){
	BzUtl.addEvt(oForm,"submit",BzForm.sub);
	BzUtl.setStyle(oForm,"display","block");
	/*依次注册各个输入框事件*/
	for(var i=0;i<oForm.length;i+=1){
		BzForm.regInput(oForm,oForm[i]);			
	}
};
/*为各个输入框注册事件，实现输入时动态校验和输入完单个输入框时校验*/
BzForm.regInput = function(oF,oE){
	if(!oE){return;}
	var sCtrl = BzUtl.getAttr(oE,Bz.CONTROL);/*sControl控制参数*/
	BzUtl.addEvt(oE,"keydown",BzForm.keyDown);/*防变态提交*/	
	if(sCtrl.indexOf(Bz.CONTROL_INPUT)>-1){
		BzUtl.addEvt(oE,"keyup",BzForm.input);
		/*分浏览器添加输入动态控制事件*/
		if(BzUtl.IE){
			/*IE浏览器*/
			//BzUtl.addEvt(oE,"afterUpdate",BzForm.input);
			BzUtl.addEvt(oE,"paste",BzForm.inputForIE);	
		}else{
			/*FireFox浏览器*/
			BzUtl.addEvt(oE,"input",BzForm.input);
		}		
	}
	if(sCtrl.indexOf(Bz.CONTROL_CHANGE)>-1){
		/*添加单个输入框输入时校验*/
		BzUtl.addEvt(oE,"blur",BzForm.change);
	}
	/*如果是时间，初始化其时间控件*/
	var sType = BzUtl.getAttr(oE,Bz.TYPE);
	if(sType == Bz.TYPE_DATE){
		try{
			var sInput = BzUtl.getAttr(oE,Bz.DT_INPUT);
			sInput = (sInput === "")?Bz.DT_INPUT_D:sInput;
			if(sInput.indexOf(Bz.DT_INPUT_W) > -1){
				/*需要初始化控件*/
				var sId = Bz.IDPER + BzUtl.getAttr(oE,"name");
				BzUtl.setAttr(oE,"id",sId);/*设置id*/
				var oSetup = new Object();/*配置对象*/
				/*设置显示框*/	
				oSetup["inputField"] = sId;	
				 /*设置触发按钮*/
				var sButton = BzUtl.getAttr(oE,Bz.DT_BUTTON);
				if(sButton !== ""){
					oSetup["button"] = sButton;	
					oSetup["align"] = "Bl";			
				}else{
					/*没有button,禁用自动填充，避免firefox报错的bug*/
					BzUtl.setAttr(oE,"autocomplete","off");
				}
				/*设置日期格式*/
				var sFmt = BzUtl.getAttr(oE,Bz.DT_FORMAT);
				sFmt = (sFmt !== "")?sFmt:Bz.DT_FORMAT_D;
				oSetup["ifFormat"] = sFmt;	
				/*设置起止时间*/
				var sStart = BzUtl.getAttr(oE,Bz.DT_START),iStart;
				iStart = Number(sStart);
				if(sStart === "" || isNaN(iStart)){
					iStart = Bz.DT_START_D;
				}				
				var sEnd = BzUtl.getAttr(oE,Bz.DT_END),iEnd;	
				iEnd = Number(sEnd);
				if(sEnd === "" || isNaN(iEnd)){
					iEnd = Bz.DT_END_D;
				}					
				oSetup["range"] = [iStart,iEnd];	
				/*设置是否显示时间*/
				if(BzUtl.getAttr(oE,Bz.DT_TIME) == "true"){
					oSetup["showsTime"] = true;	
				}
				/*设置显示时间格式*/
				if(BzUtl.getAttr(oE,Bz.DT_TIMEFMT) == "12"){
					oSetup["timeFormat"] = 12;	
				}else{
					oSetup["timeFormat"] = 24;	
				}				
				Calendar.setup(oSetup);	
				/*初始化默认时间*/
				if(oE.value === "" || oE.value === null){
					var sDef = BzUtl.getAttr(oE,Bz.DT_DEFAULT);
					if(sDef == Bz.DT_DEFAULT_N || sDef == Bz.DT_DEFAULT_Y ){
							var oDt = new Date();
							if(sDef == Bz.DT_DEFAULT_Y ){
								var iTmp = oDt - 24*60*60*1000;
								oDt.setTime(iTmp);								
							}
							sDef = sFmt;
							var sYear = "" + oDt.getFullYear();
							var sSYear = "" + (oDt.getFullYear()%100);
							var iMonth = oDt.getMonth()+1,sMonth;
							if(iMonth < 10){
								sMonth = "0" + iMonth;
							}else{
								sMonth = "" + iMonth;
							}
							var iDay = oDt.getDate(),sDay;
							if(iDay < 10){
								sDay = "0" + iDay;
							}else{
								sDay = "" + iDay;
							}
							var iHour = oDt.getHours(),sHour;
							if(iHour < 10){
								sHour = "0" + iHour;
							}else{
								sHour = "" + iHour;
							}
							var iMin = oDt.getMinutes(),sMin;
							if(iMin < 10){
								sMin = "0" + iMin;
							}else{
								sMin = "" + iMin;
							}
							sDef = sDef.replace(/%Y/g,sYear);
							sDef = sDef.replace(/%y/g,sSYear);
							sDef = sDef.replace(/%m/g,sMonth);
							sDef = sDef.replace(/%d/g,sDay);
							sDef = sDef.replace(/%H/g,sHour);
							sDef = sDef.replace(/%M/g,sMin);							
					}
					if(sDef !== ""){
							oE.value = sDef;
					}			
				}												
			}
			if(sInput.indexOf(Bz.DT_INPUT_M) == -1){
				/*禁用输入框*/
				BzUtl.readonly(oE);				
			}								
		}catch(e){
			//do nothing		
		}
	}
	/*如果是text类型，初始化其可能的计数器*/
	if(sType == Bz.TYPE_TEXT){
		var oBzIn = BzInFactory.create(oE);		
		
		/*如果不允许重复行，添加离开删除事件,20080325添加,
		  但是下午又注销不要这种功能了：（
		if(BzUtl.getAttr(oE,Bz.REPEATLINE) == "false"){
			BzUtl.addEvt(oE,"blur",BzForm.blur);
		}
		*/		
	}
	/*如果有bzEqual或者bzBehind属性，设置其form属性*/
	if(BzUtl.getAttr(oE,Bz.EQUAL) !== "" || BzUtl.getAttr(oE,Bz.DT_BEHIND) !== ""){
		BzUtl.setAttr(oE,Bz.FORM,BzUtl.getAttr(oF,"name"));
	}
};

/*处理提交事件,提供给js调用*/
BzForm.submit = function(oF){
	var sNotice = BzForm.valid(oF);/*表单校验结果*/		
	if(sNotice !== ""){
		BzUtl.alert(sNotice);
		return;	
	}
	if(BzUtl.getAttr(oF,Bz.QUERY) == "true"){
		if(!BzUtl.confirm(Bz.QUERYSTR)){
			return;			
		}
	}
	oF.submit();		
};
BzForm.sub = function(){
	var oEvt = BzUtl.getEvt();
	var oForm = oEvt.target;
	if(BzUtl.getAttr(oForm,Bz.SUB) == "false"){/*判断是否校验*/
		return;
	}
	var sNotice = BzForm.valid(oForm);/*表单校验结果*/		
	if(sNotice !== ""){
		oEvt.preventDefault();
		BzUtl.alert(sNotice);
	}else{
		if(BzUtl.getAttr(oForm,Bz.QUERY) == "true"){
			if(!BzUtl.confirm(Bz.QUERYSTR)){
				oEvt.preventDefault();
			}
		}
	}	
};
/*提交时依次校验表单中的各个元素*/
BzForm.valid = function(oForm){
	var oRs = [],sRs;/*表单校验结果*/	
	var oBzIn;/*oBzIn对象*/
	for(var i=0;i<oForm.length;i+=1){
		oE = oForm[i];
		if(oE.value !== null){
			oE.value = oE.value.trim();
		}
		if(BzUtl.getAttr(oE,Bz.VALIDE) != "false"){
			oBzIn = BzInFactory.create(oE);
			if(oBzIn !== null){
				sRs = oBzIn.valid();
				BzForm.notice(oE,sRs);	
				if(sRs !== ""){
					oRs.push(sRs);	
				}
			}	
		}		
	}	
	return oRs.join("\n");
};
/*单个校验某个元素*/
BzForm.validE = function(oE){
	try{
		if(oE.value !== null){
			oE.value = oE.value.trim();
		}
		var oBzIn = BzInFactory.create(oE);
		if(oBzIn !== null){
			return oBzIn.valid();
		}
		return "";
	}catch(e){
		return "";
	}
};
/*IE复制粘贴事件处理*/
BzForm.inputForIE = function(){
	var oEvt = BzUtl.getEvt();
	if(oEvt === null){
		return;
	}
	if(oEvt.ctrlKey){
		/*键盘复制粘贴通过onkeyup校验*/
		return;
	}else{
		/*不是键盘操作，将粘贴内容和原内容合并*/		
		/*
		var pasteData = clipboardData.getData('Text');
		if(pasteData !== null){
			try{
				var oE = oEvt.target;
				log(oE.value);
				oE.value += "" + pasteData;				
			}catch(e){
			}
		}
		oEvt.preventDefault();//停止粘贴事件
		//继续调用输入验证
		BzForm.input(arguments);		
		*/
		/*换种方式实现*/
		var oE = oEvt.target;
		
		window.setTimeout(
			function(){
				var oBzIn = BzInFactory.create(oE);
				if(oBzIn !== null){
					oBzIn.limit();		
				}
				/*动态校验*/
				BzForm.chgValid(oE);
			}
		);	
	}	
};
/*表单输入框输入时动态校验*/
BzForm.input = function(){
	var oEvt = BzUtl.getEvt();
	if(oEvt === null){
		return;
	}
	/*判断是否是操作输入*/
	var iCode = oEvt.keyCode;
	if(iCode !== null && iCode !== undefined && iCode !== ""){
		if(iCode > 32 && iCode < 41){
			return;
		}		
	}	
	var oE = oEvt.target;
	var oBzIn = BzInFactory.create(oE);
		
	if(oBzIn !== null){
		oBzIn.limit();		
	}
	/*动态校验*/
	BzForm.chgValid(oE);
};
/*表单输入框输入完时单个校验*/
BzForm.change = function(){
	var oEvt = BzUtl.getEvt();
	var oE = oEvt.target;
	BzForm.chgValid(oE);
};
/*输入时校验表单，即时输出提示语*/
BzForm.chgValid = function(oE){
	if(BzUtl.getAttr(oE,Bz.CONTROL).indexOf(Bz.CONTROL_CHANGE) < 0){
		return;
	}
	var oBzIn = BzInFactory.create(oE);
	if(oBzIn !== null){
		BzForm.notice(oE,oBzIn.chgValid());	
	}	
};

/*为文本框提供的离开时删除重复行的事件*/
BzForm.blur = function(){
	var oEvt = BzUtl.getEvt();
	var oE = oEvt.target;
	var oBzIn = BzInFactory.create(oE);
	oBzIn.delRepeatLine();
};

/*防止变态超长提交*/
BzForm.keyDown = function(){
	return;
	/**取消此功能20080326
	var oEvt = BzUtl.getEvt();
	var iKey = oEvt.keyCode;
	var oE = oEvt.target;
	var oBzIn = BzInFactory.create(oE);
	if(oBzIn !== null && oBzIn.isMaxLen() && BzUtl.checkKey(iKey)){
		oEvt.preventDefault();
	}
	*/	
};
/*在校验输入框后面显示校验结果,oE:输入框元素，sRs校验结果*/
BzForm.NTID = "bzNt_";/*生成id常量*/
BzForm.notice = function(oE,sRs){
	if(BzUtl.getAttr(oE,Bz.CONTROL).indexOf(Bz.CONTROL_CHANGE) < 0){
		return;
	}
	/*计算id，获取输入框*/
	var sId = BzForm.NTID + BzUtl.getAttr(oE,"name").trim();
	var oDiv = BzUtl.$(sId);
	var box = BzUtl.getAttr(oE,Bz.BOX);
	if(null == box || "" == box || null == BzUtl.$(box)){
		if(sRs === ""){
			if(oDiv !== null){/*通过校验，如果有则删除提示框*/
				BzUtl.delE(oDiv,document.body);
			}
		}else{		
			if(oDiv === null){
				oDiv = BzUtl.crtE("div",document.body);
				oDiv.id = sId;
				oDiv.className = "bzNotice";
				var oSt = oDiv.style;/*oStyle对象*/
				var oP = BzUtl.getPst(oE);
				oSt.width = "400px";
				oSt.top  = oP.y  + "px";
				oSt.left  = oP.x + oE.offsetWidth + 2 + "px";			
			}
			oDiv.innerHTML = sRs.replace(/\n/g,"; ");
		}
	}else{
		oBox = BzUtl.$(box);		
		if(sRs === ""){
			oBox.innerHTML = "";
			BzUtl.setStyle(oBox, "color", "#000000");
			BzUtl.setStyle(oBox, "visibility", "hidden");
		}else{		
			oBox.innerHTML = "";
			sRs = sRs.replace("对不起，", "");
			oBox.innerHTML = sRs.replace(/\n/g,"; ");
			BzUtl.setStyle(oBox, "color", "red");
			BzUtl.setStyle(oBox, "visibility", "");
		}				
	}
	
};

/*
 * 表单元素处理对象
 * 采用面向对象的方法设计，此为基类
 */
BzIn = function(_oE){
	if(!_oE){
		return;
	}
	this.oE = _oE;/*DOM节点*/	
	this.sValue = this.oE.value;/*输入的值*/
	this.sName = "\"" + BzUtl.getAttr(this.oE,Bz.NAME) + "\" ";/*提示用到的输入框名称*/
	this.oReg = null;/*合法校验用到的正则表达式*/
	this.oReg2 = null;/*输入时合法校验用到的正则表达式*/
	this.setReg();
	this.setReg2();	
	this.iMaxLen = null;
	this.iMinLen = null;
	this.sCode = null;
	this.setLen();
	this.chkCase();
	this.replace();
};
/*转换全角半角*/
BzIn.prototype.chkCase = function(){
	var sCase = BzUtl.getAttr(this.oE,Bz.BCCASE);
	if(sCase == Bz.BCCASE_D){
		this.setValue(BzUtl.chgCase(this.sValue,0));
	}else if(sCase == Bz.BCCASE_S){
		this.setValue(BzUtl.chgCase(this.sValue,1));
	}
};
/*自动替换字符*/
BzIn.prototype.replace = function(){
	var sRep = BzUtl.getAttr(this.oE,Bz.REPLACE);
	var sV = BzUtl.getAttr(this.oE,Bz.REPLACEV);
	var oReg = BzUtl.crtReg(sRep,"g");
	if(sRep !== "" && oReg !== null){
		this.setValue(this.sValue.replace(oReg,sV));
	}
};
/*设置最大最短长度*/
BzIn.prototype.setLen = function(){
	var sMaxLen = BzUtl.getAttr(this.oE,Bz.MAXLEN);	
	if(sMaxLen !== "" && !isNaN(Number(sMaxLen))){
		this.iMaxLen = Number(sMaxLen);
	}
	var sMinLen = BzUtl.getAttr(this.oE,Bz.MINLEN);
	if(sMinLen !== "" && !isNaN(Number(sMinLen))){
		this.iMinLen = Number(sMinLen);
	}
	/*设置编码长度计算类型*/
	var sCode = BzUtl.getAttr(this.oE,Bz.CODE);
	if(sCode == Bz.CODE_TWO){
		this.sCode = Bz.CODE_TWO;
	}else{
		this.sCode = Bz.CODE_ONE;
	}
	
};
/*设置规则正则表达式，先取指定的，再取子类getReg方法的*/
BzIn.prototype.setReg = function(){
	var sReg = BzUtl.getAttr(this.oE,Bz.REGEXP);
	if(sReg !== ""){
		this.oReg = BzUtl.crtReg(sReg);
	}else{
		var oRs = ["^["];/*用于拼写组装正则表达式*/
		var sAllow = BzUtl.getAttr(this.oE,Bz.ALLOW);
		if(sAllow !== ""){
			/*允许输入的字符范围*/
			oRs.push(sAllow);
		}else{
			var sRefuse = BzUtl.getAttr(this.oE,Bz.REFUSE);
			if(sRefuse !== ""){
				/*不允许输入的字符范围*/
				oRs.push("^");
				oRs.push(sRefuse);
			}else{
				/*没有设置，取子类getReg2方法值*/
				this.oReg = this.getReg();
				return;
			}
		}
		oRs.push("]+$");
		this.oReg = BzUtl.crtReg(oRs.join(""));	
	}	
};
/*设置动态校验规则正则表达式，先取指定的，再取子类getReg2方法的*/
BzIn.prototype.setReg2 = function(){
	var oRs = ["^["];/*用于拼写组装正则表达式*/
	var sAllow = BzUtl.getAttr(this.oE,Bz.ALLOW);
	if(sAllow !== ""){
		/*允许输入的字符范围*/
		oRs.push(sAllow);
	}else{
		var sRefuse = BzUtl.getAttr(this.oE,Bz.REFUSE);
		if(sRefuse !== ""){
			/*不允许输入的字符范围*/
			oRs.push("^");
			oRs.push(sRefuse);
		}else{
			/*没有设置，取子类getReg2方法值*/
			this.oReg2 = this.getReg2();
			return;
		}
	}
	oRs.push("]*");
	this.oReg2 = BzUtl.crtReg(oRs.join(""));	
};
/*抽象的正则表达式初始方法，子类必须重写或者重写valid方法*/
BzIn.prototype.getReg = function(){
	return null;
};
/*抽象的输入时正则表达式初始方法，子类有需要时重写或者重写inValid方法*/
BzIn.prototype.getReg2 = function(){
	return null;
};
/*通用的验证是否为空*/
BzIn.prototype.checkNull = function(){
	if(BzUtl.getAttr(this.oE,Bz.NULL) == "false"){
		var sNullValue = BzUtl.getAttr(this.oE,Bz.NULLVALUE);
		if(sNullValue !== ""){
			return this.sValue == sNullValue;
		}
		return this.sValue === null || this.sValue.trim() === "";			
	}
	return false;
};
/*通用的验证是否合法,使用正则表达式，如果特殊需要，子类重写*/
BzIn.prototype.checkRule = function(){
	if(this.oReg !== null){
		return !this.oReg.test(this.sValue);			
	}
	return false;
};
/*获取输入字符串的长度*/
BzIn.prototype.getLen = function(sStr){
	if(sStr === null || sStr === "" || sStr === undefined){
		return 0;
	}
	if(this.sCode == Bz.CODE_ONE){
		return sStr.replace(/[^\r]\n/g,"aaa").length;
	}else{
		return sStr.replace(Bz.REG_CODE,"aa").replace(/[^\r]\n/g,"aaa").length;
	}
	
};
/*获取剩余可输入的长度*/
BzIn.prototype.getReLen = function(){
	if(this.iMaxLen === null){
		return "";
	}
	return this.iMaxLen - this.getLen(this.sValue);	
}; 
/*确认最大长度*/
BzIn.prototype.checkMaxLen = function(){
	if(this.iMaxLen === null){
		return false;
	}
	return this.getLen(this.sValue) > this.iMaxLen;	
};
/*确认是否最大长度*/
BzIn.prototype.isMaxLen = function(){
	if(this.iMaxLen === null){
		return false;
	}
	return this.getLen(this.sValue) >= this.iMaxLen;	
};
/*获取不大于最大长度的最长字符串*/
BzIn.prototype.cutMaxLen = function(sStr){
	if(this.iMaxLen === null){
		return sStr;
	}
	if(!sStr){
		return sStr;
	}	
	if(this.getLen(sStr) > this.iMaxLen){
		if(this.sCode == Bz.CODE_ONE){
			sStr = sStr.substring(0,this.iMaxLen);
		}else{
			var iLen = sStr.length;
			do{
				iLen -= 1;
				sStr = sStr.substring(0,iLen);
			}while(this.getLen(sStr) > this.iMaxLen);
		}	
	}	
	return sStr;	
};
/*确认最短长度*/
BzIn.prototype.checkMinLen = function(){
	if(this.iMinLen === null){
		return false;
	}
	return this.getLen(this.sValue) < this.iMinLen;		
};
/*通用一致性检查*/
BzIn.prototype.checkEqual = function(){
	var sTarget = BzUtl.getAttr(this.oE,Bz.EQUAL);/*相等的目标名称*/
	var sForm = BzUtl.getAttr(this.oE,Bz.FORM);	
	if(sTarget !== "" && sForm !== ""){
		try{
			var oTarget = BzUtl.$fi(BzUtl.$f(sForm),sTarget);/*目标对象节点*/
			var sTgValue = oTarget.value;/*目标的输入值*/
			return sTgValue != this.sValue;
		}catch(e){
			return true;
		}
	}
	return false;
};
/*不同类型数据的个性校验，子类必须重写*/
BzIn.prototype.selfValid = function(){
	return "";
};
/*重新设置输入框的取值*/
BzIn.prototype.setValue = function(_sValue){
	if(this.sValue == _sValue || this.sValue == _sValue.replace(/\r\n/g,"\n")){	
		return;
	}
	if(_sValue === null || _sValue === undefined || _sValue != _sValue){
		_sValue = "";
	}
	var sOld = this.sValue;
	this.sValue = _sValue;
	this.oE.value = this.sValue;	
	this.afterSetValue(sOld,_sValue);
};
/*设置值后的处理,子类需要时继承*/
BzIn.prototype.afterSetValue = function(sOld,sNew){
	return;
};
/*inputValid输入时校验，子类有特殊需求时重写*/
BzIn.prototype.inValid = function(){
	if(this.oReg2 === null){
		return this.sValue;
	}
	var oRs = this.oReg2.exec(this.sValue);/*匹配结果*/
	if(oRs === null || oRs[0] === null){
		return "";
	}else{
		return oRs[0];
	}
};
/*输入时限制方法，子类有特殊需求时重写*/
BzIn.prototype.limit = function(){
	var sRs = this.inValid();/*输入校验后的结果*/
	sRs = this.cutMaxLen(sRs);
	this.setValue(sRs);	
};
/*输入框单个校验，changValidate，于统一校验相比没有设计其他输入框的一致性校验*/
BzIn.prototype.chgValid = function(){
	var oRs = [],sRs;/*效验结果*/
	if(this.checkNull()){/*非空校验*/		
		oRs.push(this.genNotice(Bz.NT_NOTNULL,Bz.NT_NOTNULL_D));
	}
	if(this.sValue !== null && this.sValue.trim() !== ""){
		if(this.checkRule()){/*合法规则校验*/
			oRs.push(this.genNotice(Bz.NT_INVALID,Bz.NT_INVALID_D));
		}
		if(this.checkMaxLen()){/*最大长度校验*/
			oRs.push(this.genNotice(Bz.NT_MAXLEN,Bz.NT_MAXLEN_D,this.iMaxLen));
		}
		if(this.checkMinLen()){/*最小长度校验*/
			oRs.push(this.genNotice(Bz.NT_MINLEN,Bz.NT_MINLEN_D,this.iMinLen));
		}	
		sRs = this.selfValid();/*其它个性校验*/	
		if(sRs !== ""){
			oRs.push(sRs);
		}
	}	
	return oRs.join("\n");
};
/*统一的校验类*/
BzIn.prototype.valid = function(){
	this.setValue(this.sValue.trim()); 
	var oRs = [];/*效验结果*/
	var sTmp = this.chgValid();
	if(sTmp !== ""){
		oRs.push(sTmp);		
	}	
	if(this.checkEqual()){
		try{
			var sTgName = "";
			var sTarget = BzUtl.getAttr(this.oE,Bz.EQUAL);
			var sForm = BzUtl.getAttr(this.oE,Bz.FORM);	
			var oTarget = BzUtl.$fi(BzUtl.$f(sForm),sTarget);
			sTgName = "\"" + BzUtl.getAttr(oTarget,Bz.NAME) + "\"";
			oRs.push(this.genNotice(Bz.NT_EQUAL,Bz.NT_EQUAL_D,sTgName));
		}catch(e){}		
	}
	var sRs = oRs.join("\n");
	if(sRs !== ""){
		this.falseDeal();
	}
	return sRs;
};
/*校验失败后处理,子类需要时重写*/
BzIn.prototype.falseDeal = function(){};
/*校验失败后生成提示语generateNotice*/
BzIn.prototype.genNotice = function(sNtAttr,sNtDf){
	try{
		var sTmplet = BzUtl.getAttr(this.oE,sNtAttr);/*sTemplet模板*/
		if(sTmplet === "" && typeof sNtDf == "string"){
			sTmplet = sNtDf;
		}
		sTmplet = sTmplet.replace(/#0#/g,this.sName);
		for(var i=2; i<arguments.length; i+=1){
			var oReg = BzUtl.crtReg("#"+(i-1)+"#","g");
			sTmplet = sTmplet.replace(oReg,arguments[i]);
		}
		if(sTmplet !== ""){
			return sTmplet;
		}		
	}catch(e){}
	return this.sName + "的输入发生未定义的错误！";
};



/*
 * 数字输入验证类，继承BzIn
 */
BzInNum = function(oE){
	BzIn.call(this,oE);
};
BzInNum.prototype = new BzIn();
/*确认数值的范围*/
BzInNum.prototype.checkRange = function(){
	var nValue = Number(this.sValue);
	var sMax = BzUtl.getAttr(this.oE,Bz.MAX);
	if(sMax !== ""){
		var nMax = Number(sMax);
		if(!isNaN(nMax)){
			if(nValue > nMax){
				return this.genNotice(Bz.NT_MAX,Bz.NT_MAX_D,nMax);
			}
		}				
	}	
	var sMin = BzUtl.getAttr(this.oE,Bz.MIN);
	if(sMin !== ""){
		var nMin = Number(sMin);
		if(!isNaN(nMin)){
			if(nValue < nMin){
				return this.genNotice(Bz.NT_MIN,Bz.NT_MIN_D,nMin);
			}
		}	
	}	
	return "";
};
/*重写getReg方法*/
BzInNum.prototype.getReg = function(){
	return Bz.REG_NUMBER;
};
/*重写getReg2方法*/
BzInNum.prototype.getReg2 = function(){
	return Bz.REG_NUMBER2;
};
/*重写selfValid方法*/
BzInNum.prototype.selfValid = function(){
	var sRs;/*校验结果*/
	sRs = this.checkRange();
	if(sRs !== ""){
		return sRs;
	}
	return "";
};

/*
 * 整数校验类，继承BzInNum类
 */
BzInNumInt = function(oE){
	BzInNum.call(this,oE);
};
BzInNumInt.prototype = new BzInNum();
/*重写getReg方法*/
BzInNumInt.prototype.getReg = function(){
	return Bz.REG_INT;
};
/*重写getReg2方法*/
BzInNumInt.prototype.getReg2 = function(){
	return Bz.REG_INT2;
};

/*
 * 浮点数校验类，继承BzInNum类
 */
BzInNumFlt = function(oE){
	BzInNum.call(this,oE);
};
BzInNumFlt.prototype = new BzInNum();
/*重写getReg方法*/
BzInNumFlt.prototype.getReg = function(){
	return Bz.REG_FLOAT;
};
/*重写getReg2方法*/
BzInNumFlt.prototype.getReg2 = function(){
	var sDigit = BzUtl.getAttr(this.oE,Bz.DIGIT);
	if(sDigit !== "" && !isNaN(Number(sDigit))){
		var oRs = ["^-?\\d+(\\.\\d{0,"];/*拼写组装正则表达式*/
		oRs.push(sDigit);
		oRs.push("})?|-?");		
		return BzUtl.crtReg(oRs.join(""));
	}
	return Bz.REG_FLOAT2;
};

/*
 * BzInString 字符串校验类，继承BzIn类
 */
BzInStr = function(oE){
	BzIn.call(this,oE);
};
BzInStr.prototype = new BzIn();
/*重写getReg方法*/
BzInStr.prototype.getReg = function(){
	return Bz.REG_STRING;
};
/*重写getReg2方法*/
BzInStr.prototype.getReg2 = function(){
	return Bz.REG_STRING2;
};


/*
 * BzInStrPwd 密码校验类，继承BzInStr类
 */
BzInStrPwd = function(oE){
	BzInStr.call(this,oE);
};
BzInStrPwd.prototype = new BzInStr();
/*重写getReg方法*/
BzInStrPwd.prototype.getReg = function(){
	return Bz.REG_PWD;
};
/*重写getReg2方法*/
BzInStrPwd.prototype.getReg2 = function(){
	return Bz.REG_PWD2;
};
BzInStrPwd.prototype.falseDeal = function(){
	this.setValue("");
	if(this.checkEqual()){
		/*另一个不一致的密码同样清空*/
		try{
			var sTarget = BzUtl.getAttr(this.oE,Bz.EQUAL);
			var sForm = BzUtl.getAttr(this.oE,Bz.FORM);	
			BzUtl.$fi(BzUtl.$f(sForm),sTarget).value = "";		
		}catch(e){}
	}
};
/*
 * BzInStrEmail Email校验类，继承BzInStr类
 */
BzInStrEml = function(oE){
	BzInStr.call(this,oE);
};
BzInStrEml.prototype = new BzInStr();
/*重写getReg方法*/
BzInStrEml.prototype.getReg = function(){
	return Bz.REG_EMAIL;
};
/*重写getReg2方法*/
BzInStrEml.prototype.getReg2 = function(){
	return Bz.REG_EMAIL2;
};

/*
 * BzInStrIdCard 身份证校验类，继承BzInStr类
 */
BzInStrIdc = function(oE){
	BzInStr.call(this,oE);
};
BzInStrIdc.prototype = new BzInStr();
/*重写getReg方法*/
BzInStrIdc.prototype.getReg = function(){
	return Bz.REG_IDCARD;
};
/*重写getReg2方法*/
BzInStrIdc.prototype.getReg2 = function(){
	return Bz.REG_IDCARD2;
};

/*
 * BzInStrUrl URL校验类，继承BzInStr类
 */
BzInStrUrl = function(oE){
	BzInStr.call(this,oE);
};
BzInStrUrl.prototype = new BzInStr();
/*重写getReg方法*/
BzInStrUrl.prototype.getReg = function(){
	return Bz.REG_URL;
};
/*重写gerReg2方法*/
BzInStrUrl.prototype.getReg2 = function(){
	return Bz.REG_URL2;
};
/*重写selfValid方法*/
BzInStrUrl.prototype.selfValid = function(){
	var sUrl = this.sValue;
	if(!sUrl){return "";}
	
	var oRs = [],oMtRs,sRs,iRs;/*校验结果*/ 
	
	if(!Bz.REG_URL_1.test(sUrl)){
	   oRs.push(this.sName + "必须以'http:\/\/'或'https:\/\/'开头");	   
	}
	
	oMtRs = sUrl.match(Bz.REG_URL_2);
	
	if(oMtRs !== null){
		sRs = oMtRs[0].replace(Bz.REG_URL_3,"");
		if(sRs.startWith("0")){
			 oRs.push(this.sName + "端口号不能以0开头");	   
		}
		iRs = Number(sRs);
		if(isNaN(iRs)){
			oRs.push(this.sName + "端口号必须为数字");
		}else{
			if(iRs<1 || iRs >65535){
				oRs.push(this.sName + "端口号必须为数字且应在1－65535之间!");
			}
		}
	}	
	return oRs.join("\n");	
};
/*
 *BzInText 文本校验类，继承BzIn
 */
BzInText = function(oE){
	BzIn.call(this,oE);
	if(arguments.length === 0){
		return;
	}
	this.iMaxLine = null;/*最大行数*/
	this.iLineLen = null;/*每行最大字符数*/	
	this.bNullLine = true;/*bNullLine 是否允许空行*/
	this.bReptLine = true;/*bRepeatLine 是否允许重复行*/	
	this.oLenCt = null;/*长度计数器*/
	this.oLineCt = null;/*行数计数器*/	
	this.bSpace = true;/*是否允许每行首位空行*/		
	/*分别初始化以上数据*/	
	var sML = BzUtl.getAttr(this.oE,Bz.MAXLINE);
	if(sML !== ""){
		var iML = Number(sML);
		if((!isNaN(iML)) && iML > 0){
			this.iMaxLine = iML;			
		}		
	}
	var sLineLen = BzUtl.getAttr(this.oE,Bz.LINELEN);
	if(sLineLen !== "" && !isNaN(Number(sLineLen))){
		this.iLineLen = Number(sLineLen);
	}
	var sNullLine = BzUtl.getAttr(this.oE,Bz.NULLLINE);
	if(sNullLine == "false"){
		this.bNullLine = false;
	}
	var sReptLine = BzUtl.getAttr(this.oE,Bz.REPEATLINE);
	if(sReptLine == "false"){
		this.bReptLine = false;
	}	
	var sLic = BzUtl.getAttr(this.oE,Bz.LINECOUNTER);
	if(sLic !== ""){
		this.oLineCt = BzUtl.$(sLic);
	}
	var sLec = BzUtl.getAttr(this.oE,Bz.LENCOUNTER);
	if(sLec !== ""){
		this.oLenCt = BzUtl.$(sLec);
	}
	var sSpace = BzUtl.getAttr(this.oE,Bz.SPACE);
	if(sSpace == "false"){
		this.bSpace = false;
	}
	/*设置初始长度和宽度*/	
	this.setCt();			
};
BzInText.prototype = new BzIn();
/*重写setReg方法*/
BzInText.prototype.setReg = function(){
	var sReg = BzUtl.getAttr(this.oE,Bz.REGEXP);
	if(sReg !== ""){
		this.oReg = BzUtl.crtReg(sReg);
	}else{
		var oRs = ["^["];/*用于拼写组装正则表达式*/
		var sAllow = BzUtl.getAttr(this.oE,Bz.ALLOW);
		if(sAllow !== ""){
			/*允许输入的字符范围*/
			oRs.push(sAllow);
			oRs.push("\r\n");/*添加可以输入换行符*/
		}else{
			var sRefuse = BzUtl.getAttr(this.oE,Bz.REFUSE);
			if(sRefuse !== ""){
				/*不允许输入的字符范围*/
				oRs.push("^");
				oRs.push(sRefuse);
			}else{
				/*没有设置，取子类getReg2方法值*/
				this.oReg = this.getReg();
				return;
			}
		}
		oRs.push("]+$");
		this.oReg = BzUtl.crtReg(oRs.join(""));	
	}	
};
/*重写setReg2方法*/
BzInText.prototype.setReg2 = function(){
	var oRs = ["^["];/*用于拼写组装正则表达式*/
	var sAllow = BzUtl.getAttr(this.oE,Bz.ALLOW);
	if(sAllow !== ""){
		/*允许输入的字符范围*/
		oRs.push(sAllow);
		oRs.push("\r\n");/*添加可以输入换行符*/
	}else{
		var sRefuse = BzUtl.getAttr(this.oE,Bz.REFUSE);
		if(sRefuse !== ""){
			/*不允许输入的字符范围*/
			oRs.push("^");
			oRs.push(sRefuse);
		}else{
			/*没有设置，取子类getReg2方法值*/
			this.oReg2 = this.getReg2();
			return;
		}
	}
	oRs.push("]*");
	this.oReg2 = BzUtl.crtReg(oRs.join(""));	
};
/*重写getReg方法*/
BzInText.prototype.getReg = function(){
	return Bz.REG_TEXT;
};
/*重写getReg2方法*/
BzInText.prototype.getReg2 = function(){
	return Bz.REG_TEXT2;
};
/*getLine计算text行数,计算\n符号的数量*/
BzInText.prototype.getLine = function(){
	var sStr = this.sValue;
	if(sStr === ""){
		return 0;
	}
	var rStr = sStr.replace(/\n/g,"");
	return (sStr.length - rStr.length + 1);	
};
/*checkLine验证是否超过最大行数*/
BzInText.prototype.checkLine = function(){
	if(this.iMaxLine !== null){
		return this.getLine() > this.iMaxLine;
	}	
	return false;	
};
/*setLenCounter，设置长度计数器*/
BzInText.prototype.setCt = function(){
	if(this.oLineCt !== null){
		if(BzUtl.getAttr(this.oE,"bzLenCtSeq") == Bz.LINECOUNTERSEQ_O){
			if(this.iMaxLine !== null){
				this.oLineCt.value = this.iMaxLine - this.getLine();
			}
		}else{
			this.oLineCt.value = this.getLine();
		}
	}	
	if(this.oLenCt !== null){
		if(BzUtl.getAttr(this.oE,Bz.LENCOUNTERSEQ) == Bz.LENCOUNTERSEQ_O){
			if(this.iMaxLen !== null && !isNaN(this.iMaxLen)){
				this.oLenCt.value = this.iMaxLen - this.getLen(this.sValue);
			}
		}else{
			this.oLenCt.value = this.getLen(this.sValue);
		}
	}	
};
/*重写selfValid方法*/
BzInText.prototype.selfValid = function(){
	
	if(!this.sValue){return "";}
			
	var sV = this.sValue.replace(/\r\n/g,"\n");	
	
	sV = sV.replace(/ *\n/g,"\n");/*无效的行后空格和无效结尾删除*/	
	if(!this.bSpace){/*空格删除*/
		sV = sV.replace(/\n */g,"\n").replace(/^ */,"");
		sV = sV.replace(/ +/g," ");/*多个空格换成1个*/
	}
	this.setValue(sV);
	this.setCt();
	
	var oRs = [];/*校验结果*/ 
	/*最大行数校验*/
	if(this.checkLine()){
	   oRs.push(this.genNotice(Bz.NT_MAXLINE,Bz.NT_MAXLINE_D,this.iMaxLine));	   
	}	
	sV = sV.replace(/\n *\n/g,"\n\n");		
	/*是否有空行校验*/
	if(!this.bNullLine){
		if(sV.indexOf("\n\n") > -1){
			oRs.push(this.sName + "存在空行");	
		}		
	}
	/*每行最大字数校验*/
	if(this.iLineLen !== null){
		var oL = sV.split("\n");
		for(var k=0;k<oL.length;k+=1){
			if(this.getLen(oL[k]) > this.iLineLen){
				oRs.push(this.genNotice(Bz.NT_LINELEN,Bz.NT_LINELEN_D,k+1+"",this.iLineLen));	
			}
		}
	}		
	/*是否有重复行校验*/
	if(!this.bReptLine){
		var oLine = sV.split("\n"),sLine;/*每行的数据*/
		var bFlag = false;		
		for(var i=0;i<oLine.length && !bFlag;i+=1){
			sLine = oLine[i];
			for(var j=i+1;j<oLine.length;j+=1){
				if(sLine == oLine[j]){
					bFlag = true;
					break;
				}
			}
		}
		if(bFlag){
			oRs.push(this.genNotice(Bz.NT_REPEATLINE,Bz.NT_REPEATLINE_D));	
		}		
	}	
	/*checkPreLine 每行规则校验*/
	var sCPL = this.chkPreLine();
	if(sCPL !== ""){
		oRs.push(sCPL);	
	}			
	return oRs.join("\n");
};
BzInText.prototype.chkPreLine = function(){
	return "";
};
/*20080326添加，更改为自动删除重复行而不是校验*/
BzInText.prototype.delRepeatLine = function(){

	if(!this.sValue){return;}
			
	var sV = this.sValue.replace(/\r\n/g,"\n");	
	
	sV = sV.replace(/ *\n/g,"\n");/*无效的行后空格和无效结尾删除*/
	
	var oLine = sV.split("\n"),sLine;/*每行的数据*/
		
	for(var i=0;i<oLine.length;i+=1){
		sLine = oLine[i];
		for(var m=i+1;m<oLine.length;m+=1){
			if(sLine.trim() == oLine[m].trim()){
				oLine[m] = "";
			}
		}
	}	
	sV = oLine.join("\n");
	this.setValue(sV);	
	this.setCt();		
};

/*重写动态校验方法 inputValid*/
BzInText.prototype.inValid = function(){
	if(this.oReg2 === null){
		return this.sValue;
	}
	var oRs = this.oReg2.exec(this.sValue);/*匹配结果*/
	var sV,sTmp;/*sValue,sTemp*/
	if(oRs === null || oRs[0] === null){
		return "";
	}else{
		sV = oRs[0];
	}		
	sV = sV.replace(/\r\n/g,"\n");	
	/*空格删除*/			
	if(!this.bSpace){
		sV = sV.replace(/ {1,}/g," ");/*多个空格换成1个*/
		var oTmp1 = sV.split("\n");
		if(oTmp1.length>1){
			var oTmp2 = [];
			/*20080325修改，只自动删除首部的空格
			for(var j=0;j<oTmp1.length-1;j+=1){/最后一行前的首空格全部删除/
				oTmp2.push(oTmp1[j].trim());			
			}
			oTmp2.push(oTmp1[oTmp1.length-1]);
			*/
			/*新方法*/
			for(var j=0;j<oTmp1.length-1;j+=1){/*最后一行前的首空格全部删除*/
				oTmp2.push(oTmp1[j].lTrim());			
			}	
			oTmp2.push(oTmp1[oTmp1.length-1]);
			sV = oTmp2.join("\n");		
		}		
	}
	/*每行最大长度控制*/
	if(this.iLineLen !== null){
		var oL = sV.split("\n"),sL;/*oLine,sLine*/
		for(var k=0;k<oL.length;k+=1){
			sL = oL[k];
			if(this.getLen(sL) > this.iLineLen){
				var i;
				for(i=sL.length-1;i>-1;i-=1){
					sL = sL.substring(0,i);
					if(this.getLen(sL) <= this.iLineLen){
						break;
					}
				}
			}
			oL[k] = sL;
		}
		sV = oL.join("\n");				
	}			
	/*重复行控制*/	
	if(!this.bReptLine){
		var oLine = sV.split("\n"),sLine;/*每行的数据*/
		for(i=0;i<oLine.length-1;i+=1){
			sLine = oLine[i];
			for(var m=i+1;m<oLine.length-1;m+=1){
				if(sLine.trim() == oLine[m].trim()){
					oLine[m] = "";
				}
			}
		}	
		sV = (oLine.join("\n"));			
	}
	/*删空行*/
	if(!this.bNullLine){		
		sTmp = sV;
		sTmp = sTmp.replace(/\n+/g,"\n");
		sTmp = sTmp.replace(/^\n/,"");
		if(sV != sTmp){
			sV = sTmp;
			this.setValue(sV);			
		}		
	}			
	/*删溢出的行，首先删中间的空行，如果没有，删最后行*/
	while(this.checkLine()){
		if(sV.indexOf("\n\n")>-1){
			sTmp = sV.replace(/\n\n/,"\n");
		}else{
			sTmp = sV.replace(/\n[^\n]*$/,"");
		}
		if(sV != sTmp){
			sV = sTmp;
			this.setValue(sV);					
		}		
	}
	this.setCt();	
	return sV.replace(/\n/g,"\r\n");
};
BzInText.prototype.afterSetValue = function(sOld,sNew){
	try{
		this.setCt();
	}catch(e){
		//do nothing
	}
};

/*
 * BzInDate 字符串校验类，继承BzIn类
 */
BzInDate = function(oE){
	BzIn.call(this,oE);
	var sF = BzUtl.getAttr(this.oE,Bz.DT_FORMAT);
	sF = (sF !== "")?sF:Bz.DT_FORMAT_D;
	sF = sF.replace(/%Y/g,"YYYY");
	sF = sF.replace(/%y/g,"yy");
	sF = sF.replace(/%m/g,"mm");
	sF = sF.replace(/%d/g,"dd");
	sF = sF.replace(/%H/g,"HH");
	sF = sF.replace(/%M/g,"MM");
	this.sFmt = sF;
};
BzInDate.oDtVld = [31,29,31,30,31,30,31,31,30,31,30,31]; 
BzInDate.prototype = new BzIn();
/*重写setReg方法*/
BzInDate.prototype.setReg = function(){
	var sReg = BzUtl.getAttr(this.oE,Bz.REGEXP);
	if(sReg !== ""){
		this.oReg = BzUtl.crtReg(sReg);
	}else{
		/*设置日期格式*/
		var sF = BzUtl.getAttr(this.oE,Bz.DT_FORMAT);
		sReg = (sF !== "")?sF:Bz.DT_FORMAT_D;
		sReg = sReg.replace(/%Y/g,"[0-9]{4}");
		sReg = sReg.replace(/%y/g,"[0-9]{2}");
		sReg = sReg.replace(/%m/g,"(0[0-9]|1[0-2])");
		sReg = sReg.replace(/%d/g,"(0[1-9]|[12][0-9]|3[01])");
		sReg = sReg.replace(/%H/g,"([01][0-9]|2[0-3])");
		sReg = sReg.replace(/%M/g,"([0-5][0-9])");
		sReg = sReg.replace(/\\/g,"\\\\");	
		sReg = ["^",sReg,"$"].join("");		
		this.oReg = BzUtl.crtReg(sReg);
	}	
};
/*重写setReg2方法*/
BzInDate.prototype.getReg2 = function(){
	/*设置日期格式*/
	var sF = BzUtl.getAttr(this.oE,Bz.DT_FORMAT);
	var sReg2 = (sF !== "")?sF:Bz.DT_FORMAT_D;
	sReg2 = sReg2.replace(/%Y/g,"0-9");
	sReg2 = sReg2.replace(/%y/g,"0-9");
	sReg2 = sReg2.replace(/%m/g,"0-9");
	sReg2 = sReg2.replace(/%d/g,"0-9");
	sReg2 = sReg2.replace(/%H/g,"0-9");
	sReg2 = sReg2.replace(/%M/g,"0-9");
	sReg2 = sReg2.replace(/\\/g,"\\\\");	
	sReg2 = ["^[",sReg2,"]*"].join("");	
	return BzUtl.crtReg(sReg2);
};
/*日期专用的，获取指定位置的数值*/
BzInDate.prototype.getNum = function(sPart){
	try{
		var iIndex = this.sFmt.indexOf(sPart);
		if(iIndex < 0){return NaN;}
		var iEnd = iIndex + sPart.length;
		var sNum = this.sValue.trim().substring(iIndex,iEnd);
		return Number(sNum);
	}catch(e){
		return NaN;
	}		
};
/*返回时间数组*/
BzInDate.prototype.getDateArray = function(){
	var iYear = this.getNum("YYYY");
	if(isNaN(iYear)){
		iYear = this.getNum("yy");
		if(!isNaN(iYear)){
			if(iYear > 28){
				iYear += 1900;
			}else{
				iYear += 2000;
			}
		}
	}
	var iMonth = this.getNum("mm");
	var iDay = this.getNum("dd");
	var iHour = this.getNum("HH");
	var iMin = this.getNum("MM");	
	return [iYear,iMonth,iDay,iHour,iMin];
};
/*返回时间数组*/
BzInDate.prototype.getDate = function(){
	if(this.valid() === ""){/*校验合法才返回正确对象*/
		return this.getDateArray();
	}
	return [NaN,NaN,NaN,NaN,NaN];
};
/*重写selfValid*/
BzInDate.prototype.selfValid = function(){
	var oRs = [];
	/*获取各段时间并校验*/
	var oDt = this.getDateArray();
	var iYear = oDt[0];
	var iMonth = oDt[1];
	var iDay = oDt[2];
	var iHour = oDt[3];
	var iMin = oDt[4];
	if((!isNaN(iMonth)) && (!isNaN(iDay))){
		if(iDay > BzInDate.oDtVld[iMonth-1]){
			oRs.push([this.sName,"输入非法：",iMonth,"月没有",iDay, "日"].join(""));
		}
		if((!isNaN(iYear)) && iMonth == 2 && iDay == 29){
			if(!((iYear % 400 === 0)||(iYear % 4 === 0)&&(iYear % 100 !== 0))){
				oRs.push([this.sName,"输入非法：",iYear,"年",iMonth,"月没有",iDay, "日"].join(""));
			}
		}
	}
	if((!isNaN(iHour)) && (iHour < 0 || iHour > 23)){
		oRs.push([this.sName,"小时数超出范围"].join(""));
	}
	if((!isNaN(iMin)) && (iMin < 0 || iMin > 59)){
		oRs.push([this.sName,"分钟数超出范围"].join(""));
	}
	if(!isNaN(iYear)){
		/*判断起止时间*/
		var sStart = BzUtl.getAttr(this.oE,Bz.DT_START),iStart;
		iStart = Number(sStart);
		if(sStart === "" || isNaN(iStart)){
			iStart = Bz.DT_START_D;
		}				
		var sEnd = BzUtl.getAttr(this.oE,Bz.DT_END),iEnd;	
		iEnd = Number(sEnd);
		if(sEnd === "" || isNaN(iEnd)){
			iEnd = Bz.DT_END_D;
		}
		if(iYear < iStart){
			oRs.push(this.genNotice(Bz.NT_START,Bz.NT_START_D,iStart));
		}	
		if(iYear > iEnd){
			oRs.push(this.genNotice(Bz.NT_END,Bz.NT_END_D,iEnd));
		}					
	}
	if(oRs.join("") === ""){
		/*判断晚于时间*/
		var sTgt = BzUtl.getAttr(this.oE,Bz.DT_BEHIND);
		var sF = BzUtl.getAttr(this.oE,Bz.FORM);
		if(sTgt !== "" && sF !== ""){
			var oTgtE = BzUtl.$fi(BzUtl.$f(sF),sTgt);
			if(oTgtE !== null){
				var oTgt = BzInFactory.create(oTgtE);
				var oTDt = oTgt.getDate();/*与oDt比*/
				var iDt = 0,iTDt = 0;
				var oTimes = [10000000000,1000000,10000,100,1];
				for(var i=0;i<5;i+=1){
					if(!isNaN(oDt[i])){
						iDt += oDt[i] * oTimes[i];
					}
					if(!isNaN(oTDt[i])){
						iTDt += oTDt[i] * oTimes[i];
					}
				}
				if(iDt < iTDt){
					oRs.push(this.genNotice(Bz.NT_BEHIND,Bz.NT_BEHIND_D,oTgt.sName));
				}				
			}
		}
	}
	return oRs.join("\n");
};


/*
 * BzIn工厂，负责根据类型初始化对象
 */
BzInFactory = {};
BzInFactory.create = function(oE){
	if(!oE){return null;}
	var sType = BzUtl.getAttr(oE,Bz.TYPE);
	if(sType !== ""){
		if(sType == Bz.TYPE_NUMBER){
			return new BzInNum(oE);
		}
		if(sType == Bz.TYPE_INT){
			return new BzInNumInt(oE);
		}
		if(sType == Bz.TYPE_FLOAT){
			return new BzInNumFlt(oE);
		}
		if(sType == Bz.TYPE_STRING){
			return new BzInStr(oE);
		}
		if(sType == Bz.TYPE_PWD){
			return new BzInStrPwd(oE);
		}
		if(sType == Bz.TYPE_EMAIL){
			return new BzInStrEml(oE);			
		}
		if(sType == Bz.TYPE_DATE){
			return new BzInDate(oE);			
		}
		if(sType == Bz.TYPE_IDCARD){
			return new BzInStrIdc(oE);			
		}
		if(sType == Bz.TYPE_URL){
			return new BzInStrUrl(oE);			
		}
		if(sType == Bz.TYPE_TEXT){
			return new BzInText(oE);			
		}
		return null;		
	}else{
		return null;
	}	
};	

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
