Array.prototype.in_array = function(e){ 
    for(i=0;i<this.length;i++){
        if(this[i] == e)
			return true;
    }
    return false;
}

/**
 * 
 * 鍒ゆ柇鏁版嵁绫诲瀷
 * @param {String} type 闇€瑕佸垽鏂殑鏁版嵁绫诲瀷锛屽彲浠ユ槸"Object","String","Array","Function","Undefined"
 * @param {Object} obj 瑕佸垽鏂殑鍊� 
 * @return {Boolean} 瑕佸垽鏂殑鍊兼槸鍒ゆ柇鐨勭被鍨嬭繑鍥瀟rue锛屽惁鍒欒繑鍥瀎alse
 */
function isType(type, obj) {
	return {}.toString.call(obj) == "[object " + type + "]"
}

function setCookie(c_name, value, expiredays, domain) {
	var exdate;
	var domain = getParseDomain(domain);
	// expiredays 鍙互鏄疦umber绫诲瀷鐨勮繃鏈熷ぉ鏁�
	// 涔熷彲浠ユ槸String绫诲瀷鐨勬棩鏈熷瓧绗︿覆
	// 杩樺彲浠ユ槸Date绫诲瀷鐨�
	if (expiredays && expiredays instanceof Date) { // expiredays鏄疍ate绫诲瀷
		exdate = expiredays;
	} else if (expiredays && isDate(expiredays)) { // expiredays鏄棩鏈熷瓧绗︿覆
		exdate = new Date(expiredays);
	} else { // expiredays涓篘ubmer绫诲瀷鎴栬€呮湭璁剧疆
		var newDate = new Date();
		expiredays = (!expiredays || expiredays != Number(expiredays)) ? 1 : expiredays;
		newDate.setDate(newDate.getDate() + expiredays);
		exdate = newDate.toGMTString();
	}
	document.cookie = c_name + "=" + escape(value) + ";expires=" + exdate + ';path=/;domain=' + domain;
}
// 楠岃瘉瀛楃涓瞫tr鏄惁涓烘棩鏈熸牸寮忕殑瀛楃涓�
function isDate(str) {
	var reg = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/;
	if (!str) return false;
	var arr = reg.exec(str);
	if (reg.test(str) && RegExp.$2 <= 12 && RegExp.$3 <= 31 && RegExp.$4 <= 23 && RegExp.$5 <= 59 && RegExp.$6 <= 59) {
		return true;
	}
	return false;
}

function getCookie(c_name){
	if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=")
		if (c_start != -1) {
			c_start = c_start + c_name.length + 1;
			c_end = document.cookie.indexOf(";", c_start);
			if (c_end == -1) c_end = document.cookie.length;
			return unescape(document.cookie.substring(c_start, c_end));
		}
	}
	return "";
}
//鍒犻櫎cookie
function delCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	var domain = getParseDomain();
	if (cval != null)
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ';path=/;domain=' + domain;
};
// 鑾峰彇璁剧疆cookie鐨刣omain锛堝拰鍚庣璁剧疆閫昏緫淇濇寔缁熶竴锛�
function getParseDomain (domain) {
		var hostname = location.hostname.toLocaleLowerCase();
		var domain = domain || hostname;
		var reWenjuan = /.wenjuan.com$/;
		var reLocalhost = /^(192.168.)|^(127.0.0.)/;
		if (reWenjuan.test(domain)) {
			domain = '.wenjuan.com';
		} else if (reLocalhost.test(domain)) {
			domain = domain;
		} else if (domain == 'localhost') {
			domain = hostname;
		} else {
			domain = '.' + domain;
		}
		return domain;
};

function SetWinHeight(obj, height, objid){
	 var win=obj;
	 
	 if(typeof(objid) != 'undefined'){
		win = document.getElementById(objid);
	 }

	 if(typeof(height) != 'undefined'){
		win.height = height;
		return true;
	 }

	 if (document.getElementById){
		  if (win && !window.opera){
			   if (win.contentDocument && win.contentDocument.body.offsetHeight) 
					win.height = win.contentDocument.body.offsetHeight; 
			   else if(win.Document && win.Document.body.scrollHeight)
					win.height = win.Document.body.scrollHeight;
			}
	 }
	 return true;
}

function goto_furl(url, furl){
	target = '';
	if (furl == ''){
		location_href = location.href;
		location_href = url_add_random(location_href);
	}
	else
		location_href = furl;

	join_pre_str = url.indexOf('?')>0?'&':'?';
	if(target == ''){
		if (url == '/login/')
		{
			location.href = url + join_pre_str + 'furl=' + encodeURIComponent(location_href);
		}
		else
		{
			location.href = url + join_pre_str + 'furl=' + encodeURIComponent(location_href);
		}
	}
	else{
		alert(target);
	}
	return false;
}

function show_loginwin(){
	$("#LoginWinModal").modal();
}

function check_loginwin(vcode){
	user = $('#loginwin_emailorusername').val();
	
	if(user.length < 1){
		return false;
	}
	password = $('#loginwin_password').val();
	if(password.length < 1){
		return false;
	}

	var saveme = '1';
	$(".loginbut").text('鐧诲綍涓�...');
	login_sessionid(user, password, vcode, saveme, errorback);
}

function check_loginwin_ls(vcode){
	user = $('#loginwin_emailorusername').val();
	
	if(user.length < 1){
		return false;
	}
	password = $('#loginwin_password').val();
	if(password.length < 1){
		return false;
	}

	var saveme = '1';
	$(".loginbut").text('鐧诲綍涓�...');
	login_sessionid(user, password, vcode, saveme, errorback_ls);
}

function errorback_ls(error, msg, emailorusername){
	if (error > 10)
	{
		
		alert(decodeURIComponent(msg));

	}
	else{
	}
	
	return;
}

function errorback(error, msg, emailorusername){
	if (error > 10)
	{
		
		location.href = "/login/?emailorusername="+ emailorusername +"&msg=" + msg + "&time=" + Math.random();

	}
	else{
	}
	
	return;
}

function auto_show_hide(objid, showtime){
	$('#'+ objid).show();
	window.setTimeout("auto_hide('" + objid + "')", showtime);
}

function auto_hide(objid){
	$('#' + objid).hide();
}

var sessionid = '';
var nickname = '';
function get_sessionid(){
		$.ajax({url:"/jslogin/",async:false,data:{}, success:function(data){

			var obj = eval( "(" + data + ")" );		
			sessionid = obj.sessionid;
			nickname = obj.nickname;

		},error:function(xhr){
			alert(xhr.responseText)
		}});
}

function send_sessionid(sessionid, nickname){
		//鍙戦€佺粰鏈嶅姟鍣ㄧ銆佹垨淇濆瓨鍦ㄥ鎴风锛� nickname鍙互鐢ㄦ潵鍒ゆ柇鐧婚檰鐘舵€侊紙绌猴細鏈櫥闄嗭紝 鍏朵粬锛氬凡鐧婚檰锛�
		return true;
}

function checkandloginshow(){
	$.ajax({url:"/jslogin/",async:true,data:{}, success:function(data){

			var obj = eval( "(" + data + ")" );		
			if(obj.nickname == '')
				show_loginwin();

		},error:function(xhr){
			alert(xhr.responseText)
		}});
}

function checkloginstatus(callback){
	$.ajax({url:"/jslogin/",async:true,data:{}, success:function(data){
			var obj = eval( "(" + data + ")" );		
			if(obj.nickname == '')
				callback('nologin');
			else
				callback('login');

		},error:function(xhr){
			alert(xhr.responseText)
		}});
}

function login_sessionid(emailorusername, password, vcode, saveme, callback) {
    $.ajax({
        url: "/jslogin/",
        async: false,
        data: {
            emailorusername: emailorusername,
            password: password,
            vcode: vcode,
            saveme:saveme
        },
        dataType: 'json',
        type: 'post',
        success:function(data) {
            var obj = data;
            if (obj.error == 0) {
                // login success
                old_href = location.href;
                old_href_arr = old_href.split('#');
                prefix = (old_href_arr[0].indexOf("?") > 0)?'&':'?';
                new_href = old_href_arr[0] + prefix + Math.random();
                if (old_href_arr.length > 1)
                    new_href += "#" + old_href_arr[1];
                if (new_href.indexOf('/form') > 0){
                    var site_n = new_href.indexOf('/form');
                    var c_char = new_href[site_n + 5];
                    if (c_char == '?' || c_char == '&' || c_char == '/')
                        new_href = new_href.replace('/form', '/myform');
                }else if(new_href.indexOf('/auth/bind_account') != -1){  //绗笁鏂圭櫥褰曠粦瀹�
                    // new_href = '/auth/bind_account';
                    // 缁戝畾鐨勭涓夋柟璐﹀彿绫诲瀷锛屼緥濡傦細寰俊锛屽井鍗氾紝QQ
					var type_dict = {'weixin': '寰俊', 'qq': 'QQ', 'renren': '浜轰汉', 'sina': '寰崥', 'mingdao': '鏄庨亾'};
					var type = type_dict[obj.reg_type];
                    showBindSuccess(type);
                }else
                    new_href = '/mysurvey/';
                if(new_href.indexOf('/auth/bind_account') == -1){
	                location.href = new_href;
	            }
                $('.tc_login_cq .error').text('');
            }
            else {
            	$(".loginbut").text('鐧诲綍');
                if (obj.err_msg == 'appeal') {
                    $('.tc_login_cq .error').html('<a target="_blank" href="/about/appeal?username='+ emailorusername +'">璐﹀彿琚锛岀珛鍗崇敵璇�</a>');
                }
                else {
                    $('.tc_login_cq .error').text(obj.err_msg);
                }
            }
        },
        error:function(xhr) {
            $('.tc_login_cq .error').text(xhr.responseText);
        }});
}

function mod_password(oldpassword, newpassword, callback){
	$.ajax({url:"/member/data/pwd/",async:true,data:{oldpassword:oldpassword, password:newpassword, _xsrf:getCookie('_xsrf')}, dataType:'json', type:'post', success:function(data){
					
					if (data.error == 0)
					{
						callback(data.result);
					}
					else{
						location.href="/";
						alert(data.error);
					}
		},error:function(xhr){
			alert(xhr.responseText);
		}});
}

function mod_username(username, callback){
	$.ajax({url:"/member/data/username/",async:true,data:{username:username, _xsrf:getCookie('_xsrf')}, dataType:'json', type:'post', success:function(data){
					
					if (data.error == 0)
					{
						callback(data.result);
					}
					else{
						location.href="/";
						alert(data.error);
					}
		},error:function(xhr){
			alert(xhr.responseText);
		}});
}

var global_error = 0;
function check_register(field, value, operate, callback){
	$.ajax({url:"/checkmember/",async:false,data:{field:field, value:value, operate:operate}, dataType:'json', type:'post', success:function(data){
					
					if (data.error == 0)
					{
						if (operate == 'sendmail' && data.result == 0 && field=='email')
						{
							location.href = '/register/?rtype=send&email=' + data.email + '&time=' + Math.random();
							return;
						}
						else if (operate == 'sendmail' && data.result == 1)
						{
							data.result = "璇mail宸茬粡琚崰鐢ㄣ€�";
						}
						else if (data.result == 2)
						{
							data.result = "鏈櫥闄嗐€�";
						}
						
						if(field=='bindemail')
							callback(data.result, data);
						else
							callback(data.result);
					}
					else{
						alert(data.error);
					}
		},error:function(xhr){
			alert(xhr.responseText);
		}});
}

function check_forgotpwd(vcode, value, vvcode, operate, callback){
	$.ajax({url:"/forgotpwd/email/",async:true,data:{vcode:vcode, email:value, vvcode:vvcode, operate:operate, _xsrf:getCookie('_xsrf')}, dataType:'json', type:'post', success:function(data){
					
					if (data.error == 0)
					{
						if (operate == 'sendmail')
						{
							location.href = '/forgotpwd/send/?email=' + data.email + '&email_head=' + data.email_head + '&server_url=' + data.server_url + '&vvcode=' + data.vvcode + '&time=' + Math.random();
							return;
						}
						if (operate == 'sendmail_again')
						{
							callback('0');
							return;
						}
						
					}
					else if(data.error == 1)
					{
						if (operate == 'sendmail')
						{
							callback(data.msg);
						}
						if (operate == 'sendmail_again')
						{
							callback(data.msg);
						}
					}

					else{
						alert(data.error);
					}
		},error:function(xhr){
			alert(xhr.responseText);
		}});
}

p_sendweibo = false;
function send_weibo(msgid){
		if (p_sendweibo)
		{
			alert('wait');
			return;
		}
		var content = $("#tr_content_detail_" + msgid).val();
		var follow = '0';
		if ($("#tr_follow_detail_" + msgid).attr('checked') == 'checked')follow = '1';
		
		p_sendweibo = true;
		$.ajax({url:"/event/sendweibo/send/?" + Math.random(),async:false,data:{content:content, follow:follow, _xsrf:getCookie('_xsrf')},dataType:'json', type:'post', success:function(data){
			  var obj = data;
			  if(obj.error > 900 && obj.error < 904){
				old_href = location.href;
				new_href = old_href;
				alert('鍒嗕韩鎿嶄綔鎴愬姛銆�');
				//goto_furl('/sharesuccess/?s=' + obj.error + '&w=' + weibo, new_href);
			  }
			  else if(obj.error == 1){
				alert('璇峰厛鐧诲綍鎴栨敞鍐岋紝涓嶇劧棰嗕笉鍒板鍝佸摝');
				var furl = location.href;
				furl = url_add_random(furl);
				goto_furl('/login/', furl);
			  }
			  else if(obj.error == 8){
				alert('鎮ㄥ凡缁忛鍙栬繃100鍏冧娇鐢ㄥ埜锛屽幓鐪嬬湅涓嬮潰鐨勬椿鍔ㄥ惂锛�');
			  }
			  else if(obj.error == 11){
				var furl = location.href;
				furl = url_add_random(furl);
				goto_furl('/openapi/sina/', furl);
			  }
			  else if(obj.error == 10){
				alert('寰崥鎺堟潈杩囨湡,璇风偣鍑诲垎浜寜閽噸璇曘€�');
				var furl = location.href;
				furl = url_add_random(furl);
				goto_furl('/openapi/sina/', furl);
			  }
			  else if(obj.error > 200 && obj.error < 204){
				alert('寰崥鍒嗕韩澶辫触,鍐呭閲嶅鎴栧彂閫佽繃浜庨绻侊紝\n璇蜂慨鏀瑰唴瀹规垨绋嶅悗鍐嶈瘯銆�');
			  }
			  else{
				alert(obj.error);
			  }
			   p_sendweibo = false;

		},error:function(xhr){
			alert(xhr.responseText)
			p_sendweibo = false;
		}});
}

function send_weibo_share(msgid){
		if (p_sendweibo)
		{
			alert('wait');
			return;
		}
		var content = $("#content_detail_" + msgid).val();
		var url_content = location.href;
		var pic_content = '';
		if ($("#urlcontent_detail_" + msgid))
			url_content = $("#urlcontent_detail_" + msgid).val();
		if ($("#piccontent_detail_" + msgid))
			pic_content = $("#piccontent_detail_" + msgid).val();

		var follow = '0';
		
		p_sendweibo = true;
		$.cookie('share_content', content);
		$.ajax({url:"/event/sendweibo/send/?" + Math.random(),async:false,data:{content:content, follow:follow, localhref:url_content, pic_content:pic_content, _xsrf:getCookie('_xsrf')},dataType:'json', type:'post', success:function(data){
			  var obj = data;
			  if(obj.error > 999){
				p_sendweibo = false;
				window.open(obj.ourl, '_blank', '');
			  }
			  else if(obj.error > 900 && obj.error < 904){
				old_href = location.href;
				new_href = old_href;
				alert('鍒嗕韩鎿嶄綔鎴愬姛銆�');
				//goto_furl('/sharesuccess/?s=' + obj.error + '&w=' + weibo, new_href);
			  }
			  else if(obj.error == 1){
				alert('璇峰厛鐧诲綍鎴栨敞鍐�');
				var furl = location.href;
				furl = url_add_random(furl, 'shareretry=1');
				goto_furl('/login/', furl);
			  }
			  else if(obj.error == 11){
				var furl = location.href;
				furl = url_add_random_ext(furl, 'shareretry=1');
				goto_furl('/openapi/sina/', furl);
			  }
			  else if(obj.error == 10){
				alert('寰崥鎺堟潈杩囨湡,璇风偣鍑诲垎浜寜閽噸璇曘€�');
				var furl = location.href;
				furl = url_add_random_ext(furl, 'shareretry=1');
				alert(furl);
				goto_furl('/openapi/sina/', furl);
			  }
			  else if(obj.error > 200 && obj.error < 204){
				alert('寰崥鍒嗕韩澶辫触,鍐呭閲嶅鎴栧彂閫佽繃浜庨绻侊紝\n璇蜂慨鏀瑰唴瀹规垨绋嶅悗鍐嶈瘯銆�');
			  }
			  else{
				alert(obj.error);
			  }
			   p_sendweibo = false;

		},error:function(xhr){
			alert(xhr.responseText)
			p_sendweibo = false;
		}});
}

function url_add_random(turl){
	old_href_arr = turl.split('#');
	prefix = (old_href_arr[0].indexOf("?") > 0)?'&':'?';
	new_href = old_href_arr[0] + prefix + Math.random();
	for(i=1; i< old_href_arr.length; i++)
		new_href += "#" + old_href_arr[i];
	//alert(new_href);
	return new_href;
}

function url_add_random_ext(turl, ext){
	old_href_arr = turl.split('#');
	prefix = (old_href_arr[0].indexOf("?") > 0)?'&':'?';
	new_href = old_href_arr[0] + prefix + Math.random() + '&' + ext;
	for(i=1; i< old_href_arr.length; i++)
		new_href += "#" + old_href_arr[i];
	//alert(new_href);
	return new_href;
}

/*
login_sessionid('stars.ji@xapp8.com', '123456', '', '1', callbackf);

function callbackf(msg){
	alert(msg);
}
*/


/* 
* 鐢ㄦ潵閬嶅巻鎸囧畾瀵硅薄鎵€鏈夌殑灞炴€у悕绉板拰鍊� 
* obj 闇€瑕侀亶鍘嗙殑瀵硅薄 
* author: Jet Mah 
*/ 
function ShowObjProperty( obj ) { 
	// 鐢ㄦ潵淇濆瓨鎵€鏈夌殑灞炴€у悕绉板拰鍊� 
	var props = "" ; 
	// 寮€濮嬮亶鍘� 
	for ( var p in obj ){ 
		// 鏂规硶 
		if ( typeof ( obj [ p ]) == " function " ){ 
			obj [ p ]() ; 
		} else { 
			// p 涓哄睘鎬у悕绉帮紝obj[p]涓哄搴斿睘鎬х殑鍊� 
			props += p + " = " + obj [ p ] + " \t\n " ; 
		} 
	} 
	// 鏈€鍚庢樉绀烘墍鏈夌殑灞炴€� 
	alert ( props ) ; 
} 


function clear_red_input(){
		var length = $('.input-nothing').length;
		for(var i=0; i < length; i++){
			$('.input-nothing').eq(i).removeClass('input-nothing');
		}
}

function DataLength(fData)
{
	var intLength = 0;
	for (var i=0;i<fData.length;i++)
	{
		if ((fData.charCodeAt(i) < 0) || (fData.charCodeAt(i) > 255))
			intLength=intLength+2;
		else
			intLength=intLength+1;
	}
	return intLength;
}

var _gaq = _gaq || [];
var _hmt = _hmt || [];

function login_form_openapi(api){
	var str=""
	if(getCookie("topic-create")){
       str='utm_source=library';
	}
	if (api == 'qq')
	{
		_gaq.push(['_trackEvent', 'Register', 'Login', 'QQLogin']);
		_gaq.push(['_setAccount', 'UA-9592313-3']);
		_gaq.push(['_trackPageview', '/register/qqlogin']);
		_hmt.push(['_trackPageview', '/register/qqlogin']);
		_hmt.push(['_trackEvent', 'Register', 'Login', 'QQLogin']);
	}
	else if (api == 'sina')
	{
		_gaq.push(['_trackEvent', 'Register', 'Login', 'WeiboLogin']);
		_gaq.push(['_setAccount', 'UA-9592313-3']);
		_gaq.push(['_trackPageview', '/register/weibologin']);
		_hmt.push(['_trackPageview', '/register/weibologin']);
		_hmt.push(['_trackEvent', 'Register', 'Login', 'WeiboLogin']);
	}
	else if (api == 'taobao')
	{
		_gaq.push(['_trackEvent', 'Register', 'Login', 'TBLogin']);
		_gaq.push(['_setAccount', 'UA-9592313-3']);
		_gaq.push(['_trackPageview', '/register/tblogin']);
		_hmt.push(['_trackPageview', '/register/tblogin']);
		_hmt.push(['_trackEvent', 'Register', 'Login', 'TBLogin']);
	}
	else if (api == 'renren')
	{
		_gaq.push(['_trackEvent', 'Register', 'Login', 'RenrenLogin']);
		_gaq.push(['_setAccount', 'UA-9592313-3']);
		_gaq.push(['_trackPageview', '/register/renrenLogin']);
		_hmt.push(['_trackPageview', '/register/renrenlogin']);
		_hmt.push(['_trackEvent', 'Register', 'Login', 'RenrenLogin']);
	}
	
	else if (api == 'weixin')
	{
		_gaq.push(['_trackEvent', 'Register', 'Login', 'WeixinLogin']);
		_gaq.push(['_setAccount', 'UA-9592313-3']);
		_gaq.push(['_trackPageview', '/register/weixinLogin']);
		_hmt.push(['_trackPageview', '/register/weixinlogin']);
		_hmt.push(['_trackEvent', 'Register', 'Login', 'WeixinLogin']);
		location_href = location.href;
		// 鐢ㄤ簬鐧诲綍鍚庤烦杞�,涔嬪墠鍐欐鍒發ist,鐜板湪鍙互閫氳繃cookie璇诲彇鍒拌嚜瀹氫箟椤甸潰
		var link = getCookie('login_furl');
		if(link){
			window.setTimeout("location.href = '/login/?weixin_scan=1&furl=" + encodeURIComponent(location.protocol + '//' + location.host + link) + "&"+str+"'", 500);
		}else{
			window.setTimeout("location.href = '/login/?weixin_scan=1&furl=" + encodeURIComponent(location.protocol + '//' + location.host + '/list/') + "&"+str+"'", 500);
		}
		return;
	}
	var jump_href=''
	if(str == "" ){
		jump_href='/openapi/'+api+'/'
	}else{
		jump_href='/openapi/'+api+'/?'+str+'';
	}
	window.setTimeout("location.href='"+jump_href+"'", 500);

}
function checkLogin(){
   var name = $('#loginwin_emailorusername').val();
   var password = $('#loginwin_password').val();
   if( name=="" && password==""){ 
	    $('.tc_login_cq .error').text('璇峰～鍐欑敤鎴峰悕鍜屽瘑鐮�');
   }else if(name==""){
	    $('.tc_login_cq .error').text('璇峰～鍐欑敤鎴峰悕');
   }else if(password==""){
	    $('.tc_login_cq .error').text('璇峰～鍐欏瘑鐮�');
   }else{
	    $('.tc_login_cq .error').text('');
	    check_loginwin_ls('header');
   }  
   return false ;
}
$(function(){
	$('.login_center_cq .txt').keyup(function(event){
		if( !$(this).parents('.login_center_cq').hasClass('new_login') ){
			// 鏂扮増娉ㄥ唽鐧诲綍椤垫湁new_login杩欎釜class锛岃繖涓〉闈笉鎵цcheckLogin()
			if (event.keyCode == 13) {
				checkLogin();
	    	}
		}
	});
	$('.login_center_cq .loginbut').click(function(){
		checkLogin();
	});
});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

//鍒ゆ柇璁块棶缁堢
var Browser = {
	versions: function () {
		var ua = navigator.userAgent;
		return {
			trident: ua.indexOf('Trident') > -1, //IE鍐呮牳
			presto: ua.indexOf('Presto') > -1, //opera鍐呮牳
			webKit: ua.indexOf('AppleWebKit') > -1, //鑻规灉銆佽胺姝屽唴鏍�
			gecko: ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') == -1, //鐏嫄鍐呮牳
			mobile: !!ua.match(/AppleWebKit.*Mobile.*/), //鏄惁涓虹Щ鍔ㄧ粓绔�
			ios: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios缁堢
			android: ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1, //android缁堢
			iPhone: ua.indexOf('iPhone') > -1, //鏄惁涓篿Phone鎴栬€匭QHD娴忚鍣�
			iPad: ua.indexOf('iPad') > -1, //鏄惁iPad
			webApp: ua.indexOf('Safari') == -1, //鏄惁web搴旇绋嬪簭锛屾病鏈夊ご閮ㄤ笌搴曢儴
			weixin: ua.indexOf('MicroMessenger') > -1, //鏄惁寰俊 锛�2015-01-22鏂板锛�
			qq: ua.match(/\sQQ/i) == " qq", //鏄惁QQ,
			iosQQ: (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && / QQ/i.test(ua)),
			androidQQ: (ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1) && /MQQBrowser/i.test(ua) && /QQ/i.test((ua).split('MQQBrowser')),
			uc: ua.indexOf('UCBrowser') > -1
		};
	}(),
	language: (navigator.browserLanguage || navigator.language).toLowerCase()
};

$(function(){
	// 鐢ㄤ簬绗笁鏂逛紒涓氬井淇℃壂鐮佺櫥褰�
	var $wxbusinessIcon = $('#third_login_wxbusiness,#third_login_wxbusiness1');
	if($wxbusinessIcon.length != 0){
		$.get('/get/wx_scan/login_url/',function (res) {
			if(res.status_code == 1){
				$wxbusinessIcon.attr('href',res.data)
			}
		})
	}
})

//HTML鏍囩杞箟锛�< -> &lt;锛�
function html2Escape(sHtml) {
	return sHtml.replace(/[<>&"]/g,function(c){
		return {'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c];
	});
 }
//HTML鏍囩鍙嶈浆涔夛紙&lt; -> <锛�
function escape2Html(str) {
  var arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'};
  return str.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){
    return arrEntities[t];
  });
} 