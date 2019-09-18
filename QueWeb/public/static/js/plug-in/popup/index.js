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

    function getOuterHeight(el) {
        return $(el).outerHeight();
    }

    function hasClass(el,className){
        return $(el).hasClass(className)
    }

    function toggleClass(el,className){
        return $(el).toggleClass(className)
    }

    var Popup = function (options) {
        this.id = "popup_" + (+new Date()); //鐢熸垚鍞竴id
        this.visible = false; //鐘舵€佷綅
        this.noder = null; //鑺傜偣
        this.noderWrap = null; //寮规涓讳綋
        this.Events = null; //浜嬩欢瀛樺偍
        this.remind = false; //澶嶉€夋鐘舵€� 锛屽鏋滃弬鏁板瓨鍦� [Boolean,String]
        this.init(options || {}); //鎸傝浇鑺傜偣
    };
    /* 闄ontent鍙傛暟锛屽叾浠栧弬鏁板彲閫� 
      options = {
        head :{ // 鏍囬
         inner:"html瀛楁 node 鏂囧瓧",
         class:"鑷畾涔夌被鍚�"
        },
        content:{
            inner:"html瀛楁 node 鏂囧瓧",
            class:"class name"
        },
        btnLeft:{
            inner:"html瀛楁 node 鏂囧瓧",
            class:"class name",
            onClick:function(ev){
                //code
            }
        },
        btnRight:{
            inner:"html瀛楁 node 鏂囧瓧",
            class:"class name",
            onClick:function(ev){
                //code
            }
        },
        wrapClass:"class name 鍖呰９div 鑷畾涔夋牱寮�",
        btnWrapClass:"class name 鎸夐挳鍖呰９div 鑷畾涔夋牱寮�",
        btnAlign:"center/right/left 榛樿灞呬腑",
        showMask锛歠alse,// 灞曠ず鑳屾櫙灞�
        maskClickClose:false,// 鐐瑰嚮鑳屾櫙鍏抽棴
        showCloseBtn:false ,// 榛樿涓嶆樉绀�
        onClose锛歠unction(){// 寮规鍏抽棴鍥炶皟
            //code
        },
        onLeftClick锛歠unction(){// 榛樿涓哄彇娑堟寜閽�
            //code
        },
        onRightClick锛歠unction(){// 榛樿涓虹‘璁ゆ寜閽�
            //code
        },
        destroyOnClose: true, // 鐐瑰嚮鍏抽棴 宸︽寜閽� 鍙虫寜閽椂鏄惁闇€瑕佸垹闄om  榛樿鍊糵alse 
       }
     */

    Popup.prototype = {
        init: function (options) {
            var self = this;
            //鍒涘缓瀹瑰櫒
            this.noder = createDom(null, {
                "id": this.id,
                "class": "popup_box"
            });
            this.options = options;
            document.body.appendChild(this.noder);
            //浜嬩欢瀛樺偍
            this.Events = {};
            //璁㈤槄浜嬩欢
            if (options.onClose && typeof options.onClose == "function") {
                this.addEvent("onClose", options.onClose);
            }
            if (options.onLeftClick && typeof options.onLeftClick == "function") {
                this.addEvent("leftBtnClick", function () {
                    options.onLeftClick();
                })
            }
            if (options.onRightClick && typeof options.onRightClick == "function") {
                this.addEvent("rightBtnClick", function () {
                    options.onRightClick();
                })
            }
            //鍒涘缓寮规鍐呭锛岀粦瀹氫簨浠�

            //鍏抽棴鎸夐挳
            var close;
            if (options.showCloseBtn) {
                close = createDom(null, {
                    "class": "popup_close"
                }, function () {
                    if(options.destroyOnClose){
                        self.destroy()
                    }else{
                        self.hidden("close");
                    }
                    self.runEvent("onClose");
                });
            }
            //澶撮儴鍖哄煙
            var head = options.head,
                header;
            if (head && head.inner) {
                header = createDom(head.inner, {
                    "class": "popup_header " + (head["class"] || "")
                })
            }
            //鍐呭鍖哄煙
            var content = options.content,
                container;
            if (content && content.inner) {
                container = createDom(content.inner, {
                    "class": "popup_content " + (content["class"] || "")
                })
            }
            //鎸夐挳鍖哄煙
            var btnLeft = options.btnLeft,
                left = null;
            if (btnLeft) {
                if (typeof btnLeft == "boolean") { //甯冨皵鍊� 鍒欎娇鐢ㄩ粯璁ゆ寜閽�
                    btnLeft = {
                        inner: "鍙栨秷",
                        onClick: function () {
                            if(options.destroyOnClose){
                                self.destroy()
                            }else{
                                self.hidden("left");
                            }
                            self.runEvent("leftBtnClick");
                        },
                        "class": "popup_btn_item popup_btn_left"
                    }
                } else if (typeof btnLeft == "string") { //瀛楃涓� 鍒欏綋浣滄枃妗堜娇鐢�
                    btnLeft = {
                        inner: btnLeft,
                        onClick: function () {
                            if(options.destroyOnClose){
                                self.destroy()
                            }else{
                                self.hidden("left");
                            }
                            self.runEvent("leftBtnClick");
                        },
                        "class": "popup_btn_item popup_btn_left"
                    }
                }
                left = createDom(btnLeft.inner, {
                    "class": btnLeft["class"] || ""
                }, btnLeft.onClick);

            }
            var btnRight = options.btnRight,
                right = null;
            if (btnRight) {
                if (typeof btnRight == "boolean") { //甯冨皵鍊� 鍒欎娇鐢ㄩ粯璁ゆ寜閽�
                    btnRight = {
                        inner: "纭畾",
                        onClick: function () {
                            if(options.destroyOnClose){
                                self.destroy()
                            }else{
                                self.hidden("right");
                            }
                            self.runEvent("rightBtnClick");
                        },
                        "class": "popup_btn_item popup_btn_right"
                    }
                } else if (typeof btnRight == "string") { //瀛楃涓� 鍒欏綋浣滄枃妗堜娇鐢�
                    btnRight = {
                        inner: btnRight,
                        onClick: function () {
                            if(options.destroyOnClose){
                                self.destroy()
                            }else{
                                self.hidden("right");
                            }
                            self.runEvent("rightBtnClick");
                        },
                        "class": "popup_btn_item popup_btn_right"
                    }
                }
                right = createDom(btnRight.inner, {
                    "class": btnRight["class"] || ""
                }, btnRight.onClick);
            }

            // 鎻愰啋
            var remind = options.remind,
                remindWrap = null,
                checkTitle = null,
                checkBox = null;
            if(remind) {
                remind = {
                    inner: remind === true ? "涓嶅啀鎻愰啋" : remind,
                    "class": "popup_remindWrap",
                },
                remindWrap = createDom(null, {
                    "class": remind["class"] || ""
                })
                checkBox = createDom(null, {
                    "class": "icon_check_box"
                })
                //缁戝畾浜嬩欢
                checkBox.addEventListener("click",function(){
                    //瀛樺偍鎻愮ず鐘舵€�
                    if(hasClass(".popup_remindWrap .icon_check_box","active")){
                        self.remind = false
                    }else{
                        self.remind = true
                    }
                    toggleClass(".popup_remindWrap .icon_check_box","active")
                })
                checkTitle = createDom(remind.inner, {
                    "class": "icon_check_title"
                })
            }

            //涓讳綋鍏冪礌
            var wrapElem = createDom(null);
            if (close) {
                wrapElem.appendChild(close);
            }
            if (header) {
                wrapElem.appendChild(header);
            }
            if (container) {
                wrapElem.appendChild(container);
            }
            var btnWrap = null;

            if (left || right) {
                btnWrap = createDom(null, {
                    "class": "popup_btnwrap " + (options.btnWrapClass || "") + ("btnAlign" in options ? " popup_btn_align_" + options.btnAlign : " popup_btn_align_right")
                });
                remindWrap && btnWrap.appendChild(remindWrap);
                checkBox && remindWrap.appendChild(checkBox);
                checkTitle && remindWrap.appendChild(checkTitle);
                left && btnWrap.appendChild(left);
                right && btnWrap.appendChild(right);
                wrapElem.appendChild(btnWrap);
            }
            this.noder.innerHTML = "";
            var wrap = createDom(wrapElem, {
                "id": this.id + "_wrap",
                "class": "popup_wrap " + (options.wrapClass || "") + (close ? " has_close" : "") + (options.popupType == "confirm" ? " confirm_popup_box" : ""),
                // style: wrapStyleStr
            });
            this.noderWrap = wrap;
            this.noder.appendChild(wrap);

            //鑳屾櫙灞�
            var mask = createDom(null, {
                "class": "popup_mask " + (options.showMask ? "popup_mask_show" : "")
            }, options.maskClickClose ? function () {
                if(options.destroyOnClose){
                    self.destroy()
                }else{
                    self.hidden("mask");
                }
                self.runEvent("onClose");
            } : null);
            this.noder.appendChild(mask);
            if (options.noScroll) {
                this.addEvent("onShow", function () {
                    off(window, "mousewheel", noScroll);
                    on(window, "mousewheel", noScroll);
                })

            }
        },
        updateStyle: function (options) {
            this.noderWrap.style.position = options.position || "fixed";
            this.noderWrap.style.zIndex = options.zIndex;
            //鏀寔鏁板€兼垨瀛楃涓� 100 "100px/50%" 
            if (options.width != undefined) {
                if (typeof options.width == "number") {
                    this.noderWrap.style.width = options.width + "px";
                } else {
                    this.noderWrap.style.width = options.width;
                }
            }
            if (options.height != undefined) {
                if (typeof options.height == "number") {
                    this.noderWrap.style.height = options.height + "px";
                } else {
                    this.noderWrap.style.height = options.height;
                }
            }
            var posTop = 0,
                posLeft = 0;
            var boxWidth = getJQWidth("#" + this.noderWrap.id),
                boxHeight = getJQHeight("#" + this.noderWrap.id);
            //瀹氫綅涓� 鏃犻粯璁ゅ€煎垯鍨傜洿灞呬腑          
            if (options.top != undefined) {
                if (typeof options.top == "number") {
                    posTop = options.height + "px";
                } else {
                    posTop = options.height;
                }
            } else {
                if (options.position == "absolute") {
                    posTop = (getWindowInnerWidthAndHeight("height") - boxHeight) / 2 + "px";
                } else {
                    posTop = "50%";
                    this.noderWrap.style.marginTop = -boxHeight / 2 + "px";
                }
            }
            //瀹氫綅宸� 鏃犻粯璁ゅ€煎垯姘村钩灞呬腑           
            if (options.left != undefined) {
                if (typeof options.left == "number") {
                    posLeft = options.height + "px";
                } else {
                    posLeft = options.height;
                }
            } else {
                if (options.position == "absolute") {
                    posLeft = (getWindowInnerWidthAndHeight("width") - boxWidth) / 2 + "px";
                } else {
                    posLeft = "50%";
                    this.noderWrap.style.marginLeft = -boxWidth / 2 + "px";
                }
            }
            this.noderWrap.style.left = posLeft;
            this.noderWrap.style.top = posTop;
            this._show();
        },
        addEvent: function (type, handler) {
            if (!type || typeof handler != "function") return;
            if (!this.Events[type]) {
                this.Events[type] = handler;
            } else if (typeof this.Events[type] == "function") {
                var fn = this.Events[type];
                this.Events[type] = [].concat(fn, handler)
            } else {
                this.Events[type].push(handler)
            }
        },
        runEvent: function (type) {
            var handler;
            if (!this.Events[type]) return;
            var handlers = this.Events[type];
            if (typeof handlers == "function") {
                handler = this.Events[type];
                handler();
            } else {
                for (var i = 0, len = handlers.length; i < len; i++) {
                    handler = handlers[i];
                    handler();
                }
            }
        },
        _show: function () {
            var that = this;
            setTimeout(function () {
                that.visible = true;
                that.noder.style.top = 0;
                that.noder.style.opacity = 1;
                that.runEvent("onShow");
            }, 0);
        },
        show: function () {
            var options = this.options;
            var self = this;
            setTimeout(function () {
                self.updateStyle({
                    position: ("isFixed" in options && options.isFixed) ? "fixed" : "absolute",
                    top: "top" in options ? options.top : undefined,
                    left: "left" in options ? options.left : undefined,
                    zIndex: options.zIndex || 999,
                    width: "width" in options ? options.width : undefined,
                    height: "height" in options ? options.height : undefined,
                });
            }, 0);
        },
        hidden: function () {
            this.visible = false;
            this.noder.style.display = "none";
            off(window, "mousewheel", noScroll);
        },
        destroy: function () {
            this.visible = false;
            this.noder.parentNode.removeChild(this.noder);
            off(window, "mousewheel", noScroll);
        }
    };

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

    function on(dom, type, handler) {
        if (dom.addEventListener) {
            dom.addEventListener(type, handler, false);
        } else if (dom.attachEvent) {
            dom.attachEvent("on" + type, handler)
        } else {
            dom["on" + type] = handler
        }
    }

    function off(dom, type, handler) {
        if (dom.removeEventListener) {
            dom.removeEventListener(type, handler, false);
        } else if (dom.detachEvent) {
            dom.detachEvent("on" + type, handler)
        } else {
            dom["on" + type] = null
        }
    }

    function noScroll(ev) {
        var event = ev || window.event;
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
        return false;
    }

    function getCss(el, prop) {
        if (!el) {
            throw new Error("argument[0] error")
            return
        }
        var prevComputedStyle = document.defaultView ? document.defaultView.getComputedStyle(el, null) : el.currentStyle;
        return prevComputedStyle[prop] || ""
    }

    // 鑾峰彇椤甸潰瀹藉害鍜岄珮搴�
    function getWindowInnerWidthAndHeight(type) {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        if (type == 'width') {
            return width;
        } else if (type == 'height') {
            return height;
        } else {
            return {
                width: width,
                heigth: height
            }
        }
    }

    if (typeof module !== 'undefined' && module.exports) module.exports = Popup;
    if (typeof define === 'function') define(function () {
        return Popup;
    });
    global.Popup = Popup;

})(this, jQuery);