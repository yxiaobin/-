function JsBubble(){
				this.Tinfo = {};
		  }
		  JsBubble.prototype ={
			  
			     show:function(Obj){

					 var Dx = Obj.obj || $('body');
					 //Dx.css({'position':'relative'});
					 
					 switch(Obj.type || "top"){
						 case "top":
							 var MaT = parseInt(Dx.css('paddingTop'));
							 var MaB = parseInt(Dx.css('paddingBottom'));
							 var Hc =  Dx.height();
							 var Tops = Dx.offset().top+MaT+MaB+Hc+12;
							 var Lefts = Dx.offset().left;
							 var types = "T";
						 break;
						 case "left":
							 var Wc =  Dx.width();
							 var Tops = Dx.offset().top;
							 var Lefts = Dx.offset().left+Wc+20;
							 var types = "L";
						 break;
						 case "bottom":
							 var Tops = Dx.offset().top-10;
							 var Lefts = Dx.offset().left;
						     var types = "B";  
						 break;
						 case "right":
							 var Tops = Dx.offset().top;
							 var Lefts = Dx.offset().left-60;
							 var types = "R";
						 break;
					 }
					 
					 this.Tinfo = {
					 	 id:Obj.id || parseInt(100*Math.random()), //闅忔満ID
						 obj:Dx,
						 title:Obj.title || "鏃犳爣棰橈紒", //鍐呭
						 data:Obj.data || "", //鍐呭
						 jsonData:Obj.jsonData ||false,//json鏁版嵁杈撳叆
						 type:types, //绫诲瀷
						 url:Obj.url||false,//鏁版嵁鍦板潃
						 loads:Obj.loads||false,//鍔犺浇鏂瑰紡
						 fun:Obj.fun||false,
						 width:Obj.width || "auto",//瀹藉害
						 isArrow:Obj.isArrow || '',
						 Close:Obj.Close || false, //鍒犻櫎鎸夐挳
						 BoColor:Obj.BoColor || "#FEBE8F",   //杈规棰滆壊
						 BaColor:Obj.BaColor || "#EFEFEF",  //绠ご鑳屾櫙棰滆壊
						 CBaColor:Obj.CBaColor || "#fff",  //鍐呭鑳屾櫙棰滆壊
						 TBaColor:Obj.TBaColor || "#EFEFEF", //鏍囬鑳屾櫙棰滆壊
						 TBoColor:Obj.TBoColor || "#EFEFEF", //鏍囬鑳屾櫙棰滆壊
						 top:Tops + (Obj.pytop || 0), //Y鍧愭爣
						 left:Lefts + (Obj.pyleft || 0), //X鍧愭爣
						 zIndex:Obj.zIndex || 9900,  //z-index
						 isBindBodyEvent:Obj.isBindBodyEvent || false  //body鏄惁缁戝畾鍏抽棴寮圭獥鐨勪簨浠�,娣诲姞杩欎釜灞炴€т富瑕佹槸涓轰簡缂栬緫闂嵎鏃讹紝鐐瑰嚮鍙充晶閫昏緫璁剧疆锛圔ubR锛夛紝濡傛灉閲岄潰杩樻湁寮圭獥鐨勮瘽锛岀偣鍑诲脊绐椾細鍚屾椂鍏抽棴鍙充晶閫昏緫璁剧疆鐨勫脊绐楋紝涓轰簡閬垮厤杩欑鎯呭喌灏辫绉婚櫎body鐨刴ouseup浜嬩欢
				     };
					 
					 //alert(Tinfo.top+"<< >>"+Tinfo.left);
					 this.addCon(this.Tinfo); 
				 },
				 addCon:function(Tinfo){
					 
					 
					 switch(Tinfo.type){
						 
						 case "T":
							 var styleT = "border-color:transparent transparent "+Tinfo.BaColor;
							 var styleB = "border-color:transparent transparent "+Tinfo.BoColor;
						 break;
						 case "L":
							 var styleT = "border-color:transparent "+Tinfo.BaColor+" transparent transparent ";
							 var styleB = "border-color:transparent "+Tinfo.BoColor+" transparent transparent ";  
						 break;
						 case "B":
						     var styleT = "border-color:"+Tinfo.BaColor+" transparent transparent transparent";
							 var styleB = "border-color:"+Tinfo.BoColor+" transparent transparent transparent";  
						 break;
						 case "R":
						     var styleT = "border-color:transparent transparent transparent "+Tinfo.BaColor;
							 var styleB = "border-color:transparent transparent transparent "+Tinfo.BoColor;
						 break;
					 }
                     


					 var Close ={};
					 var Cpar = 0;
					 var $title='';
					 
					 if(Tinfo.Close){
					     $Close = $('<a href="javascript:;" class="jsTip_close"></a>');
						 Cpar = 0;
						 $title='<div class="tipTitle" style="background:'+Tinfo.TBaColor+';border-bottom:1px solid '+Tinfo.TBoColor+';">'+Tinfo.title+'</div>';
					 }
					 
					 var $con = $('<div id="'+this.Tinfo.id+'" class="jsBubble_s" style="width:'+Tinfo.width+';left:'+Tinfo.left+'px; top:'+Tinfo.top+'px;z-index:'+Tinfo.zIndex+'">'+
								   '<div class="arrow'+Tinfo.type+'"><div class="arrowt" style="'+styleT+'"></div><div class="arrowb" style="'+styleB+'"></div></div>'+
								   '<div class="tipCon" style="background:'+Tinfo.CBaColor+'; border-color:'+Tinfo.BoColor+'; padding-right:'+Cpar+'px;">'+           
								        $title+
										'<div class="tipCon_t">'+Tinfo.data+'</div>'+
								   '</div>'+
								   //Close+
							 '</div>');
					 
					 //Tinfo.obj.append($con);//杈撳嚭鍐呭
					 $('.jsBubble_s').remove();
					 $('body').append($con);//杈撳嚭鍐呭

					 if(Tinfo.isArrow){$('.jsBubble_s[id="'+this.Tinfo.id+'"] .arrowT').hide();}
					 
					 setTimeout(function(){
						 $con.css({'top':(Tinfo.top+1)+'px'});
					 },1);
                     
					 
					 //寮傛鍔犺浇
					 var loading = $('<div class="loading"></div>');
				     if(Tinfo.url != false && Tinfo.loads != false){
						//if(options_.url_css!=false){$('head').append(urlcss)}
						$('.tipCon_t',$con).append(loading);
						
						//$('.jsboxContent',options).append(loading);
						$('.tipCon_t',$con).load(Tinfo.url,function(){
						    loading.hide();											 
						    if(Tinfo.fun != false){
								Tinfo.fun;
								$('.loaddiv').css({"background":"none"});
						    }															   
						});
				     }
                     
                    //ajax/json
				    if(Tinfo.url != false && Tinfo.ajax != false && Tinfo.fun != false){
                        $('.tipCon_t',$con).append(loading);
						$.ajax({
						    url:Tinfo.url,
						    type:'GET',
						    dataType:'json',
						    error:function(){}, 
						    success:function(data){
						    	loading.hide();	
							    Tinfo.fun(data,$con);
							    $('.loaddiv').css({"background":"none"});
							}
			            });

				    }
                    
                    if(Tinfo.jsonData != false && Tinfo.fun != false){
						Tinfo.fun(Tinfo.jsonData,$con);
				    }
					 					 
					 //鍒犻櫎浜嬩欢
					 if(Tinfo.Close){
						 
                         $con.find('.tipTitle').append($Close);
						 
						 var _this = this;
						 $Close.bind('click',function(){
							 $con.remove();
						 });
						 
					 }
					 
					 //鐐瑰嚮绌虹櫧鍏抽棴
					 $con.bind('mouseup',function(){
						  return false;
					 });
					 if(!Tinfo.isBindBodyEvent){
						$('body').bind('mouseup',function(){
						     $con.remove();
						 });
					 }
					 
					 //楂樺害澶勭悊
					 if(Tinfo.type == "B"){
						var h = Tinfo.top - $("#"+this.Tinfo.id).height();
					    $("#"+this.Tinfo.id).css({top:h+"px"});
					 }
					 //瀹藉害澶勭悊
					 if(Tinfo.type == "R"){
						var w = Tinfo.left - $("#"+this.Tinfo.id).width();
					    $("#"+this.Tinfo.id).css({left:w+"px"});
					 }
					 
					 		 
				 },
				 autoTop:function(){
                    var _this = this;
					$('#'+this.Tinfo.id).css({'top':(_this.Tinfo.obj.offset().top+_this.Tinfo.obj.height()+2)+'px'});
				 }
				 
		  }