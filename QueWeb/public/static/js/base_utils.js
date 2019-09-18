
//IE鏈ㄦ湁indexOf鍑芥暟..
if (!Array.indexOf) {
    Array.prototype.indexOf = function (obj) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == obj) {
                return i;
            }
        }
        return -1;
    }
}
//IE涔熸病鏈塼rim
String.prototype.trim = function () {
    // 鐢ㄦ鍒欒〃杈惧紡灏嗗墠鍚庣┖鏍�
    // 鐢ㄧ┖瀛楃涓叉浛浠ｃ€�
    return this.replace(/(^\s*)|(\s*$)/g, "");
}
//Array鐨剆huffle鍑芥暟
Array.prototype.shuffle = function () {
    for (var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
    return this;
};

Array.prototype.sum = function () {
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
        sum += this[i];
    };
    return sum;
};

//strip鍑芥暟
String.prototype.strip = function () {
    return this.replace(/^\s*(.*?)\s*$/, "$1");
};

//妯′豢python鐨勪娇鐢ㄤ範鎯�, 0|[]|{}|""杩欎簺閮借繑鍥瀎alse


function isNotEmpty(obj) {
    if (typeof (obj) == "undefined" || null == obj) {
        return false;
    }
    if (typeof (obj) == "function") {
        return true;
    }
    if (obj.constructor == Number) {
        if (obj) {
            return true;
        } else {
            return false;
        }
    } else if (typeof (obj) == "string") {
        if (obj != "") {
            return true;
        } else {
            return false;
        }
    } else {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return true;
            }
        }
        return false;
    }
};

//閲嶈浇String.format鏂规硶,浣挎牸寮忓寲瀛楃涓叉洿鏂逛究
//璋冪敤鏂规硶
//"{0},{1},hehe".format(["hello","world"]); //hello,world,hehe
//"鏁板={鏁板},璇枃={璇枃},hou".format({"鏁板":100,"璇枃":95});//鏁板=100,璇枃=95,hou
Overload = function (fn_objs) {
    var is_match = function (x, y) {
        if (x == y) return true;
        if (x.indexOf("*") == -1) return false;

        var x_arr = x.split(","),
            y_arr = y.split(",");
        if (x_arr.length != y_arr.length) return false;

        while (x_arr.length) {
            var x_first = x_arr.shift(),
                y_first = y_arr.shift();
            if (x_first != "*" && x_first != y_first) return false;
        }
        return true;
    };
    var ret = function () {
        var args = arguments,
            args_len = args.length,
            args_types = [],
            args_type, fn_objs = args.callee._fn_objs,
            match_fn = function () {};

        for (var i = 0; i < args_len; i++) {
            var type = typeof args[i];
            type == "object" && (args[i].length > -1) && (type = "array");
            args_types.push(type);
        }
        args_type = args_types.join(",");
        for (var k in fn_objs) {
            if (is_match(k, args_type)) {
                match_fn = fn_objs[k];
                break;
            }
        }
        return match_fn.apply(this, args);
    };
    ret._fn_objs = fn_objs;
    return ret;
};

String.prototype.format = Overload({
    "array": function (params) {
        var reg = /{(\d+)}/gm;
        return this.replace(reg, function (match, name) {
            return params[~~name];
        });
    },
    "object": function (param) {
        var reg = /{([^{}]+)}/gm;
        return this.replace(reg, function (match, name) {
            return param[name];
        });
    }
});

function inputLimitZero(val) {
    return val.replace(/[^\d]/g, '').replace(/^0{1,}/g, '');
}

function load_path(path) {
    if (!path || path.length === 0) {
        throw new Error('argument "path" is required !');
    }
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = path;
    script.type = 'text/javascript';
    head.appendChild(script);
}

//绠€鍗曞疄鐜癷n鐨勫垽鏂�


function check_in(obj, seq) {
    return $.inArray(obj, seq) != -1;
}

function is_equal(obj1, obj2) {
    if (obj1.constructor !== obj2.constructor) return false;
    var aMemberCount = 0;
    for (var a in obj1) {
        if (!obj1.hasOwnProperty(a)) continue;
        if (typeof obj1[a] === 'object' && typeof obj2[a] === 'object' ? !obj1[a].equals(obj2[a]) : obj1[a] !== obj2[a]) return false;
        ++aMemberCount;
    }
    for (var a in obj2)
        if (obj2.hasOwnProperty(a)) --aMemberCount;
    return aMemberCount ? false : true;
}

//澶嶅埗瀵硅薄


function copy_obj(obj) {
    if (obj.constructor == Array) {
        var new_obj_list = [];
        for (var i = 0; i < obj.length; i++) {
            var item = obj[i];
            new_obj_list.push(copy_obj(item));
        }
        return new_obj_list;
    } else if (obj.constructor == Number || obj.constructor == String) {
        var num = obj;
        return num;
    } else {
        return $.extend(true, {}, obj);
    }
};

//缁欏畾涓€涓猟om鍏冪礌锛屽緱鍒颁笌瀹冩渶杩戠殑鎸囧畾绫诲瀷鐨刾arent鍏冪礌(jquery绫诲瀷)


function get_parent(obj, parent_type) {
    var $parent = $(obj).parent();
    while ($parent.length > 0 && $parent[0].nodeName != parent_type.toUpperCase()) {
        $parent = $parent.parent();
    }
    return $parent;
}

function ajaxGet(obj) {
    var url = $(obj).attr("href");
    var target = $(obj).attr("rel");
    $.ajax({
        url: url,
        type: "GET",
        success: function (html_code) {
            $("#" + target).html(html_code);
        }
    });
}

function ajaxPost(url, data, callback, fail_callback) {
    //淇濆瓨鎻愮ず
    var secure_key = $.cookie("_xsrf") || "";
    if (isNotEmpty(secure_key)) {
        data["_xsrf"] = secure_key;
    }
    var is_edit = url.indexOf("edit/ajax") != -1 ? true : false;
    if (is_edit) {
        if (typeof (client_uuid) !== "undefined") {
            loadMack({
                off: 'on',
                Limg: 1,
                text: '鍔犺浇涓�...',
                set: 0
            });
            data["client_uuid"] = client_uuid;
            SavePrompt();
        }
    }
    isNotEmpty(fail_callback) ? fail_callback = fail_callback : fail_callback = function () {};
    $.ajax({
        url: url,
        data: data,
        dataType: "JSON",
        type: "POST",
        timeout: 60000,
        error: fail_callback,
        success: function (ret) {
            if (ret.status == "200") {
                if (ret.hasOwnProperty("edit_valid")) {
                    if (!ret.edit_valid) {
                        edit_lock_alert();
                        return;
                    }
                }
                if (isNotEmpty(callback)) {
                    callback(ret);
                }
                if (is_edit && !ret.err_msg) {
                    SavePrompt(true);
                    $('.loadCon,.loadMack').remove();
                }
            }
        }
    });
}

function syncPost(url, data, callback) {
    //淇濆瓨鎻愮ず
    var secure_key = $.cookie("_xsrf");
    if (isNotEmpty(secure_key)) {
        data["_xsrf"] = secure_key;
    }
    var is_edit = url.indexOf("edit/ajax") != -1 ? true : false;
    if (is_edit) {
        data["client_uuid"] = client_uuid;
        SavePrompt();
    }
    $.ajax({
        url: url,
        data: data,
        dataType: "JSON",
        type: "POST",
        async: false,
        success: function (ret) {
            if (ret.status == "200") {
                if (ret.hasOwnProperty("edit_valid")) {
                    if (!ret.edit_valid) {
                        edit_lock_alert();
                        return;
                    }
                }
                if (isNotEmpty(callback)) {
                    callback(ret);
                }
            }
            if (is_edit) {
                SavePrompt(true);
            }
        }
    });
}

function ajaxSubmit(obj) {
    var url = $(obj).attr("action") || window.location.href;
    var callback_name = $(obj).attr("callback");
    var callback = window[callback_name];
    // eval("callback = " + callback_name + "");

    var data = {};
    $.map($(obj).serializeArray(), function (item) {
        data[item.name] = item.value;
    });
    $.ajax({
        url: url,
        type: "POST",
        data: data,
        dataType: "JSON",
        success: function (ret) {
            if (ret.status == "200") {
                if (isNotEmpty(callback)) {
                    callback && callback(ret);
                }
            } else if (ret.status == null) {
                alert("status is not defined in server response!");
            }
        }
    });
}

function ajaxGetSubmit(obj) {
    var url = $(obj).attr("action") || window.location.href;
    var callback_name = $(obj).attr("callback");
    var callback = window[callback_name];
    // eval("callback = " + callback_name + "");
    var data = {};
    $.map($(obj).serializeArray(), function (item) {
        data[item.name] = item.value;
    });
    $.ajax({
        url: url,
        type: "GET",
        data: data,
        dataType: "JSON",
        success: function (ret) {
            if (ret.status == "200") {
                if (isNotEmpty(callback)) {
                    callback && callback(ret);
                }
            } else if (ret.status == null) {
                alert("status is not defined in server response!");
            }
        }
    });
}

function get_oid(obj) {
    if (obj.hasOwnProperty("_id")) {
        return obj._id["$oid"];
    }
    return "";
}

function set_active_head1(idx) {
    //棣栭〉锛屾垜鐨勯棶鍗凤紝闂嵎搴撶瓑鍑犱釜tab鐨勫垏鎹�
    $('.main-nav li:eq(' + idx + ')').addClass('active');
}

function set_active_head_v2(idx) {
    //鏂扮増 棣栭〉锛屾垜鐨勯棶鍗凤紝闂嵎搴撶瓑鍑犱釜tab鐨勫垏鎹�
    $('.left_Menu li a').removeClass('active');
    $('.left_Menu li:eq(' + idx + ') a').addClass('active');
}

function scroll_to(obj, value) {
    //婊氬姩婊氬姩鏉¤嚦瀵硅薄鎵€鍦ㄧ殑浣嶇疆
    var is_iframe = (self.frameElement && self.frameElement.tagName == "IFRAME") ? true : false;
    var value1 = value ? value : 0;
    var top = $(obj).offset().top - value1;
    if (is_iframe) {
        get_iframe_height(obj);
    } else {
        $('body, html').animate({
            scrollTop: top
        }, 'fast');
    }
}

//鍒犻櫎鏁扮粍涓煇浣嶇疆鐨勫厓绱�
Array.prototype.remove = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

//纭妗�


function jsConfirm(Obj) {
    var onlyid = Obj.onlyid || "maptss";
    Tinfo = {
        title: Obj.title || "鎻愮ず",
        content: Obj.content || "<span style='color:#ef6262;'>纭畾瑕佸垹闄ゅ悧锛�</span>",
        //鎻愮ず鍐呭
        conw: Obj.conw || 300,
        //瀹藉害
        obj: Obj.obj || false,
        //鎵ц鏂规硶
        Param: Obj.Param || '',
        //鎵ц鏂规硶鍙傛暟
        obj_text: Obj.obj_text || '纭畾',
        //鎵ц鏂规硶鎸夐挳鍐呭
        close_obj: Obj.close_obj || false,
        //鍙栨秷鏂规硶
        close_Param: Obj.close_Param || '',
        //鍙栨秷鏂规硶鍙傛暟
        close_text: Obj.close_text || '鍙栨秷',
        //鍙栨秷鏂规硶鎸夐挳鍐呭
        is_zhifu: false
    };
    var qr = '<div class="WJButton wj_blue tcQz">' + Tinfo.obj_text + '</div>';
    var qx = '<div class="WJButton wj_blue uniteC">' + Tinfo.close_text + '</div>';
    var con = '<div class="tccCon">' + '<div class="tccCon_t">' + Tinfo.content + '</div><div class="tccCon_a">' + qr + qx + '</div></div>';

    //鍒涘缓寮瑰嚭灞�
    var wb = new jsbox({
        onlyid: onlyid,
        title: Tinfo.title,
        conw: Tinfo.conw,
        // FixedTop:170,
        content: con,
        range: true,
        mack: true
    }).show();

    //纭畾浜嬩欢
    $('.tcQz').die().live('click', function () {
        var isReturn = Tinfo.obj(Tinfo.Param);
        if (isReturn == undefined || isReturn == null) {
            $('.jsbox_close').click();
            setTimeout(function () {
                $('.zon_edit').remove();
            }, 100);
        }
    });
    //鍙栨秷浜嬩欢
    $('.uniteC').one('click', function () {
        if (Tinfo.close_obj) {
            Tinfo.close_obj(Tinfo.close_Param);
        }
        $('.jsbox_close').click();
    });
    //鍏抽棴鎸夐挳鍙栨秷浜嬩欢
    $('.jsbox_close').one('mousedown', function () {
        if (Tinfo.close_obj) {
            Tinfo.close_obj(Tinfo.close_Param);
        }
        $('.jsbox_close').click();
        return false;
    });

}

function jsCropConfirm(Obj) {
    Tinfo = {
        title: Obj.title || "鎻愮ず",
        content: Obj.content || "纭畾瑕佸垹闄ゅ悧锛�",
        //鎻愮ず鍐呭
        conw: Obj.conw || 300,
        //瀹藉害
        obj: Obj.obj || false,
        //鎵ц鏂规硶
        Param: Obj.Param || '',
        //鎵ц鏂规硶鍙傛暟
        obj_text: Obj.obj_text || '纭畾',
        //鎵ц鏂规硶鎸夐挳鍐呭
        close_obj: Obj.close_obj || false,
        //鍙栨秷鏂规硶
        close_Param: Obj.close_Param || '',
        //鍙栨秷鏂规硶鍙傛暟
        close_text: Obj.close_text || '鍙栨秷'
        //鍙栨秷鏂规硶鎸夐挳鍐呭
    };
    var qr = '<div class="WJButton wj_blue tcQz">' + Tinfo.obj_text + '</div>';
    var qx = '<div class="WJButton wj_blue c_close">' + Tinfo.close_text + '</div>';
    var con = '<div class="tccCon">' + '<div class="tccCon_t">' + Tinfo.content + '</div><div class="tccCon_a">' + qr + qx + '</div></div>';

    //鍒涘缓寮瑰嚭灞�
    var wb = new jsbox({
        onlyid: "maptss",
        title: Tinfo.title,
        conw: Tinfo.conw,
        // FixedTop:170,
        content: con,
        range: true,
        mack: true
    }).show();

    //纭畾浜嬩欢
    $('.tcQz').die().live('click', function () {
        var isReturn = Tinfo.obj(Tinfo.Param);
        if (isReturn == undefined || isReturn == null) {
            $('.jsbox_close').click();
            setTimeout(function () {
                $('.zon_edit').remove();
            }, 100);
        }
    });
    $('.c_close').bind('click', function () {
        if (Tinfo.close_obj) {
            Tinfo.close_obj(Tinfo.close_Param);
        }
        $('.jsbox_close').click();
    });
    //鍏抽棴鎸夐挳鍙栨秷浜嬩欢
    $('.jsbox_close').one('mousedown', function () {
        $('.jsbox_close').click();
        return false;
    });

}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

if (!Array.prototype.filter) {
    Array.prototype.filter = function (fun /*, thisp*/ ) {
        "use strict";

        if (this == null) throw new TypeError();

        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun != "function") throw new TypeError();

        var res = [];
        var thisp = arguments[1];
        for (var i = 0; i < len; i++) {
            if (i in t) {
                var val = t[i]; // in case fun mutates this
                if (fun.call(thisp, val, i, t)) res.push(val);
            }
        }

        return res;
    };
}

//鏁扮粍鍘婚噸
Array.prototype.unique = function () {
    var n = []; //涓€涓柊鐨勪复鏃舵暟缁�
    for (var i = 0; i < this.length; i++) //閬嶅巻褰撳墠鏁扮粍
    {
        if (n.indexOf(this[i]) == -1) n.push(this[i]);
    }
    return n;
}

if (!Array.prototype.includes) {
    Array.prototype.includes = function (searchElement, fromIndex) {
        if (this == null) {
            throw new TypeError('"this" is null or not defined');
        }
        var o = Object(this);
        var len = o.length >>> 0;
        if (len === 0) {
            return false;
        }
        var n = fromIndex | 0;
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
        while (k < len) {
            if (o[k] === searchElement) {
                return true;
            }
            k++;
        }
        return false;
    }
}

//纭妗�
function jsAlert(Obj) {
    var onlyid = Obj.onlyid || "maptss";
    Tinfo = {
        title: Obj.title || "鎻愮ず",
        content: Obj.content || "纭畾瑕佸垹闄ゅ悧锛�",
        //鎻愮ず鍐呭
        conw: Obj.conw || 300,
        //瀹藉害
        obj: Obj.obj || false,
        //鎵ц鏂规硶
        Param: Obj.Param || '',
        //鎵ц鏂规硶鍙傛暟
        obj_text: Obj.obj_text || '纭畾'
        //鎵ц鏂规硶鎸夐挳鍐呭
    };
    var qr = '<div class="WJButton wj_blue tcQz">' + Tinfo.obj_text + '</div>';
    var con = '<div class="tccCon">' + '<div class="tccCon_t">' + Tinfo.content + '</div><div class="tccCon_a">' + qr + '</div></div>';

    //鍒涘缓寮瑰嚭灞�
    var wb = new jsbox({
        onlyid: onlyid,
        title: Tinfo.title,
        conw: Tinfo.conw,
        //FixedTop:170,
        content: con,
        Close: false,
        range: true,
        mack: true
    }).show();

    //纭畾浜嬩欢
    $('.tcQz').die().live('click', function () {
        if (Tinfo.obj) {
            var isReturn = Tinfo.obj(Tinfo.Param);
            if (isReturn == undefined || isReturn == null) {
                $('.jsbox_close', '#' + onlyid).click();
            }
        } else {
            $('.jsbox_close', '#' + onlyid).click();
        }
    });
    //纭畾浜嬩欢锛岃烦杞摼鎺�
    $('.new_tcQz').die().live('click', function () {
        var pid = $(this).attr('pid');
        if (Tinfo.obj) {
            var isReturn = Tinfo.obj(Tinfo.Param);
            if (isReturn == undefined || isReturn == null) {
                window.location.href = '/edit/survey/' + pid;
            }
        } else {
            window.location.href = '/edit/survey/' + pid;
        }
    });
}

//鏂版秷鎭彁绀�
function NewMessage(off) {
    if (off !== undefined) {
        clearInterval(message);
        $('.NewMessage a').removeClass('xsa');
        return;
    }
    message = setInterval(function () {
        var Class = $('.NewMessage a').attr('class');
        if (Class == "") {
            $('.NewMessage a').addClass('xsa');
        } else {
            $('.NewMessage a').removeClass('xsa');
        }
    }, 800);

}

eval(function (p, a, c, k, e, d) {
    e = function (c) {
        return c.toString(36)
    };
    if (!''.replace(/^/, String)) {
        while (c--) {
            d[c.toString(a)] = k[c] || c.toString(a)
        }
        k = [function (e) {
            return d[e]
        }];
        e = function () {
            return '\\w+'
        };
        c = 1
    };
    while (c--) {
        if (k[c]) {
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
        }
    }
    return p
}('4 8(a,b){1 d,e,c="";5(d=0;d<a.7/b;d++)e=a.g(d*b),c+=e;3 c}4 h(9,6){1 f=k;3 i("f = j"+6),f(9)}4 l(a){1 c,b="";5(c=0;c<a.7;c++)b+=8(a[c],2);3 m(b)}', 23, 23, '|var||return|function|for|v|length|slice_str|sa|||||||charAt|et|eval|ef|null|ef1|hex_md5'.split('|'), 0, {}))

function InterceptString(str, length, length1) {
    //str=str.replace(/[" "|"銆€"]/g,"");//鍘诲崐瑙�+鍏ㄨ绌烘牸
    //str=str.replace(/\s+/g,"");//鍘诲崐瑙掔┖鏍�
    //str=str.replace(/[\u3000]/g,"")鍘诲叏瑙掔┖鏍�
    //str=str.replace(/\s/ig,'');鍘诲崐瑙掔┖鏍�
    if (str.length > length) {
        if (length1 == 0) {
            length1 = length;
        }
        if (str.length >= length1) {
            var str_left = str.substr(0, length1);
            var str_right = str.substr(length1);
            var banjiao = 0;
            var quanjiao = 0;
            var strCode;
            for (var i = 0; i < str_left.length; i++) {
                strCode = str.charCodeAt(i);

                if (strCode >= 33 && strCode <= 126) {
                    banjiao++;
                } else {
                    quanjiao++;
                }
            }
            if ((quanjiao + banjiao / 2) > length || (quanjiao + banjiao / 2) - length == 0.5) {
                str_left = str_left.substr(0, str_left.length - 1);
                return str_left;
            } else if ((quanjiao + banjiao / 2) - length != 0) {
                if (length1 + 1 <= str.length) {
                    str_left = InterceptString(str, length, length1 + 1);
                }
            }
            return str_left;
        }
    }
}

function getDaysInOneMonth(year, month) {
    var d = new Date(year, month, 0);
    return d.getDate();
}
var developer = "CC,JJ,PP,SF";

function get_iframe_height(obj) {

    if (isNotEmpty(obj) && obj == -2) {
        var top = -2;
    } else if (!isNotEmpty(obj)) {
        var top = -1;
    } else {
        var top = $(obj).offset().top;
    }
    var body_height = $('body').height() + 30;
    var postObj = body_height + "," + top;
    if (typeof postMessage != 'undefined') {
        window.parent.postMessage(postObj, '*');
    }
}
//Load椤甸潰
function Appload(Obj) {
    var url = Obj.url || "/";
    if (url.indexOf('?') == -1) {
        url = url + "?rd=" + new Date().getTime();
    } else {
        url = url + "&rd=" + new Date().getTime();
    }
    var Tinfo = {
        obj: Obj.obj || $('body'),
        url: url,
        data: Obj.data || "",
        limg: Obj.limg || false,
        callback: Obj.callback || function () {}
    }
    Tinfo.obj.load(Tinfo.url, Tinfo.data, function () {
        Tinfo.callback();
    });
}

function tabularize(arr, cols) {
    var ret = [];
    for (var i = 0; i < parseInt(arr.length / cols) + 1; i++) {
        var item = arr.slice(cols * i, cols * (i + 1));
        if (item.length < cols) {
            for (var k = 0; k < (cols - item.length); k++) {
                item.push(null);
            }
        }
        ret.push(item);
    }
    return ret;
}

String.prototype.replaceAll = function (stringToFind, stringToReplace) {
    var temp = this;
    var index = temp.indexOf(stringToFind);
    while (index != -1) {
        temp = temp.replace(stringToFind, stringToReplace);
        index = temp.indexOf(stringToFind);
    }
    return temp;
}

function edit_lock_alert() {
    $('.loadCon,.loadMack').remove();
    jsConfirm({
        content: "闂嵎鍐呭鍒氬湪鍏跺畠娴忚鍣ㄧ獥鍙ｈ淇敼锛� 鏄惁閲嶆柊鍔犺浇杩涜缂栬緫锛�",
        title: "鎻愮ず",
        obj_text: "鏄�",
        close_text: "鍚�",
        obj: get_edit_lock,
        close_obj: close_window
    });
}


//璁㊣E8浠ヤ笅娴忚鍣ㄦ敮鎸乻plit
var split;

// Avoid running twice; that would break the `nativeSplit` reference
split = split || function (undef) {

    var nativeSplit = String.prototype.split,
        compliantExecNpcg = /()??/.exec("")[1] === undef, // NPCG: nonparticipating capturing group
        self;

    self = function (str, separator, limit) {
        // If `separator` is not a regex, use `nativeSplit`
        if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
            return nativeSplit.call(str, separator, limit);
        }
        var output = [],
            flags = (separator.ignoreCase ? "i" : "") +
            (separator.multiline ? "m" : "") +
            (separator.extended ? "x" : "") + // Proposed for ES6
            (separator.sticky ? "y" : ""), // Firefox 3+
            lastLastIndex = 0,
            // Make `global` and avoid `lastIndex` issues by working with a copy
            separator = new RegExp(separator.source, flags + "g"),
            separator2, match, lastIndex, lastLength;
        str += ""; // Type-convert
        if (!compliantExecNpcg) {
            // Doesn't need flags gy, but they don't hurt
            separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
        }
        /* Values for `limit`, per the spec:
         * If undefined: 4294967295 // Math.pow(2, 32) - 1
         * If 0, Infinity, or NaN: 0
         * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
         * If negative number: 4294967296 - Math.floor(Math.abs(limit))
         * If other: Type-convert, then use the above rules
         */
        limit = limit === undef ?
            -1 >>> 0 : // Math.pow(2, 32) - 1
            limit >>> 0; // ToUint32(limit)
        while (match = separator.exec(str)) {
            // `separator.lastIndex` is not reliable cross-browser
            lastIndex = match.index + match[0].length;
            if (lastIndex > lastLastIndex) {
                output.push(str.slice(lastLastIndex, match.index));
                // Fix browsers whose `exec` methods don't consistently return `undefined` for
                // nonparticipating capturing groups
                if (!compliantExecNpcg && match.length > 1) {
                    match[0].replace(separator2, function () {
                        for (var i = 1; i < arguments.length - 2; i++) {
                            if (arguments[i] === undef) {
                                match[i] = undef;
                            }
                        }
                    });
                }
                if (match.length > 1 && match.index < str.length) {
                    Array.prototype.push.apply(output, match.slice(1));
                }
                lastLength = match[0].length;
                lastLastIndex = lastIndex;
                if (output.length >= limit) {
                    break;
                }
            }
            if (separator.lastIndex === match.index) {
                separator.lastIndex++; // Avoid an infinite loop
            }
        }
        if (lastLastIndex === str.length) {
            if (lastLength || !separator.test("")) {
                output.push("");
            }
        } else {
            output.push(str.slice(lastLastIndex));
        }
        return output.length > limit ? output.slice(0, limit) : output;
    };

    // For convenience
    String.prototype.split = function (separator, limit) {
        return self(this, separator, limit);
    };

    return self;

}();

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}


//瀹炴椂淇濆瓨鎻愮ず
function SavePrompt(isOff, message) {
    var message1 = '宸插疄鏃朵繚瀛�';
    var message2 = '姝ｅ疄鏃朵繚瀛�';
    if (message) {
        message1 = message2 = message;
    }
    var Sav = $('.SavePrompt');
    if (!isOff) {
        var isOff = false;
    }
    if (isOff) {
        $('.SavePrompt').text(message1);
        setTimeout(function () {
            Sav.fadeOut("slow");
            setTimeout(function () {
                Sav.remove();
            }, 600);
        }, 800);
    } else {
        if (Sav.length < 1 && !$('.jsbox').is(':visible')) {
            $('body').append('<div class="SavePrompt">姝ｅ疄鏃朵繚瀛�</div>');
        }
    }
}

function notify(className, message, time, func) {
    var f = function () {}
    var func = func || f
    $('body').append('<div class="' + className + '"></div>');
    $selector = $('.' + className);
    $selector.text(message);
    setTimeout(function () {
        $selector.remove();
        func()
    }, time);
}

//鏂囦欢涓婁紶鍩虹鏂规硶
function file_upload_custom(f, obj, url, success_callback, fail_callback) {

    if (!success_callback) {
        success_callback = function () {}
    };
    if (!fail_callback) {
        fail_callback = function () {}
    };

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    var formData;
    formData = new FormData();
    formData.append('file', f);
    for (var key in obj) {
        formData.append(key, obj[key]);
    }
    xhr.onreadystatechange = function (response) {
        if (xhr.readyState == 4 && xhr.status == 200 && xhr.responseText != "") {
            var ret = JSON.parse(xhr.responseText);
            success_callback(ret, qid);
        } else if (xhr.status != 200 && xhr.responseText) {
            var ret = JSON.parse(xhr.responseText);
            fail_callback(ret, qid);
        }
    };
    xhr.send(formData);
};

function strip_tags(dirtyString) {
    var container = document.createElement('div');
    container.innerHTML = dirtyString;
    return container.textContent || container.innerText;
}
//footer weizhi
function foot_address() {
    var winH = $(window).height();
    var bodyH = $('body').height();
    if ($('.cq_footer').css('position') != 'static') {
        if (bodyH > winH - $('.cq_footer').outerHeight()) {
            $('.cq_footer').css({
                'position': 'static'
            });
        } else {
            $('.cq_footer').css({
                'position': 'absolute',
                'bottom': 0,
                'left': 0
            });
        }
    } else {
        if (bodyH > winH) {
            $('.cq_footer').css({
                'position': 'static'
            });
        } else {
            $('.cq_footer').css({
                'position': 'absolute',
                'bottom': 0,
                'left': 0
            });
        }
    }

    // var winH=$(window).height();
    // var docH=$(document).height();
    // console.log(winH + '/' + $('body').height());
    // if(docH-$('.cq_footer').outerHeight()<winH){
    //     $('.cq_footer').css({'position':'absolute','left':'0px','bottom':'0px'});
    // }else{
    //     $('.cq_footer').css({'position':'static'});
    // }
};

$(function () {
    foot_address();
});
$(window).load(function () {
    foot_address();
    $('.cq_footer').show();
});
/*$(window).resize(function(){
    setTimeout(function(){foot_address();},100);
});*/

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

if ('function' !== typeof Array.prototype.reduce) {
    Array.prototype.reduce = function (callback, opt_initialValue) {
        'use strict';
        if (null === this || 'undefined' === typeof this) {
            // At the moment all modern browsers, that support strict mode, have
            // native implementation of Array.prototype.reduce. For instance, IE8
            // does not support strict mode, so this check is actually useless.
            throw new TypeError(
                'Array.prototype.reduce called on null or undefined');
        }
        if ('function' !== typeof callback) {
            throw new TypeError(callback + ' is not a function');
        }
        var index, value,
            length = this.length >>> 0,
            isValueSet = false;
        if (1 < arguments.length) {
            value = opt_initialValue;
            isValueSet = true;
        }
        for (index = 0; length > index; ++index) {
            if (this.hasOwnProperty(index)) {
                if (isValueSet) {
                    value = callback(value, this[index], index, this);
                } else {
                    value = this[index];
                    isValueSet = true;
                }
            }
        }
        if (!isValueSet) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        return value;
    };
}

if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback, thisArg) {
        var T, k;
        if (this == null) {
            throw new TypeError(' this is null or not defined');
        }
        var O = Object(this);
        var len = O.length >>> 0;
        if (typeof callback !== "function") {
            throw new TypeError(callback + ' is not a function');
        }
        if (arguments.length > 1) {
            T = thisArg;
        }
        k = 0;
        while (k < len) {
            var kValue;
            if (k in O) {
                kValue = O[k];
                callback.call(T, kValue, k, O);
            }
            k++;
        }
    };
}

function unescapeHTML(a) {
    a = "" + a;
    var html = a.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'");
    return html
}

// 鍘绘帀鎵€鏈塰tml鏍囩
function delete_html_tag(value) {
    var re = new RegExp("<[^>]*>", "g"), //鍘婚櫎鎵€鏈夋爣绛�
        value = value.replace(re, "");
    return value;
}

/**
 *
 * @param {string} html 鐩爣html
 * @param {string} tagName 瑕佹浛鎹㈢殑鏍囩
 * @param {string|number} tagTxt 鏍囩瑕佹浛鎹㈢殑鏂囨
 */
function replaceHtmlTag(html, tagName, tagTxt) {
    var re = new RegExp("<" + tagName + "[^>]*>", "g");
    html = html.replace(re, tagTxt);
    return html;
}

function escape_html(s) {
    return (s) ? jQuery("<p>").text(s).html() : "";
}
//鍏煎IE9浠ヤ笅涓嶆敮鎸丱bject.keys
if (!Object.keys) Object.keys = function (o) {
    if (o !== Object(o))
        throw new TypeError('Object.keys called on a non-object');
    var k = [],
        p;
    for (p in o)
        if (Object.prototype.hasOwnProperty.call(o, p)) k.push(p);
    return k;
}

var projectPublishFun = {
    init: function (pid, option) {
        this.bState = true; // 榛樿鍙彂閫侀獙璇佺爜
        this.setting = {
            pid: pid,
            type: '闂嵎', // 闂嵎绫诲瀷锛堥棶鍗枫€佽〃鍗曘€佹祴璇勶級
            surveyTitle: '', // 闂嵎鏍囬
            showShare: true, // 褰撳墠椤甸潰榛樿鏄惁鍙互鍏变韩妯＄増锛堟鍐甸〉銆佸垪琛ㄩ〉榛樿涓嶅叡浜級
            page: '', // 褰撳墠鎵€鍦ㄩ〉闈�
            isPublish: true, // 鏄惁鍙戝竷
            // publishSaveFun: function(){},  // 纭鍙戝竷鍥炶皟鍑芥暟
            publishCancelFun: function () {} // 鍙栨秷鍙戝竷鍥炴帀鍑芥暟
        };
        $.extend(this.setting, option);
        this.validateFun(pid);
    },
    // 楠岃瘉浼佷笟鍗忎綔鏉冮檺
    validateFun: function (pid) {
        var _this = this;
        $.ajax({
            url: '/enterprise/check_member_permission/?permission_type=collect&project_id=' + pid,
            type: 'GET',
            dataType: 'json',
            success: function (ret) {
                if (ret.status == 200) {
                    if (ret.code == 1) {
                        // 鏀堕泦椤甸潰锛屽仠姝㈡敹闆�
                        if (!_this.setting.isPublish) {
                            _this.checkPconvertForm(pid);
                        } else {
                            // 缂栬緫椤甸潰锛岀Щ闄ら敊璇彁绀轰俊鎭�
                            if (_this.setting.page === 'surveyEdit' || _this.setting.page === 'formEdit' || _this.setting.page === 'edit_v2') {
                                $(".question").each(function () {
                                    verify_question_option.hide($(this).attr("oid"));
                                });
                                _this.publishCheckFun(pid);
                            } else if (_this.setting.page === 'assessEdit') {
                                if (is_validate_all()) _this.publishCheckFun(pid);
                            } else {
                                _this.publishCheckFun(pid);
                            }
                        }
                    } else if (ret.code == 2) {
                        loadMack({
                            off: 'on',
                            Limg: 1,
                            text: '鎮ㄦ病鏈夋潈闄愪娇鐢紝璇疯仈绯婚」鐩墍鏈夎€�',
                            set: 1000
                        });
                        _this.setting.publishCancelFun();
                    }
                } else {
                    check_permission = false;
                    loadMack({
                        off: 'on',
                        Limg: 1,
                        text: '璇风◢鍚庡啀璇�',
                        set: 1000
                    });
                    _this.setting.publishCancelFun();
                }
            }
        });
    },
    // 鍒ゆ柇鏄惁鏈夋湭缂栬緫瀹屾垚鐨勯鐩�
    publishCheckFun: function (pid) {
        var _this = this;
        $.ajax({
            url: '/edit/ajax/publish_check/' + pid + '/',
            dataType: 'JSON',
            success: function (ret) {
                if (ret.err_code) {
                    var errorText = getErrorCodeText(ret.err_code);
                    jsAlert({
                        onlyid: "assess_score_overstep_popup",
                        title: ' ',
                        content: errorText,
                        range: true,
                        mack: true,
                        obj: function () {
                            $("#assess_score_overstep_popup,.assess_score_overstep_popup_lightBox").remove();
                        }
                    });
                    return;
                };
                _this.publishCheckCallback(_this, pid, ret);
            }
        })
    },
    publishCheckCallback: function (_this, pid, data) {
        if (data.invalid_qid_list.length === 0) {
            if (_this.setting.hasMobile) {
                _this.publishFun(pid, data.super_account, data.ad_switch);
            } else {
                var is_relation_project = true;
                _this.showBindMobileFun(is_relation_project, pid, data.super_account, data.ad_switch);
            }
        } else {
            // 鏈紪杈戝畬鎴愮殑棰樼洰
            if (_this.setting.page === 'surveyEdit' || _this.setting.page === 'formEdit' || _this.setting.page === 'assessEdit' || _this.setting.page === 'edit_v2') {
                // 濡傛灉鍦ㄩ瑙堥〉锛屽厛鍏抽棴棰勮寮圭獥
                var $exitPreview = $('.exit_preview');
                if ($exitPreview.length > 0) {
                    $('.exit_preview').click();
                }

                // 缂栬緫椤甸潰锛岄獙璇侀」鐩腑鏄惁鏈夋湭缂栬緫瀹屾垚鐨勯鐩紝娣诲姞鎻愮ず
                for (var i = 0; i < data.invalid_qid_list.length; i++) {
                    var qid = data.invalid_qid_list[i];
                    var msg = data.err_msg[qid];
                    if (msg) {
                        verify_question_option.show(qid, msg);
                    } else {
                        var qmodel = get_qmodel(qid);
                        qmodel.show_edit_error_msg();
                    }
                    scroll_to($('.question[oid=' + data.invalid_qid_list[0] + ']'), $('.edit-center').height());
                }
            } else {
                // 鏀堕泦椤点€佹暟鎹姤琛ㄣ€佸垪琛ㄩ〉銆佹瑙堥〉锛屽寘鍚湭缂栬緫瀹屾垚鐨勯鐩�
                jsAlert({
                    title: '鎻愮ず',
                    content: '<p>璇�' + _this.setting.type + '鍖呭惈鏈紪杈戝畬鎴愮殑棰樼洰锛屾殏鏃舵棤娉曞彂甯冿紝璇峰厛鍓嶅線缂栬緫椤甸潰瀹屾垚缂栬緫銆�</p>',
                    conw: 380,
                    obj: _this.setting.publishCancelFun
                });
                $('.WJButton').removeClass('tcQz');
                $('.WJButton').addClass('new_tcQz');
                $('.WJButton').attr('pid', pid);
            }
        }
    },
    // 鍙戝竷闂嵎寮圭獥
    publishFun: function (pid, is_super, is_on) {
        var _this = this;
        var content = '';
        if (_this.setting.isPublish) {
            if (_this.setting.surveyTitle) {
                content = '<p>浣犺鍙戝竷' + _this.setting.type + '<span>銆�' + _this.setting.surveyTitle + '銆�</span>鍚楋紵</p>';
            } else {
                content = '<p>鏄惁鍙戝竷' + _this.setting.type + '锛�</p>';
            }
        }
        if (is_super) {
            content += '<div class="luckdraw_temp"><label><input style="vertical-align:middle;margin:-2px 6px 0 0 !important;" type="checkbox" id="luckdraw_selector" ' + (is_on == "on" ? "checked" : "") + '/>鍚敤榛樿鎶藉娓告垙锛屾彁楂樻敹闆嗘晥鐜�</label></div>'
        }

        if (_this.setting.showShare && _this.setting.isPublish) {
            var shareUnChecked = localStorage.getItem('share_unchecked_' + pid);
            if (shareUnChecked) {
                content += '<label><input style="vertical-align:middle;margin:-2px 6px 0 0 !important;" type="checkbox" id="checkbox_selector"/>鍏变韩鍒版ā鏉垮簱</label><i class="tips" title="閫変腑璇ラ€夐」锛屾湰' + _this.setting.type + '缁忓鏍稿悎鏍煎悗浼氭坊鍔犲埌妯℃澘搴撲腑锛屼緵鍏朵粬浼氬憳鍒朵綔' + _this.setting.type + '鏃跺弬鑰冦€�"></i>';
            } else {
                content += '<label><input style="vertical-align:middle;margin:-2px 6px 0 0 !important;" type="checkbox" checked id="checkbox_selector"/>鍏变韩鍒版ā鏉垮簱</label><i class="tips" title="閫変腑璇ラ€夐」锛屾湰' + _this.setting.type + '缁忓鏍稿悎鏍煎悗浼氭坊鍔犲埌妯℃澘搴撲腑锛屼緵鍏朵粬浼氬憳鍒朵綔' + _this.setting.type + '鏃跺弬鑰冦€�"></i>';
            }
        }

        var confirmPopupObj = {
            'title': '鍙戝竷纭',
            'content': content,
            'obj': _this.setting.publishSaveFun || _this.publishSaveFun,
            'Param': _this.setting,
            'close_obj': _this.setting.publishCancelFun
        };
        jsConfirm(confirmPopupObj);
    },
    // 鏄剧ず缁戝畾鎵嬫満鍙峰脊绐�
    showBindMobileFun: function (is_relation_project, pid, is_super, is_on) {
        var _this = this;
        var shareContent = '';
        var luckdrawContent = '';
        var str = '';
        var error_str = ''
        if (is_relation_project === true) {
            str = '纭畾骞跺彂甯�' + _this.setting.type + '';
            error_str = '鎹綉淇″姙瑙勫畾锛屽彂甯�' + _this.setting.type + '闇€缁戝畾鎵嬫満';
            if (_this.setting.showShare && _this.setting.isPublish) {
                var shareUnChecked = localStorage.getItem('share_unchecked_' + pid);
                if (shareUnChecked) {
                    shareContent = '<div class="share_temp"><label><input type="checkbox" id="checkbox_selector" />' + _this.setting.type + '鍏变韩鍒版ā鐗堝簱</label></div>';
                } else {
                    shareContent = '<div class="share_temp"><label><input type="checkbox" id="checkbox_selector" checked />' + _this.setting.type + '鍏变韩鍒版ā鐗堝簱</label></div>';
                }
                if (is_super) {
                    luckdrawContent = '<div class="luckdraw_temp"><label><input style="margin-right:2px !important;" type="checkbox" id="luckdraw_selector" ' + (is_on == "on" ? "checked" : "") + '/> 鍚敤榛樿鎶藉娓告垙锛屾彁楂樻敹闆嗘晥鐜�</label></div>';
                }
            }
        } else {
            error_str = '';
            str = '纭畾'
        }
        var bindMobileHtml = '' +
            '<div class="bind_mobile_wrap">' +
            '<div class="bind_mobile_form">' +
            '<div class="form_item_wrap">' +
            '<div class="form_item form_mobile"><label for=""><input type="text" placeholder="鎵嬫満鍙�" name="mobile" class="mobile" /></label></div>' +
            '<div class="form_error">' + error_str + '</div>' +
            '</div>' +
            '<div class="form_item_wrap">' +
            '<div class="form_item form_vcode"><label for=""><input type="text" placeholder="楠岃瘉鐮�" name="vcode" class="vcode" /></label><a class="btn_get_vcode">鑾峰彇楠岃瘉鐮�</a></div>' +
            '<div class="form_error"></div>' +
            '</div>' +
            '</div>' +
            luckdrawContent + shareContent +
            '<div class="btn_wrap"><a class="btn_publish btn_disable">' + str + '</a></div>' +
            '</div>';
        var bindMobilePopup = new jsbox({
            onlyid: 'publish_bind_mobile',
            title: '缁戝畾鎵嬫満鍙�',
            content: bindMobileHtml,
            conw: 600,
            range: true,
            mack: true
        }).show();

        // 鍏抽棴鎸夐挳
        $('#publish_bind_mobile .jsbox_close').one('click', function () {
            if (_this.setting.publishCancelFun) {
                _this.setting.publishCancelFun();
            }
        });
        // 鐩戝惉鎵嬫満鍙风爜
        $('#publish_bind_mobile input[name=mobile]').keyup(function (e) {
            var $this = $(this);
            // var mobile = $this.val().replace(/\D/g,'');
            var mobile = $this.val()
            var $mobileError = $this.parents('.form_item_wrap').find('.form_error');
            // mobile = mobile.substr(0, 11);
            $this.val(mobile);
            if (mobile !== '') {
                $mobileError.text('').hide();
                if (!idyLoginValidate.mobile(mobile)) {
                    _this.validateMobileAndVcode($this, is_relation_project);
                }

            } else {
                if (is_relation_project === true) {
                    $mobileError.show().text('鎹綉淇″姙瑙勫畾锛屽彂甯�' + _this.setting.type + '闇€缁戝畾鎵嬫満');
                }
            }
        });
        // 鐩戝惉楠岃瘉鐮�
        $('#publish_bind_mobile input[name=vcode]').keyup(function (e) {
            var $this = $(this);
            // var mobile = $this.val().replace(/\D/g,'');
            var vcode = $this.val();
            var $vcodeError = $this.parents('.form_item_wrap').find('.form_error');
            if (vcode.length >= 6) vcode = vcode.substr(0, 6);
            $this.val(vcode);
            if (vcode !== '') {
                $vcodeError.text('').hide();
                if (vcode.length === 6) {
                    $this.parents('.bind_mobile_wrap').find('.btn_publish').removeClass('btn_disable').addClass('not_vcode');
                    // _this.validateMobileAndVcode($this);
                } else {
                    $this.parents('.bind_mobile_wrap').find('.btn_publish').addClass('btn_disable').addClass('not_vcode');
                }
            } else {
                $vcodeError.show().text('璇疯緭鍏ラ獙璇佺爜');
            }
        });
        // 鑾峰彇楠岃瘉鐮�
        $('#publish_bind_mobile .btn_get_vcode').click(function (e) {
            if ($(this).hasClass('btn_disabled')) return;
            var $this = $(this),
                $mobile = $this.parents('.bind_mobile_form').find('input[name=mobile]');
            mobile = $mobile.val();
            $mobileError = $mobile.parents('.form_item_wrap').find('.form_error');
            if (mobile == '') {
                if (is_relation_project === true) {
                    $mobileError.text('鎹綉淇″姙瑙勫畾锛屽彂甯�' + _this.setting.type + '闇€缁戝畾鎵嬫満').show();
                } else {
                    loadMack({
                        off: 'on',
                        Limg: 0,
                        text: ' 鎵嬫満鍙蜂笉鑳戒负绌�',
                        set: 1000
                    });
                }
                return false;
            } else if (idyLoginValidate.mobile(mobile)) {
                var text = "鎵嬫満鍙锋牸寮忔湁璇紝濡傞潪涓浗澶ч檰鐢ㄦ埛<a target=\"_blank\" class=\"loginHelpURL\" style=\"color:blue!important;text-decoration: underline!important;display: inline!important;\" href=\"" + idyLoginValidate.loginHelpURL + "\">璇风偣姝�<a>";
                $mobileError.html(text).show();
                return false;
            } else {
                $mobileError.text('').hide();
            };
            if (_this.bState) {
                ajaxPost('/register/auth_mobile_validatecode/', {
                    'mobile': mobile,
                    'usefor': 'publishproject_bindmobile'
                }, function (response) {
                    if (response.error_msg != '') {
                        if (response.error_msg != '璇ユ墜鏈哄彿宸茶浣跨敤') {
                            loadMack({
                                off: 'on',
                                Limg: 0,
                                text: response.error_msg,
                                set: 2000
                            });
                        }
                        // if(response.error_msg == '璇ユ墜鏈哄彿宸茶浣跨敤'){
                        //     $('.jsbox_close').click();
                        //     var bindedHtml = tplStr.accountConflict.content;
                        //     var bindMobilePopup = new jsbox({
                        //         onlyid: 'havebind_mobile',
                        //         title: tplStr.accountConflict.title,
                        //         content: bindedHtml,
                        //         conw: 600,
                        //         range: true,
                        //         mack: true
                        //     }).show();
                        // }else{
                        //     $mobileError.text(response.error_msg).show();
                        // }
                    } else {
                        loadMack({
                            off: 'on',
                            Limg: 0,
                            text: ' 楠岃瘉鐮佸凡鍙戦€侊紝璇锋煡鏀�',
                            set: 2000
                        });
                        _this.getMobileCode($this);
                    }
                    // loadMack({off: 'on', Limg: 0, text:' 楠岃瘉鐮佸凡鍙戦€侊紝璇锋煡鏀�', set: 2000});
                    // _this.getMobileCode($this);
                });
            };
        });

        $('.third_close').live('click', function () {
            $('.jsbox_close').click();
            $('.loadCon,.loadMack').remove();
        });

        // 璐﹀彿鍚堝苟鎻愰啋寮圭獥鐐瑰嚮浜嬩欢
        // 鏆備笉鍚堝苟鎸夐挳
        $('#can_merge_account .not_merge').live('click', function () {
            _hmt.push(['_trackEvent', '璐﹀彿鍚堝苟绯诲垪', 'click', '2銆佹殏涓嶅悎骞� 鐐瑰嚮娆℃暟']);
            show_account({
                flag: false,
                is_relation_project: is_relation_project
            });
            return
        });
        account_merge_btn(is_relation_project, pid);
        // 鏄剧ず鏇村鎸夐挳
        $('#can_merge_account .show_more').live('click', function () {
            $('#can_merge_account .wrap3').addClass('col_black');
            $(this).addClass('col_white');
        });
        // 鍏抽棴鎸夐挳
        $('#can_merge_account .jsbox_close').live('click', function () {
            _hmt.push(['_trackEvent', '璐﹀彿鍚堝苟绯诲垪', 'click', '4銆佸悎骞跺脊绐楀叧闂� 鐐瑰嚮娆℃暟']);
        });


        // 纭畾骞跺彂甯冮棶鍗�
        $('#publish_bind_mobile .btn_publish').click(function (e) {
            var $this = $(this);
            if (!$this.hasClass('btn_disable')) {
                $(this).text("纭畾涓�...")
                if ($this.hasClass('can_merge')) {
                    // 鍙互杩涜璐﹀彿鍚堝苟
                    var phoneNum = $this.attr('data-mobile');
                    // var phoneNum = '17621961237';
                    show_account({
                        flag: true,
                        phoneNum: phoneNum,
                        is_relation_project: is_relation_project
                    });
                    return
                } else if ($this.hasClass('cant_merge')) {
                    show_account({
                        flag: false,
                        is_relation_project: is_relation_project
                    });
                    return
                }
                if (is_relation_project === true) {
                    var $bindMobileForm = $this.parents('.bind_mobile_wrap'),
                        $mobile = $bindMobileForm.find('input[name=mobile]');
                    mobile = $mobile.val(),
                        $mobileError = $mobile.parents('.form_item_wrap').find('.form_error'),
                        $vcode = $bindMobileForm.find('input[name=vcode]'),
                        vcode = $vcode.val(),
                        $vcodeError = $vcode.parents('.form_item_wrap').find('.form_error'),
                        is_shared = $("#checkbox_selector").attr("checked");
                    if ($("#luckdraw_selector").length == 0) {
                        ad_switch = 'on';
                    } else {
                        ad_switch = $("#luckdraw_selector").attr("checked") ? 'on' : 'off';
                    }
                    if (mobile == '') {
                        $mobileError.text('鎹綉淇″姙瑙勫畾锛屽彂甯�' + _this.setting.type + '闇€缁戝畾鎵嬫満').show();
                        return false;
                    } else if (idyLoginValidate.mobile(mobile)) {
                        var text = '鎵嬫満鍙锋牸寮忔湁璇紝濡傞潪涓浗澶ч檰鐢ㄦ埛<a target="_blank" class="loginHelpURL" href="' + idyLoginValidate.loginHelpURL + '">璇风偣姝�<a>'
                        $mobileError.text(text).show();
                        return false;
                    } else {
                        $mobileError.text('').hide();
                    };
                    if (vcode == '') {
                        $vcodeError.text('璇疯緭鍏ラ獙璇佺爜').show();
                        return false;
                    } else {
                        $vcodeError.text('').hide();
                    };
                    if (!is_shared) {
                        localStorage.setItem('share_unchecked_' + pid, true);
                    } else {
                        localStorage.removeItem('share_unchecked_' + pid);
                    }
                    $(".loadMack, .loadCon").remove();
                    loadMack({
                        off: 'on',
                        text: '鍙戝竷涓�',
                        set: 0
                    });
                    setTimeout(function () {
                        // lodding鍘婚櫎
                        $('.loadCon,.loadMack').remove();
                        window.location.reload();
                    }, 60000);
                    if ($this.hasClass('not_vcode')) {
                        _this.validateMobileAndVcode($vcode, is_relation_project);
                    } else {
                        var data = {
                            'mobile': mobile,
                            'vcode': vcode,
                            'proj_id': pid,
                            'status': 1,
                            'is_shared': is_shared,
                            'ad_switch': ad_switch
                        };
                        ajaxPost('/edit/ajax/bind_mobile_update_project_status/', data, function (response) {
                            if (response.error_msg) {
                                $(".loadMack, .loadCon").remove();
                                if (response.error_msg.indexOf('鎵嬫満鍙�') != -1) {
                                    $mobileError.text(response.error_msg).show();
                                    $vcodeError.text('').hide();
                                } else {
                                    $mobileError.text('').hide();
                                    $vcodeError.text(response.error_msg).show();
                                }
                            } else {
                                if (response.is_dirty == true) {
                                    window.location.href = '/project/share/' + pid + '/';
                                } else {
                                    $(".loadMack, .loadCon").remove();
                                    loadMack({
                                        off: 'on',
                                        text: '鍙戝竷鎴愬姛',
                                        set: 0
                                    });
                                    _this.publishSuccessFun(pid, response);
                                }
                            }
                        });
                    }
                } else {
                    if ($this.hasClass('not_vcode')) {
                        _this.validateMobileAndVcode($vcode, is_relation_project);
                    }
                }
            }
        });
    },
    // 楠岃瘉鎵嬫満鍙峰拰楠岃瘉鐮�
    validateMobileAndVcode: function (obj, is_relation_project) {
        var $bindMobileForm = obj.parents('.bind_mobile_wrap'),
            $mobile = $bindMobileForm.find('input[name=mobile]');
        mobile = $mobile.val(),
            $mobileError = $mobile.parents('.form_item_wrap').find('.form_error'),
            $vcode = $bindMobileForm.find('input[name=vcode]'),
            vcode = $vcode.val(),
            $vcodeError = $vcode.parents('.form_item_wrap').find('.form_error'),
            $btnPublish = $bindMobileForm.find('.btn_publish'),
            $share = $bindMobileForm.find('.share_temp');
        $luckdraw = $bindMobileForm.find('.luckdraw_temp');
        console.log($luckdraw)
        if (vcode.length === 6) {
            var data = {
                'mobile': mobile,
                'vcode': vcode,
                '_xsrf': $.cookie('_xsrf')
            }
            $.ajax({
                url: '/register/mobile_validate/',
                data: data,
                dataType: 'JSON',
                type: 'POST',
                timeout: 60000,
                success: function (response) {
                    if (response.status == '200') {
                        // 鍏堝仛璐﹀彿鍚堝苟鐨勫垽鏂�
                        if (response.data) {
                            if (response.data.can_merge) {
                                // 鍙互杩涜璐﹀彿鍚堝苟
                                $('#publish_bind_mobile .btn_publish').addClass('can_merge').attr('data-mobile', response.mobile).removeClass('not_vcode').click();
                            } else {
                                // 涓嶅彲浠ヨ繘琛岃处鍙峰悎骞�
                                $('#publish_bind_mobile .btn_publish').addClass('cant_merge').removeClass('not_vcode').click();
                            }
                            return
                        }
                        window.current_vcode = data.vcode;
                        if (response.error_msg) {
                            $(".loadMack, .loadCon").remove();
                            if (response.error_msg.indexOf('鎵嬫満鍙�') != -1) {
                                $mobileError.text(response.error_msg).show();
                                $vcodeError.text('').hide();
                            } else {
                                $mobileError.text('').hide();
                                $vcodeError.text(response.error_msg).show();
                            }
                            // $btnPublish.addClass('btn_disable');
                            if ($share) $share.hide();
                            if ($luckdraw) $luckdraw.hide();
                        } else {
                            if (is_relation_project === true || typeof is_relation_project == "undefined") {
                                $btnPublish.removeClass('not_vcode').click();
                                if ($share) $share.show();
                                if ($luckdraw) $luckdraw.show();
                            } else if (is_relation_project === false) {
                                loadMack({
                                    off: 'on',
                                    Limg: 0,
                                    text: "缁戝畾鎴愬姛",
                                    set: 1000
                                });
                                location.reload();
                            } else if (is_relation_project == "cash_withdrawal") {
                                $("#lightBox").remove();
                                $("#publish_bind_mobile").remove();
                                cash_reset(mobile);
                            } else if (is_relation_project == "recharge") {
                                $("#lightBox").remove();
                                $("#publish_bind_mobile").remove();
                                showRechargePopup(mobile);
                            }
                        }
                    }
                }
            });
        } else {
            $btnPublish.addClass('btn_disable');
            if ($share) $share.hide();
            if ($luckdraw) $luckdraw.hide();
        }
    },
    // 姝ｅ父娴佺▼鍙戝竷鎴愬姛鐨勫洖璋冨嚱鏁�(宸茬粦瀹氳繃鎵嬫満鍙风殑鐢ㄦ埛)
    publishSaveFun: function () {
        var param = this.Param,
            pid = param.pid,
            is_shared = $("#checkbox_selector").attr("checked");
        if ($("#luckdraw_selector").length == 0) {
            ad_switch = 'on';
        } else {
            ad_switch = $("#luckdraw_selector").attr("checked") ? 'on' : 'off';
        }
        if (!is_shared) {
            localStorage.setItem('share_unchecked_' + pid, true);
        } else {
            localStorage.removeItem('share_unchecked_' + pid);
        }
        var data = {
            'proj_id': pid,
            'status': 1,
            'is_shared': is_shared,
            '_xsrf': $.cookie("_xsrf"),
            'ad_switch': ad_switch
        };
        $(".loadMack, .loadCon").remove();
        loadMack({
            off: 'on',
            text: '鍙戝竷涓�',
            set: 0
        });
        setTimeout(function () {
            // lodding鍘婚櫎
            $('.loadCon,.loadMack').remove();
            window.location.reload();
        }, 60000);
        $.ajax({
            url: '/edit/ajax/update_project_status/',
            data: data,
            dataType: 'JSON',
            type: 'POST',
            timeout: 60000,
            success: function (response) {
                if (response.status == "200") {
                    if (response.error_msg) {
                        $('.loadCon,.loadMack').remove();
                        loadMack({
                            off: 'on',
                            Limg: 0,
                            text: response.error_msg,
                            set: 2000
                        });
                    } else {
                        if (response.is_dirty == true) {
                            window.location.href = '/project/share/' + pid + '/';
                        } else {
                            projectPublishFun.publishSuccessFun(pid, response);
                        }
                    }
                }
            }
        });
    },
    // 缁戝畾鎵嬫満鍙峰拰鍙戝竷鎴愬姛鍚庣殑鍥炶皟鍑芥暟
    publishSuccessFun: function (pid, info) {
        var _this = this;
        try {
            if (change_project_status_callback && typeof (change_project_status_callback) == "function") {
                change_project_status_callback(info);
            }
        } catch (e) {}
        // 鐢ㄦ埛鍙戝竷椤圭洰鎴愬姛鎵嬪姩鎺ㄩ€佷簨浠�
        gio_project_publish ();
        if (_this.setting.page == 'report' || _this.setting.page == 'assessReport') {
            $('.loadCon,.loadMack,#publish_bind_mobile,.publish_bind_mobile_lightBox').remove();
            _this.setting.obj.html('鍋滄鏀堕泦').addClass('cq_stop_btn');
        } else if (_this.setting.page == 'collect' || _this.setting.page == 'edit_v2' || _this.setting.page == 'share_v2') {
            $('.loadCon,.loadMack').remove();
            var pagePrefix = _this.setting.page == 'collect' ? _this.setting.page : 'project';
            notify('notifyCenterXY', '鍙戝竷鎴愬姛', 1000, function () {
                window.location.href = '/' + pagePrefix + '/' + _this.setting.pagename + '/' + _this.setting.pid + '/';
            })
        } else if (_this.setting.page == 'list') {
            $('.loadCon,.loadMack,#publish_bind_mobile,.publish_bind_mobile_lightBox').remove();
            var $obj = _this.setting.obj,
                $tr = $obj.parents('.tr');
            notify('notifyCenterXY', '鍙戝竷鎴愬姛', 1000, function () {
                if ($obj.find('option:selected').val() == 2) {
                    $tr.find('.editor').addClass('end').attr("href", 'javascript:;');
                    $tr.find('.editor').attr("onclick", '');
                } else {
                    var pid = $obj.attr('pid');
                    $tr.find('.editor,.collect_a').removeClass('end').attr("href", '/collect/urllink/' + pid);
                    $tr.find('.editor').attr("onclick", 'project_design_confirm(this);return false;');
                    window.location.reload()
                }
            })
        } else if (_this.setting.page == 'listNew') {
            $('.loadCon,.loadMack').remove();
            notify('notifyCenterXY', '鍙戝竷鎴愬姛', 1000, function () {
                window.location.href = '/project/share/' + pid + '/';
            })
        } else if (_this.setting.page == 'overview') {
            notify('notifyCenterXY', '鍙戝竷鎴愬姛', 1000, function () {
                location.reload()
            })
        }
    },
    // 鑾峰彇楠岃瘉鐮佸悗鐨勫€掕鏃�
    getMobileCode: function (obj) {
        var _this = this;
        var sendMobileTimer = null;
        var iCountDownNum = 59;
        if (_this.bState) {
            _this.bState = false;
            sendMobileTimer = setInterval(function () {
                if (iCountDownNum <= 0) {
                    clearInterval(sendMobileTimer);
                    iCountDownNum = 59;
                    obj.html('鑾峰彇楠岃瘉鐮�').removeClass('btn_disabled');
                    _this.bState = true;
                } else {
                    iCountDownNum--;
                    obj.html(iCountDownNum + '绉掑悗閲嶆柊鑾峰彇').addClass('btn_disabled');
                }
            }, 1000);
        }
    },
    // 鍋滄鏀堕泦寮圭獥
    checkPconvertForm: function (pid) {
        var _this = this;
        ajaxPost('/edit/ajax/get_rspd_count/', {
            'proj_id': pid
        }, function (response) {
            if (response.error_msg) {
                loadMack({
                    off: 'on',
                    text: response.error_msg,
                    set: 10000
                });
            } else {
                if (response.pc_count != 0) {
                    var confirmPopupObj = {
                        'title': '淇敼纭',
                        'content': '<img style="display: block; margin: 10px auto 25px;" src="/static/images/exclamation_mark.png" />鍋滄鏀堕泦浣犵殑鏈夊伩鏀堕泦璁㈠崟涔熷皢琚�<span style="color:#cd4444;">鍙栨秷</span>锛佷綘鎯冲啀鏀堕泦鏃跺彲鑷斥€�<span style="color:#cd4444;">鏀堕泦鏁版嵁鈫掓湁鍋挎敹闆�</span>鈥濋噸鏂颁笅璁㈠崟銆�',
                        'obj': _this.stopCollectFun,
                        'Param': _this.setting,
                        'conw': 400,
                        'close_obj': _this.setting.publishCancelFun
                    };
                    jsConfirm(confirmPopupObj);
                } else {
                    var confirmPopupObj = {
                        'title': '鍋滄纭',
                        'content': '<p>纭鍋滄鍙戝竷<span>銆�' + _this.setting.surveyTitle + '銆�</span>鍚楋紵</p><p>璇�' + _this.setting.type + '鎵€鏈夋暟鎹敹闆嗗皢琚仠姝紝绛旈閾炬帴灏嗘棤娉曟敹闆嗘暟鎹�</p>',
                        'obj': _this.stopCollectFun,
                        'Param': _this.setting,
                        'conw': 400,
                        'close_obj': _this.setting.publishCancelFun
                    };
                    jsConfirm(confirmPopupObj);
                }
            }
        });
    },
    // 鍋滄鏀堕泦
    stopCollectFun: function () {
        var param = this.Param;
        var data = {
            'proj_id': param.pid,
            'status': 0,
            '_xsrf': $.cookie("_xsrf")
        };
        loadMack({
            off: 'on',
            text: '鏆傚仠鍙戝竷涓�',
            set: 10000
        });
        $.ajax({
            url: '/edit/ajax/update_project_status/',
            data: data,
            dataType: 'JSON',
            type: 'POST',
            timeout: 60000,
            success: function (response) {
                if (response.status == "200") {
                    $('.loadCon,.loadMack').remove();
                    if (response.error_msg) {
                        loadMack({
                            off: 'on',
                            Limg: 0,
                            text: response.error_msg,
                            set: 2000
                        });
                    } else {
                        if (param.page == 'report' || param.page == 'assessReport') {
                            param.obj.html('寮€濮嬫敹闆�').removeClass('cq_stop_btn');
                        } else if (param.page == 'collect' || param.page == 'project' || param.page == 'share' || param.page == 'listNew' || param.page == 'list' || param.page == 'share_v2') {
                            notify('notifyCenterXY', '鏆傚仠鍙戝竷鎴愬姛', 1000, function () {
                                window.location.reload()
                            })
                        }
                    }
                }
            }
        });
    },
};

var projectPublishMobileFun = {
    init: function (pid, option) {
        this.bState = true; // 榛樿鍙彂閫侀獙璇佺爜
        this.setting = {
            pid: pid,
            type: '闂嵎' // 闂嵎绫诲瀷锛堥棶鍗枫€佽〃鍗曪級
        };
        $.extend(this.setting, option);
        this.showBindMobileFun(pid);
    },
    // 鏄剧ず缁戝畾鎵嬫満鍙峰脊绐�
    showBindMobileFun: function (pid) {
        var _this = this;
        $('#bindMobileHtml').remove();
        var bindMobileHtml = '' +
            '<div id="publish_bind_mobile">' +
            '<div class="bind_mobile_wrap">' +
            '<a class="btn_close_bind_mobile"></a>' +
            '<div class="title">缁戝畾鎵嬫満鍙�</div>' +
            '<div class="bind_mobile_form">' +
            '<div class="form_item_wrap">' +
            '<div class="form_item form_mobile"><label for=""><input type="text" placeholder="鎵嬫満鍙�" name="mobile" class="mobile" /></label></div>' +
            '<div class="form_error">鎹綉淇″姙瑙勫畾锛屽彂甯�' + _this.setting.type + '闇€缁戝畾鎵嬫満</div>' +
            '</div>' +
            '<div class="form_item_wrap">' +
            '<div class="form_item form_vcode"><label for=""><input type="text" placeholder="楠岃瘉鐮�" name="vcode" class="vcode" /></label><a class="btn_get_vcode">鑾峰彇楠岃瘉鐮�</a></div>' +
            '<div class="form_error"></div>' +
            '</div>' +
            '</div>' +
            '<div class="btn_wrap"><a class="btn_publish btn_disable">纭畾骞跺彂甯�' + _this.setting.type + '</a></div>' +
            '</div>' +
            '</div>';
        $('body').append(bindMobileHtml);

        // 鍏抽棴鎸夐挳
        $('#publish_bind_mobile .btn_close_bind_mobile').on('click', function () {
            $('#publish_bind_mobile').remove();
        });
        // 鐩戝惉鎵嬫満鍙风爜
        $('#publish_bind_mobile input[name=mobile]').keyup(function (e) {
            var $this = $(this);
            // var mobile = $this.val().replace(/\D/g,'');
            var mobile = $this.val()
            var $mobileError = $this.parents('.form_item_wrap').find('.form_error');
            // mobile = mobile.substr(0, 11);
            $this.val(mobile);
            if (mobile !== '') {
                $mobileError.text('').hide();
                if (mobile.length === 11) {
                    projectPublishFun.validateMobileAndVcode($this);
                }

            } else {
                $mobileError.show().text('鎹綉淇″姙瑙勫畾锛屽彂甯�' + _this.setting.type + '闇€缁戝畾鎵嬫満');
            }
        });
        // 鐩戝惉楠岃瘉鐮�
        $('#publish_bind_mobile input[name=vcode]').keyup(function (e) {
            var $this = $(this);
            // var mobile = $this.val().replace(/\D/g,'');
            var vcode = $this.val();
            var $vcodeError = $this.parents('.form_item_wrap').find('.form_error');
            if (vcode.length >= 6) vcode = vcode.substr(0, 6);
            $this.val(vcode);
            if (vcode !== '') {
                $vcodeError.text('').hide();
                if (vcode.length === 6) {
                    $this.parents('.bind_mobile_wrap').find('.btn_publish').removeClass('btn_disable').addClass('not_vcode');
                    // projectPublishFun.validateMobileAndVcode($this);
                } else {
                    $this.parents('.bind_mobile_wrap').find('.btn_publish').addClass('btn_disable').addClass('not_vcode');
                }

            } else {
                $vcodeError.show().text('璇疯緭鍏ラ獙璇佺爜');
            }
        });
        // 鑾峰彇楠岃瘉鐮�
        $('#publish_bind_mobile .btn_get_vcode').click(function (e) {
            if ($(this).hasClass('btn_disabled')) return;
            var $this = $(this),
                $mobile = $this.parents('.bind_mobile_form').find('input[name=mobile]');
            mobile = $mobile.val();
            $mobileError = $mobile.parents('.form_item_wrap').find('.form_error');
            if (mobile == '') {
                $mobileError.text('鎹綉淇″姙瑙勫畾锛屽彂甯�' + _this.setting.type + '闇€缁戝畾鎵嬫満').show();
                return false;
            } else if (idyLoginValidate.mobile(mobile)) {
                var text = '鎵嬫満鍙锋牸寮忔湁璇紝濡傞潪涓浗澶ч檰鐢ㄦ埛<a target="_blank" class="loginHelpURL" href="' + idyLoginValidate.loginHelpURL + '">璇风偣姝�<a>'
                $mobileError.text(text).show();
                return false;
            } else {
                $mobileError.text('').hide();
            };
            if (_this.bState) {
                ajaxPost('/register/auth_mobile_validatecode/', {
                    'mobile': mobile,
                    'usefor': 'publishproject_bindmobile'
                }, function (response) {
                    // if (response.error_msg) {
                    //     if(response.error_msg == '璇ユ墜鏈哄彿宸茶浣跨敤'){
                    //         $('#publish_bind_mobile').remove();
                    //         var bindedHtml = '' +
                    //             '<div id="bind_mobile_repeat"><div class="have_bind">' +
                    //                 '<a class="close_bind_mobile"></a>' +
                    //                 '<div class="title">璇ユ墜鏈哄彿宸茶缁戝畾</div>' +
                    //                 '<div class="has_bind">' +
                    //                     '<p>濡傛偍鎯崇户缁粦瀹氾紝鍙寜濡備笅鎿嶄綔锛�</p>' +
                    //                     '<p>1.鍦ㄧ數鑴戜笂閫€鍑哄綋鍓嶈处鍙枫€�</p>' +
                    //                     '<p>2.浣跨敤姝ゆ墜鏈哄彿鐧诲綍鏃ц处鍙枫€�</p>' +
                    //                     '<p>3.杩涘叆鍚庡彴-鎴戠殑璐﹀彿-瑙ｇ粦骞堕€€鍑烘棫璐﹀彿銆�</p>' +
                    //                     '<p>4.閲嶆柊鐧诲綍褰撳墠璐﹀彿锛岄噸鏂扮粦瀹氥€�</p>' +
                    //                 '</div>' +
                    //                 '<div class="btn_wrap"> '+
                    //                     '<div class="third_logout"><a href="/logout">閫€鍑哄綋鍓嶈处鍙�</a></div>' +
                    //                     '<div class="third_close">璋㈣阿鎻愰啋</div>' +
                    //                 '</div>' +
                    //             '</div></div>';
                    //         $('body').append(bindedHtml);
                    //     }else{
                    //         $mobileError.text(response.error_msg).show();
                    //     }
                    // } else {
                    //     loadMack({off: 'on', Limg: 0, text:' 楠岃瘉鐮佸凡鍙戦€侊紝璇锋煡鏀�', set: 2000});
                    //     _this.getMobileCode($this);
                    // }
                    loadMack({
                        off: 'on',
                        Limg: 0,
                        text: ' 楠岃瘉鐮佸凡鍙戦€侊紝璇锋煡鏀�',
                        set: 2000
                    });
                    _this.getMobileCode($this);
                });
            };
        });

        // 鍏抽棴鎸夐挳
        $('body').on('click', '#bind_mobile_repeat .close_bind_mobile', function () {
            $('#bind_mobile_repeat').remove();
        });

        $('body').on('click', '.third_close', function () {
            $('#bind_mobile_repeat').remove();
        });

        // 纭畾骞跺彂甯冮棶鍗�
        $('#publish_bind_mobile .btn_publish').click(function (e) {
            // alert('mobile')
            var $this = $(this);
            if (!$this.hasClass('btn_disable')) {
                if ($this.hasClass('can_merge')) {
                    // 鍙互杩涜璐﹀彿鍚堝苟
                    var phoneNum = $this.attr('data-mobile');
                    // var phoneNum = '17621961237';
                    show_account({
                        flag: true,
                        phoneNum: phoneNum,
                        terminal: 'mobile'
                    });
                    return
                } else if ($this.hasClass('cant_merge')) {
                    show_account({
                        flag: false,
                        terminal: 'mobile'
                    });
                    return
                }
                var $bindMobileForm = $this.parents('.bind_mobile_wrap'),
                    $mobile = $bindMobileForm.find('input[name=mobile]');
                mobile = $mobile.val(),
                    $mobileError = $mobile.parents('.form_item_wrap').find('.form_error'),
                    $vcode = $bindMobileForm.find('input[name=vcode]'),
                    vcode = $vcode.val(),
                    $vcodeError = $vcode.parents('.form_item_wrap').find('.form_error');
                if (mobile == '') {
                    $mobileError.text('鎹綉淇″姙瑙勫畾锛屽彂甯�' + _this.setting.type + '闇€缁戝畾鎵嬫満').show();
                    return false;
                } else if (idyLoginValidate.mobile(mobile)) {
                    var text = '鎵嬫満鍙锋牸寮忔湁璇紝濡傞潪涓浗澶ч檰鐢ㄦ埛<a target="_blank" class="loginHelpURL" href="' + idyLoginValidate.loginHelpURL + '">璇风偣姝�<a>'
                    $mobileError.text(text).show();
                    return false;
                } else {
                    $mobileError.text('').hide();
                };
                if (vcode == '') {
                    $vcodeError.text('璇疯緭鍏ラ獙璇佺爜').show();
                    return false;
                } else {
                    $vcodeError.text('').hide();
                };
                $(".loadMack, .loadCon").remove();
                loadMack({
                    off: 'on',
                    text: '鍙戝竷涓�',
                    set: 0
                });
                setTimeout(function () {
                    // lodding鍘婚櫎
                    $('.loadCon,.loadMack').remove();
                    window.location.reload();
                }, 60000);
                if ($this.hasClass('not_vcode')) {
                    projectPublishFun.validateMobileAndVcode($vcode);
                } else {
                    var data = {
                        'mobile': mobile,
                        'vcode': vcode,
                        'proj_id': pid,
                        'status': 1
                    };
                    ajaxPost('/edit/ajax/bind_mobile_update_project_status/', data, function (response) {
                        if (response.error_msg) {
                            $(".loadMack, .loadCon").remove();
                            if (response.error_msg.indexOf('鎵嬫満鍙�') != -1) {
                                $mobileError.text(response.error_msg).show();
                                $vcodeError.text('').hide();
                                return false;
                            } else {
                                $mobileError.text('').hide();
                                $vcodeError.text(response.error_msg).show();
                                return false;
                            }
                        } else {
                            if (response.is_dirty == true) {
                                window.location.href = '/project/share/' + pid + '/';
                            } else {
                                if (_this.setting.page == 'list') {
                                    surePub = true; //琛ㄧず浠庡彂甯冩寜閽烦鍒板垎浜寜閽�
                                    $('.sr_share[pidname=' + pid + ']').triggerHandler("tapone");
                                } else if (_this.setting.page == 'edit') {
                                    window.location.href = _this.setting.getSurveyUrl + '?own=1';
                                }
                            }
                        }
                    });
                }
            }
        });
        // 璐﹀彿鍚堝苟寮圭獥-mobile
        // 鍏抽棴鎸夐挳
        $('body').on('click', '#merge_account_popup .close_btn', function () {
            _hmt.push(['_trackEvent', '璐﹀彿鍚堝苟绯诲垪', 'click', '2銆丮绔欙紞璐﹀彿鍚堝苟寮圭獥鍏抽棴']);
            hide_account();
        });
        // 鎴戠煡閬撲簡锛岀户缁彂甯冩寜閽�
        $('body').on('click', '#merge_account_popup .ikonw_btn', function () {
            _hmt.push(['_trackEvent', '璐﹀彿鍚堝苟绯诲垪', 'click', '3銆丮绔欙紞璐﹀彿鍚堝苟锛嶇‘瀹氬苟鍙戝竷']);
            loadMack({
                off: 'on',
                text: '鍙戝竷涓�',
                set: 0
            });
            setTimeout(function () {
                // lodding鍘婚櫎
                $('.loadCon,.loadMack').remove();
                window.location.reload();
            }, 60000);
            // 1.璐﹀彿鍚堝苟
            // 2.鏇存柊鐘舵€佷负鏀堕泦涓�
            // 3.璺宠浆椤甸潰
            var $this = $(this);
            var phoneNum = $this.attr('data-mobile');
            ajaxPost('/mergemember/mergemembersifbindotheraccount/pc', {
                bind_type: 'mobile',
                bind_value: phoneNum
            }, function (res) {
                if (res.status == 200 && res.merge_status == true) {
                    ajaxPost('/edit/ajax/bind_mobile_update_project_status/', {
                        'mobile': phoneNum,
                        'vcode': window.current_vcode,
                        'proj_id': pid,
                        'status': 1
                    }, function (response) {
                        if (response.error_msg) {
                            if (response.error_msg.indexOf('鎵嬫満鍙�') != -1) {
                                $mobileError.text(response.error_msg).show();
                                $vcodeError.text('').hide();
                                return false;
                            } else {
                                $mobileError.text('').hide();
                                $vcodeError.text(response.error_msg).show();
                                return false;
                            }
                        } else {
                            if (response.is_dirty == true) {
                                window.location.href = '/project/share/' + pid + '/';
                            } else {
                                if (_this.setting.page == 'list') {
                                    surePub = true; //琛ㄧず浠庡彂甯冩寜閽烦鍒板垎浜寜閽�
                                    $('.sr_share[pidname=' + pid + ']').triggerHandler("tapone");
                                } else if (_this.setting.page == 'edit') {
                                    window.location.href = _this.setting.getSurveyUrl + '?own=1';
                                }
                            }
                        }
                    });
                }
            });

        });
    },
    // 鑾峰彇楠岃瘉鐮佸悗鐨勫€掕鏃�
    getMobileCode: function (obj) {
        var _this = this;
        var sendMobileTimer = null;
        var iCountDownNum = 59;
        if (_this.bState) {
            _this.bState = false;
            sendMobileTimer = setInterval(function () {
                if (iCountDownNum <= 0) {
                    clearInterval(sendMobileTimer);
                    iCountDownNum = 59;
                    obj.html('鑾峰彇楠岃瘉鐮�').removeClass('btn_disabled');
                    _this.bState = true;
                } else {
                    iCountDownNum--;
                    obj.html(iCountDownNum + '绉掑悗閲嶆柊鑾峰彇').addClass('btn_disabled');
                }
            }, 1000);
        }
    }
};
// 鏄惁鏀寔 sessionStorage
function isSessionStorageNameSupported() {
    var testKey = 'test',
        storage = window.sessionStorage;
    try {
        storage.setItem(testKey, '1');
        storage.removeItem(testKey);
        return true;
    } catch (error) {
        return false;
    }
}
// 濡傛灉涓嶆敮鎸� sessionStorage 鐢╟ookie鏇夸唬锛岃缃甧ssionStorage
function setSessionStorage(name, value, expiredays) {
    if (isSessionStorageNameSupported()) {
        sessionStorage.setItem(name, value);
    } else {
        setCookie(name, value, expiredays);
    }
}
// 濡傛灉涓嶆敮鎸� sessionStorage 鐢╟ookie鏇夸唬锛岃幏鍙杝essionStorage
function getSessionStorage(name) {
    if (isSessionStorageNameSupported()) {
        return sessionStorage.getItem(name);
    } else {
        return getCookie(name);
    }
}
// 濡傛灉涓嶆敮鎸� sessionStorage 鐢╟ookie鏇夸唬锛屽垹闄essionStorage
function delSessionStorage(name) {
    if (isSessionStorageNameSupported()) {
        return sessionStorage.removeItem(name);
    } else {
        return delCookie(name);
    }
}

// 妯℃澘瀛楃涓�
var tplStr = {
    // 鎵嬫満宸茬粦瀹氬叾浠栭棶鍗风綉璐﹀彿(璐﹀彿鍐茬獊)
    accountConflict: {
        title: '鎴戜滑妫€娴嬪埌鎮ㄧ殑鎵嬫満宸茬粦瀹氬叾浠栭棶鍗风綉璐﹀彿',
        content: '<div class="have_bind"><div class="has_bind"><p>濡傛偍鎯崇户缁粦瀹氾紝鍙寜濡備笅鎿嶄綔锛�</p><p>1.鍦ㄧ數鑴戜笂閫€鍑哄綋鍓嶈处鍙枫€�</p><p>2.浣跨敤姝ゆ墜鏈哄彿鐧诲綍鏃ц处鍙枫€�</p><p>3.杩涘叆鍚庡彴-鎴戠殑璐﹀彿-瑙ｇ粦骞堕€€鍑烘棫璐﹀彿銆�</p><p>4.閲嶆柊鐧诲綍褰撳墠璐﹀彿锛岄噸鏂扮粦瀹氥€�</p></div><div class="btn_wrap"><div class="third_logout"><a href="/logout">閫€鍑哄綋鍓嶈处鍙�</a></div><div class="third_close">璋㈣阿鎻愰啋</div></div></div>'
    },
    // 璐﹀彿鍚堝苟鎻愰啋
    mergeTips: {
        title: '缁戝畾鎵嬫満鎻愰啋'
    },
    mobile: {
        // 鎵嬫満宸茬粦瀹氬叾浠栭棶鍗风綉璐﹀彿(璐﹀彿鍐茬獊)
        accountConflict: '<div id="bind_mobile_repeat"> <div class="have_bind"> <a class="close_bind_mobile"></a> <div class="title">璇ユ墜鏈哄彿宸茶缁戝畾</div> <div class="has_bind"> <p>濡傛偍鎯崇户缁粦瀹氾紝鍙寜濡備笅鎿嶄綔锛�</p> <p>1.鍦ㄧ數鑴戜笂閫€鍑哄綋鍓嶈处鍙枫€�</p> <p>2.浣跨敤姝ゆ墜鏈哄彿鐧诲綍鏃ц处鍙枫€�</p> <p>3.杩涘叆鍚庡彴-鎴戠殑璐﹀彿-瑙ｇ粦骞堕€€鍑烘棫璐﹀彿銆�</p> <p>4.閲嶆柊鐧诲綍褰撳墠璐﹀彿锛岄噸鏂扮粦瀹氥€�</p> </div> <div class="btn_wrap"> <div class="third_logout"> <a href="/logout">閫€鍑哄綋鍓嶈处鍙�</a> </div> <a class="third_close">璋㈣阿鎻愰啋</a> </div> </div> </div>'
    }
}

// 鏄剧ず璐﹀彿鍚堝苟寮圭獥
function show_account(obj) {
    $(".loadMack, .loadCon").remove();
    hide_account();
    hide_bind_mobile();
    var flag = obj.flag;
    var phoneNum = obj.phoneNum;
    var terminal = obj.terminal; // 缁堢鏄疨C鎴栨墜鏈�, 鏈変簺涓嶅悓涔嬪
    var btn_str = "";
    var is_relation_project = typeof obj.is_relation_project == "undefined" ? true : obj.is_relation_project;
    if (is_relation_project === true) {
        btn_str = "鎴戠煡閬撲簡锛岀户缁彂甯�";
    } else {
        btn_str = "纭畾";
    }
    // flag=true 鏄剧ず鍚堝苟鎻愰啋寮圭獥 flag=false 鏄剧ず璐﹀彿鍐茬獊寮圭獥
    if (flag) {
        // 鍙互杩涜璐﹀彿鍚堝苟
        if (terminal != 'mobile') {
            _hmt.push(['_trackEvent', '璐﹀彿鍚堝苟绯诲垪', 'click', '1銆佽处鍙峰悎骞舵彁閱� 寮瑰嚭娆℃暟銆�']);
            $('.jsbox_close').click();
            var bindedHtml = '<div class="tips_box"> <div class="wrap1">鎴戜滑妫€娴嬪埌鎮ㄧ殑鎵嬫満锛�' + hide_mobile(phoneNum) + '锛夊凡鏈夐棶鍗风綉璐﹀彿锛屼负鏂逛究浣跨敤锛屾垜浠細杩涜瀹夊叏鍚堝苟銆� </div> <div class="wrap3"> <p>1銆佹垜浠細灏嗗師甯愬彿涓殑椤圭洰鍜屼紭鎯犲埜鍚堝苟鍒版偍褰撳墠璐﹀彿涓紝椤圭洰鏁版嵁涓嶄細涓㈠け</p> <p>2銆佸悎骞跺悗锛屾鎵嬫満鍙蜂細鑷姩缁戝畾鍒板綋鍓嶅笎鍙凤紝鎮ㄥ彲浠ョ户缁彂甯冮」鐩紝姝ｅ父浣跨敤</p> </div> <div class="wrap2"> <div class="agree_merge" data-mobile="' + phoneNum + '">' + btn_str + '</div> </div> </div>';
            var bindMobilePopup = new jsbox({
                onlyid: 'can_merge_account',
                title: tplStr.mergeTips.title,
                content: bindedHtml,
                conw: 600,
                range: true,
                mack: true
            }).show();
        } else {
            _hmt.push(['_trackEvent', '璐﹀彿鍚堝苟绯诲垪', 'click', '1銆丮绔欙紞璐﹀彿鍚堝苟寮圭獥']);
            $('#publish_bind_mobile').remove();
            $('body').append('<div id="merge_account_popup"> <div class="box"> <div class="close_btn"><img src="/static/images/ic-close.png" alt="" width="24"></div> <h2>缁戝畾鎵嬫満鎻愰啋</h2> <div class="row1"> 鎴戜滑妫€娴嬪埌鎮ㄧ殑鎵嬫満' + hide_mobile(phoneNum) + '姝ゅ墠缁戝畾杩囬棶鍗风綉璐﹀彿锛屼负鏂逛究浣跨敤锛屾垜浠細杩涜瀹夊叏鍚堝苟銆� </div> <div class="row2"> 1銆佹垜浠細灏嗗師甯愬彿涓殑椤圭洰鍜屼紭鎯犲埜鍚堝苟鍒版偍褰撳墠璐﹀彿涓紝椤圭洰鏁版嵁涓嶄細涓㈠け <br> 2銆佸悎骞跺悗锛屾鎵嬫満鍙蜂細鑷姩缁戝畾鍒板綋鍓嶅笎鍙凤紝鎮ㄥ彲浠ョ户缁彂甯冮」鐩紝姝ｅ父浣跨敤 </div> <a class="ikonw_btn" data-mobile="' + phoneNum + '">' + btn_str + '</a> </div> </div>');
        }
    } else {
        // 涓嶅彲浠ヨ繘琛岃处鍙峰悎骞�
        if (terminal != 'mobile') {
            _hmt.push(['_trackEvent', '璐﹀彿鍚堝苟绯诲垪', 'click', '4銆丳C锛嶅紩瀵艰В缁戞墜鏈哄彿鎻愰啋']);
            $('.jsbox_close').click();
            var bindedHtml = tplStr.accountConflict.content;
            var bindMobilePopup = new jsbox({
                onlyid: 'havebind_mobile',
                title: tplStr.accountConflict.title,
                content: bindedHtml,
                conw: 600,
                range: true,
                mack: true
            }).show();
        } else {
            _hmt.push(['_trackEvent', '璐﹀彿鍚堝苟绯诲垪', 'click', '4銆丮绔欙紞寮曞瑙ｇ粦鎵嬫満鍙锋彁閱�']);
            $('#publish_bind_mobile').remove();
            $('body').append(tplStr.mobile.accountConflict);
        }
    }
    return
}

// 闅愯棌璐﹀彿鍚堝苟寮圭獥
function hide_account() {
    $('.jsbox_close').click();
    $('#merge_account_popup, #bind_mobile_repeat').remove();
}
// 闅愯棌缁戝畾鎵嬫満鍙峰脊绐�
function hide_bind_mobile() {
    $('.jsbox_close').click();
}

// 澶勭悊鎵嬫満鍙风爜 (涓棿鍥涗綅鎹�*)
function hide_mobile(tel) {
    tel += "";
    return tel.substr(0, 3) + '****' + tel.substr(7);
}

var errorPack = function (text) {
    return '<div class="error">' + text + '</div>'
}

var appendError = function (p, text) {
    var text = errorPack(text)
    p.append(text)
}

var idyLoginValidate = {
    empty: function (sel) {
        var v = $(sel).val()
        return v == ''
    },
    mobile: function (val) {
        var v = val
        var domestic = /^1[3456789][0-9]{9}$/
        var foreign = /^\+[0-9]{1,20}$/
        return !(domestic.test(v) || foreign.test(v))
    },
    code: function (val) {
        var v = val.trim()
        return v.length != 6
    },
    password: function (val) {
        var v = val.trim()
        return !(v.length <= 20 && v.length >= 6)
    },
    email: function (val) {
        var v = val.trim()
        var empty = (v == '')
        var wrongFormat = (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(v))
        var mayRefuse = (/^[\w._]+@(126|163|yeah)\.com(\r\n|\r|\n)?$/.test(v))
        return (empty || wrongFormat)
    },
    loginHelpURL: 'https://www.wenjuan.com/helpcenter/list/5232d9b489c0971a7a0e71f0/h35b344afea320fc2682c7d4f7',
    errorText: "鎵嬫満鍙锋牸寮忔湁璇紝濡傞潪涓浗澶ч檰鐢ㄦ埛<a target=\"_blank\" class=\"loginHelpURL\" href=\"https://www.wenjuan.com/helpcenter/list/5232d9b489c0971a7a0e71f0/h35b344afea320fc2682c7d4f7\">璇风偣姝�<a>"
}

// 鑾峰彇鐢ㄦ埛鏉冮檺
function get_member_edit_authority(pid, type) {
    var dtd = $.Deferred();
    $.ajax({
        url: '/enterprise/check_member_permission/?permission_type=' + type + '&project_id=' + pid,
        type: 'GET',
        dataType: 'json',
        success: function (ret) {
            if (ret.status == 200) {
                if (ret.code == 1) {
                    dtd.resolve();
                } else if (ret.code == 2) {
                    loadMack({
                        off: 'on',
                        Limg: 1,
                        text: '鎮ㄦ病鏈夋潈闄愪娇鐢紝璇疯仈绯婚」鐩墍鏈夎€�',
                        set: 1000
                    });
                    dtd.reject();
                }
            } else {
                loadMack({
                    off: 'on',
                    Limg: 1,
                    text: '璇风◢鍚庡啀璇�',
                    set: 1000
                });
                dtd.reject();
            }
        }
    });
    return dtd.promise();
}
// 缂栬緫椤圭洰鑾峰彇椤圭洰绛旈鏁版嵁
function project_design_confirm(projectId, projectType, linkUrl) {
    $.when(get_member_edit_authority(projectId, 'edit')).done(function () {
        var data = {
            proj_id: projectId
        }
        if (projectType === '1') projectType = '琛ㄥ崟';
        else if (projectType === '2') projectType = '娴嬭瘎';
        else projectType = '闂嵎';
        ajaxPost('/edit/ajax/get_rspd_count/', data, function (ret) {
            get_rspd_count_callback(projectId, projectType, linkUrl, ret);
        })
    });
}
// 鏍规嵁椤圭洰鏁版嵁鏄剧ず涓嶅悓鎻愮ず寮圭獥
function get_rspd_count_callback(projectId, projectType, linkUrl, info) {
    //鏈夌瓟鍗锋暟鎹渶纭锛屾病鏈夌殑璇濈洿鎺ヨ烦杞瓟鍗疯璁�
    var confirmParam = {
        projectId: projectId,
        linkUrl: linkUrl
    };
    if (info.rspd_count != 0 || info.new_rspd_count != 0) {
        if (info.pc_count != 0) {
            var confirm_popup_win = Object;
            confirm_popup_win.title = '淇敼纭';
            var content = '<img style="display: block; margin: 10px auto 25px;" src="/static/images/exclamation_mark.png" />淇敼灏嗕娇浣犵殑椤圭洰鏆傚仠鏀堕泦锛屼綘鐨勬湁鍋挎敹闆嗚鍗曚篃灏嗚<span style="color:#cd4444;">鍙栨秷</span>锛佸畬鎴愪慨鏀瑰悗璇烽噸鏂板彂甯冮棶鍗凤紝鑷斥€�<span style="color:#cd4444;">鏀堕泦鏁版嵁鈫掓湁鍋挎敹闆�</span>鈥濋噸鏂颁笅璁㈠崟銆�';
            confirm_popup_win.content = content;
            confirm_popup_win.conw = 400;
            if (info.new_rspd_count != 0) {
                confirm_popup_win.obj = continue_design_project;
            } else {
                confirm_popup_win.obj = continue_design_project_zero;
            }
            confirm_popup_win.Param = confirmParam;
            confirm_popup_win.obj_text = '纭畾';
            confirm_popup_win.close_Param = false;
            jsConfirm(confirm_popup_win);
        } else if (info.new_rspd_count != 0) {
            var confirm_popup_win = Object;
            confirm_popup_win.title = '淇敼鎻愮ず';
            var content = '<div class="tccCon_d">鎮ㄧ殑' + projectType + '宸叉敹闆� ' + info.rspd_count + ' 浠芥暟鎹紝鐜板湪杩涜棰樼洰鍒犳敼鍙兘浼氬奖鍝嶅凡鏀堕泦鐨勬暟鎹€�';
            content += '鍦ㄦ偍淇敼' + projectType + '鏃讹紝' + projectType + '浼氭殏鍋滄敹闆嗭紝鎮ㄩ渶鍦ㄤ慨鏀瑰畬鍚庡啀娆″彂甯�' + projectType + '鎵嶅彲缁х画杩涜鏀堕泦銆�</div>';
            confirm_popup_win.content = content;
            confirm_popup_win.conw = 470;
            confirm_popup_win.obj = continue_design_project;
            confirm_popup_win.Param = confirmParam;
            confirm_popup_win.obj_text = '纭畾';
            confirm_popup_win.close_text = '鍙栨秷';
            jsConfirm(confirm_popup_win);

            // $('.tccCon_d').jqTransform();

        } else if (info.proj_status == 1) {
            var confirm_zero_win = Object;
            confirm_zero_win.title = '淇敼鎻愮ず';
            var content_zero = '浣犺淇敼' + projectType + '銆�' + info.title + '銆嬪悧锛熻' + projectType + '鎵€鏈夋暟鎹敹闆嗗皢琚仠姝紝绛斿嵎閾炬帴鏆傛椂鍏抽棴銆�';
            confirm_zero_win.content = content_zero;
            confirm_zero_win.obj = continue_design_project_zero;
            confirm_zero_win.Param = confirmParam;
            confirm_zero_win.obj_text = '纭畾';
            confirm_zero_win.close_text = '鍙栨秷';
            jsConfirm(confirm_zero_win);
        } else
            location.href = linkUrl;
    } else if (info.proj_status == 0) {
        location.href = linkUrl;
    } else if (info.proj_status == 1) {
        if (info.pc_count != 0) {
            var confirm_popup_win = Object;
            confirm_popup_win.title = '淇敼纭';
            var content = '<img style="display: block; margin: 10px auto 25px;" src="/static/images/exclamation_mark.png" />淇敼灏嗕娇浣犵殑椤圭洰鏆傚仠鏀堕泦锛屼綘鐨勬湁鍋挎敹闆嗚鍗曚篃灏嗚<span style="color:#cd4444;">鍙栨秷</span>锛佸畬鎴愪慨鏀瑰悗璇烽噸鏂板彂甯冮棶鍗凤紝鑷斥€�<span style="color:#cd4444;">鏀堕泦鏁版嵁鈫掓湁鍋挎敹闆�</span>鈥濋噸鏂颁笅璁㈠崟銆�';
            confirm_popup_win.content = content;
            confirm_popup_win.conw = 400;
            confirm_popup_win.obj = continue_design_project_zero;
            confirm_popup_win.Param = confirmParam;
            confirm_popup_win.obj_text = '纭畾';
            confirm_popup_win.close_Param = false;
            jsConfirm(confirm_popup_win);
        } else {
            var confirm_zero_win = Object;
            confirm_zero_win.title = '淇敼鎻愮ず';
            var content_zero = '鍦ㄦ偍淇敼' + projectType + '鏃讹紝' + projectType + '浼氭殏鍋滄敹闆嗭紝鎮ㄩ渶鍦ㄤ慨鏀瑰畬鍚庡啀娆″彂甯�' + projectType + '鎵嶅彲缁х画杩涜鏀堕泦銆�';
            confirm_zero_win.content = content_zero;
            confirm_zero_win.obj = continue_design_project_zero;
            confirm_zero_win.Param = confirmParam;
            confirm_zero_win.obj_text = '纭畾';
            confirm_zero_win.close_text = '鍙栨秷';
            jsConfirm(confirm_zero_win);

        }
    }
}
// 椤圭洰璁剧疆杩囨湁鍋挎敹闆�
function continue_design_project(param) {
    var url = '/report/ajax/project_archive/?pid=' + param.projectId;
    var data = {
        'proj_id': param.projectId,
        'is_merge': 0
    }
    ajaxPost(url, data, function (ret) {
        if (ret.result == 'Success') {
            location.href = param.linkUrl;
        } else if (ret.result == 'Doing') {
            loadMack({
                off: 'on',
                Limg: 0,
                text: '姝ｅ湪澶勭悊涓紝璇风◢鍊欙紒',
                set: 1000
            });
        }
    });
}
// 纭缂栬緫椤圭洰锛屾洿鏀归」鐩姸鎬�
function continue_design_project_zero(param) {
    var url = '/edit/ajax/update_project_status/';
    var data = {
        'proj_id': param.projectId,
        'status': 0
    };
    ajaxPost(url, data, function (ret) {
        location.href = param.linkUrl;
    });
}

// 瀵嗙爜澶畝鍗曠殑鎻愮ず寮圭獥
function show_password_too_simple_popup(nexturl) {
    _hmt.push(['_trackEvent', 'password_too_simple_popup', 'click', '瀵嗙爜澶畝鍗�==寮圭獥鏄剧ず']);
    $('#password-too-simple').addClass('show');
    bind_popup_click(nexturl);
}
// 瀵嗙爜澶畝鍗曠殑鎻愮ず寮圭獥鐨勭偣鍑讳簨浠�
function bind_popup_click(nexturl) {
    var $popup = $('#password-too-simple');
    $('#password-too-simple .close').click(function () {
        _hmt.push(['_trackEvent', 'password_too_simple_popup', 'click', '瀵嗙爜澶畝鍗�==鍏抽棴鎸夐挳']);
        $popup.remove();
        location.href = nexturl
    })
    // 浠ュ悗鍐嶈
    $('#password-too-simple .later-to-change').click(function () {
        _hmt.push(['_trackEvent', 'password_too_simple_popup', 'click', '瀵嗙爜澶畝鍗�==浠ュ悗鍐嶈']);
        $popup.remove();
        location.href = nexturl
    })
    // 鍘讳慨鏀瑰瘑鐮�
    $('#password-too-simple .now-to-change').click(function () {
        _hmt.push(['_trackEvent', 'password_too_simple_popup', 'click', '瀵嗙爜澶畝鍗�==鍘讳慨鏀瑰瘑鐮�']);
        $popup.remove();
        location.href = "/member?changepassword=1"
    })
}

// 閿欒鐮�
function getErrorCodeText(errorCode) {
    var errorCodeObj = {
        '30004': '椤圭洰鏈€浣庡緱鍒嗕笉鑳戒綆浜�-1000',
        '30005': '椤圭洰鎬诲垎涓嶈兘瓒呰繃1000',
    };
    return errorCodeObj[errorCode] || '';
}
// 鏍规嵁p_type scene_type鑾峰彇椤圭洰绫诲瀷
function getProjectType(pType, sceneType) {
    if (pType == 'None' || pType == '') {
        pType = 0
    }
    var projectType = {
        'survey': {
            pType: 0,
            name: '闂嵎'
        },
        'form': {
            pType: 1,
            name: '琛ㄥ崟'
        },
        'assess': {
            pType: 2,
            name: '娴嬭瘎'
        },
        'vote_scene': {
            pType: 0,
            name: '鎶曠エ'
        },
        'satis': {
          pType: 4,
          name: '婊℃剰搴�'
      }
    };
    if (projectType[sceneType]) {
        return {
            'type': projectType[sceneType].name,
            'typeEn': sceneType
        }
    }

    pType = Number(pType) || 0;
    for (var key in projectType) {
        var curObj = projectType[key];
        if (curObj.pType === pType) {
            return {
                'type': curObj.name,
                'typeEn': key
            }
        }
    }
}
// agree account merge
function account_merge_btn(is_relation_project, pid) {
    $('#can_merge_account  .agree_merge').live('click', function () {
        _hmt.push(['_trackEvent', '璐﹀彿鍚堝苟绯诲垪', 'click', '3銆佸悓鎰忓悎骞� 鐐瑰嚮娆℃暟']);
        $('.jsbox_close').click();
        if (is_relation_project === true) {
            loadMack({
                off: 'on',
                text: '鍙戝竷涓�',
                set: 0
            });
        } else {
            loadMack({
                off: 'on',
                text: '缁戝畾涓�...',
                set: 0
            });
        }
        var $this = $(this);
        var phoneNum = $this.attr('data-mobile');
        ajaxPost('/mergemember/mergemembersifbindotheraccount/pc', {
            bind_type: 'mobile',
            bind_value: phoneNum
        }, function (res) {
            if (res.status == 200 && res.merge_status == true) {
                // loadMack({off:'on',Limg:0,text:'鍚堝苟鎴愬姛',set:1500});
                // setTimeout(function(){location.reload()},1500);
                if (is_relation_project === true) {
                    var data = {
                        'proj_id': pid,
                        'status': 1,
                        'is_shared': is_shared,
                        'ad_switch': ad_switch,
                        '_xsrf': $.cookie('_xsrf')
                    };
                    $.ajax({
                        url: '/edit/ajax/update_project_status/',
                        data: data,
                        dataType: 'JSON',
                        type: 'POST',
                        timeout: 60000,
                        success: function (response) {
                            $('.loadCon,.loadMack').remove();
                            if (response.status == "200") {
                                if (response.error_msg) {
                                    $('.loadCon,.loadMack').remove();
                                    loadMack({
                                        off: 'on',
                                        Limg: 0,
                                        text: response.error_msg,
                                        set: 2000
                                    });
                                } else {
                                    projectPublishFun.publishSuccessFun(pid, response);
                                }
                            }
                        }
                    });
                } else {
                    $('.loadCon,.loadMack').remove();
                    loadMack({
                        off: 'on',
                        Limg: 0,
                        text: "缁戝畾鎴愬姛",
                        set: 1000
                    });
                    if (is_relation_project === false) {
                        location.reload();
                    } else if (is_relation_project == 'cash_withdrawal') {
                        $("#lightBox").remove();
                        $("#publish_bind_mobile").remove();
                        cash_reset(mobile);
                    } else if (is_relation_project == "recharge") {
                        $("#lightBox").remove();
                        $("#publish_bind_mobile").remove();
                        showRechargePopup(mobile);
                    }
                }
            }
        });
    });
}

/**
    * 棰戠巼鎺у埗 杩斿洖鍑芥暟杩炵画璋冪敤鏃讹紝func 鎵ц棰戠巼闄愬畾涓烘 / wait
    *
    * @param  {function}   func               浼犲叆鍑芥暟
    * @param  {number}     wait               琛ㄧず鏃堕棿绐楀彛鐨勯棿闅�
    * @param  {function}   forbiddenTipsFunc  浼犲叆绂佺敤鎻愮ず鍑芥暟
    * @return {function}                      杩斿洖瀹㈡埛璋冪敤鍑芥暟
*/
function throttle (func, wait, forbiddenTipsFunc) {
    var context, args, result;
    var timeout = null;
    // 涓婃鎵ц鏃堕棿鐐�
    var previous = 0;
    return function(_args) {
        var now = Number(new Date());
        // 寤惰繜鎵ц鏃堕棿闂撮殧
        var remaining = wait - (now - previous);
        context = this;
        args = _args;
        // 寤惰繜鏃堕棿闂撮殧remaining灏忎簬绛変簬0锛岃〃绀轰笂娆℃墽琛岃嚦姝ゆ墍闂撮殧鏃堕棿宸茬粡瓒呰繃涓€涓椂闂寸獥鍙�
        // remaining澶т簬鏃堕棿绐楀彛wait锛岃〃绀哄鎴风绯荤粺鏃堕棿琚皟鏁磋繃
        if (remaining <= 0 || remaining > wait) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        } else {
            result = forbiddenTipsFunc.apply(context, args);
        }
        return result;
    };
};

/**
    * 鑾峰彇鍥剧墖瀹介珮
    *
    * @param  {string}   src            鍥剧墖鍦板潃
    * @param  {number}   multiple       鍥剧墖鍊嶆暟
    * @param  {function}   callback     鍥剧墖鍔犺浇鎴愬姛鍥炶皟
*/
function getImageInfo (src, multiple, callback) {
    var imgObj = new Image();
    imgObj.onload = function() {
        callback(Math.floor(imgObj.width / multiple), Math.floor(imgObj.height / multiple))
    }
    imgObj.src = src;
}