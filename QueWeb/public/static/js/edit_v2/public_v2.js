$(function() {
    // 涓€绾ц彍鍗曢珮浜�
    var pathname = location.pathname;
    (function() {
        var settingRegExp = /^\/project\/\w+_setting\//;
        if (pathname.indexOf('/edit/survey/') >= 0) {
            // 缂栬緫
            if (location.hash.indexOf('qlib') >= 0) { // 棰樺簱
                $('.edit-qlib').addClass('active');
                $('.edit-qlib a').addClass('active');
                $('.edit-qlib a>div').addClass('blue_icon');
                $('.edit-qlib a>div').removeClass('wihte_icon');
                $('.question-lib-box').removeClass('none');
            } else { // 棰樺瀷
                $('.edit').addClass('active');
                $('.edit a').addClass('active');
                $('.edit a>div').addClass('blue_icon');
                $('.edit a>div').removeClass('wihte_icon');
                $('.question-type-box').removeClass('none');
            }
            $('.release_share').removeClass('hide_btn');
        } else if (pathname.indexOf('/edit/appearset/') >= 0) {
            // 澶栬
            $('.edit a').addClass('active');
            $('.facade a>div').addClass('blue_icon').removeClass('wihte_icon');
            $('.release_share').removeClass('hide_btn');
        } else if (pathname.indexOf('/project/setting/') >= 0) {
            // 璁剧疆
            $('.edit a').addClass('active');
            $('.settings a>div').addClass('blue_icon').removeClass('wihte_icon');
            $('.release_share').removeClass('hide_btn');
        } else if (pathname.indexOf('/project/logic_setting/') >= 0) {
            // 閫昏緫
            $('.edit a').addClass('active');
            $('.setting_logic a>div').addClass('blue_icon').removeClass('wihte_icon');
            $('.release_share').removeClass('hide_btn');
        } else if (pathname.indexOf('/project/share/') >= 0 || pathname.indexOf('/project/pconvert/') >= 0 || pathname.indexOf('/project/sms/') >= 0 || pathname.indexOf('/project/smstemplate/') >= 0 || pathname.indexOf('/project/smssend/') >= 0 || pathname.indexOf('/project/mail/') >= 0 || pathname.indexOf('/project/mailinvite/') >= 0 || pathname.indexOf('/project/mailtemplate/') >= 0 || pathname.indexOf('/project/mailserver/') >= 0 || pathname.indexOf('/project/mailsendend/') >= 0 || pathname.indexOf('/project/web/') >= 0) {
            // 鍒嗕韩
            $('.facade a').removeClass('active');// 涓嶇煡閬撲负浠€涔堝瑙備細鏈塧ctive绫伙紝鎵嬪姩鍘绘帀
            $('.share a').addClass('active');
        } else if (pathname.indexOf('/report/') >= 0) {
            // 缁熻
            $('.report a').addClass('active');
            $('.release_share').addClass('hide_btn');
            $('.edit-right-preview').addClass('hide_btn');
        }
        // hover鏃跺姞涓嬪垝绾�
        $('.header_nav a').mouseenter(function() {
            $(this).addClass('myactive').siblings().removeClass('myactive');
        });
        $('.header_nav a').mouseleave(function() {
            $(this).removeClass('myactive');
        });
        $('.edit_left_nav li').mouseenter(function() {
            $(this).children().children().addClass('my_blue_icon').siblings().removeClass('my_blue_icon');
        });
        $('.edit_left_nav li').mouseleave(function() {
            $(this).children().children().removeClass('my_blue_icon');
        });

        // 宸︿晶閫昏緫璁剧疆
        $('.edit_left_nav li.setting_logic').click(function() {
            var oid = $(this).attr('data-oid');
            question_setting_checking(oid, function(data) {
                if (data.status = 200 && data.status_code == 1 && data.data.can_setting == true) {
                    window.location.href = '/project/logic_setting/' + oid + '/';
                }
            });
        });
    })();
    // 浼佷笟鍗忎綔鏉冮檺鎺у埗
    $('.header_wrap>.header_nav>li>a,.main>.left_nav_setings .urllink>a, .header_wrap>.edit-header>.edit-center>a').click(function(e) {
        e.preventDefault();
        var $this = $(this);
        var linkUrl = $this.attr('href');
        var permissionType = $this.attr('permission-type');
        if (!permissionType) {
            window.location.href = linkUrl;
            return;
        }
        var $parent = $this.closest('.header_nav');
        if ($parent.length == 0) {
            $parent = $this.closest('.edit-center');
        }
        if ($this.parent().hasClass('urllink')) $parent = $this.closest('.left_nav_setings');
        var pid = $parent.attr('pid');
        var p_type = $parent.attr('p-type');
        if (permissionType == 'edit') {
            project_design_confirm(pid, p_type, linkUrl);
        } else {
            $.when(get_member_edit_authority(pid, permissionType)).done(function() {
                window.location.href = linkUrl;
            });
        }
    });
    // hover浜嬩欢 涓€у寲title
    var Guides = new GuideText({
        maxWidth: 220
    });
    $('body').on({
        'mouseenter': function(e) {
            var $this = $(this);
            var title = $this.attr('data-title');
            var direction = $this.attr('data-dir');
            var isaddicon = $this.attr('data-isaddicon');
            // mousedown鏃朵笉鏄剧ず鎻愮ず妗�
            if ($this.hasClass('is_mousedown')) return;
            if (direction == 'right' && isaddicon != 'false') {
                $this.addClass('end_pop_icon_style_hover');
            }
            Guides.show(e.currentTarget, {
                inner: title,
                direction: direction || 'top'
            });
        },
        'mouseleave': function(e) {
            // $('.title_tips').remove();
            Guides.hidden();
            $(this).removeClass('end_pop_icon_style_hover');
            $(this).removeClass('is_mousedown');
        },
        'mousedown': function(e) {
            var $this = $(this);
            $this.addClass('is_mousedown');
            // $('.title_tips').remove();
            Guides.hidden();
        },
        'mouseup': function(e) {
            var $this = $(this);
            
            $this.removeClass('is_mousedown');
        }
    }, '.show_title');

    var RandomGuides = new GuideText({
        maxWidth: 470
    });
    $('body').on({
        'mouseenter': function(e) {
            var $this = $(this);
            var title = $this.attr('data-title');
            var direction = $this.attr('data-dir');
            var isaddicon = $this.attr('data-isaddicon');
            // mousedown鏃朵笉鏄剧ず鎻愮ず妗�
            if ($this.hasClass('is_mousedown')) return;
            if (direction == 'right' && isaddicon != 'false') {
                $this.addClass('end_pop_icon_style_hover');
            }
            RandomGuides.show(e.currentTarget, {
                inner: title,
                direction: direction || 'top'
            });
        },
        'mouseleave': function(e) {
            // $('.title_tips').remove();
            RandomGuides.hidden();
            $(this).removeClass('end_pop_icon_style_hover');
        },
        'mousedown': function(e) {
            var $this = $(this);
            $this.addClass('is_mousedown');
            // $('.title_tips').remove();
            RandomGuides.hidden();
        },
        'mouseup': function(e) {
            var $this = $(this);

            $this.removeClass('is_mousedown');
        }
    }, '.random,.disturb');

    // 閫昏緫璁剧疆锛屽紩鐢ㄨ缃紝閫夐」鍏宠仈锛岄兘涓嶆敮鎸侀殢鏈烘娊棰樻垨鎵撲贡棰樼洰椤哄簭
    function question_setting_checking(oid, fn) {
        $.ajax({
            url: '/edit/question_setting/logic/check/',
            type: 'get',
            data: {
                'project_id': oid
            },
            success: function(data) {
                if (data.status = 200 && data.status_code == 1 && data.data.can_setting == false) {
                    var content = '璇ラ」鐩凡寮€鍚殢鏈烘娊棰樿缃紝鏆備笉鏀寔鍚屾椂寮€鍚€昏緫璁剧疆鍔熻兘锛�';
                    if (data.data.check_type == 'disrupt') {
                        content = '璇ラ」鐩凡寮€鍚墦涔遍鐩『搴忚缃紝鏆備笉鏀寔鍚屾椂寮€鍚€昏緫璁剧疆鍔熻兘锛�';
                    }
                    abnormal_tips_pop(content);
                }
                fn && fn(data);
            }
        });
    }

    // 寮傚父鎻愮ず寮圭獥
    function abnormal_tips_pop(content) {
        var options = {
            head: {
                'inner': '<i></i>鏃犳硶璁剧疆',
                'class': 'abnormal_tips'
            },
            content: {
                inner: content
            },
            btnRight: '鎴戠煡閬撲簡',
            isFixed: false,
            btnAlign: 'right',
            showMask: true,
            maskClickClose: true,
            showCloseBtn: true,
            noScroll: false,
            popupType: 'confirm',
            onClose: function() {
                abnormalTipsPop.destroy();
            },
            onRightClick: function() {
                abnormalTipsPop.destroy();
            }
        };
        var abnormalTipsPop = new Popup(options);
        abnormalTipsPop.show();
    }

    // 宸︿晶鐐瑰嚮浜嬩欢
    $('.edit_left_nav>ul>li.settings').on('click', function() {
        var $this = $(this);
        var pid = $this.attr('data-oid');
        var localVal = localStorage.getItem('new_question_dic');
        var localValObj = JSON.parse(localVal);
        localValObj['settings'] ? localValObj['settings'].showRedDot = false : '';
        $this.removeClass('showRedDot');
        window._redSpotTip.configs('new_question_dic', localValObj);
        window.location.href = '/project/setting/' + pid + '/';
    });

    // 缂栬緫宸︿晶 棰樺簱棰樺瀷鐨勭偣鍑讳簨浠�
    function bind_click_event_for_edit_and_qlib() {
        var $edit = $('.edit_left_nav>ul>li.edit');
        var $qlib = $('.edit_left_nav>ul>li.edit-qlib');
        var editLink = '/edit/survey/';
        $edit.on('click', function() {
            if ($edit.hasClass('active')) return;
            if (pathname.indexOf(editLink) < 0) {
                var pid = $(this).attr('data-oid');
                location.href = editLink + pid;
            } else {
                location.hash = '';
                $edit.toggleClass('active');
                $qlib.toggleClass('active');
                $('.edit').addClass('active');
                $('.edit a').addClass('active');
                $('.edit a>div').addClass('blue_icon');
                $('.edit a>div').removeClass('wihte_icon');
                $('.edit-qlib').removeClass('active');
                $('.edit-qlib a').removeClass('active');
                $('.edit-qlib a>div').removeClass('blue_icon');
                $('.edit-qlib a>div').addClass('wihte_icon');
                $('.question-type-box').removeClass('none').siblings().addClass('none');
            }
        });
        $qlib.on('click', function() {
            var $this = $(this);
            var localVal = localStorage.getItem('new_question_dic');
            var localValObj = JSON.parse(localVal);
            localValObj['qlib'] ? localValObj['qlib'].showRedDot = false : '';
            $qlib.removeClass('showRedDot');
            // resetLocalStorage('new_question_dic', localValObj);
            window._redSpotTip.configs('new_question_dic', localValObj);
            if ($qlib.hasClass('active')) return;
            if (pathname.indexOf(editLink) < 0) {
                var pid = $(this).attr('data-oid');
                location.href = editLink + pid + '#qlib';
            } else {
                location.hash = '#qlib';
                $edit.toggleClass('active');
                $qlib.toggleClass('active');
                $('.edit-qlib').addClass('active');
                $('.edit-qlib a').addClass('active');
                $('.edit-qlib a>div').addClass('blue_icon');
                $('.edit-qlib a>div').removeClass('wihte_icon');
                $('.edit').removeClass('active');
                $('.edit a').removeClass('active');
                $('.edit a>div').removeClass('blue_icon');
                $('.edit a>div').addClass('wihte_icon');
                $('.question-lib-box').removeClass('none').siblings().addClass('none');
            }
        });
    }
    bind_click_event_for_edit_and_qlib();
    // 鍒濆鍖杗ew鍥炬爣
    window._redSpotTip.configs('new_question_dic');
});