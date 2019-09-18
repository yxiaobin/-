jQuery(document).ready(function($) {
    var _hawkeye = _hawkeye || [];
    window._hawkeye = _hawkeye;
    (function() {
        if (window.location.href.indexOf('wenjuan.com') > 0) {
            baseDomain = 'https://hawkeye.wenjuan.com';
        } else {
            baseDomain = 'https://hawkeye.wenjuan.com';
        }
        var hm = document.createElement('script');
        hm.src = baseDomain + '/wj.hawkeye.js?v=1.2.1';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(hm, s);
    })();

    var _hmt = _hmt || [];
    _hmt.push(['_setAccount', 'f0408cb7d2a91c6071945ba170b9decc']);
    (function() {
        var hm = document.createElement('script');
        hm.src = '//hm.baidu.com/hm.js?f0408cb7d2a91c6071945ba170b9decc';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(hm, s);
    })();

    $(function() {
        $("a img[src='http://eiv.baidu.com/hmt/icon/21.gif']").hide();
        if ($('#hm_t_hide').length === 0) {
            $('html>body').append('<style id="hm_t_hide">#hm_t_undefined{display:none !important;}</style>');
        }
    });
    // GrowingIO 2.0
    /* eslint-disable-next-line */
    !(function(e,t,n,g,i){e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},n=t.createElement("script"),tag=t.getElementsByTagName("script")[0],n.async=1,n.src=('https:'==document.location.protocol?'https://':'http://')+g,tag.parentNode.insertBefore(n,tag)}(window,document,"script","assets.giocdn.com/2.1/gio.js","gio"));
    gio('init', 'afe8e95ef63d7230', {});
    gio('send');

    // 鐧诲綍鐢ㄦ埛浼犵粰gio瀵瑰簲鐨勭敤鎴穒d
    gio_login_status();
});

// 鎿嶄綔cookie
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
    document.cookie = c_name + '=' + escape(value) + ';expires=' + exdate + ';path=/;domain=' + domain;
}
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + '=');
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(';', c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return '';
}
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    var domain = getParseDomain();
    if (cval != null) { document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString() + ';path=/;domain=' + domain; }
}
// 鑾峰彇璁剧疆cookie鐨刣omain锛堝拰鍚庣璁剧疆閫昏緫淇濇寔缁熶竴锛�
function getParseDomain(domain) {
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

// 鏂扮敤鎴锋敞鍐屽畬鎴愭椂鎵嬪姩鎺ㄩ€佷簨浠�
function gio_new_register() {
    gio('track', 'new_register');
}

// 鐢ㄦ埛鍒涘缓椤圭洰鎴愬姛鎵嬪姩鎺ㄩ€佷簨浠�
function gio_new_project_create(current_scene_type) {
    gio('track', 'new_project_create', { 'project_type': current_scene_type });
    delCookie('create_project');
}

// 鐢ㄦ埛鍙戝竷椤圭洰鎴愬姛鎵嬪姩鎺ㄩ€佷簨浠�
function gio_project_publish() {
    gio('track', 'project_publish');
}

// 閫€鍑虹櫥褰� 娓呴櫎鐧诲綍鐢ㄦ埛 ID
function gio_logout() {
    gio('clearUserId');
}

// 鐧诲綍鐢ㄦ埛浼犵粰gio瀵瑰簲鐨勭敤鎴穒d
function gio_login_status() {
    if (getCookie && getCookie('login_status') == '1') {
        var userId = getCookie('hawkeye_mid');
        gio('setUserId', userId);
        delCookie('login_status');
    }
}
// 灏哻ookie瀛楃涓茶浆鎴愬璞℃牸寮�
function analyzeCookie(totalCookie) {
    var cookieArr = totalCookie.split(';');
    var cookieObject = {};
    for (var i = 0; i < cookieArr.length; i++) {
        var cookieItem = cookieArr[i].split('=');
        cookieObject[cookieItem[0].trim()] = cookieItem[1].trim();
    }
    return cookieObject;
}
// 鍒犻櫎鍐椾綑鐨刢ookie锛宻tr鏄鍒犻櫎鐨刢ookie瀛楃涓诧紙浼氬仛鑷姩鍖归厤锛� iskeepOne鏄惁淇濈暀閲嶅涓殑涓€鏉�
function deleteRedundancyCookieByRegexp(str, isKeepOne) {
    var totalCookieObj = analyzeCookie(document.cookie);
    var re = new RegExp('\\w*' + str + '\\w*', 'i'); // 姝ｅ垯鍖归厤鍓嶅悗瀛楃
    var firstMatch = '';
    var deleteNum = 0;
    for (var k in totalCookieObj) {
        if (re.test(k)) {
            if (!firstMatch && isKeepOne) { // 淇濈暀绗竴鏉″尮閰嶉」
                firstMatch = k;
            } else {
                deleteNum++;
                delCookie(k);
            }
        }
    }
    // console.log('鍏卞垹闄ゅ尮閰� ' + re + ' 椤�: ' + deleteNum + '涓�')
    // console.log('淇濈暀绗竴鏉″尮閰嶉」: ' + firstMatch);
}
// 鍒犻櫎鍐椾綑鐨� *_gr_session_id_* 鏍囪瘑鐨刢ookie
deleteRedundancyCookieByRegexp('_gr_session_id_');