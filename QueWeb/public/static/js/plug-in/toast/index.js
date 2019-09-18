;
(function (global, $) {
    "use strict";
    //jq渚濊禆
    function getJQWidth(el) {
        return $(el).width();
    }

    function getJQHeight(el) {
        return $(el).height();
    }

    function checkStyleValue(val) {
        if (typeof val == "number") {
            return val + "px";
        }
        return val;

    }

    function createDom(data, attr, fn) {
        var dom = document.createElement("div");
        if (data == undefined) {

        } else if (typeof data == "object") {
            dom.appendChild(data);
        } else {
            dom.innerHTML = data
        }
        if (!attr) return dom;
        for (var key in attr) {
            attr[key] && dom.setAttribute(key, attr[key]);
        }
        if (fn && typeof fn == "function") {
            on(dom, "click", fn)
        }
        return dom
    }

    function noScroll(ev) {
        var event = ev || window.event;
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
        return false;
    }
    // 鑾峰彇椤甸潰瀹藉害鍜岄珮搴�
    function getWindowInnerWidthAndHeight (type) {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        if(type == 'width') {
            return width;
        } else if (type == 'height') {
            return height;
        }else {
            return {
                width: width,
                heigth: height
            }
        }
    }
    //榛樿鍊�
    var DEFAULT_MAXWIDTH = 200;
    var DEFAULT_TIME = 2000;
    var DEFAULT_IMG_WIDTH = 20;
    var DEFAULT_IMG_HEIGHT = 20;
    var uuid = 0;
    var Toast = function (options) {
        /* options : {} object(鍙傛暟瑙佷笅) 鎴� " 鍐呭" string(鐩存帴褰撲綔鍐呭鏄剧ず) 
        ** 
        ***options 锛歰bject 鍙傛暟璇﹁В
        *  {
        *       message : "string / html瀛楃涓� / dom瀵硅薄",
        *       img : "object(鍙傛暟瑙佷笅) / 甯冨皵鍊�(榛樿loading鍥�)",
        *       time 锛� "鏁板€� 鍗曚綅ms锛岄粯璁ゅ€�1000ms锛屾鍊�>0 涓鸿秴鏃堕殣钘� or 璐熷€�<0 涓轰竴鐩存樉绀�",
        *       maxWidth : "鏁板€� 100 / px鍊� eg.'100px' ",
        *       width : "鏁板€� 100 / px鍊� eg.'100px' ",
        *       height : "鏁板€� 100 / px鍊� eg.'100px' ",
        *       top : "鏁板€� 100 / px鍊� eg.'100px' ",
        *       left : "鏁板€� 100/px鍊� eg.'100px' ",
        *   }
        * 
        ****** img : object 鍙傛暟璇﹁В
        *       {
        *           url: "鑷畾涔塱mg鍥剧墖鍦板潃",
        *           width : "鏁板€� 100 / px鍊� eg.'100px' ",
        *           height : "鏁板€� 100 / px鍊� eg.'100px' ",
        *       }
        */
        var options = options,
            visible = false;
        if (!options || (typeof options != "string" && typeof options != "object")) return;
        //鐩存帴浼犳枃妗堬紝榛樿鏄剧ず涓€娈垫椂闂撮殣钘忓鐞� time 1000s
        if (typeof options == "string") {
            options = {
                message: options,
                time: DEFAULT_TIME
            }
        }
        var nodeId = "toast_" + uuid, //鐢熸垚鍞竴id
            timer = null; //瀹氭椂鍣�
        
        uuid++;
        //涓讳綋
        var noder = createDom(null, {
            "id": nodeId,
            "class": "toast_box"
        });
        //瀹氫箟鏍峰紡
        noder.style.maxWidth = options.maxWidth ? checkStyleValue(options.maxWidth) : (DEFAULT_MAXWIDTH + "px");

        var wrap = createDom(null, {
            "id": nodeId + "_wrap",
            "class": "toast_wrap"
        });

        //閬僵灞� mask
        var mask = null;
        if(options.mask){
            mask = createDom(null, {
                "id": nodeId + "_mask",
                "class": "toast_mask"
            });
            document.body.appendChild(mask);            
        }

        noder.appendChild(wrap);
        document.body.appendChild(noder);

        //鍥剧墖 甯冨皵鍊� 鐩存帴浣跨敤榛樿鍥剧墖
        var imgTag = "",
            imgWrap = null;
        if (options.img) {
            if (typeof options.img == "object" && options.img.url) {
                imgTag = '<img src="' + options.img.url + '"';
                imgTag += (options.img.width ? ' width="' + parseInt(options.img.width) + '"' : (options.img.height ? "" : ' width="' + DEFAULT_IMG_WIDTH + '"'));
                imgTag += (options.img.height ? ' height="' + parseInt(options.img.height) + '"' : (options.img.width ? "" : ' height="' + DEFAULT_IMG_HEIGHT + '"'));
                imgTag += ">";
            } else if (typeof options.img == "boolean") {
                imgTag = '<div class="toast_default_img"></div>'
            }
            if (imgTag) {
                imgWrap = createDom(imgTag, {
                    "class": "toast_img"
                });
                wrap.appendChild(imgWrap);
            }

        }
        //鏂囨
        var message = createDom(options.message, {
            "class": "toast_message"
        });
        wrap.appendChild(message);

        //瀹氫綅璁＄畻
        if (options.width) {
            noder.style.width = checkStyleValue(options.width);
        }
        if (options.height) {
            noder.style.height = checkStyleValue(options.height);
        }
        var position = {};
        if ("top" in options) {
            position.top = checkStyleValue(options.top);
        } else {
            position.top = (getWindowInnerWidthAndHeight("height") - getJQHeight("#" + nodeId)) / 2 + "px";
        }
        if ("left" in options) {
            position.left = checkStyleValue(options.left);
        } else {
            position.left = (getWindowInnerWidthAndHeight("width") - getJQWidth("#" + nodeId)) / 2 + "px";
        }
        //灞曠ず
        visible = true;
        noder.style.top = position.top;
        noder.style.left = position.left;
        noder.style.opacity = 1;

        function _hidden() {
            clearTimeout(timer);
            timer = null;
            visible = false;
            mask && mask.parentNode && mask.parentNode.removeChild(mask); //绉婚櫎鑺傜偣
            noder.style.opacity = 0;
            noder && noder.parentNode && noder.parentNode.removeChild(noder); //绉婚櫎鑺傜偣
            mask = null;
            noder = null;
        }

        //璐熷€间笉鍋氬畾鏃�
        options.time = options.time ? options.time : DEFAULT_TIME;
        options.time >= 0 && (timer = setTimeout(function () {
            _hidden();
        }, options.time));
        return {
            hidden: function () {
                if (!visible) return;
                _hidden();
            }
        }
    };
    Toast.hidden = function(){
        $(".toast_mask").hide();
        $(".toast_box").hide();
    }

    if (typeof module !== 'undefined' && module.exports) module.exports = Toast;
    if (typeof define === 'function') define(function () {
        return Toast;
    });
    global.Toast = Toast;

})(this, jQuery);