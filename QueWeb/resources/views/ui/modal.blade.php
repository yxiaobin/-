@extends("layout.ui")
@section('content')
    <section class="Hui-article-box">
        <nav class="breadcrumb"><i class="Hui-iconfont">&#xe67f;</i> 首页
            <span class="c-gray en">&gt;</span>
            模板广场
            <span class="c-gray en">&gt;</span>
            模板列表
            <a class="btn btn-success radius r" style="line-height:1.6em;margin-top:3px" href="javascript:location.replace(location.href);" title="刷新" ><i class="Hui-iconfont">&#xe68f;</i></a>
        </nav>
        <div class="Hui-article">
            <article class="cl pd-20">
                <div class="text-c">
                    {{--   <span class="select-box inline">
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

                    <span class="r">共有数据：<strong>{{count($objs)}}</strong> 条</span>
                </div>
                <div class="mt-20">
                    <table class="table table-border table-bordered table-bg table-hover table-sort">
                        <thead>
                        <tr class="text-c">
                            <th width="25">模板ID</th>
                            <th width="80">模板名称</th>
                            <th width="80">相关操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($objs as $obj)
                            <tr  class="text-c">
                                <td>10001{{$obj->id}}</td>
                                <td>
                                    {{$obj->title}}
                                </td>
                                <td class="f-14 td-manage">
                                    <a style="text-decoration:none"  href="{{url("view_question/$obj->link")}}"  title="预览"><i class=" icon-eye-open"></i></a>
                                    <a style="text-decoration:none"  href="{{url("modalapply/$obj->id")}}"  title="应用"><i class=" icon-ok"></i></a>
                                </td>

                            </tr>
                        @endforeach

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