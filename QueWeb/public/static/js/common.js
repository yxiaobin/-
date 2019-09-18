var idyC = {
	ajaxPost : function(url, data, successCallback){
		$.ajax({
			"type": "POST",
			"url": url,
			"data": data,
			"success": successCallback,
			"error": function(response){
				alert('绯荤粺绻佸繖锛岃绋嶅悗鍐嶈瘯锛�');
			}
		});
	},
	dialogWarningTxt : function(txt){
		var temp = '<img style="display: block; margin: 10px auto 25px;" src="/static/images/exclamation_mark.png" />' + txt;
		return temp;
	},
	
    //鍒嗛〉...鑷姩鍔犳爣绛�
    pageListAddLabel: function(){
        var $paginationa = $('.paginationa');
        var sPaginationa = $('.paginationa').html();
        sPaginationa = sPaginationa.replace('..','<span>...</span>');
        $paginationa.html(sPaginationa);
    },

    //鍒嗛〉璁剧疆鏉℃暟
    pageSetNum: function(fn){
		$('.c_paginationa').on('click', '.c_count p', function() {
			$('.c_paginationa').find('.c_count div').show();
			return false;
		});

		$(document).click(function(){
			$('.c_paginationa').find('.c_count div').hide();
		});

		$('.c_paginationa').on('click', '.c_count div span', function() {
			if(fn) fn($(this).attr("data-page"));
			return false;
		});
    },
	
	//鍘绘帀鎵€鏈夌殑html鏍囪
    delHtmlTag: function(str){
    	return str.replace(/<[^>]+>/g,"");	
    },

	//鍒ゆ柇姹夊瓧鐨勯暱搴�	
	getTextLen: function(str){
		var iCount = 0;
		var strArray = str.split('');
		for ( var i = 0; i < strArray.length; i++) {
			if (strArray[i].charCodeAt(0) < 299) {
				iCount++;
			} else {
				iCount += 2;
			}
		}
		return iCount;
	},

	//鑾峰彇url鍙傛暟鍒楄〃
	getUrlQuery: function(name){
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i"); 
		var r = window.location.search.substr(1).match(reg); 
		if (r!=null) return (r[2]); return null; 
	},
	//js鐢熸垚鍏冪礌
	hover_tip:function(obj,txt){
		$('body').append('<p class="c_hover_tip">'+txt+'</p>');
        $('.c_hover_tip').css({'z-index':'99999999','left':obj.offset().left+obj.outerWidth() + 8,'top':obj.offset().top + (obj.outerHeight() - 29)/2});
        obj.on('mouseleave',function(){
            $('.c_hover_tip').remove();
        });
	},

	hoverTip: function(obj, options){
		var settings = {
			text:'',
			offsetX:0,
			offsetY:0,
			dir:'right',
			width:'auto'
		};
		$.extend( settings , options );
	    obj.hover(function(){
	        $('body').append('<p class="c_hover_tip" style="width:'+settings.width+'">' + settings.text + '</p>');

	    	var iL = 0;
	    	var iT = 0;

	    	if(settings.dir == 'right'){
		        iL = $(this).offset().left + $(this).outerWidth() + 8 + settings.offsetX;
		        iT = $(this).offset().top + ($(this).outerHeight() - 29)/2 + settings.offsetY;
	    	} else if(settings.dir == 'left'){
		        iL = $(this).offset().left - $('.c_hover_tip').outerWidth() - 8 - settings.offsetX;
		        iT = $(this).offset().top + ($(this).outerHeight() - 29)/2 + settings.offsetY;
	    	};
	    	
	    	$('.c_hover_tip').css({'left':iL,'top':iT});
	    }, function(){
	        $('.c_hover_tip').remove();
	    });
	},

	//寮瑰嚭灞傜殑榛戣壊鑳屾櫙
	mark: function(options){
		var settings = {
			opacity: options.opacity || '0.7',
			zIndex:9999900,
			backgroundColor:'000'
		};
		$.extend(settings, options);
        var mark = {};
        var $oMark = $('<div class="c_mark"></div>');
        mark.open = function(){
            $('body').append($oMark);
            $(window).bind("resize",function(){
                $oMark.css({'height':$(window).height(),'opacity':settings.opacity,'z-index':settings.zIndex,'background-color':'#' + settings.backgroundColor});
            });
            $(window).resize();
        };
        mark.remove = function(){
            $oMark.remove();
        };
        return mark;
	},

	loading: function(options){
		var loading = {};
		var settings = {
			text:'鍔犺浇涓�'
		};
		$.extend(settings, options);

		var $loading = $('<div class="c_loading"><img style="margin:10px auto;display:block;" src="/static/js/plug-in/load/loading_wb.gif" width="48" height="48" /><p>' + settings.text + '</p></div>');
    	var $mark = new idyC.mark(options);

        loading.open = function(){
        	$mark.open();
            $('body').append($loading);
            $(window).bind("resize",function(){
            	var iLoadH = parseInt($loading.css('height'));
            	var iLoadW = parseInt($loading.css('width'));
            	var iT = ($(window).height() - iLoadH)/2;
            	var iL = ($(window).width() - iLoadW)/2;
            	$loading.css({'left':iL,'top':iT});
            });
            $(window).resize();
        };
        
        loading.remove = function(){
        	$mark.remove();
            $loading.remove();
        };

		return loading;
	}

}