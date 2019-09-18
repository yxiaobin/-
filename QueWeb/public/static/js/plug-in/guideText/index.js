
(function(global, $) {
    'use strict';
    // jq渚濊禆
    function getJQWidth(el) {
        return $(el).width();
    }

    function getJQHeight(el) {
        return $(el).height();
    }

    // 鏂瑰悜鏄犲皠琛� 鎺ㄨ崘浣跨敤 top bottom right left
    var DERECTION = {
        'up': 'top',
        'top': 'top',
        'down': 'bottom',
        'bottom': 'bottom',
        'right': 'right',
        'left': 'left'
    };
    var uuid = 0;
    var GuideText = function(options) {
        var ops = options || {};
        this.maxWidth = ops.maxWidth || undefined; // 鍒濆鍖栨渶澶у搴�
        this.safePX = ops.safePX || 2; // 瀹夊叏杈硅窛鍊�,淇濊瘉涓嶄細寮规涓嶄細婧㈠嚭鍙鍖哄煙澶栬竟鏈€灏忚窛绂�
        this.gap = ops.gap || 10; // 寮规 璺濈 鍏冪礌 鐨� 璺濈
        this.noder = null; // 寮规鑺傜偣
        this.id = 'guidetext_' + uuid; // 鐢熸垚鍞竴id
        uuid++;
        this.visible = false; // 鐘舵€佷綅
        this.colorType = ops.colorType || 'original'; // 鍖哄埆鏄剧ず鍝棰滆壊绫诲瀷鐨勫脊绐�
        this.classes = ops.classes; // 鏂板class
        this.timerId = null; // setTimeout id
        this.init();// 鎸傝浇鑺傜偣
    };

    GuideText.prototype = {
        init: function() {
            if (this.noder) {
                return this;
            }
            this.noder = document.createElement('div');
            this.noder.id = this.id;
            this.noder.className = 'guide_text';
            this.noderText = document.createElement('div');
            this.noderArrow = document.createElement('span');
            this.noderText.classList.add('div-original');
            this.noderArrow.classList.add('span-change');
            this.maxWidth && (this.noder.style.maxWidth = this.maxWidth + 'px');
            this.noder.appendChild(this.noderText);
            this.noder.appendChild(this.noderArrow);
            if (this.classes) {
                this.noder.classList.add(this.classes);
            }
            document.body.appendChild(this.noder);
            return this;
        },
        updateInner: function(val) {
            this.noderText.innerHTML = String(val) || '';
        },
        updateStyle: function(options) {
            if (!('top' in options) || !('left' in options)) {
                this.noder.style.display = 'none';
                return;
            }
            var direction = options.direction || 'top';
            this.noder.style.position = options.position || 'fixed';
            this.noder.style.top = Number(options.top) + 'px';
            if ('left' in options) {
                this.noder.style.left = Number(options.left) + 'px';
            }
            if ('right' in options) {
                this.noder.style.right = Number(options.right) + 'px';
            }
            this.noder.className = this.classes ? this.classes + ' guide_text guide_text_' + direction : 'guide_text guide_text_' + direction;
            this.noderArrow.style.position = 'absolute';
            this.noderArrow.style.top = options.arrow.top + 'px';
            this.noderArrow.style.left = options.arrow.left + 'px';
            if (options.colorType == 'original') {
                this.noderText.classList.add('div-original');
                this.noderText.classList.remove('div-change');
                this.noderArrow.classList.add('span-original');
                this.noderArrow.classList.remove('span-change');
            } else {
                this.noderText.classList.add('div-change');
                this.noderText.classList.remove('div-original');
                this.noderArrow.classList.add('span-change');
                this.noderArrow.classList.remove('span-original');
            }
            this._show();
        },
        _show: function() {
            var that = this;
            that.timerId = setTimeout(function() {
                that.visible = true;
                that.noder.style.display = 'block';
            }, 0);
        },
        hidden: function() {
            clearTimeout(this.timerId);
            this.timerId = null;
            this.visible = false;
            this.noder.style.display = 'none';
        },
        destroy: function() {
            this.hidden();
            this.noder.parentNode.removeChild(this.noder);
        },
        show: function(ref, options) {
            /*
               ref 鍙傜収鍏冪礌 鍙互鏄€夋嫨鍣ㄥ瓧绗︿覆涔熷彲浠ode
            */
            /* options
                {
                   inner:"xxx",
                   direction:"top"
                }
            */
            // ref 锛氬脊妗� 鍙傜収鍏冪礌
            if (!ref || !('inner' in options)) return this;
            if (!options.direction) {
                options.direction = 'top';
            } else {
                !DERECTION[options.direction] && console.log('GuideText鎻掍欢direction鏃犳晥--' + DERECTION[options.direction] + '锛宒iretion鎺ㄨ崘浣跨敤 top bottom right left');
                options.direction = DERECTION[options.direction] || options.direction.top;
            }
            // 浼樺厛鏇存柊Text,maxwidth 渚夸簬璁＄畻楂樺害
            this.updateInner(options.inner);

            'maxWidth' in options && (this.noder.style.maxWidth = options.maxWidth + 'px');
            // 鍏冪礌瀹氫綅璁＄畻
            var currentRef = ref;
            if (typeof currentRef === 'string') {
                currentRef = document.querySelector(ref);
            }

            var positionCfg = {};
            // 寮规瀹氫綅 淇″績
            var useFixed = isFixed(currentRef);
            positionCfg['position'] = useFixed ? 'fixed' : 'absolute';
            var relativeElemOffset = getOffset(currentRef, useFixed);
            // 瀹氫綅鍊艰绠�
            // 涓婁笅鍦烘櫙 Y杞磋绠�
            var relativeTop = relativeElemOffset.top; // 寮规瀹氫綅鍊�
            var popHeight = getJQHeight('#' + this.id) + this.gap; // 寮规楂樺害+闂磋窛
            var safeHeight = popHeight + this.safePX; // 瀹夊叏楂樺害锛氬脊妗嗛珮搴�+闂磋窛+瀹夊叏璺濈
            // 宸﹀彸鍦烘櫙 X杞�
            var relativeLeft = relativeElemOffset.left; // 寮规瀹氫綅鍊�
            var popWidth = getJQWidth('#' + this.id) + this.gap; // 寮规楂樺害+闂磋窛
            var safeWidth = popWidth + this.safePX; // 瀹夊叏楂樺害锛氬脊妗嗛珮搴�+闂磋窛+瀹夊叏璺濈
            // 绠ご瀹氫綅
            var arrowLeft = 10;
            var arrowTop = 10;
            // 涓婁笅鏂瑰悜
            var windowHeight = getWindowInnerWidthAndHeight('height');
            var windowWidth = getWindowInnerWidthAndHeight('width');
            if (options.direction == 'top' || options.direction == 'bottom') {
                // Y杞�
                // 鍥哄畾瀹氫綅涓嬶紝寮规鍦ㄤ笂涓嬫柟锛屾孩鍑哄彲瑙嗗尯鍩熺殑鎯呮櫙锛岄€傚簲鏀瑰彉寮规鏂瑰悜
                if (useFixed && options.direction == 'top' && relativeTop < safeHeight) {
                    // 寮圭獥鍦ㄤ笅锛宼op鍊间负褰撳墠鍏冪礌鐩稿灞忓箷椤堕儴鍊�+鍙傜収鍏冪礌楂樺害+娌熻窛鍊�
                    options.direction = 'bottom';
                    positionCfg['top'] = relativeTop + relativeElemOffset.height + this.gap;
                    console.log('鏇挎崲direction涓篵ottom');
                } else if (useFixed && options.direction == 'bottom' && (windowHeight - relativeTop - relativeElemOffset.height < safeHeight)) {
                    options.direction = 'top';
                    positionCfg['top'] = relativeTop - popHeight;
                    console.log('鏇挎崲direction涓簍op');
                } else {
                    positionCfg['top'] = options.direction == 'bottom' ? relativeTop + relativeElemOffset.height + this.gap : relativeTop - popHeight;
                }
                arrowTop = options.direction == 'bottom' ? 0 : (popHeight - this.gap);
                // X杞�
                // 姘村钩灞呬腑
                if (useFixed && (relativeLeft + relativeElemOffset.width / 2 > (popWidth - this.gap) / 2 + this.safePX) && (windowWidth - relativeLeft - relativeElemOffset.width / 2 > (popWidth - this.gap) / 2 + this.safePX)) {
                    positionCfg['left'] = relativeLeft + relativeElemOffset.width / 2 - (popWidth - this.gap) / 2;
                    arrowLeft = (popWidth - this.gap) / 2;
                    // arrowLeft = relativeLeft - positionCfg["left"] + relativeElemOffset.width / 2;
                } else if (useFixed && (relativeLeft + relativeElemOffset.width / 2 <= (popWidth - this.gap) / 2 + this.safePX)) {
                    // 灞呭乏
                    positionCfg['left'] = this.safePX;
                    arrowLeft = relativeLeft - positionCfg['left'] + relativeElemOffset.width / 2;
                } else if (useFixed && windowWidth - relativeLeft - relativeElemOffset.width / 2 <= (popWidth - this.gap) / 2 + this.safePX) {
                    // 灞呭彸
                    positionCfg['left'] = windowWidth - this.safePX - popWidth + this.gap;
                    // arrowLeft = popWidth - 10;
                    arrowLeft = relativeLeft - positionCfg['left'] + relativeElemOffset.width / 2;
                } else {
                    // 闈炲浐瀹氬畾浣�
                    positionCfg['left'] = relativeLeft + relativeElemOffset.width / 2 - (popWidth - this.gap) / 2;
                    arrowLeft = (popWidth - this.gap) / 2;
                }
            } else {
                // 宸﹀彸鏂瑰悜
                // X杞�
                // 婧㈠嚭灞忓箷鍙宠竟锛屾敼寮规鏂瑰悜涓哄乏渚�
                if (useFixed && options.direction == 'right' && (windowWidth - relativeLeft - relativeElemOffset.width < safeWidth)) {
                    options.direction = 'left';
                    positionCfg['left'] = relativeLeft - popWidth;
                    console.log('鏇挎崲direction涓簂eft');
                } else if (useFixed && options.direction == 'left' && (relativeLeft < safeWidth)) {
                    options.direction = 'right';
                    positionCfg['left'] = relativeLeft + relativeElemOffset.width + this.gap;
                    console.log('鏇挎崲direction涓簉ight');
                } else {
                    positionCfg['left'] = options.direction == 'left' ? relativeLeft - popWidth : relativeLeft + relativeElemOffset.width + this.gap;
                }
                arrowLeft = options.direction == 'left' ? (popWidth - this.gap) : 0;
                // Y杞� 涓婁笅鏈夋晥绌洪棿瓒冲瀹圭撼鎻愮ず寮规锛屽嵆涓績浣嶇疆瀵瑰簲鍙傜収鍏冪礌涓績浣嶇疆
                if (useFixed && (relativeTop + relativeElemOffset.height / 2 > (popHeight - this.gap) / 2 + this.safePX) && (windowHeight - relativeTop - relativeElemOffset.height / 2 > (popHeight - this.gap) / 2 + this.safePX)) {
                    positionCfg['top'] = relativeTop + relativeElemOffset.height / 2 - (popHeight - this.gap) / 2;
                    arrowTop = (popHeight - this.gap) / 2;
                } else if (useFixed && (relativeTop + relativeElemOffset.height / 2 <= (popHeight - this.gap) / 2 + this.safePX)) {
                    // 灞呬笂 闈犺繎瑙嗗彛椤堕儴safePX鍊艰窛绂荤殑浣嶇疆
                    positionCfg['top'] = this.safePX;
                    arrowTop = relativeTop + relativeElemOffset.height / 2 - this.safePX;
                } else if (useFixed && ((windowHeight - relativeTop - relativeElemOffset.height / 2) <= (popHeight - this.gap) / 2 + this.safePX)) {
                    // 灞呬笅 闈犺繎搴曢儴safePX鍊艰窛绂荤殑浣嶇疆
                    positionCfg['top'] = windowHeight - this.safePX - popHeight + this.gap;
                    arrowTop = relativeTop + relativeElemOffset.height / 2 - positionCfg['top'];
                } else {
                    // 闈炲浐瀹氬畾浣�
                    positionCfg['top'] = relativeTop + relativeElemOffset.height / 2 - (popHeight - this.gap) / 2;
                    arrowTop = (popHeight - this.gap) / 2;
                }
            }
            // 鑷畾涔� tooltip 鍋忕Щ浣嶇疆
            if (options.customOffset) {
                var customDirections = options.customOffset.direction
                var customValues = options.customOffset.value
                for (var index = 0; index < customDirections.length; index++) {
                    var customDirection = customDirections[index];
                    var customValue = customValues[index]
                    positionCfg[customDirection] = positionCfg[customDirection] + customValue
                }
            }
            this.updateStyle({
                direction: options.direction,
                position: positionCfg.position,
                top: positionCfg.top,
                left: positionCfg.left,
                colorType: options.colorType || 'original',
                arrow: {
                    top: arrowTop,
                    left: arrowLeft
                }
            });
        }
    };

    function getScrollTop() {
        return 0;
        return window.pageYOffset ? parseInt(window.pageYOffset) : parseInt(document.documentElement.scrollTop);
    }

    function getScrollLeft() {
        return 0;
        return window.pageXOffset ? parseInt(window.pageXOffset) : parseInt(document.documentElement.scrollLeft);
    }

    function getCss(el, prop) {
        if (!el) {
            throw new Error('argument[0] error');
            return;
        }
        var prevComputedStyle = document.defaultView ? document.defaultView.getComputedStyle(el, null) : el.currentStyle;
        return prevComputedStyle[prop] || '';
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
            };
        }
    }
    function isFixed(el) {
        var prents = el;
        while (prents.tagName.toLowerCase() != 'html') {
            if (getCss(prents, 'position') == 'fixed') {
                return true;
            }
            prents = prents.parentNode;
        }
        return false;
    }

    function getOffset(el, noScroll) {
        var obj = {
            left: parseInt(el.offsetLeft),
            top: parseInt(el.offsetTop),
            width: parseInt(el.offsetWidth),
            height: parseInt(el.offsetHeight)
        };
        var ret = null;
        // noScroll :鏃犻渶鑰冭檻婊氬姩楂樺害锛屽fixed瀹氫綅
        if (noScroll) {
            ret = el.getBoundingClientRect();
            obj.top = ret.top;
            obj.left = ret.left;
        } else {
            while (el = el.offsetParent) {
                obj.left += parseInt(el.offsetLeft);
                obj.top += parseInt(el.offsetTop);
            }
        }
        return obj;
    }
    if (typeof module !== 'undefined' && module.exports) module.exports = GuideText;
    if (typeof define === 'function') {
        define(function() {
            return GuideText;
        });
    }
    global.GuideText = GuideText;
})(this, jQuery);