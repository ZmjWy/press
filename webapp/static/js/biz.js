/*
 *	summary: bizdev����ר��js�⣬��Ҫͳһ�������֤�����ͨ�õ��÷������ɣ����ж���ʹ��Bzǰ׺
 *  ���ߣ� � lijian@sohu-rd.com
 */
/*ϵͳ���úͳ������ܣ�����ά��*/
Bz = {};
Bz.REG = "bzReg";/*boolean ���Ƿ�ʹ�ñ���*/
Bz.SUB = "bzSub";/*�ύʱ�Ƿ�У��*/
Bz.QUERY = "bzQuery";/*boolean �ύ��ʱ�Ƿ�ȷ��*/
Bz.QUERYSTR = "ȷ���ύô��";/*string �ύ��ʱȷ������*/
Bz.NAME = "bzName";/*Ԫ���������û�������ʾ*/
Bz.VALIDE = "bzValid";/*boolean�Ƿ�μ�ͳһУ��,false������*/
Bz.NULL = "bzNull";/*Ԫ�������Ƿ����Ϊ��*/
Bz.NULLVALUE = "bzNullValue";/*ָ����ֵ*/
Bz.IDPER = "bz_";/*idǰ׺*/
Bz.TYPE = "bzType";/*Ԫ���������ͣ�number,float,string...*/
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
Bz.MAX = "bzMax";/*�����ֵ*/
Bz.MIN = "bzMin";/*��С��ֵ*/
Bz.DIGIT = "bzDigit"; /*����С��λ��*/
Bz.MAXLEN = "bzMaxLen";/*�������󳤶�*/
Bz.MINLEN = "bzMinLen";/*�������С����*/
Bz.CODE = "bzCode";/*������㷽ʽ*/
	Bz.CODE_ONE = "1";/*���ְ�һ���ֽڼ���*/
	Bz.CODE_TWO = "2";/*���ְ������ֽڼ���*/
Bz.BCCASE = "bzCase";
	Bz.BCCASE_D = "0";
	Bz.BCCASE_s = "1";
Bz.REPLACE = "bzReplace";
Bz.REPLACEV = "bzReplaceValue";
Bz.EQUAL = "bzEqual";/*����������ĳ�������ȡֵһ��*/
Bz.FORM = "bzForm";/*������form��*/
Bz.CONTROL = "bzControl";/*Ԫ������������ͣ�i(input)c(change)*/
	Bz.CONTROL_INPUT = "i";
	Bz.CONTROL_CHANGE = "c";
Bz.BOX = "bzBox"; 
Bz.ALLOW = "bzAllow";/*��ֹ���ֵ���ĸ*/
Bz.REFUSE = "bzRefuse";/*������ֵ���ĸ*/
Bz.MAXLINE = "bzMaxLine";/*�ı�������������������*/
Bz.LENCOUNTER = "bzLenCt";/*�ı�������������*/
Bz.LENCOUNTERSEQ = "bzLenCtSeq";/*�ı������������ķ�ʽ*/
	Bz.LENCOUNTERSEQ_O = "1";/*����ģ�����˳��*/
Bz.LINECOUNTER = "bzLineCt";/*�ı�������������*/
Bz.LINECOUNTERSEQ = "bzLineSeq";/*�ı������������ķ�ʽ*/
	Bz.LINECOUNTERSEQ_O = "1";/*����ģ�����˳��*/
Bz.LINELEN = "bzLineLen";/*ÿ�е���󳤶�*/
Bz.NULLLINE = "bzNullLine";/*boolean,�Ƿ��������*/
Bz.REPEATLINE = "bzRepeatLine";/*boolean,�Ƿ������ظ���*/
Bz.SPACE = "bzSpace";/*�Ƿ�ɾ��ÿ����β�ո�*/
Bz.DT_INPUT = "bzInput";/*ʱ�����뷽ʽ��Ĭ����д�ӿؼ�*/
	Bz.DT_INPUT_D = "mw";/*Ĭ��ֵ*/
	Bz.DT_INPUT_M = "m";/*��д*/
	Bz.DT_INPUT_W = "w";/*�ؼ�*/
Bz.DT_BUTTON = "bzButton";/*������ť��ʱ����Ч���������ֶ�����ʱ��ʱ��������*/
Bz.DT_START = "bzStart";/*�����������ʼʱ��*/
	Bz.DT_START_D = 1900;/*Ĭ�Ͽ�ʼʱ��*/
Bz.DT_END = "bzEnd";/*�����������ֹʱ��*/
	Bz.DT_END_D = 2099;/*Ĭ�Ͻ���ʱ��*/
Bz.DT_FORMAT = "bzFormat";/*ʱ���ʽ*/
	Bz.DT_FORMAT_D = "%Y-%m-%d";/*Ĭ��ʱ���ʽ*/
Bz.DT_TIME = "bzTime";/*boolean �Ƿ�����ʱ�䣬Ĭ��false*/
Bz.DT_TIMEFMT = "bzTimeFmt";/*ʱ���ʽ��12��24��Ĭ��24*/
Bz.DT_BEHIND = "bzBehind";/*���ڵĶ�������*/
Bz.DT_DEFAULT = "bzDefault";
	Bz.DT_DEFAULT_N = "now";
	Bz.DT_DEFAULT_Y = "yst";
Bz.REGEXP = "bzRegExp";/*Ԫ��У�����������������ʽ*/
	Bz.REG_NUMBER = /^\d+[\u0000-\u0020\u007F-\u00A0]*$/; /*����*/
	Bz.REG_NUMBER2 = /^\d*/; /*���֣����ڶ�̬У�飬����ͬ*/
	Bz.REG_INT = /^-?\d+$/; /*����*/
	Bz.REG_INT2 = /^-?\d*/;
	Bz.REG_FLOAT = /^(-?\d+)(\.\d+)?$/;/*������*/
	Bz.REG_FLOAT2 = /^-?\d+(\.\d*)?|-?/;
	Bz.REG_STRING = /^[^\r\n<>]+$/;/*�ַ���,�����кͻس���������ַ�*/
	Bz.REG_STRING2 = /^[^\r\n<>]*/;
	Bz.REG_WORD = /^[a-zA-Z]\w*$/;/*�����ַ���������ĸ�����ֺ��»���,��������ĸ��ͷ*/
	Bz.REG_WORD2 = /^[a-zA-Z]\w*/;
	Bz.REG_EMAIL = /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/i;/*email��ʽ*/
	Bz.REG_EMAIL2 = /^([a-zA-Z0-9_-]+\.)*([a-zA-Z0-9_-]+(@([a-zA-Z0-9_-]+((\.[a-zA-Z0-9_-]+)*(\.)?)?)?)?)?/i;
	Bz.REG_IDCARD = /^\d{0,17}[\dx]$/;/*���֤*/
	Bz.REG_IDCARD2 = /^\d{1,17}([\dx])?/;
	Bz.REG_URL = /^https?:\/\/([\w-\|@]+\.)+[\w-\|@]+(:\d+)?(\/[^\s\?#]+)*([\/#\?\\].*)?$/i;/*URL*/
	Bz.REG_URL2 = /^h(t{1,2}(p(s?(:(\/{1,2}(([\w-\|@]+\.)*([\w-\|@]+((:\d+([\/#\?\\](.*)?)?)|([\/#\?\\](.*)?)|:)?)?)?)?)?)?)?)?/i;/*�ײ��ּ���*/
	Bz.REG_URL_1 = /^https?:\/\/.*$/i;/*У��url��ͷʱʹ��*/
	Bz.REG_URL_2 = /^https?:\/\/(([a-zA-Z0-9\|@-])+\.)*[a-zA-Z0-9\|@-]+:\d+/i;/*У��url�˿ں�ʱʹ�ã���ȡ�˿ں�*/
	Bz.REG_URL_3 = /^https?:\/\/(([a-zA-Z0-9\|@-])+\.)*[a-zA-Z0-9\|@-]+:/i;/*У��url�˿ں�ʱʹ��,��ȡ�˿ں�*/
	Bz.REG_TEXT = /^[\s\S]*$/;/*�����ַ�*/
	Bz.REG_TEXT2 = /^[\s\S]+/;
	Bz.REG_CHINESE = /[\u4E00-\u9FA5]*/;/*����*/
	Bz.REG_CODE = /[^\x00-\xff]/g;/*���볤��Ϊ2���ַ������������Լ�ȫ��*/
	Bz.REG_MOBILE = /^0?1((3\d)|(59)){1}[0-9]{8}$/; /*�ֻ�����*/
	Bz.REG_TEL = /^(0[\d]{2,3}-?)?\d{6,8}(-\d{3,4})?$/; /*�绰����*/ 
	Bz.REG_PWD = /^[a-zA-Z0-9-_]+$/;/*�û�����*/
	Bz.REG_PWD2 = /^[a-zA-Z0-9-_]*/;
/*��ʾ���Լ�Ĭ����ʾ�ﶨ��*/
Bz.NT_NOTNULL = "bzNullNt";
Bz.NT_NOTNULL_D = "�Բ���#0#�������룡";
Bz.NT_INVALID = "bzValidNt";/*Ч��ʧ����ʾ��*/
Bz.NT_INVALID_D = "�Բ���#0#����Ƿ���";
Bz.NT_MAXLEN = "bzMaxLenNt";
Bz.NT_MAXLEN_D = "�Բ���#0#���ܳ�������#1#��";
Bz.NT_MINLEN = "bzMinLenNt";
Bz.NT_MINLEN_D = "�Բ���#0#����С�ڳ���#1#��";
Bz.NT_MINLEN = "bzMinLenNt";
Bz.NT_MINLEN_D = "�Բ���#0#����С�ڳ���#1#��";
Bz.NT_EQUAL = "bzEqualNt";
Bz.NT_EQUAL_D = "�Բ���#0#�����#1#һ�£�";
Bz.NT_MAX = "bzMaxNt";
Bz.NT_MAX_D = "�Բ���#0#���ܳ������ֵ#1#��";
Bz.NT_MIN = "bzMinNt";
Bz.NT_MIN_D = "�Բ���#0#���ܵ�����Сֵ#1#��";
Bz.NT_START = "bzStartNt";
Bz.NT_START_D = "�Բ���#0#������#1#��֮ǰ��";
Bz.NT_END = "bzEndNt";
Bz.NT_END_D = "�Բ���#0#������#1#��֮��";
Bz.NT_BEHIND = "bzBehindNt";
Bz.NT_BEHIND_D = "�Բ���#0#�������#1#��";
Bz.NT_MAXLINE = "bzMaxLineNt";
Bz.NT_MAXLINE_D = "�Բ���#0#���������ܳ��������#1#��";
Bz.NT_MINLINE = "bzMinLineNt";
Bz.NT_MINLINE_D = "�Բ���#0#���������ܵ�����С��#1#��";
Bz.NT_NULLLINE = "bzNullLineNt";
Bz.NT_NULLLINE_D = "�Բ���#0#�����п��У�";
Bz.NT_REPEATLINE = "bzRepeatLineNt";
Bz.NT_REPEATLINE_D = "�Բ���#0#�������ظ��У�";
Bz.NT_LINELEN = "bzLineLenNt";
Bz.NT_LINELEN_D = "�Բ���#0#��#1#�г�����󳤶�#2#��";

/*����String������ַ���*/
String.prototype.trim = function() {
	return this.replace(/(^[\s��]*)|([\s��]*$)/g, "");
};
String.prototype.lTrim = function() {
	return this.replace(/(^[\s��]*)/g, "");
};
String.prototype.rTrim = function() {
	return this.replace(/([\s��]*$)/g, "");
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
//�滻ȫ��
String.prototype.replaceAll  = function(s1,s2){    
	return this.replace(new RegExp(s1,"gm"),s2);    
}  


/*������BizUtil*/
BzUtl = {};
/*�ж��Ƿ������*/
BzUtl.isIE = function(){
	var sUserAgt = navigator.userAgent;
	var isOpera = sUserAgt.indexOf("Opera") > -1;
	return sUserAgt.indexOf("compatible") > -1 && sUserAgt.indexOf("MSIE") > -1	&& !isOpera;
};
/*�Ƿ�IE�������ʶ*/
BzUtl.IE = BzUtl.isIE();
/*ͳһ����id��ȡԪ�ض���*/ 
BzUtl.$ = function(sId){
	try{
		return document.getElementById(sId);
	}catch(e){
		return null;
	}
};
/*����name��ȡԪ�ض���*/
BzUtl.$n = function(sName){
	try{
		return document.getElementsByName(sName)[0];
	}catch(e){
		return null;
	}
};
/*ͳһ����name��ȡFormԪ�ض���*/
BzUtl.$f = function(sName){
	try{
		return document.forms[sName];
	}catch(e){
		return null;
	}
};
/*ͳһ����name��ȡָ��FormԪ�ص���������*/
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
/*����Ԫ��,sType,oParent*/
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
/*ɾ��oP�µ���Ԫ��oE*/
BzUtl.delE = function(oE,oP){
	try{
		oP.removeChild(oE);
	}catch(e){}
	return oE;	
};
/*�����������¼�*/
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
/*�������ɾ���¼�*/
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
/*��ʽ���¼����󣬽�IE�¼�����ͳһ��DOM��׼����*/
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
/*���������ȡ�¼������¼�*/
BzUtl.getEvt = function(){
	if(window.event){
		return BzUtl.fmtEvt(window.event);
	}else{
		return BzUtl.getEvt.caller.arguments[0];
	}
};
/*��ȡԪ�ؾ���λ��,getPosition*/
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
/*��ȡԪ�ص�����*/
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
/*ΪIE�������ȡ���ԣ����IE�����������*/
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
/*����Ԫ������*/
BzUtl.setAttr = function(oE,sAttr,sValue){
	if(!oE){return;}	
	oE.setAttribute(sAttr,sValue);
};
/*����Ԫ����ʽ*/
BzUtl.setStyle = function(oE,sStyle,sValue){
	if(!oE){return;}
	oE.style[sStyle] = sValue;	
};
/*��ʾ��Ϣ*/
BzUtl.alert = function(sNotice){
	window.alert(sNotice);
};
/*ȷ����Ϣ*/
BzUtl.confirm = function(sNotice){
	return window.confirm(sNotice);
};
/*�����¼�*/
BzUtl.focus = function(oE){
	oE.focus();
};
/*����������ʽcreatRegExp*/
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
/*����Ԫ��*/
BzUtl.disable = function(oE){
	try{
		oE.disabled = true;
	}catch(e){
	}
};	
/*ֻ��Ԫ��*/
BzUtl.readonly = function(oE){
	try{
		oE.readOnly = true;		
	}catch(e){
	}
};
/*ȫ�ǰ��ת��,iCase: 0ȫ���룬1�뵽ȫ��������ת��*/
BzUtl.chgCase = function(sStr,iCase){
	if(typeof sStr != "string" || sStr.length <= 0 || !(iCase === 0 || iCase == 1)){
		return sStr;
	}
	var i,oRs=[],iCode;
	if(iCase){/*��->ȫ*/
		for(i=0; i<sStr.length;i+=1){ 
			iCode = sStr.charCodeAt(i);
			if(iCode == 32){
				iCode = 12288;				
			}else if(iCode < 127){
				iCode += 65248;
			}
			oRs.push(String.fromCharCode(iCode)); 
		}		
	}else{/*ȫ->��*/
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
/*ȷ���Ƿ������Ч����ֵ*/
BzUtl.checkKey = function(iKey){
	if(iKey == 32 || iKey == 229){return true;}/*�ո���쳣*/
	if(iKey>47 && iKey < 58){return true;}/*����*/
	if(iKey>64 && iKey < 91){return true;}/*��ĸ*/
	if(iKey>95 && iKey < 108){return true;}/*���ּ���1*/
	if(iKey>108 && iKey < 112){return true;}/*���ּ���2*/
	if(iKey>185 && iKey < 193){return true;}/*����1*/
	if(iKey>218 && iKey < 223){return true;}/*����2*/
	return false;
};

/*�����ö���,����ʹ��js����form�еĸ�������*/
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
/*���ñ���Ԫ�صĸ�������*/
BzFmReg.prototype.set = function(sName,sAttr,sValue){
	if(this.oF === null){return;}
	var oIn = BzUtl.$fi(this.oF,sName);
	if(oIn !== null){
		try{
			BzUtl.setAttr(oIn,sAttr,sValue); 
		}catch(e){
			/*����ʾ����ʲôҲ����*/			
		}
	}	
};

/*���������*/
BzForm = {};
/*��ʼ��ҳ���е�form*/
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
/*Ϊformע���¼�*/
BzForm.reg = function(oForm){
	BzUtl.addEvt(oForm,"submit",BzForm.sub);
	BzUtl.setStyle(oForm,"display","block");
	/*����ע�����������¼�*/
	for(var i=0;i<oForm.length;i+=1){
		BzForm.regInput(oForm,oForm[i]);			
	}
};
/*Ϊ���������ע���¼���ʵ������ʱ��̬У��������굥�������ʱУ��*/
BzForm.regInput = function(oF,oE){
	if(!oE){return;}
	var sCtrl = BzUtl.getAttr(oE,Bz.CONTROL);/*sControl���Ʋ���*/
	BzUtl.addEvt(oE,"keydown",BzForm.keyDown);/*����̬�ύ*/	
	if(sCtrl.indexOf(Bz.CONTROL_INPUT)>-1){
		BzUtl.addEvt(oE,"keyup",BzForm.input);
		/*�������������붯̬�����¼�*/
		if(BzUtl.IE){
			/*IE�����*/
			//BzUtl.addEvt(oE,"afterUpdate",BzForm.input);
			BzUtl.addEvt(oE,"paste",BzForm.inputForIE);	
		}else{
			/*FireFox�����*/
			BzUtl.addEvt(oE,"input",BzForm.input);
		}		
	}
	if(sCtrl.indexOf(Bz.CONTROL_CHANGE)>-1){
		/*��ӵ������������ʱУ��*/
		BzUtl.addEvt(oE,"blur",BzForm.change);
	}
	/*�����ʱ�䣬��ʼ����ʱ��ؼ�*/
	var sType = BzUtl.getAttr(oE,Bz.TYPE);
	if(sType == Bz.TYPE_DATE){
		try{
			var sInput = BzUtl.getAttr(oE,Bz.DT_INPUT);
			sInput = (sInput === "")?Bz.DT_INPUT_D:sInput;
			if(sInput.indexOf(Bz.DT_INPUT_W) > -1){
				/*��Ҫ��ʼ���ؼ�*/
				var sId = Bz.IDPER + BzUtl.getAttr(oE,"name");
				BzUtl.setAttr(oE,"id",sId);/*����id*/
				var oSetup = new Object();/*���ö���*/
				/*������ʾ��*/	
				oSetup["inputField"] = sId;	
				 /*���ô�����ť*/
				var sButton = BzUtl.getAttr(oE,Bz.DT_BUTTON);
				if(sButton !== ""){
					oSetup["button"] = sButton;	
					oSetup["align"] = "Bl";			
				}else{
					/*û��button,�����Զ���䣬����firefox�����bug*/
					BzUtl.setAttr(oE,"autocomplete","off");
				}
				/*�������ڸ�ʽ*/
				var sFmt = BzUtl.getAttr(oE,Bz.DT_FORMAT);
				sFmt = (sFmt !== "")?sFmt:Bz.DT_FORMAT_D;
				oSetup["ifFormat"] = sFmt;	
				/*������ֹʱ��*/
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
				/*�����Ƿ���ʾʱ��*/
				if(BzUtl.getAttr(oE,Bz.DT_TIME) == "true"){
					oSetup["showsTime"] = true;	
				}
				/*������ʾʱ���ʽ*/
				if(BzUtl.getAttr(oE,Bz.DT_TIMEFMT) == "12"){
					oSetup["timeFormat"] = 12;	
				}else{
					oSetup["timeFormat"] = 24;	
				}				
				Calendar.setup(oSetup);	
				/*��ʼ��Ĭ��ʱ��*/
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
				/*���������*/
				BzUtl.readonly(oE);				
			}								
		}catch(e){
			//do nothing		
		}
	}
	/*�����text���ͣ���ʼ������ܵļ�����*/
	if(sType == Bz.TYPE_TEXT){
		var oBzIn = BzInFactory.create(oE);		
		
		/*����������ظ��У�����뿪ɾ���¼�,20080325���,
		  ����������ע����Ҫ���ֹ����ˣ���
		if(BzUtl.getAttr(oE,Bz.REPEATLINE) == "false"){
			BzUtl.addEvt(oE,"blur",BzForm.blur);
		}
		*/		
	}
	/*�����bzEqual����bzBehind���ԣ�������form����*/
	if(BzUtl.getAttr(oE,Bz.EQUAL) !== "" || BzUtl.getAttr(oE,Bz.DT_BEHIND) !== ""){
		BzUtl.setAttr(oE,Bz.FORM,BzUtl.getAttr(oF,"name"));
	}
};

/*�����ύ�¼�,�ṩ��js����*/
BzForm.submit = function(oF){
	var sNotice = BzForm.valid(oF);/*��У����*/		
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
	if(BzUtl.getAttr(oForm,Bz.SUB) == "false"){/*�ж��Ƿ�У��*/
		return;
	}
	var sNotice = BzForm.valid(oForm);/*��У����*/		
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
/*�ύʱ����У����еĸ���Ԫ��*/
BzForm.valid = function(oForm){
	var oRs = [],sRs;/*��У����*/	
	var oBzIn;/*oBzIn����*/
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
/*����У��ĳ��Ԫ��*/
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
/*IE����ճ���¼�����*/
BzForm.inputForIE = function(){
	var oEvt = BzUtl.getEvt();
	if(oEvt === null){
		return;
	}
	if(oEvt.ctrlKey){
		/*���̸���ճ��ͨ��onkeyupУ��*/
		return;
	}else{
		/*���Ǽ��̲�������ճ�����ݺ�ԭ���ݺϲ�*/		
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
		oEvt.preventDefault();//ֹͣճ���¼�
		//��������������֤
		BzForm.input(arguments);		
		*/
		/*���ַ�ʽʵ��*/
		var oE = oEvt.target;
		
		window.setTimeout(
			function(){
				var oBzIn = BzInFactory.create(oE);
				if(oBzIn !== null){
					oBzIn.limit();		
				}
				/*��̬У��*/
				BzForm.chgValid(oE);
			}
		);	
	}	
};
/*�����������ʱ��̬У��*/
BzForm.input = function(){
	var oEvt = BzUtl.getEvt();
	if(oEvt === null){
		return;
	}
	/*�ж��Ƿ��ǲ�������*/
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
	/*��̬У��*/
	BzForm.chgValid(oE);
};
/*�������������ʱ����У��*/
BzForm.change = function(){
	var oEvt = BzUtl.getEvt();
	var oE = oEvt.target;
	BzForm.chgValid(oE);
};
/*����ʱУ�������ʱ�����ʾ��*/
BzForm.chgValid = function(oE){
	if(BzUtl.getAttr(oE,Bz.CONTROL).indexOf(Bz.CONTROL_CHANGE) < 0){
		return;
	}
	var oBzIn = BzInFactory.create(oE);
	if(oBzIn !== null){
		BzForm.notice(oE,oBzIn.chgValid());	
	}	
};

/*Ϊ�ı����ṩ���뿪ʱɾ���ظ��е��¼�*/
BzForm.blur = function(){
	var oEvt = BzUtl.getEvt();
	var oE = oEvt.target;
	var oBzIn = BzInFactory.create(oE);
	oBzIn.delRepeatLine();
};

/*��ֹ��̬�����ύ*/
BzForm.keyDown = function(){
	return;
	/**ȡ���˹���20080326
	var oEvt = BzUtl.getEvt();
	var iKey = oEvt.keyCode;
	var oE = oEvt.target;
	var oBzIn = BzInFactory.create(oE);
	if(oBzIn !== null && oBzIn.isMaxLen() && BzUtl.checkKey(iKey)){
		oEvt.preventDefault();
	}
	*/	
};
/*��У������������ʾУ����,oE:�����Ԫ�أ�sRsУ����*/
BzForm.NTID = "bzNt_";/*����id����*/
BzForm.notice = function(oE,sRs){
	if(BzUtl.getAttr(oE,Bz.CONTROL).indexOf(Bz.CONTROL_CHANGE) < 0){
		return;
	}
	/*����id����ȡ�����*/
	var sId = BzForm.NTID + BzUtl.getAttr(oE,"name").trim();
	var oDiv = BzUtl.$(sId);
	var box = BzUtl.getAttr(oE,Bz.BOX);
	if(null == box || "" == box || null == BzUtl.$(box)){
		if(sRs === ""){
			if(oDiv !== null){/*ͨ��У�飬�������ɾ����ʾ��*/
				BzUtl.delE(oDiv,document.body);
			}
		}else{		
			if(oDiv === null){
				oDiv = BzUtl.crtE("div",document.body);
				oDiv.id = sId;
				oDiv.className = "bzNotice";
				var oSt = oDiv.style;/*oStyle����*/
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
			sRs = sRs.replace("�Բ���", "");
			oBox.innerHTML = sRs.replace(/\n/g,"; ");
			BzUtl.setStyle(oBox, "color", "red");
			BzUtl.setStyle(oBox, "visibility", "");
		}				
	}
	
};

/*
 * ��Ԫ�ش������
 * �����������ķ�����ƣ���Ϊ����
 */
BzIn = function(_oE){
	if(!_oE){
		return;
	}
	this.oE = _oE;/*DOM�ڵ�*/	
	this.sValue = this.oE.value;/*�����ֵ*/
	this.sName = "\"" + BzUtl.getAttr(this.oE,Bz.NAME) + "\" ";/*��ʾ�õ������������*/
	this.oReg = null;/*�Ϸ�У���õ���������ʽ*/
	this.oReg2 = null;/*����ʱ�Ϸ�У���õ���������ʽ*/
	this.setReg();
	this.setReg2();	
	this.iMaxLen = null;
	this.iMinLen = null;
	this.sCode = null;
	this.setLen();
	this.chkCase();
	this.replace();
};
/*ת��ȫ�ǰ��*/
BzIn.prototype.chkCase = function(){
	var sCase = BzUtl.getAttr(this.oE,Bz.BCCASE);
	if(sCase == Bz.BCCASE_D){
		this.setValue(BzUtl.chgCase(this.sValue,0));
	}else if(sCase == Bz.BCCASE_S){
		this.setValue(BzUtl.chgCase(this.sValue,1));
	}
};
/*�Զ��滻�ַ�*/
BzIn.prototype.replace = function(){
	var sRep = BzUtl.getAttr(this.oE,Bz.REPLACE);
	var sV = BzUtl.getAttr(this.oE,Bz.REPLACEV);
	var oReg = BzUtl.crtReg(sRep,"g");
	if(sRep !== "" && oReg !== null){
		this.setValue(this.sValue.replace(oReg,sV));
	}
};
/*���������̳���*/
BzIn.prototype.setLen = function(){
	var sMaxLen = BzUtl.getAttr(this.oE,Bz.MAXLEN);	
	if(sMaxLen !== "" && !isNaN(Number(sMaxLen))){
		this.iMaxLen = Number(sMaxLen);
	}
	var sMinLen = BzUtl.getAttr(this.oE,Bz.MINLEN);
	if(sMinLen !== "" && !isNaN(Number(sMinLen))){
		this.iMinLen = Number(sMinLen);
	}
	/*���ñ��볤�ȼ�������*/
	var sCode = BzUtl.getAttr(this.oE,Bz.CODE);
	if(sCode == Bz.CODE_TWO){
		this.sCode = Bz.CODE_TWO;
	}else{
		this.sCode = Bz.CODE_ONE;
	}
	
};
/*���ù���������ʽ����ȡָ���ģ���ȡ����getReg������*/
BzIn.prototype.setReg = function(){
	var sReg = BzUtl.getAttr(this.oE,Bz.REGEXP);
	if(sReg !== ""){
		this.oReg = BzUtl.crtReg(sReg);
	}else{
		var oRs = ["^["];/*����ƴд��װ������ʽ*/
		var sAllow = BzUtl.getAttr(this.oE,Bz.ALLOW);
		if(sAllow !== ""){
			/*����������ַ���Χ*/
			oRs.push(sAllow);
		}else{
			var sRefuse = BzUtl.getAttr(this.oE,Bz.REFUSE);
			if(sRefuse !== ""){
				/*������������ַ���Χ*/
				oRs.push("^");
				oRs.push(sRefuse);
			}else{
				/*û�����ã�ȡ����getReg2����ֵ*/
				this.oReg = this.getReg();
				return;
			}
		}
		oRs.push("]+$");
		this.oReg = BzUtl.crtReg(oRs.join(""));	
	}	
};
/*���ö�̬У�����������ʽ����ȡָ���ģ���ȡ����getReg2������*/
BzIn.prototype.setReg2 = function(){
	var oRs = ["^["];/*����ƴд��װ������ʽ*/
	var sAllow = BzUtl.getAttr(this.oE,Bz.ALLOW);
	if(sAllow !== ""){
		/*����������ַ���Χ*/
		oRs.push(sAllow);
	}else{
		var sRefuse = BzUtl.getAttr(this.oE,Bz.REFUSE);
		if(sRefuse !== ""){
			/*������������ַ���Χ*/
			oRs.push("^");
			oRs.push(sRefuse);
		}else{
			/*û�����ã�ȡ����getReg2����ֵ*/
			this.oReg2 = this.getReg2();
			return;
		}
	}
	oRs.push("]*");
	this.oReg2 = BzUtl.crtReg(oRs.join(""));	
};
/*�����������ʽ��ʼ���������������д������дvalid����*/
BzIn.prototype.getReg = function(){
	return null;
};
/*���������ʱ������ʽ��ʼ��������������Ҫʱ��д������дinValid����*/
BzIn.prototype.getReg2 = function(){
	return null;
};
/*ͨ�õ���֤�Ƿ�Ϊ��*/
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
/*ͨ�õ���֤�Ƿ�Ϸ�,ʹ��������ʽ�����������Ҫ��������д*/
BzIn.prototype.checkRule = function(){
	if(this.oReg !== null){
		return !this.oReg.test(this.sValue);			
	}
	return false;
};
/*��ȡ�����ַ����ĳ���*/
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
/*��ȡʣ�������ĳ���*/
BzIn.prototype.getReLen = function(){
	if(this.iMaxLen === null){
		return "";
	}
	return this.iMaxLen - this.getLen(this.sValue);	
}; 
/*ȷ����󳤶�*/
BzIn.prototype.checkMaxLen = function(){
	if(this.iMaxLen === null){
		return false;
	}
	return this.getLen(this.sValue) > this.iMaxLen;	
};
/*ȷ���Ƿ���󳤶�*/
BzIn.prototype.isMaxLen = function(){
	if(this.iMaxLen === null){
		return false;
	}
	return this.getLen(this.sValue) >= this.iMaxLen;	
};
/*��ȡ��������󳤶ȵ���ַ���*/
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
/*ȷ����̳���*/
BzIn.prototype.checkMinLen = function(){
	if(this.iMinLen === null){
		return false;
	}
	return this.getLen(this.sValue) < this.iMinLen;		
};
/*ͨ��һ���Լ��*/
BzIn.prototype.checkEqual = function(){
	var sTarget = BzUtl.getAttr(this.oE,Bz.EQUAL);/*��ȵ�Ŀ������*/
	var sForm = BzUtl.getAttr(this.oE,Bz.FORM);	
	if(sTarget !== "" && sForm !== ""){
		try{
			var oTarget = BzUtl.$fi(BzUtl.$f(sForm),sTarget);/*Ŀ�����ڵ�*/
			var sTgValue = oTarget.value;/*Ŀ�������ֵ*/
			return sTgValue != this.sValue;
		}catch(e){
			return true;
		}
	}
	return false;
};
/*��ͬ�������ݵĸ���У�飬���������д*/
BzIn.prototype.selfValid = function(){
	return "";
};
/*��������������ȡֵ*/
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
/*����ֵ��Ĵ���,������Ҫʱ�̳�*/
BzIn.prototype.afterSetValue = function(sOld,sNew){
	return;
};
/*inputValid����ʱУ�飬��������������ʱ��д*/
BzIn.prototype.inValid = function(){
	if(this.oReg2 === null){
		return this.sValue;
	}
	var oRs = this.oReg2.exec(this.sValue);/*ƥ����*/
	if(oRs === null || oRs[0] === null){
		return "";
	}else{
		return oRs[0];
	}
};
/*����ʱ���Ʒ�������������������ʱ��д*/
BzIn.prototype.limit = function(){
	var sRs = this.inValid();/*����У���Ľ��*/
	sRs = this.cutMaxLen(sRs);
	this.setValue(sRs);	
};
/*����򵥸�У�飬changValidate����ͳһУ�����û���������������һ����У��*/
BzIn.prototype.chgValid = function(){
	var oRs = [],sRs;/*Ч����*/
	if(this.checkNull()){/*�ǿ�У��*/		
		oRs.push(this.genNotice(Bz.NT_NOTNULL,Bz.NT_NOTNULL_D));
	}
	if(this.sValue !== null && this.sValue.trim() !== ""){
		if(this.checkRule()){/*�Ϸ�����У��*/
			oRs.push(this.genNotice(Bz.NT_INVALID,Bz.NT_INVALID_D));
		}
		if(this.checkMaxLen()){/*��󳤶�У��*/
			oRs.push(this.genNotice(Bz.NT_MAXLEN,Bz.NT_MAXLEN_D,this.iMaxLen));
		}
		if(this.checkMinLen()){/*��С����У��*/
			oRs.push(this.genNotice(Bz.NT_MINLEN,Bz.NT_MINLEN_D,this.iMinLen));
		}	
		sRs = this.selfValid();/*��������У��*/	
		if(sRs !== ""){
			oRs.push(sRs);
		}
	}	
	return oRs.join("\n");
};
/*ͳһ��У����*/
BzIn.prototype.valid = function(){
	this.setValue(this.sValue.trim()); 
	var oRs = [];/*Ч����*/
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
/*У��ʧ�ܺ���,������Ҫʱ��д*/
BzIn.prototype.falseDeal = function(){};
/*У��ʧ�ܺ�������ʾ��generateNotice*/
BzIn.prototype.genNotice = function(sNtAttr,sNtDf){
	try{
		var sTmplet = BzUtl.getAttr(this.oE,sNtAttr);/*sTempletģ��*/
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
	return this.sName + "�����뷢��δ����Ĵ���";
};



/*
 * ����������֤�࣬�̳�BzIn
 */
BzInNum = function(oE){
	BzIn.call(this,oE);
};
BzInNum.prototype = new BzIn();
/*ȷ����ֵ�ķ�Χ*/
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
/*��дgetReg����*/
BzInNum.prototype.getReg = function(){
	return Bz.REG_NUMBER;
};
/*��дgetReg2����*/
BzInNum.prototype.getReg2 = function(){
	return Bz.REG_NUMBER2;
};
/*��дselfValid����*/
BzInNum.prototype.selfValid = function(){
	var sRs;/*У����*/
	sRs = this.checkRange();
	if(sRs !== ""){
		return sRs;
	}
	return "";
};

/*
 * ����У���࣬�̳�BzInNum��
 */
BzInNumInt = function(oE){
	BzInNum.call(this,oE);
};
BzInNumInt.prototype = new BzInNum();
/*��дgetReg����*/
BzInNumInt.prototype.getReg = function(){
	return Bz.REG_INT;
};
/*��дgetReg2����*/
BzInNumInt.prototype.getReg2 = function(){
	return Bz.REG_INT2;
};

/*
 * ������У���࣬�̳�BzInNum��
 */
BzInNumFlt = function(oE){
	BzInNum.call(this,oE);
};
BzInNumFlt.prototype = new BzInNum();
/*��дgetReg����*/
BzInNumFlt.prototype.getReg = function(){
	return Bz.REG_FLOAT;
};
/*��дgetReg2����*/
BzInNumFlt.prototype.getReg2 = function(){
	var sDigit = BzUtl.getAttr(this.oE,Bz.DIGIT);
	if(sDigit !== "" && !isNaN(Number(sDigit))){
		var oRs = ["^-?\\d+(\\.\\d{0,"];/*ƴд��װ������ʽ*/
		oRs.push(sDigit);
		oRs.push("})?|-?");		
		return BzUtl.crtReg(oRs.join(""));
	}
	return Bz.REG_FLOAT2;
};

/*
 * BzInString �ַ���У���࣬�̳�BzIn��
 */
BzInStr = function(oE){
	BzIn.call(this,oE);
};
BzInStr.prototype = new BzIn();
/*��дgetReg����*/
BzInStr.prototype.getReg = function(){
	return Bz.REG_STRING;
};
/*��дgetReg2����*/
BzInStr.prototype.getReg2 = function(){
	return Bz.REG_STRING2;
};


/*
 * BzInStrPwd ����У���࣬�̳�BzInStr��
 */
BzInStrPwd = function(oE){
	BzInStr.call(this,oE);
};
BzInStrPwd.prototype = new BzInStr();
/*��дgetReg����*/
BzInStrPwd.prototype.getReg = function(){
	return Bz.REG_PWD;
};
/*��дgetReg2����*/
BzInStrPwd.prototype.getReg2 = function(){
	return Bz.REG_PWD2;
};
BzInStrPwd.prototype.falseDeal = function(){
	this.setValue("");
	if(this.checkEqual()){
		/*��һ����һ�µ�����ͬ�����*/
		try{
			var sTarget = BzUtl.getAttr(this.oE,Bz.EQUAL);
			var sForm = BzUtl.getAttr(this.oE,Bz.FORM);	
			BzUtl.$fi(BzUtl.$f(sForm),sTarget).value = "";		
		}catch(e){}
	}
};
/*
 * BzInStrEmail EmailУ���࣬�̳�BzInStr��
 */
BzInStrEml = function(oE){
	BzInStr.call(this,oE);
};
BzInStrEml.prototype = new BzInStr();
/*��дgetReg����*/
BzInStrEml.prototype.getReg = function(){
	return Bz.REG_EMAIL;
};
/*��дgetReg2����*/
BzInStrEml.prototype.getReg2 = function(){
	return Bz.REG_EMAIL2;
};

/*
 * BzInStrIdCard ���֤У���࣬�̳�BzInStr��
 */
BzInStrIdc = function(oE){
	BzInStr.call(this,oE);
};
BzInStrIdc.prototype = new BzInStr();
/*��дgetReg����*/
BzInStrIdc.prototype.getReg = function(){
	return Bz.REG_IDCARD;
};
/*��дgetReg2����*/
BzInStrIdc.prototype.getReg2 = function(){
	return Bz.REG_IDCARD2;
};

/*
 * BzInStrUrl URLУ���࣬�̳�BzInStr��
 */
BzInStrUrl = function(oE){
	BzInStr.call(this,oE);
};
BzInStrUrl.prototype = new BzInStr();
/*��дgetReg����*/
BzInStrUrl.prototype.getReg = function(){
	return Bz.REG_URL;
};
/*��дgerReg2����*/
BzInStrUrl.prototype.getReg2 = function(){
	return Bz.REG_URL2;
};
/*��дselfValid����*/
BzInStrUrl.prototype.selfValid = function(){
	var sUrl = this.sValue;
	if(!sUrl){return "";}
	
	var oRs = [],oMtRs,sRs,iRs;/*У����*/ 
	
	if(!Bz.REG_URL_1.test(sUrl)){
	   oRs.push(this.sName + "������'http:\/\/'��'https:\/\/'��ͷ");	   
	}
	
	oMtRs = sUrl.match(Bz.REG_URL_2);
	
	if(oMtRs !== null){
		sRs = oMtRs[0].replace(Bz.REG_URL_3,"");
		if(sRs.startWith("0")){
			 oRs.push(this.sName + "�˿ںŲ�����0��ͷ");	   
		}
		iRs = Number(sRs);
		if(isNaN(iRs)){
			oRs.push(this.sName + "�˿ںű���Ϊ����");
		}else{
			if(iRs<1 || iRs >65535){
				oRs.push(this.sName + "�˿ںű���Ϊ������Ӧ��1��65535֮��!");
			}
		}
	}	
	return oRs.join("\n");	
};
/*
 *BzInText �ı�У���࣬�̳�BzIn
 */
BzInText = function(oE){
	BzIn.call(this,oE);
	if(arguments.length === 0){
		return;
	}
	this.iMaxLine = null;/*�������*/
	this.iLineLen = null;/*ÿ������ַ���*/	
	this.bNullLine = true;/*bNullLine �Ƿ��������*/
	this.bReptLine = true;/*bRepeatLine �Ƿ������ظ���*/	
	this.oLenCt = null;/*���ȼ�����*/
	this.oLineCt = null;/*����������*/	
	this.bSpace = true;/*�Ƿ�����ÿ����λ����*/		
	/*�ֱ��ʼ����������*/	
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
	/*���ó�ʼ���ȺͿ��*/	
	this.setCt();			
};
BzInText.prototype = new BzIn();
/*��дsetReg����*/
BzInText.prototype.setReg = function(){
	var sReg = BzUtl.getAttr(this.oE,Bz.REGEXP);
	if(sReg !== ""){
		this.oReg = BzUtl.crtReg(sReg);
	}else{
		var oRs = ["^["];/*����ƴд��װ������ʽ*/
		var sAllow = BzUtl.getAttr(this.oE,Bz.ALLOW);
		if(sAllow !== ""){
			/*����������ַ���Χ*/
			oRs.push(sAllow);
			oRs.push("\r\n");/*��ӿ������뻻�з�*/
		}else{
			var sRefuse = BzUtl.getAttr(this.oE,Bz.REFUSE);
			if(sRefuse !== ""){
				/*������������ַ���Χ*/
				oRs.push("^");
				oRs.push(sRefuse);
			}else{
				/*û�����ã�ȡ����getReg2����ֵ*/
				this.oReg = this.getReg();
				return;
			}
		}
		oRs.push("]+$");
		this.oReg = BzUtl.crtReg(oRs.join(""));	
	}	
};
/*��дsetReg2����*/
BzInText.prototype.setReg2 = function(){
	var oRs = ["^["];/*����ƴд��װ������ʽ*/
	var sAllow = BzUtl.getAttr(this.oE,Bz.ALLOW);
	if(sAllow !== ""){
		/*����������ַ���Χ*/
		oRs.push(sAllow);
		oRs.push("\r\n");/*��ӿ������뻻�з�*/
	}else{
		var sRefuse = BzUtl.getAttr(this.oE,Bz.REFUSE);
		if(sRefuse !== ""){
			/*������������ַ���Χ*/
			oRs.push("^");
			oRs.push(sRefuse);
		}else{
			/*û�����ã�ȡ����getReg2����ֵ*/
			this.oReg2 = this.getReg2();
			return;
		}
	}
	oRs.push("]*");
	this.oReg2 = BzUtl.crtReg(oRs.join(""));	
};
/*��дgetReg����*/
BzInText.prototype.getReg = function(){
	return Bz.REG_TEXT;
};
/*��дgetReg2����*/
BzInText.prototype.getReg2 = function(){
	return Bz.REG_TEXT2;
};
/*getLine����text����,����\n���ŵ�����*/
BzInText.prototype.getLine = function(){
	var sStr = this.sValue;
	if(sStr === ""){
		return 0;
	}
	var rStr = sStr.replace(/\n/g,"");
	return (sStr.length - rStr.length + 1);	
};
/*checkLine��֤�Ƿ񳬹��������*/
BzInText.prototype.checkLine = function(){
	if(this.iMaxLine !== null){
		return this.getLine() > this.iMaxLine;
	}	
	return false;	
};
/*setLenCounter�����ó��ȼ�����*/
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
/*��дselfValid����*/
BzInText.prototype.selfValid = function(){
	
	if(!this.sValue){return "";}
			
	var sV = this.sValue.replace(/\r\n/g,"\n");	
	
	sV = sV.replace(/ *\n/g,"\n");/*��Ч���к�ո����Ч��βɾ��*/	
	if(!this.bSpace){/*�ո�ɾ��*/
		sV = sV.replace(/\n */g,"\n").replace(/^ */,"");
		sV = sV.replace(/ +/g," ");/*����ո񻻳�1��*/
	}
	this.setValue(sV);
	this.setCt();
	
	var oRs = [];/*У����*/ 
	/*�������У��*/
	if(this.checkLine()){
	   oRs.push(this.genNotice(Bz.NT_MAXLINE,Bz.NT_MAXLINE_D,this.iMaxLine));	   
	}	
	sV = sV.replace(/\n *\n/g,"\n\n");		
	/*�Ƿ��п���У��*/
	if(!this.bNullLine){
		if(sV.indexOf("\n\n") > -1){
			oRs.push(this.sName + "���ڿ���");	
		}		
	}
	/*ÿ���������У��*/
	if(this.iLineLen !== null){
		var oL = sV.split("\n");
		for(var k=0;k<oL.length;k+=1){
			if(this.getLen(oL[k]) > this.iLineLen){
				oRs.push(this.genNotice(Bz.NT_LINELEN,Bz.NT_LINELEN_D,k+1+"",this.iLineLen));	
			}
		}
	}		
	/*�Ƿ����ظ���У��*/
	if(!this.bReptLine){
		var oLine = sV.split("\n"),sLine;/*ÿ�е�����*/
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
	/*checkPreLine ÿ�й���У��*/
	var sCPL = this.chkPreLine();
	if(sCPL !== ""){
		oRs.push(sCPL);	
	}			
	return oRs.join("\n");
};
BzInText.prototype.chkPreLine = function(){
	return "";
};
/*20080326��ӣ�����Ϊ�Զ�ɾ���ظ��ж�����У��*/
BzInText.prototype.delRepeatLine = function(){

	if(!this.sValue){return;}
			
	var sV = this.sValue.replace(/\r\n/g,"\n");	
	
	sV = sV.replace(/ *\n/g,"\n");/*��Ч���к�ո����Ч��βɾ��*/
	
	var oLine = sV.split("\n"),sLine;/*ÿ�е�����*/
		
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

/*��д��̬У�鷽�� inputValid*/
BzInText.prototype.inValid = function(){
	if(this.oReg2 === null){
		return this.sValue;
	}
	var oRs = this.oReg2.exec(this.sValue);/*ƥ����*/
	var sV,sTmp;/*sValue,sTemp*/
	if(oRs === null || oRs[0] === null){
		return "";
	}else{
		sV = oRs[0];
	}		
	sV = sV.replace(/\r\n/g,"\n");	
	/*�ո�ɾ��*/			
	if(!this.bSpace){
		sV = sV.replace(/ {1,}/g," ");/*����ո񻻳�1��*/
		var oTmp1 = sV.split("\n");
		if(oTmp1.length>1){
			var oTmp2 = [];
			/*20080325�޸ģ�ֻ�Զ�ɾ���ײ��Ŀո�
			for(var j=0;j<oTmp1.length-1;j+=1){/���һ��ǰ���׿ո�ȫ��ɾ��/
				oTmp2.push(oTmp1[j].trim());			
			}
			oTmp2.push(oTmp1[oTmp1.length-1]);
			*/
			/*�·���*/
			for(var j=0;j<oTmp1.length-1;j+=1){/*���һ��ǰ���׿ո�ȫ��ɾ��*/
				oTmp2.push(oTmp1[j].lTrim());			
			}	
			oTmp2.push(oTmp1[oTmp1.length-1]);
			sV = oTmp2.join("\n");		
		}		
	}
	/*ÿ����󳤶ȿ���*/
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
	/*�ظ��п���*/	
	if(!this.bReptLine){
		var oLine = sV.split("\n"),sLine;/*ÿ�е�����*/
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
	/*ɾ����*/
	if(!this.bNullLine){		
		sTmp = sV;
		sTmp = sTmp.replace(/\n+/g,"\n");
		sTmp = sTmp.replace(/^\n/,"");
		if(sV != sTmp){
			sV = sTmp;
			this.setValue(sV);			
		}		
	}			
	/*ɾ������У�����ɾ�м�Ŀ��У����û�У�ɾ�����*/
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
 * BzInDate �ַ���У���࣬�̳�BzIn��
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
/*��дsetReg����*/
BzInDate.prototype.setReg = function(){
	var sReg = BzUtl.getAttr(this.oE,Bz.REGEXP);
	if(sReg !== ""){
		this.oReg = BzUtl.crtReg(sReg);
	}else{
		/*�������ڸ�ʽ*/
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
/*��дsetReg2����*/
BzInDate.prototype.getReg2 = function(){
	/*�������ڸ�ʽ*/
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
/*����ר�õģ���ȡָ��λ�õ���ֵ*/
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
/*����ʱ������*/
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
/*����ʱ������*/
BzInDate.prototype.getDate = function(){
	if(this.valid() === ""){/*У��Ϸ��ŷ�����ȷ����*/
		return this.getDateArray();
	}
	return [NaN,NaN,NaN,NaN,NaN];
};
/*��дselfValid*/
BzInDate.prototype.selfValid = function(){
	var oRs = [];
	/*��ȡ����ʱ�䲢У��*/
	var oDt = this.getDateArray();
	var iYear = oDt[0];
	var iMonth = oDt[1];
	var iDay = oDt[2];
	var iHour = oDt[3];
	var iMin = oDt[4];
	if((!isNaN(iMonth)) && (!isNaN(iDay))){
		if(iDay > BzInDate.oDtVld[iMonth-1]){
			oRs.push([this.sName,"����Ƿ���",iMonth,"��û��",iDay, "��"].join(""));
		}
		if((!isNaN(iYear)) && iMonth == 2 && iDay == 29){
			if(!((iYear % 400 === 0)||(iYear % 4 === 0)&&(iYear % 100 !== 0))){
				oRs.push([this.sName,"����Ƿ���",iYear,"��",iMonth,"��û��",iDay, "��"].join(""));
			}
		}
	}
	if((!isNaN(iHour)) && (iHour < 0 || iHour > 23)){
		oRs.push([this.sName,"Сʱ��������Χ"].join(""));
	}
	if((!isNaN(iMin)) && (iMin < 0 || iMin > 59)){
		oRs.push([this.sName,"������������Χ"].join(""));
	}
	if(!isNaN(iYear)){
		/*�ж���ֹʱ��*/
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
		/*�ж�����ʱ��*/
		var sTgt = BzUtl.getAttr(this.oE,Bz.DT_BEHIND);
		var sF = BzUtl.getAttr(this.oE,Bz.FORM);
		if(sTgt !== "" && sF !== ""){
			var oTgtE = BzUtl.$fi(BzUtl.$f(sF),sTgt);
			if(oTgtE !== null){
				var oTgt = BzInFactory.create(oTgtE);
				var oTDt = oTgt.getDate();/*��oDt��*/
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
 * BzIn����������������ͳ�ʼ������
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
 * Ajax������
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
/*���������formԪ����װ����*/
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
/*�ύform,�����,�ص������͸��Ӳ���*/
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
