$(window).resize(jsbox_csh);
function jsbox_csh(){
	   var zw = document.documentElement.clientWidth || document.body.clientWidth;
       var zh = document.documentElement.clientHeight || document.body.clientHeight;
//	   var html_h = $("body").height();
//	   alert(html_h);
//	   $('#lightBox').height(html_h);
}
//$(window).ready(jsbox);


var jsbox = function(_options){
  
  var options_ =$.extend({
		 onlyid:"",//寮瑰嚭灞侷D
		 content:false,//鍐呭	
		 url:"",//鏁版嵁鍦板潃
		 url_css:false,//鏍峰紡琛ㄥ湴鍧€
		 iframe:false,//浣跨敤iframe
		 ajax:false,//浣跨敤ajax
		 loads:false,//浣跨敤load
		 title:false,//鏍囬
		 footer:false,//搴曢儴
	     drag:false,//鎷栧姩
	     slide:false,//寮瑰嚭鍚戜笅婊氬姩
		 conw:200,//瀹藉害
		 //conh:400,//楂樺害
		 FixedTop:false,//寮瑰嚭灞傚嚭鐜颁綅缃�
		 FixedLeft:false,//寮瑰嚭灞傚嚭鐜颁綅缃�
		 Opacity:.4,//閫忔槑搴�
		 mack:false,//閬僵
		 range:false,//绉诲姩鑼冨洿
		 Save_button:false,//淇濆瓨鎸夐挳
		 Ok_button:false,//纭畾鎸夐挳
		 sd:"slow",//寮瑰嚭閫熷害
		 Close:true,
		 buttonCon:false,
		 functions:false,//杩斿洖鍑芥暟
		 Fun:false,//鍔犺浇瀹屾瘯鍥炶皟鏂规硶
		 FunData:false,
		 loadIcon:'cj/jsbox/images_jsbox/loading.gif',//鍔犺浇鎻愮ず鍥剧墖璺緞
		 error:'<h3>Error 404</h3>'//ajax鎶ラ敊淇℃伅
  }, _options || {});
  
  var zw = document.documentElement.clientWidth || document.body.clientWidth;
  var zh = document.documentElement.clientHeight || document.body.clientHeight;
  var optionsID = new Date().getTime();
  //var options = ".jsbox";
  var options = ".jsbox"+optionsID;
  this.show = function(){
          $("#"+options_.onlyid).remove();
		  
		  var wc="";
		  (options_.FixedLeft!=false)?wc = options_.FixedLeft:wc = zw/2- options_.conw/2;
		   
		  var hc="";	 
		  (options_.FixedTop!=false)? hc = options_.FixedTop:hc = zh/2- 150;
		  
		  (options_.buttonCon!=false)? options_.buttonCon = options_.buttonCon:options_.buttonCon = "纭畾";
		
		  var $show = $(options);
		  var $tdcon = $('.centerCenter');
		  var jsboxContent = $('.jsboxContent');
		  var loading = $('<div class="loading"></div>');
		  //var urlcss = $('<link rel="stylesheet" type="text/css" href="../../../../js/plug-in/jsbox/'+options_.url_css+'.css" />');
		  var save_button = $("<label class='jsboxAn_save'><input type='button' onClick='"+options_.Save_button+"' value='"+options_.buttonCon+"'></label>");
		  var ok_button = $("<label class='jsboxAn_ok'><input type='button' onClick='"+options_.Ok_button+"' value='"+options_.buttonCon+"'></label>");
		  if(options_.Close == true){
		       var Close = '<a href="javascript:void(0)" title="鍏抽棴" class="jsbox_close">';
		  }else{
			   var Close = '<a style="display:none;" href="javascript:void(0)" title="鍏抽棴" class="jsbox_close">';
			  }
		  var boxtitle = $('<h2 class="jsboxTitle">'+options_.title+'</h2>'+Close+'</a>');
		  var boxfooter = $("<div class='jsboxFooter'><label class='jsboxAn_Cancel'><input class='Cancel' type='button' value='鍙栨秷'></label></div>");
		  var zon = "<div class=\"popupComponent "+options_.onlyid+"_lightBox\" id=\"lightBox\"><div class=\"popupCover\"></div></div>";
		  var con = "<div id='"+options_.onlyid+"' class='jsbox jsbox"+optionsID+"'>"+
					"<div class='jsboxContent' style='width:"+options_.conw+"px;height:"+options_.conh+"px;'></div>"+
					"</div>";
					
		  if(options_.mack != false){
		  	  var isclass = $('.popupComponent').is("."+options_.onlyid+"_lightBox");
		  	  if(!isclass){
                  var leng = $('.popupComponent').length+1;
	              var $zon = $(zon).appendTo('body').fadeTo("500", 1);
	              $zon.css({'zIndex':(leng*100+1000)-10});
	              var html_h = $("body").height();
	              var wid_h = $(window).height();
	              var mack_h = '';
	              if(html_h>wid_h){mack_h=html_h}else{mack_h=wid_h};
	              $('.'+options_.onlyid+'_lightBox').show().height(mack_h);
		  	  }
              
		  }
		  
          var Tollp = $("html").scrollTop() || document.body.scrollTop | document.documentElement.scrollTop;
          var leng = $('.jsbox').length+1;
          var $con = $(con).appendTo('body');
          $con.css({'zIndex':(leng*100+1000)});
          //$('body').css('overflow','hidden');


          $(options).css({top:hc+Tollp-50,left:wc-10}); //淇敼宸﹀畾浣嶏細left:wc
          var t = hc+Tollp-50;
          //$('.jsboxContent').css('margin-top',t+'px');
          $(".topLeft,.topCenter,.topRight,.centerLeft,.centerRight,.bottomLeft,.bottomCenter,.bottomRight").fadeTo(20, options_.Opacity);
		  
		  
		  var iframeh;
		  if(options_.title != false && options_.footer != false){
			  $('.jsboxContent',options).append(boxtitle);
			  $('.jsboxContent',options).append(boxfooter);
			  if(options_.Save_button != false){$(".jsboxFooter",options).prepend(save_button);}
			  if(options_.Ok_button != false){$(".jsboxFooter",options).prepend(ok_button);}
			  iframeh = options_.conh - 69;
		  }else if(options_.title != false){
			  $('.jsboxContent',options).append(boxtitle);
			  iframeh = options_.conh - 30;
		  }else if(options_.footer != false){
			  $('.jsboxContent',options).append(boxfooter);
			  iframeh = options_.conh - 40;
			  if(options_.Save_button != false){$(".jsboxFooter",options).prepend(save_button);}
			  if(options_.Ok_button != false){$(".jsboxFooter",options).prepend(ok_button);}
		  }else{iframeh = options_.conh}
		  
		  var iframe = $('<iframe name="jsboxFrame" class="iframebox" style="width:100%; height:'+(iframeh-70)+'px;" frameborder="no" border="0"></iframe>');
		  var ajaxcon = $('<div class="jtycom" style="width:100%; height:'+iframeh+'px;"></div>');
		  var loaddiv = $('<div class="loaddiv" style="display:block; height:'+iframeh+'px;"></div>');
		  var content = $('<div class="loaddiv" style="display:block; height:'+iframeh+'px;">'+options_.content+'</div>');
		  
		    if(options_.url != false && options_.iframe != false){
				$('.jsboxContent',options).append(loading);

				if(options_.footer != false){
				    $(".jsboxFooter",options).before(iframe);
				}else{
				    $('.jsboxContent',options).append(iframe);
				}
				
				$('.iframebox',options).hide().attr("src",options_.url);
				$('.iframebox',options).load(function(){
				    $(this).show();
					$(".jsboxFooter",options).show();
					loading.fadeTo(500,0).hide();
				}); 
		    }else if(options_.url != false && options_.ajax != false){
				$('.jsboxContent',options).append(loading);
				
				$.ajax({
					   url:options_.url,
					   type:'GET',
					   dataType:'json',
					   error:function(){
						 $('.jsboxContent',options).html(options_.error);
					   },
					   success:function(date){
						   
						   if(options_.url_css != false){
							   //鍔犺浇鏍峰紡琛�
							   if ($("link[href$='"+options_.url_css+".css']").length == 0){
								 var css_href = options_.url_css+'.css';
								 var styleTag = document.createElement("link");
								 styleTag.setAttribute('type', 'text/css');
								 styleTag.setAttribute('rel', 'stylesheet');
								 styleTag.setAttribute('href', css_href);
								 $("head")[0].appendChild(styleTag);
								}
						   }
						   
						   $('.jsboxContent',options).append(ajaxcon); 
						   loading.fadeTo(500,0).hide();
						   if(options_.footer != false){
							    $(".jsboxFooter",options).show();
								$('.jsboxContent',options).append(boxfooter);
						   }else{
								$('.jsboxContent',options).append(ajaxcon);
						   }
						   if(options_.content!=false){options_.content(date)};
						}
			    });
			  
		    }else if(options_.url != false && options_.loads != false){
			    //if(options_.url_css!=false){$('head').append(urlcss)}
				$('.jsboxContent',options).append(loading);
				if(options_.url_css != false){
					//鍔犺浇鏍峰紡琛�
					if ($("link[href$='"+options_.url_css+".css']").length == 0){
					 var css_href = options_.url_css+'.css';
					 var styleTag = document.createElement("link");
					 styleTag.setAttribute('type', 'text/css');
					 styleTag.setAttribute('rel', 'stylesheet');
					 styleTag.setAttribute('href', css_href);
					 $("head")[0].appendChild(styleTag);
					}
				}
				
				
				
				if(options_.footer != false){
				    $(".jsboxFooter",options).before(loaddiv);
				}else{
				    $('.jsboxContent',options).append(loaddiv);
				}
				
				//$('.jsboxContent',options).append(loading);
				$('.loaddiv',options).load(options_.url,function(){
					   loading.hide();											 
					   $(".jsboxFooter",options).show();
					   
					   if(options_.Fun){
					   	  if(options_.FunData){
					   	     alert(options_.FunData);
                             options_.Fun(options_.onlyid,options_.FunData);
					   	  }else{
					   	  	 options_.Fun(options_.onlyid);
					   	  }
					   }
					   if(options_.functions != false){
						    loadfun();
							$('.loaddiv').css({"background":"none"});
					   }
					   											   
				});
		  }else{
			   
			   if(options_.footer != false){
				    $(".jsboxFooter",options).before(content);
				}else{
				    $('.jsboxContent',options).append(content);
				}
			    $(".jsboxFooter",options).show();		
		  }
		  
		   if(options_.Fun){
		   	  if(options_.FunData){
                     options_.Fun(options_.onlyid,options_.FunData);
			   	}else{
			   	  	 options_.Fun(options_.onlyid);
			   	}
		   }

		   //if(!$show.is(":animated") ){ 
			 if(options_.drag != false){jsbox_yd()}else{jsbox_hd(options_.sd)}
			 if(options_.slide != false){jsbox_hdx()}else{jsbox_hd()}	 
		   //}
		   
           $(".jsboxAn_Cancel",options).die().live('click',function(){
				$(this).parents(options).remove();
				$('.'+options_.onlyid+'_lightBox').remove();
                $('body').css('overflow','auto');
		   });
		   $(".jsbox_close",options).live('click',function(){
				$(this).parents(options).remove();
				$('.'+options_.onlyid+'_lightBox').remove();
                $('body').css('overflow','auto');
		   });
	  
   },
   this.remove = function(){
   		$(options).remove();
		$('.'+options_.onlyid+'_lightBox').remove();
        $('body').css('overflow','auto');
   }


//绉诲姩
var jsbox_yd = function(){
	var _move=false;//绉诲姩鏍囪
	var _x,_y;//榧犳爣绂绘帶浠跺乏涓婅鐨勭浉瀵逛綅缃�
	
	$(".jsboxTitle",options).mousedown(function(e){
		_move=true;
		_x=e.pageX-parseInt($(options).css("left"));
		_y=e.pageY-parseInt($(options).css("top"));
		
		//z-index
		if($(".index_z").length == 0){
		   $("body").append('<input class="index_z"type="hidden" value="1300"/>');
		}
		var zzs = $(".index_z").val()*1+1;
		var zjleng = $(".index_z").val(zzs);
		$(options).css({"z-index":zzs});
        
		
		$('.ud').text(_y);  
		
	});
	
	
		
//	$(".jsboxTitle",options).mouseup(function(e){
//		$('.ud').text('鏀惧紑');  
//	    _move=false;
//	   	
//    });
	
	
	var zsw = $(options).width();
	var zsh = $(options).height();
    
	
	var zws = document.documentElement.clientWidth || document.body.clientWidth;
	var zhs = document.documentElement.clientHeight || document.body.clientHeight;
	var obje = $(options);
	$(document).mousemove(function(e){		
		if(_move){
			
			var ws = zws-zsw;
			var hs = zhs-zsh;
			var x=e.pageX-_x;//绉诲姩鏃舵牴鎹紶鏍囦綅缃绠楁帶浠跺乏涓婅鐨勭粷瀵逛綅缃�
			var y=e.pageY-_y;
			if(options_.range!=false){
				if(x <= 0){x = 0}
				if(x >= ws){x = ws}
				if(y <= 0){y = 0}
				if(y >= hs){y = hs}
			}
			obje.css({top:y,left:x});//鎺т欢鏂颁綅缃�
		}
	}).mouseup(function(){
	   _move=false;
	   return false;
	});	
}
	
function jsbox_hd(sd){
	$(options).fadeIn(sd);
}
function jsbox_hdx(){
	$(options).fadeIn('slow').animate({opacity:'100',top:"+=50"},'slow');					
}

}