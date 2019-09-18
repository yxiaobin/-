(function(window, document) {
    // set locastorage
    function setLocalStorage(key, data) {
        localStorage.setItem(key, data);
    }

    // reset localstorage
    function resetLocalStorage(key, storageValObj) {
        storageValObj = storageValObj || storageValConfig(key);
        var curTime = new Date().getTime(); // 鑾峰彇褰撳墠鏃堕棿 锛岃浆鎹㈡垚JSON瀛楃涓插簭鍒�
        if (JSON.stringify(storageValObj) != '{}') {
            for (var k in storageValObj) {
                var endTime = storageValObj[k].endTime;
                if (curTime - endTime > 0) {
                    storageValObj[k].showRedDot = false;
                    delete storageValObj[k];
                } else if (storageValObj[k].showRedDot == true) {
                    $(".question_type_dl label[question-name='" + k + "']").addClass('showRedDot');
                    $('.left_nav li.' + k).addClass('showRedDot');
                }
            }
            setLocalStorage(key, JSON.stringify(storageValObj));
        }
    }
    // 鏃堕棿杞崲
    function timeTransformation(endTime) {
        var timeStamp = new Date(endTime);
        return timeStamp.getTime(); // 杩斿洖鏃堕棿鎴�
    }

    // 闇€瑕佸瓨鍌ㄧ殑鍊奸厤缃�
    function storageValConfig(key) {
        var localValObj = JSON.parse(localStorage.getItem(key)) || {};
        var storageValObj = {
            'proportion': {
                'endTime': timeTransformation('2019-07-01'),
                'showRedDot': true
            },
            'qlib': {
                'endTime': timeTransformation('2019-08-01'),
                'showRedDot': true
            },
            'matrix_scale': {
                'endTime': timeTransformation('2019-07-13'),
                'showRedDot': true
            },
            'settings': {
                'endTime': timeTransformation('2019-08-04'),
                'showRedDot': true
            },
            'evaluation': {
                'endTime': timeTransformation('2019-07-30'),
                'showRedDot': true
            },
            'banked_cloze': {
                'endTime': timeTransformation('2019-09-30'),
                'showRedDot': true
            },
            'classification': {
                'endTime': timeTransformation('2019-08-30'),
                'showRedDot': true
            },
            'scale': {
                'endTime': timeTransformation('2019-08-25'),
                'showRedDot': true
            },
            'cloze': {
                'endTime': timeTransformation('2019-09-10'),
                'showRedDot': true
            }
        };
        $.extend(storageValObj, localValObj);
        return storageValObj;
    }

    // 鍒濆鍖栨柊棰樺瀷灏忕孩鐐归厤缃�
    function redSpotTip() {
        this.configs = function(key, storageValObj) {
            resetLocalStorage(key, storageValObj);
        };
    }

    // Export Configs
    var redSpotTip = new redSpotTip();
    if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        // AMD
        define(function() {
            return redSpotTip;
        });
    } else {
        // Browser globals
        window._redSpotTip = redSpotTip;
    }
})(window, document);