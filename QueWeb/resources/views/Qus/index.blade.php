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
        <div class="edit-center" pid="5d7e238192beb543b9d5984b" p-type="None">
            <a permission-type="edit" href="{{url("questionlist")}}">
                <div class="edit-center-title">
                    <div id="edit-header-edit" >问卷列表</div>
                </div>
            </a>
            <div class="header-edit-icon arrow-left"></div>
            <a  href="#">
                <div class="edit-center-title">
                    <div id="edit-header-publish" class="showUnderLine">发布项目</div>
                </div>
            </a>
            <div class="header-edit-icon arrow-left"></div>
            <a permission-type="report" href="/report/basic_chart/5d7e238192beb543b9d5984b?pid=5d7e238192beb543b9d5984b">
                <div class="edit-center-title">
                    <div id="edit-header-report">统计报表</div>
                </div>
            </a>
        </div>
    </div>
</div>
<!-- 问卷结束后的提示框 -->
            <div class="question_end_popup hide_tip">
                <div class="box">
                    <div class="title">
                        提示
		</div>
                    <div class="tip_content">
                        该项目已结束，请重新发布后再进入编辑。
		</div>
                    <div class="foot">
                        <span class="determine">确定</span>
                    </div>
                </div>
            </div>
<div class="main">
    <div class="edit_left_nav">
        <ul class="left_nav">

            <li class="edit hdgc_False" >
                <a href="#">
                    <div class="wihte_icon">
                        <i>❤</i>
                    </div>
                    新建问卷
                </a>
            </li>
        </ul>
    </div>
    <div class="question_type_wrap mCustomScrollbar _mCS_1 mCS-autoHide" style="overflow: visible; height: 872px;">
        <div id="mCSB_1" class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside" style="max-height: none;" tabindex="0">
            <div id="mCSB_1_container" class="mCSB_container" style="position:relative; top:0; left:0;" dir="ltr">
            <!-- 题型 -->
            <div class="question-type-box">
                <div class="question_type_dl">
                    <dl class="type_module">
                        <dt>题目类型</dt>
                        <dd>
                                <label id="danxuan" class="type_item three_letter_spacing  ui-draggable ui-draggable-handle" question-type="2" disp-type="" question-name="single_select">
                                <i  class="icon_wj icon_type_single"></i>
                                单选题
						        </label>
                                <label  id="duoxuan" class="type_item three_letter_spacing  ui-draggable ui-draggable-handle" question-type="3" disp-type="" question-name="multiple_select">
                                <i class="icon_wj icon_type_multiple"></i>
                                多选题
						        </label>
                        </dd>

                        <dd>
                            <label id="tiankong" class="type_item three_letter_spacing  ui-draggable ui-draggable-handle" question-type="2" disp-type="" question-name="single_select">
                                <i  class="icon_wj icon_type_single"></i>
                                填空题
                            </label>

                        </dd>
                    </dl>
                </div>
                <div id="preview_img_btn">
                    <span>选择你所需要的题目类型</span>
                    {{--<label class="btn_switch checked" data-key="question_preview" data-value="on"></label>--}}
                </div>
            </div>
            </div></div>
        <div id="mCSB_1_scrollbar_vertical" class="mCSB_scrollTools mCSB_1_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical" style="display: block;"><div class="mCSB_draggerContainer"><div id="mCSB_1_dragger_vertical" class="mCSB_dragger" style="position: absolute; min-height: 50px; top: 0px; display: block; height: 608px; max-height: 838px;"><div class="mCSB_dragger_bar" style="line-height: 50px;"></div></div><div class="mCSB_draggerRail"></div></div></div></div>
    <div class="survey_main_wrap">
        <div id="preview-container">
            <div class="preview-image">
                <i class="triangle"></i>
            </div>
        </div>
        <div class="survey_main ">
            <div class="survey_prefix_wrap">
                <div class="survey_title">
                    <div >
                        <input id = "setTitle-001"class="title_content"style="border: 0px;" value="{{session("title")}}">
                        </input>
                    </div>
                </div>
                <div class="survey_prefix">
                    <div >
                        <div class="prefix_content" edit-type="begin_desc" contenteditable="false" tabindex="0"
            placeholder="点击编辑欢迎语">感谢您能抽出几分钟时间来参加本次答题，现在我们就马上开始吧！</div>
                    </div>
                </div>
            </div>
            <div class="survey_question_wrap">
                <div >
                    <div id="question_box" class="ui-sortable">
                        <!-- 题目的html放这里 -->

                    </div>

                </div>
              </div>
                <div class="survey_suffix_wrap">

                    <div class="survey_suffix">
                        <div class="content_editable" style="position: relative" >
                            <div class="suffix_content" edit-type="end_desc" contenteditable="true"  tabindex="0" placeholder="点击编辑结束语">
                                <p style="text-align: center;">您已完成本次问卷，感谢您的帮助与支持</p>
                            </div>
                        </div>
                    </div>
                    <div class="release_share_box">
                        <button class="release_share_btn" wj-hawkeye="edit_v2_publish_btn2">发布并分享</button>
                    </div>
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
    {{--//定时加载函数--}}
    <script type="text/javascript">
        var num = 0;
        setInterval(function () {
            var  uri = "/WorkOnline/QueWeb/public/search_test";
            $.post(uri,
                {
                    _token:'{{csrf_token()}}'
                },
                function (data) {
                    if(num != data.length){
                        addDiv(data);
                        num = data.length;
                    }else {
                        //console.log("test没有变化")
                    }
                });
        },1000);
        function addDiv(data) {
            var code = "";
            for(i=0;i<data.length;i++)
            {
                var  tag = data[i].type;
                var  id = data[i].id;
                var  seq = data[i].seq;
                var type ="";
                if(tag=="tiankong")
                {
                    type = "填空题";
                }
                if(tag=="danxuan")
                {
                    type = "";
                }
                if(tag=="duoxuan")
                {
                    type = "(多)";
                }
                var  content =data[i].content;
                if(tag == "tiankong"){
                    var  str ="                        <div id=\"\" class=\"module question\"  question-type=\"6\" disp_type=\"vertical\" cols_count=\"1\" tabindex=\"0\">\n" +
                        "                            <div class=\"q_content_wrap\">\n" +
                        "                                <div class=\"q_content\">\n" +
                        "                                    <div class=\"q_title_wrap\">\n" +
                        "                                        <div class=\"q_seq\">"+ seq +  "</div>\n" +
                        "                                        <div >\n" +
                        "                                            <input id=\" "  + tag+"-"+id +   "  \" class=\"q_title \" edit-type=\"question\" tabindex=\"0\" style=\"border: 0px; width: 150%;\" value=\"   "+ content + "    \">\n" +
                        "                                        </div>\n" +
                        "                                    </div>\n" +
                        "\n" +
                        "                                    <!-- 输入框 -->\n" +
                        "                                    <div class=\"q_option_list pr\">\n" +
                        "                                        <div class=\"blank_wrap\">\n" +
                        "                                            <div class=\"blanksframe input_vr_wrap\">\n" +
                        "                                                <div class=\"input_vr_icon1\">\n" +
                        "                                                    答题区\n" +
                        "                                                </div>\n" +
                        "                                            </div>\n" +
                        "                                        </div>\n" +
                        "                                    </div>\n" +
                        "                                 </div>\n" +
                        "                            </div>\n" +
                        "                        </div>\n";
                } else if(tag =="danxuan"||tag=="duoxuan") {
                    var  choiceid = "choice-"+id;
                    var  str  = "                        <div id=\"\" class=\"module question\"  question-type=\"6\" disp_type=\"vertical\" cols_count=\"1\" tabindex=\"0\">\n" +
                        "                                  <div class=\"q_content_wrap\">\n" +
                        "                                      <div class=\"q_content\">\n" +
                        "                                          <div class=\"q_title_wrap\">\n" +
                        "                                              <div class=\"q_seq\">"+ seq + type +"</div>\n" +
                        "                                              <div >\n" +
                        "                                                  <input id=\" "+ tag+"-"+id+ "  \" class=\"q_title \" style=\"border: 0px; width: 100%;\" value=\"  "+ content+ " \">\n" +
                        "                                              </div>\n" +
                        "                                          </div>\n" +
                        "                                             <!-- 选项框 -->\n" +
                        "                                        <div class=\"q_option_list\" >\n" +
                        "                                            <ul id='xuanxiangbox-" +id + "' class=\"q_option_ul ui-sortable\" data-column=\"0\"  >\n" +

                        "\n" +

                        "                                            </ul>\n" +
                        "                                        </div>\n" +
                        "                                      </div>\n" +
                        "                                  </div>\n" +
                        "                              </div>\n";
                }
                code = code + str;
            }
            $("#question_box").html(code);
            for(i=0;i<data.length;i++)
            {
                addChoice(data[i].id);
            }

        }
       function  flash() {
           //加载相应的样式且将数据发送
           var flag = true;
           $('input').on('compositionstart', function () {
               flag = false;
           })
           $('input').on('compositionend', function () {
               flag = true;
           })
           $('input').on('input', function () {
               var _this = this;
               //加载数据修改
               setTimeout(function () {
                   if (flag) {
                       //console.log($(_this).val());
                       //发送数据信息
                       var kind = $(_this).attr('id').split('-')[0];
                       var id = $(_this).attr('id').split('-')[1];
                       var uri="";
                       if(kind =="xuanxiang"){
                           uri = "/WorkOnline/QueWeb/public/update_choice";
                       }else if(kind =="setTitle") {
                           uri = "/WorkOnline/QueWeb/public/update_question_title";
                       }else{
                           uri = "/WorkOnline/QueWeb/public/update_test";
                       }
                       var val = $(_this).val();
                       $.post(uri,
                           {
                               content: val,
                               type: kind,
                               id: id,
                               _token: '{{csrf_token()}}'
                           },
                           function (data) {
                              if(kind =="setTitle")
                              {
                                 console.log(data);
                                  $("#setTitle-001").val(data);
                              }
                           });
                   }
               }, 0)
           })
           var flag1 = 0;
           $('input').focus(function () {
               var _this = this;
               flag1 = 1;
               _this.style.border = "1px solid";
              // console.log("huodejiaodian");
           })
           $('input').blur(function () {
               var _this = this;
               flag1 = 0;
               _this.style.border = "0px";
           })
           $('input').mouseover(function () {
               var _this = this;
               if (flag1 == 0) {
                   _this.style.border = "1px  dotted";
               }

               setTimeout(function () {

               })
           })
           $('input').mouseleave(function () {
               var _this = this;
               if (flag1 == 0) {
                   _this.style.border = "0px ";
               }

           })
       }
        function addChoice(pid) {
            var str_choice="";
            var  uri = "/WorkOnline/QueWeb/public/search_choice";
            var id =pid;
            var  choiceid = "choice-"+id;
            var target = "xuanxiangbox-"+id;
            $.post(uri,
                {
                    id:id,
                    _token:'{{csrf_token()}}'
                },
                function (data) {
                    for(var j=0;j<data.length;j++)
                    {
                        var  seq = data[j].seq;
                        var  content = data[j].content;
                        str_choice =  str_choice +  "<li class=\"option_item\" >\n" +
                            "\t\t\t<div class=\"option_title_wrap\">\n" +
                            "\t\t\t\t<span class=\"icon_wj btn_icon btn_handle show_title\">\n" +
                            "\t\t\t\t</span>\n" +
                            "\t\t\t\t<div>\n" +
                            "\t\t\t\t\t<i class=\"icon_wj icon_radio\"></i>\n" +
                            "\t\t\t\t\t<input id='xuanxiang-" + data[j].id + " ' class=\"option_title\" edit-type=\"option\" style=\"border: 0px;\"  value=\" " + content + " \">\n" +
                            "\t\t\t\t\t\n" +
                            "\t\t\t\t</div>\n" +
                            "\t\t\t\t<div class=\"option_operate\">\n" +
                            "\t\t\t\t\t\n" +
                            "\t\t\t\t\t<a class=\"icon_wj btn_icon btn_option_del show_title\" data-title=\"删除\"></a>\n" +
                            "\t\t\t\t</div>\n" +
                            "\t\t\t</div>\n" +
                            "\t\t</li>"

                    }
                    str_choice += "                                                    <div style=\"padding-left: 5%;padding-top: 10%;\">\n" +
                        "\n" +
                        "                                                            <p  id = \""+choiceid+"\" >添加选项</p>\n" +
                        "\n" +
                        "                                                    </div>\n";
                    $("#"+target).html(str_choice);

                    flash();
                });

        }



            $("body").delegate("p","click", function () {
                var _this = this;
                var str = $(_this).attr('id').split('-');
                if (str.length > 0) {
                    var id = str[1];
                    var uri = "/WorkOnline/QueWeb/public/insert_choice";
                    $.post(uri,
                        {
                            id: id,
                            _token: '{{csrf_token()}}'
                        },
                        function (data) {
                            //console.log("xuanxiangbiao:" + data);
                            addChoice(id);
                        });
                }
        })



    </script>;
    {{--点击填空按钮监听--}}
    <script type="text/javascript">
        //生成对应的页面代码
        $("#tiankong").on("click",function () {
                //后台添加记录
                    var  tag = "tiankong";
                    var  uri = "/WorkOnline/QueWeb/public/insert_test";
                    $.post(uri,
                        {
                            tag :tag ,
                            _token:'{{csrf_token()}}'
                        },
                        function (data) {
                            //.log(data);
                        });
        })
    </script>
    {{--点击单选按钮监听--}}
    <script type="text/javascript">
        $("#danxuan").on("click",function () {
            //后台添加记录
            var  tag = "danxuan";
            var  uri = "/WorkOnline/QueWeb/public/insert_test";
            $.post(uri,
                {
                    tag :tag ,
                    _token:'{{csrf_token()}}'
                },
                function (data) {
                    //console.log(data);
                });

        })
    </script>
    {{--点击多选按钮监听--}}
    <script type="text/javascript">
        $("#duoxuan").on("click",function () {
            var  tag = "duoxuan";
            var  uri = "/WorkOnline/QueWeb/public/insert_test";
            $.post(uri,
                {
                    tag :tag ,
                    _token:'{{csrf_token()}}'
                },
                function (data) {
                    //console.log(data);
                });
        })
    </script>

</body>


</html>