$(function(){		   
	$(window).resize(sjbh);	
});

function sjbh(){
 var legz = $(".loadMack").length;
 if(legz>0){loadMack({})}
}

//璋冪敤鏂规硶涓€

function loadMf(obj){
   loadMack({off:'on',Limg:0,Mack:0,text:'姝ｅ湪鍔犺浇椤甸潰...'});
   obj.load(function(){
	   loadMack({off:'off'});
   });	
}

//涓绘柟娉�
function loadMack(obj){
    
	if(obj.off=="off"){
		
		$(".loadMack,.loadCon").fadeOut("800",function(){
           $(this).remove();
        }); 
		return;
	}
	
	var wbod= document.documentElement.clientWidth || document.body.clientWidth;
	var hwid = document.documentElement.clientHeight || document.body.clientHeight;
	var hbod= $("body").height();
    var bjh='';
    var bjw='';

	var Wtext = (getByteLen(obj.text)*15+40)/2;
	
	if(obj.Limg==undefined){obj.Limg = '<img style="margin:10px auto;display:block;" src="/static/js/plug-in/load/loading_wb.gif" width="48" height="48" />';}else{obj.Limg='';}
	if(obj.text==undefined){obj.text = "鍔犺浇涓�...";}
	if(obj.set==undefined){obj.set=0}

    if(obj.Mack==undefined){obj.Mack = '<div class="loadMack" style="width:'+wbod+'px;height:100%;"></div>';}else{obj.Mack='';}


	if(hbod>hwid){bjh=hbod}else{bjh=hwid};
	var leg = $(".loadMack").length;
	if(leg>0){
	   $(".loadMack").css({"height":"100%"});
	   $(".loadCon").css({"left":""+(wbod/2-Wtext)+"px","top":""+(hwid/2-100)+"px"});
	}else{
       
	   	if(obj.x==undefined){obj.x = wbod/2-Wtext}
	    if(obj.y==undefined){obj.y = hwid/2-100}
       $("body").append(''+obj.Mack+'<div style="left:'+obj.x+'px;top:'+obj.y+'px;" class="loadCon">'+obj.Limg+'<p style="text-align:center;font-size:14px;margin: 0;">'+obj.text+'</p></div>');

	}
	var loadConW = $(".loadCon").outerWidth();
	var loadConH = $(".loadCon").outerHeight();
	$(".loadCon").css({ "left": (wbod / 2 - loadConW/2) + "px"});
    
    if(obj.set!==0){
	   setTimeout(function(){
		  
		 $(".loadMack,.loadCon").fadeOut("800",function(){
           $(this).remove();
		   return;
         }); 
		     
	   },obj.set);
	   	
	}
	
	function getByteLen(val) {
		if(!val){val=0}
		var len = 0;
		for (var i = 0; i < val.length; i++) {
			if (val.charAt(i).match(/[^\x00-\xff]/ig) != null) //鍏ㄨ 
				len += 2; //濡傛灉鏄叏瑙掞紝鍗犵敤涓や釜瀛楄妭
			else
				len += 1; //鍗婅鍗犵敤涓€涓瓧鑺�
		}
		return len/2;
	}
	
}