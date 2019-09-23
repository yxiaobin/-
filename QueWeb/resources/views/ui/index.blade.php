@extends("layout.ui")
@section('content')
    <section class="Hui-article-box">
        <nav class="breadcrumb"><i class="Hui-iconfont">&#xe67f;</i> 首页
            <span class="c-gray en">&gt;</span>
            问卷管理
            <span class="c-gray en">&gt;</span>
            问卷列表
            <a class="btn btn-success radius r" style="line-height:1.6em;margin-top:3px" href="javascript:location.replace(location.href);" title="刷新" ><i class="Hui-iconfont">&#xe68f;</i></a>
        </nav>
        <div class="Hui-article">
            <article class="cl pd-20">
                <div class="text-c">
				{{--<span class="select-box inline">
				<select name="" class="select">
					<option value="0">全部分类</option>
					<option value="1">分类一</option>
					<option value="2">分类二</option>
				</select>
				</span>--}}
                    <input type="text" name="" id="" placeholder=" 问卷名称" style="width:250px" class="input-text">
                    <button name="" id="" class="btn btn-success" type="submit"><i class="Hui-iconfont">&#xe665;</i> 搜问卷</button>
                </div>
                <div class="cl pd-5 bg-1 bk-gray mt-20">
				<span class="l">
				<a href="javascript:;" onclick="datadel()" class="btn btn-danger radius"><i class="Hui-iconfont">&#xe6e2;</i> 批量删除</a>
				<a class="btn btn-primary radius" data-title="添加资讯" _href="article-add.html" href="{{url("question_new")}}"><i class="Hui-iconfont">&#xe600;</i> 添加问卷</a>
				</span>
                    <span class="r">共有数据：<strong>{{count($objs)}}</strong> 条</span>
                </div>
                <div class="mt-20">
                    <table class="table table-border table-bordered table-bg table-hover table-sort">
                        <thead>
                        <tr class="text-c">
                            <th width="25"><input type="checkbox" name="" value=""></th>
                            <th width="80">问卷名称</th>
                            <th width="60">开始时间</th>
                            <th width="80">超链接</th>
                            <th width="80">状态</th>
                            <th width="120">问卷广场</th>
                            <th width="120">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($objs as $obj)
                            <tr  class="text-c">
                                <td><input type="checkbox" value="" name=""></td>
                                <td>
                                    {{$obj->title}}
                                </td>
                                <td>
                                    {{$obj->startTime}}
                                </td>
                                <td>
                                    <a>  <span style = "color: #636b6f" onclick="showLink(this)" name = "{{$obj->link}}">查看详情</span> </a>
                                    <script type="text/javascript">
                                        function showLink(this1) {
                                            var _this = this1;
                                            var url="http://localhost/WorkOnline/QueWeb/public/answer_question/";
                                            console.log(_this)
                                            var  link = $(_this).attr("name");
                                            if(link != ""){
                                                layer.open({
                                                    title: '问卷连接'
                                                    ,content: "你的问卷的连接<br\>" + url + link + "<br/>快点复制链接去使用吧！"
                                                })
                                            }else{
                                                layer.open({
                                                    title: '信息提示'
                                                    ,content: "您好，您的问卷还未发表，没有生成超链接"

                                                })
                                            }

                                        }
                                    </script>
                                </td>
                                <td>
                                    @if($obj->status == 0)
                                        <p style="color: red ;"><strong>违规贴</strong></p>
                                    @endif
                                    @if($obj->status == 1)
                                        <strong style="color: #4cae4c">进行中</strong>
                                    @endif
                                    @if($obj->status == 2)
                                        <strong style="color: blue"> 已完成 </strong>
                                    @endif
                                    @if($obj->status == -1)
                                        <p style="color: greenyellow"><strong>未发布</strong></p>
                                    @endif
                                </td>
                                <td>
                                    @if($obj->global == 1)
                                        <strong style="color: red">申请中</strong>
                                    @endif
                                    @if($obj->global == 0)
                                        <strong style="color: #4cae4c">未发布</strong>
                                    @endif
                                    @if($obj->global == 2)
                                        <strong style="color: green">已发布</strong>
                                    @endif
                                </td>
                                <td class="f-14 td-manage">
                                {{--   <a href="{{url("/view_question/$obj->link")}}" @if($obj->status==0 || $obj->status==-1)  disabled onclick="return false" @endif target="view_window" class="btn btn-success btn-xs" role="button">
                                        预览
                                    </a>
                                    <a href="{{url("/question_update/$obj->id")}}" @if($obj->status == 1) onclick="return confirm('您正在修改状态为进行中的问卷，点击确定后您的问卷将变为未发布且之前的统计数据将会无效，确定要修改吗？')" @endif target="view_window" class="btn btn-primary btn-xs" role="button">
                                        修改
                                    </a>

                                    <a href="{{url("/question_delete/$obj->id")}}">
                                        <input type="button" class="btn btn-xs btn-danger" onclick="return confirm('确定要删除？')" value="删除">
                                    </a>
                                    @if($obj->global != 2)
                                        <button id="request-{{$obj->id}}" onclick="request(this)" target="view_window" class="btn btn-primary btn-xs" role="button">
                                            发布到问卷广场
                                        </button>
                                    @endif
                                    @if($obj->global == 2)
                                        <a href="{{url("cancel_request_question/$obj->id")}}" target="view_window" class="btn btn-warning btn-xs" role="button">
                                            取消发布到问卷广场
                                        </a>
                                    @endif


                                    <a href="{{url("/analysis_question/$obj->link")}}" @if($obj->status==0 || $obj->status==-1) disabled onclick="return false"  @endif target="view_window" class="btn btn-warning btn-xs" role="button">
                                        数据分析
                                    </a>
                                    @if($obj->status==2)
                                        <button target="view_window" id="jixushouji-{{$obj->id}}" onclick="continue_question(this)" class="btn btn-primary btn-xs" role="button">
                                            继续收集
                                        </button>
                                        <script type="text/javascript">
                                            function continue_question(a){
                                                var _this = a;
                                                console.log(_this)
                                                var  link = $(_this).attr("id").split("-")[1];

                                                var  uri = "/WorkOnline/QueWeb/public/continue_question";
                                                $.post(uri,
                                                    {
                                                        _token:'{{csrf_token()}}',
                                                        id:link
                                                    },
                                                    function (data) {
                                                        layer.open({
                                                            title: '信息提示'
                                                            ,content: "操作成功！开始数据收集。"
                                                        })
                                                    });
                                            }
                                        </script>

                                    @endif--}}
                                    <a style="text-decoration:none"   href="{{url("/view_question/$obj->link")}}" @if($obj->link=='') onclick="return false;"  @endif title="预览"><i class="icon-eye-open"></i></a>
                                    <a style="text-decoration:none"  href="{{url("/question_update/$obj->id")}}"  @if($obj->status == 1) onclick="return confirm('您正在修改状态为进行中的问卷，点击确定后您的问卷将变为未发布且之前的统计数据将会无效，确定要修改吗？')" @endif title="修改"><i class="Hui-iconfont">&#xe6df;</i></a>
                                    <a style="text-decoration:none"  href="{{url("/question_delete/$obj->id")}}"  onclick="return confirm('确定要删除？')" title="删除"><i class="Hui-iconfont">&#xe6e2;</i></a>
                                    <a style="text-decoration:none"  id="request-{{$obj->id}}" onclick="request(this)" title="发布到问卷广场"><i class=" icon-key"></i></a>
                                    <a style="text-decoration:none"  href="{{url("cancel_request_question/$obj->id")}}" title="取消发布到问卷广场"><i class="  icon-remove-sign"></i></a>
                                    <a style="text-decoration:none"  href="{{url("/analysis_question/$obj->link")}}" @if($obj->link=='') onclick="return false;"  @endif   title="数据分析"><i class=" icon-signal"></i></a>
                                    <a style="text-decoration:none"  id="jixushouji-{{$obj->id}}" onclick="continue_question(this)"title="继续收集"><i class="  icon-repeat"></i></a>
                                    <script type="text/javascript">
                                        function request(a){
                                            var _this = a;
                                            console.log(_this)
                                            var  link = $(_this).attr("id").split("-")[1];

                                            var  uri = "/WorkOnline/QueWeb/public/request_question";
                                            $.post(uri,
                                                {
                                                    _token:'{{csrf_token()}}',
                                                    id:link
                                                },
                                                function (data) {
                                                    layer.open({
                                                        title: '信息提示'
                                                        ,content: "您好您的审核已经发出，请耐心等待！"
                                                    })
                                                });
                                        }
                                        function continue_question(a){
                                            var _this = a;
                                            console.log(_this)
                                            var  link = $(_this).attr("id").split("-")[1];

                                            var  uri = "/WorkOnline/QueWeb/public/continue_question";
                                            $.post(uri,
                                                {
                                                    _token:'{{csrf_token()}}',
                                                    id:link
                                                },
                                                function (data) {
                                                    layer.open({
                                                        title: '信息提示'
                                                        ,content: "操作成功！开始数据收集。"
                                                    })
                                                });
                                        }
                                    </script>
                                </td>

                            </tr>


                        @endforeach
                       {{-- <tr class="text-c">
                            <td><input type="checkbox" value="" name=""></td>
                            <td>10001</td>
                            <td class="text-l"><u style="cursor:pointer" class="text-primary" onClick="article_edit('查看','article-zhang.html','10001')" title="查看">资讯标题</u></td>
                            <td>行业动态</td>
                            <td>H-ui</td>
                            <td>2014-6-11 11:11:42</td>
                            <td>21212</td>
                            <td class="td-status"><span class="label label-success radius">已发布</span></td>
                            <td class="f-14 td-manage"><a style="text-decoration:none" onClick="article_stop(this,'10001')" href="javascript:;" title="下架"><i class="Hui-iconfont">&#xe6de;</i></a>
                                <a style="text-decoration:none" class="ml-5" onClick="article_edit('资讯编辑','article-add.html','10001')" href="javascript:;" title="编辑"><i class="Hui-iconfont">&#xe6df;</i></a>
                                <a style="text-decoration:none" class="ml-5" onClick="article_del(this,'10001')" href="javascript:;" title="删除"><i class="Hui-iconfont">&#xe6e2;</i></a></td>
                        </tr>
                        <tr class="text-c">
                            <td><input type="checkbox" value="" name=""></td>
                            <td>10002</td>
                            <td class="text-l"><u style="cursor:pointer" class="text-primary" onClick="article_edit('查看','article-zhang.html','10002')" title="查看">资讯标题</u></td>
                            <td>行业动态</td>
                            <td>H-ui</td>
                            <td>2014-6-11 11:11:42</td>
                            <td>21212</td>
                            <td class="td-status"><span class="label label-success radius">草稿</span></td>
                            <td class="f-14 td-manage"><a style="text-decoration:none" onClick="article_shenhe(this,'10001')" href="javascript:;" title="审核">审核</a>
                                <a style="text-decoration:none" class="ml-5" onClick="article_edit('资讯编辑','article-add.html','10001')" href="javascript:;" title="编辑"><i class="Hui-iconfont">&#xe6df;</i></a>
                                <a style="text-decoration:none" class="ml-5" onClick="article_del(this,'10001')" href="javascript:;" title="删除"><i class="Hui-iconfont">&#xe6e2;</i></a></td>
                        </tr>--}}
                        </tbody>
                    </table>
                </div>
            </article>
        </div>
    </section>

<!--请在下方写此页面业务相关的脚本-->
    <script type="text/javascript" src="lib/My97DatePicker/4.8/WdatePicker.js"></script>
    <script type="text/javascript" src="lib/datatables/1.10.0/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="lib/laypage/1.2/laypage.js"></script>
    <script type="text/javascript">
        $('.table-sort').dataTable({
            "aaSorting": [[ 1, "desc" ]],//默认第几个排序
            "bStateSave": true,//状态保存
            "aoColumnDefs": [
                //{"bVisible": false, "aTargets": [ 3 ]} //控制列的隐藏显示
                {"orderable":false,"aTargets":[0,8]}// 不参与排序的列
            ]
        });

        /*资讯-添加*/
        function article_add(title,url,w,h){
            var index = layer.open({
                type: 2,
                title: title,
                content: url
            });
            layer.full(index);
        }
        /*资讯-编辑*/
        function article_edit(title,url,id,w,h){
            var index = layer.open({
                type: 2,
                title: title,
                content: url
            });
            layer.full(index);
        }
        /*资讯-删除*/
        function article_del(obj,id){
            layer.confirm('确认要删除吗？',function(index){
                $.ajax({
                    type: 'POST',
                    url: '',
                    dataType: 'json',
                    success: function(data){
                        $(obj).parents("tr").remove();
                        layer.msg('已删除!',{icon:1,time:1000});
                    },
                    error:function(data) {
                        console.log(data.msg);
                    },
                });
            });
        }

        /*资讯-审核*/
        function article_shenhe(obj,id){
            layer.confirm('审核文章？', {
                    btn: ['通过','不通过','取消'],
                    shade: false,
                    closeBtn: 0
                },
                function(){
                    $(obj).parents("tr").find(".td-manage").prepend('<a class="c-primary" onClick="article_start(this,id)" href="javascript:;" title="申请上线">申请上线</a>');
                    $(obj).parents("tr").find(".td-status").html('<span class="label label-success radius">已发布</span>');
                    $(obj).remove();
                    layer.msg('已发布', {icon:6,time:1000});
                },
                function(){
                    $(obj).parents("tr").find(".td-manage").prepend('<a class="c-primary" onClick="article_shenqing(this,id)" href="javascript:;" title="申请上线">申请上线</a>');
                    $(obj).parents("tr").find(".td-status").html('<span class="label label-danger radius">未通过</span>');
                    $(obj).remove();
                    layer.msg('未通过', {icon:5,time:1000});
                });
        }
        /*资讯-下架*/
        function article_stop(obj,id){
            layer.confirm('确认要下架吗？',function(index){
                $(obj).parents("tr").find(".td-manage").prepend('<a style="text-decoration:none" onClick="article_start(this,id)" href="javascript:;" title="发布"><i class="Hui-iconfont">&#xe603;</i></a>');
                $(obj).parents("tr").find(".td-status").html('<span class="label label-defaunt radius">已下架</span>');
                $(obj).remove();
                layer.msg('已下架!',{icon: 5,time:1000});
            });
        }

        /*资讯-发布*/
        function article_start(obj,id){
            layer.confirm('确认要发布吗？',function(index){
                $(obj).parents("tr").find(".td-manage").prepend('<a style="text-decoration:none" onClick="article_stop(this,id)" href="javascript:;" title="下架"><i class="Hui-iconfont">&#xe6de;</i></a>');
                $(obj).parents("tr").find(".td-status").html('<span class="label label-success radius">已发布</span>');
                $(obj).remove();
                layer.msg('已发布!',{icon: 6,time:1000});
            });
        }
        /*资讯-申请上线*/
        function article_shenqing(obj,id){
            $(obj).parents("tr").find(".td-status").html('<span class="label label-default radius">待审核</span>');
            $(obj).parents("tr").find(".td-manage").html("");
            layer.msg('已提交申请，耐心等待审核!', {icon: 1,time:2000});
        }
    </script>
<!--/请在上方写此页面业务相关的脚本-->


@endsection