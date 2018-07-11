$(function() {
	var sugurl = $("#q").attr('sugurl');
	addAutoCompleteInput("#q",sugurl,186,"14px","flpage");
	$("#close").click(function(){
		$("#q").attr('value','');
		}
	);
	
	$("#q").click(function(){
		if($("#q").attr('value')=='请输入搜索内容') $("#q").attr('value','');
		}
	);

	$("#submitimg").click(function(){
		if($.trim($("#q").val())==''){
			var inputurl = $("#searchForm").attr("inputaction");
			if(inputurl != null && inputurl != ''){
				$("#searchForm").attr("action",inputurl);
			}
		}
		$("#searchForm").submit();
	}
	);
	
	$("#q").keypress(function(event){
		if(event.keyCode == 13){
			if($.trim($("#q").val())==''){
				var inputurl = $("#searchForm").attr("inputaction");
				if(inputurl != null && inputurl != ''){
					$("#searchForm").attr("action",inputurl);
				}
			}
			return true;
		}
	}
	);
	
	$("#more1").click(function(){
		$("#list4").hide();
		$("#list1").hide();
		$("#list3").hide();
		$("#list2").show();
		$("#btn1").attr('class','link');
		$("#btn2").attr('class','hover');
		$("#btn3").attr('class','link');
		$("#btn4").attr('class','link');
	   }
	);
	
	$("#more2").click(function(){
		$("#list4").hide();
		$("#list1").hide();
		$("#list2").hide();
		$("#list3").show();
		$("#btn1").attr('class','link');
		$("#btn2").attr('class','link');
		$("#btn3").attr('class','hover');
		$("#btn4").attr('class','link');
	}
	);
	
	$("#more3").click(function(){
		$("#list3").hide();
		$("#list1").hide();
		$("#list2").hide();
		$("#list4").show();
		$("#btn1").attr('class','link');
		$("#btn2").attr('class','link');
		$("#btn3").attr('class','link');
		$("#btn4").attr('class','hover');
	}
	);
	
	$(".list_btn").click(function(){
		if(this.value=='免费'||this.value=='立即购买'){
			this.parentNode.innerHTML='<span><img src="image/ico.gif" width="94" height="21" /></span>';
		}else{
			this.value='立即购买';
		}
	}
	)
});

/*
十三妖
qq:181907667
msn:wl181907667@hotmail.com
邮箱:thirdteendevil@163.com
*/
function scrollDoor(){
}
scrollDoor.prototype = {
 sd : function(menus,divs,openClass,closeClass){
  var _this = this;
  if(menus.length != divs.length)
  {
   alert("菜单层数量和内容层数量不一样!");
   return false;
  }    
  for(var i = 0 ; i < menus.length ; i++)
  { 
	if(_this.$(menus[i]) != null){
   _this.$(menus[i]).value = i;    
   _this.$(menus[i]).onmouseover = function(){
     
    for(var j = 0 ; j < menus.length ; j++)
    {  
     if(_this.$(menus[j]) != null){    
     _this.$(menus[j]).className = closeClass;
     _this.$(divs[j]).style.display = "none";
     }
    }
    _this.$(menus[this.value]).className = openClass; 
    _this.$(divs[this.value]).style.display = "block";    
   }
  }
  }
  },
 $ : function(oid){
  if(typeof(oid) == "string")
  return document.getElementById(oid);
  return oid;
 }
}
