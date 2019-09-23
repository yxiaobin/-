@extends("layout.ui")
@section('content')
    <section class="Hui-article-box">
        <nav class="breadcrumb"><i class="Hui-iconfont">&#xe67f;</i> 首页
            <span class="c-gray en">&gt;</span>
            信息管理
            <span class="c-gray en">&gt;</span>
            信息修改
            <a class="btn btn-success radius r" style="line-height:1.6em;margin-top:3px" href="javascript:location.replace(location.href);" title="刷新" ><i class="Hui-iconfont">&#xe68f;</i></a>
        </nav>
        <div class="Hui-article">
            <article class="cl pd-20">
                <div class="page-container">
                    <form action="{{url("info")}}" method="post" class="form form-horizontal" id="form-article-add">
                        <input hidden name="id" value="{{$user->id}}">
                        {{csrf_field()}}
                        <div class="row cl">
                            <label class="form-label col-xs-4 col-sm-2"><span class="c-red">*</span>用户名：</label>
                            <div class="formControls col-xs-8 col-sm-9">
                                <input type="text" readonly class="input-text" value="{{$user->name}}" placeholder="" id="" name="name">
                            </div>
                        </div>
                        <div class="row cl">
                            <label class="form-label col-xs-4 col-sm-2">密码</label>
                            <div class="formControls col-xs-8 col-sm-9">
                                <input type="text" class="input-text" value="" placeholder="" id="" name="password">
                            </div>
                        </div>

                        <div class="row cl">
                            <label class="form-label col-xs-4 col-sm-2">再次输入密码：</label>
                            <div class="formControls col-xs-8 col-sm-9">
                                <input type="text" class="input-text" value="" placeholder="" id="" name="password2">
                            </div>
                        </div>

                        <div class="row cl">
                            <label class="form-label col-xs-4 col-sm-2">手机号：</label>
                            <div class="formControls col-xs-8 col-sm-9">
                                <input type="text" class="input-text" value="{{$user->iphone}}" placeholder="" id="" name="iphone">
                            </div>
                        </div>

                        <tr></tr>
                        <div class="row cl">
                            <div class="col-xs-8 col-sm-9 col-xs-offset-4 col-sm-offset-2">
                                <button onClick="article_save_submit();" class="btn btn-primary radius" type="submit"><i class="Hui-iconfont">&#xe632;</i> 提交</button
                                <button onClick="layer_close();" class="btn btn-default radius" type="button">&nbsp;&nbsp;取消&nbsp;&nbsp;</button>
                            </div>
                        </div>
                    </form>

                </div>
            </article>
        </div>
    </section>
    <script type="text/javascript" src="lib/jquery.validation/1.14.0/jquery.validate.js"></script>
    <script type="text/javascript" src="lib/jquery.validation/1.14.0/validate-methods.js"></script>
    <script type="text/javascript" src="lib/jquery.validation/1.14.0/messages_zh.js"></script>
    <script type="text/javascript" src="lib/webuploader/0.1.5/webuploader.min.js"></script>
    <script type="text/javascript" src="lib/ueditor/1.4.3/ueditor.config.js"></script>
    <script type="text/javascript" src="lib/ueditor/1.4.3/ueditor.all.min.js"> </script>
    <script type="text/javascript" src="lib/ueditor/1.4.3/lang/zh-cn/zh-cn.js"></script>
@endsection