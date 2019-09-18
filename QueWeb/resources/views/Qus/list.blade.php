<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <title>问卷设计-问卷标题</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="Cache-Control" CONTENT="no-cache">
    <meta http-equiv="Cache-Control" CONTENT="no-store">
    <meta http-equiv="Expires" content="0" />
    <link rel="stylesheet" href="{{asset("/static/css/reset.css?v=7aac936b30990e7e47425f5c0a311e4e")}}">
    <link rel="stylesheet" href="{{asset("/static/css/edit_v2/edit_commom.css?v=831ae2bfad157bf5c918127f7a1ac754")}}">
    <link href="{{asset("/static/css/common_pupop.css?v=5733414267218b9239fb8d45290e5324")}}" rel="stylesheet">
    <link href="{{asset("/static/css/report_pc_v2.css?v=8ccffb15d5f8eb1f3e2eabc6ce0d6a8e")}}" rel="stylesheet">



    <link href="{{asset("/static/component/css/wui.min.css?v=74298e5e2d65eca9d4d9f538aee2282c")}}" type="text/css" rel="stylesheet" />
    <link href="{{asset("/static/css/reset.css?v=7aac936b30990e7e47425f5c0a311e4e")}}" type="text/css" rel="stylesheet" />
    <!--图片裁剪-->
    <link href="{{asset("/static/js/plug-in/Jcrop/Jcrop.css?v=2a61f7faff119e5744dc109b5703a4f4")}}" type="text/css" rel="stylesheet" />
    <!--加载提示-->
    <!-- <link href="static/js/plug-in/load/load.css?v=bf1fb60788943f2da66cad2f1a021043" type="text/css" rel="stylesheet" /> -->
    <!--jsBubble-->
    <link href="{{asset("/static/js/plug-in/JsBubble/JsBubble.css?v=f7210810e927f4685b4640b39ab314a3")}}" type="text/css" rel="stylesheet" />
    <link href="{{asset("/static/css/edit_v2/edit.css?v=9dc86e133b7856d5c978ed5c922dd133")}}" type="text/css" rel="stylesheet" />
    <link href="{{asset("static/css/set_end_language.css?v=a19527fc35878f37ac76f4a4b82edf44")}}" type="text/css" rel="stylesheet" />
    <!-- <link href="static/css/public_v2.css?v=72feb1792ee0444541458305391d8c13" rel="stylesheet">
    <link href="static/css/style_v2.css?v=fb8221e4c9a86406adaa8fc0ed3a7a62" rel="stylesheet">
    <link href="static/css/button.css?v=91b96c3b8a9d8a98b5bc2b309744413d" rel="stylesheet">
    <link href="static/css/popuplayer_v2.css?v=05012742750b033f972328250469e98c" rel="stylesheet">
    <link href="static/css/edit_cq.css" id="css_url" rel="stylesheet"> -->

    <script src="{{asset("/static/js/jquery-1.8.3.min.js")}}"></script>
    <script src="{{asset("/static/js/jquery.cookie.js")}}"></script>

    <script type="text/javascript" src="{{asset("/static/js/tools.js?v=cc6b385113ffe5a315cf7ed66385e415")}}"></script>
    <script src="{{asset("/static/js/common.js?v=edd408bb754d7a21b5293da17ab28092")}}"></script>
    <!--弹出框-->
    <link href="{{asset("/static/js/plug-in/jsbox/jsbox_new.css?v=9eb300e2bd51d4e376f7cd61d5ff0ca9")}}" rel="stylesheet">
    <script type="text/javascript" src="{{asset("/static/js/plug-in/jsbox/jsbox.js?v=6a36b023769894d851f5502542dadd6b")}}"></script>
    <!-- 蒙层 -->
    <link href="{{asset("/static/js/plug-in/load/load.css?v=bf1fb60788943f2da66cad2f1a021043")}}" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="{{asset("/static/js/plug-in/load/load.js?v=02fe2253bbbb60d82992737335d71a46")}}"></script>
    <!--文字引导弹框提示-->
    <script type="text/javascript" src="{{asset("/static/js/plug-in/guideText/index.js?v=bc7c26baafeca044f839dc53f2d1bd8a")}}"></script>
    <link href="{{asset("/static/js/plug-in/guideText/main.css?v=36a60ce85a8a08a0bc11861f08399e5a")}}" rel="stylesheet">
    <!--新弹框插件-->
    <script type="text/javascript" src="{{asset("/static/js/plug-in/popup/index.js?v=a1f1748dc8f27375a3336d47f1bdd097")}}"></script>
    <link href="{{asset("/static/js/plug-in/popup/main.css?v=9abf380e90e7b09a07c3ac05582a43f2")}}" rel="stylesheet">
    <!--新toast插件-->
    <script type="text/javascript" src="{{asset("/static/js/plug-in/toast/index.js?v=cdd0cd66d355a54f1846a7288804bc1e")}}"></script>
    <link href="{{asset("/static/js/plug-in/toast/main.css?v=d5bfc4904fcdd5df301b17133c07e694")}}" rel="stylesheet">
    <script src="{{asset("/static/js/lodash.min.js?v=3b37864847459979b900d7ba3e9f6114")}}"></script>
    <!--新wui组件样式-->
    <script type="text/javascript" src="{{asset("/static/component/js/wui.min.js?v=8813e66c7fb5d293bc125781072f4bb3")}}"></script>
    <script type="text/javascript" src="{{asset("/static/js/juicer.js?v=eddf2482fed75dc11f602a5f519435cb")}}"></script>



    <!--script src="static/js/jquery.js?v=b8e88e87301643b74f0df01461582202"></script-->
    <!-- <script type="text/javascript" src="static/js/jquery_1.10.2.min.js?v=b62fe6d31abbd18c3f7eb34ddf470d63"></script> -->
    <script type="text/javascript" src="{{asset("/static/js/jquery-migrate-1.2.1.js?v=26d9dd4e5632fdfef65c62330faabb9f")}}"></script>
    <script src="{{asset("/static/js/jquery-ui-1.12.1.min.js?v=c15b1008dec3c8967ea657a7bb4baaec")}}"></script>
    <!-- 滚动条插件 -->
    <link rel="stylesheet" href="{{asset("/static/js/plug-in/scrollBar/jquery.mCustomScrollbar.min.css?v=f59e3f4c0087b4d8ddc27bdd9c9ab92b")}}">
    <script type="text/javascript" src="{{asset("/static/js/plug-in/scrollBar/jquery.mCustomScrollbar.concat.min.js?v=42a368e95b4a38989c8984c672d29ec0")}}">
    </script>
    <script src="{{asset("/static/js/json.js?v=2ba3e68501985816b26089f135e5b718")}}"></script>
    <!-- <script src="static/js/common.js?v=edd408bb754d7a21b5293da17ab28092"></script> -->
    <script type="text/javascript" src="{{asset("/static/component/js/wui.min.js?v=8813e66c7fb5d293bc125781072f4bb3")}}"></script>
    <script src="{{asset("/static/js/edit_v2/edit_option.js?v=5ecd755c1731a42dfd7d97158be463b8")}}"></script>

    <link href="{{asset("/static/css/plugin_center/paid.css?v=f8aa8d6179c5db63c98f46244994c3a2")}}" rel="stylesheet">
    <script type="text/javascript" src="{{asset("/static/js/member/paid.js?v=c4f797727f49a89e9bbd27fd8ebe8cd2")}}"></script>
    <script type="text/javascript" src="{{asset("/static/js/base_utils.js?v=85e19fbb31a382a10e40969f283289ec")}}"></script>
    <!-- <script type="text/javascript" src="static/js/edit_v2/public.js?v=80831a11cc363f33dc17ac6e2c78ed64"></script> -->
    <!-- pc投票更改提示弹框插件 public.js=》 public_v2.js -->
    <script type="text/javascript" src="static/js/edit_v2/new_question_tips_config.js?v=e7ef55c50c0d4efe68380aa1f2538fcd"></script>
    <script type="text/javascript" src="static/js/edit_v2/public_v2.js?v=dc78810b50b4e18b11a921a93d55840e"></script>
    <link rel="stylesheet" href="static/css/wjNotify.css?v=38c4fb94f1a78663fb75e70351e3a876">
    <link rel="stylesheet" type="text/css" href="{{asset("/assets/css/vendor.css")}}">
    <link rel="stylesheet" type="text/css" href="{{asset("/assets/css/flat-admin.css")}}">
    <!-- Theme -->
    <link rel="stylesheet" type="text/css" href="{{asset("/assets/css/theme/blue-sky.css")}}">
    <link rel="stylesheet" type="text/css" href="{{asset("/assets/css/theme/blue.css")}}">
    <link rel="stylesheet" type="text/css" href="{{asset("/assets/css/theme/red.css")}}">
    <link rel="stylesheet" type="text/css" href="{{asset("/assets/css/theme/yellow.css")}}">
    <style type="text/css">
        th::after{
            content: "" !important;
        }
    </style>
</head>
<body>
<div class="header_wrap">

    <link rel="stylesheet" href="static/header/css/utils.css?v=6bbaf5d7ae331634cf4ee3db9a86406e">
    <link rel="stylesheet" href="static/header/css/current_page.css?v=e1c8be427b3c04d5f9c7a2437e31767d">
    <link rel="stylesheet" href="static/header/css/edit.css?v=457a5e0cc143605760b52674117c220f">
    <script type="text/javascript" src="static/header/js/current_page/edit.js?v=1f0e78705271e225f5403325635a9042" defer="defer"></script>
    <script type="text/javascript" src="static/header/js/utils.js?v=c94e41f834340ca7efb71ef894f4957b" defer="defer"></script>

    <div class="edit-header">
        <div class="edit-left">
            <a href="/list/" class="back-link">
                <div class="header-edit-back-div back-tooltip-link show_title" data-title="返回项目列表">
                    <div class="header-edit-icon back"></div>
                </div>
            </a>
            <div class="header-edit-title"></div>
        </div>
        <div class="edit-right">
            <script type="text/javascript" defer="defer" src="static/js/plug-in/jsbox/jsConfirm.js?v=8f5140dd8bc79c3b106430842780877e"></script>
            <!-- <link rel="stylesheet" href="static/css/itemlist_base.css?v=2d4a57674bd123bdbab6d3c68fb960b2"> -->
            <link rel="stylesheet" href="static/header/css/user_head.css?v=17d71d21e9b9b34016bdf2da447154b8">

            <script type="text/javascript" defer="defer" src="static/header/js/user_head.js?v=23019b3f0416bc068924d838a6bba4a7"></script>

            <div class="user-head ">
                <a class="help" href="/helpcenter" wj-hawkeye="list_v2_nav_helpcenter" target="_blank">帮助</a>
                <a href="/member" class="user-head-logo-div">
                    <div class="user-head-logo center">
                    </div>
                </a>
                <div class="user-head-hover">
                    <div class="hax"></div>
                    <div class="user-head-hover-title" title="SoyBean683867...">
                        SoyBean683867...
                    </div>
                    <div class="user-head-hover-content">

                        <a href="/member" class="user-head-hover-content-item" wj-hawkeye="list_v1_user_member">
                            <i class="user-head-icon user-head-icon-account"></i>
                            <div class="user-head-hover-content-title">
                                我的账户
                            </div>
                        </a>
                        <a class="user-head-hover-content-item" href="/member/mywallet" wj-hawkeye="list_v1_user_mywallet">
                            <i class="user-head-icon user-head-icon-wallet"></i>
                            <div class="user-head-hover-content-title" >
                                我的钱包
                            </div>
                        </a>
                        <a href="/contact/list" class="user-head-hover-content-item" wj-hawkeye="list_v1_user_contact">
                            <i class="user-head-icon user-head-icon-contact"></i>
                            <div class="user-head-hover-content-title">联系人</div>
                        </a>
                        <a href="/message/list" class="user-head-hover-content-item msg" wj-hawkeye="list_v1_user_message">
                            <i class="user-head-icon user-head-icon-msg"></i>
                            <div class="user-head-hover-content-title">站内信</div>
                        </a>
                    </div>
                    <div class="user-head-hover-exit">
                        <div class="user-head-hover-exit-content">
                            <i class="user-head-icon user-head-icon-exit"></i>
                            <div class="user-head-hover-exit-title" wj-hawkeye="list_v1_user_logout">退出登录</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="edit-right-left">
                <a class="btn_preview" id="btn_preview"><div class="edit-right-preview">
                        预览
                    </div>
                </a>
                <div class="hide_btn release_share edit-right-publishe-share" wj-hawkeye="edit_v2_header_publish_btn1">
                    发布并分享
                </div>
                <a href="/helpcenter" class="edit-right-help" target="_blank">
                    帮助
                </a>
            </div>
        </div>
        <div class="edit-center" p-type="None">
            <a permission-type="edit" href="#">
                <div class="edit-center-title">
                    <div id="edit-header-edit" class="showUnderLine">问卷列表</div>
                </div>
            </a>
            <div class="header-edit-icon arrow-left"></div>
            <a  href="{{url("/question")}}">
                <div class="edit-center-title">
                    <div id="edit-header-publish">发布项目</div>
                </div>
            </a>

        </div>
    </div>
</div>

<div class="main">


    <div class="survey_main_wrap">
        <div id="preview-container">
            <div class="preview-image">
                <i class="triangle"></i>
            </div>
        </div>
        <div class="survey_main ">
            <div class="survey_prefix_wrap">
                <div class="survey_title">
                    <div class="">
                        <div class="title_content" edit-type="project" contenteditable="true" tabindex="0"><p style="text-align: left;">问卷列表</p>
                        </div>
                    </div>
                </div>
                <div class="survey_prefix">
                    <div class="">
                        <div class="prefix_content" edit-type="begin_desc" contenteditable="false" tabindex="0"
                             placeholder="点击编辑欢迎语">亲爱的用户你好，这里是您已编辑的问卷</div>
                    </div>
                </div>
            </div>
            <div class="survey_question_wrap">
                <div >
                    <div id="question_box" class="ui-sortable">
                        <div class="row">
                            <div class="col-md-12 col-sm-12">
                                <div class="card">

                                    <div class="card-body">
                                        <table class=" table">
                                            <thead>
                                            <th>问卷名称</th>

                                            <th>结束时间</th>
                                            <th>状态</th>

                                            <th>查看详情</th>
                                            </thead>
                                            <tbody>
                                                @foreach($objs as $obj)
                                                <tr>
                                                    <td>
                                                      {{$obj->title}}
                                                    </td>
                                                    <td>
                                                        {{$obj->endTime}}
                                                    </td>
                                                    <td>{{$obj->status}}</td>

                                                    <td>
                                                        <a href="#" target="view_window" class="btn btn-primary btn-xs" role="button">
                                                            预览
                                                        </a>

                                                    </td>
                                                </tr>
                                            @endforeach
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div class="survey_suffix_wrap">


                <div class="one_page_one_question">
                    感谢您的使用
                    <label></label>
                </div>
            </div>
        </div>
    </div>




    <div class="setting_main_wrap" id="setting_main_wrap"></div>
    <!-- ckeditor -->
    {{-- <script type="text/javascript" src="static/js/plug-in/ckeditor_4/ckeditor.js?v=27741b72307ba1a1e004921328a93d07"></script>--}}
    {{--   <script src="static/js/juicer.js?v=eddf2482fed75dc11f602a5f519435cb"></script>--}}
    <script src="static/js/survey_mobile/velocity.min.js?v=64da069aba987ea0512cf610600a56d1"></script>
    <!--图片裁剪-->
    <script type="text/javascript" src="static/js/plug-in/Jcrop/Jcrop.js?v=08327ce2429b2d0c274e5c1669088540"></script>
    <script type="text/javascript" src="static/js/plug-in/dmuploader/demo.min.js?v=ad801ed3f3b781a587f5ed2f1090cdbd"></script>
    <script type="text/javascript" src="static/js/plug-in/dmuploader/dmuploader.min.js?v=1e1a33dcf610d401a4885e715fb4d5a6"></script>
    <!--jsBubble-->
    <script type="text/javascript" src="static/js/plug-in/JsBubble/JsBubble.js?v=ec3dea55febe1ae69c19be4923cba05b"></script>
    <script src="static/js/enums.js?v=99cd621eebaa4043b281a8df7a7be2a1"></script>
    {{--<script src="static/js/edit/edit_init.js?v=19e3302ffc3eec449dfa8847f0a79f71">
    </script>--}}
    <script src="static/js/ssq.js?v=6ba7a84fc9ccabd736693a20b468fa2b"></script>
    {{--<script src="static/build/js/edit_main.js?v=72f49446abea0ac07c9d7f1b35eab0fc">
    </script>--}}
    <script src="static/js/third_party_stat.js?v=8f1accbc0cc40406d38648dfe454fb47"></script>






</body>


</html>