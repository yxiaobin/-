@extends("layout.manage")
@section("css")
    <style type="text/css">
        li label{
            text-align: right;
            width :15%;
            margin-right: 10%;
        }
        li span{
            text-align: right;
            width:30%;
        }
    </style>
@endsection

@section('content')
    <div class="row" style="margin: 10px -15px 30px -15px">
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <a class="card card-banner card-blue-light" href="http://wn.budgroup.cn">
                <div class="card-body">
                    <i class="icon fa fa-group fa-4x"></i>
                    <div class="content">
                        <div class="title"> 查看网站</div>
                        <div class="value"><span class="sign"></span></div>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <a class="card card-banner card-blue-light" href="#">
                <div class="card-body">
                    <i class="icon fa fa-newspaper-o fa-4x"></i>
                    <div class="content">
                        <div class="title"> 页面添加</div>
                        <div class="value"><span class="sign"></span></div>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-lg-4 col-md-8col-sm-6 col-xs-12">
            <a class="card card-banner card-blue-light" href="#">
                <div class="card-body">
                    <i class="icon fa fa-star fa-4x"></i>
                    <div class="content">
                        <div class="title">热门推荐</div>
                        <div class="value"><span class="sign"></span></div>
                    </div>
                </div>
            </a>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    系统基本信息
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <label>操作系统</label><span>{{PHP_OS}}</span>
                        </li>
                        <li class="list-group-item">
                            <label>北京时间</label><span><?php echo date('Y年m月d日 H时i分s秒')?></span>
                        </li>
                        <li class="list-group-item">
                            <label>运行环境</label><span>{{$_SERVER['SERVER_SOFTWARE']}}</span>
                        </li>
                        <li class="list-group-item">
                            <label>域名/IP</label><span>{{$_SERVER['SERVER_NAME']}} [ {{$_SERVER['SERVER_ADDR']}} ]</span>
                        </li>
                        <li class="list-group-item">
                            <label>Host</label><span>{{$_SERVER['SERVER_ADDR']}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    软件信息
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <label>软件开发</label><span>山东萌芽网络科技有限公司</span>
                        </li>
                        <li class="list-group-item">
                            <label>网址</label>www.mengyakeji.com<span></span>
                        </li>
                        <li class="list-group-item">
                            <label>本站</label><span>巍诺网站后台管理系统</span>
                        </li>
                        <li class="list-group-item">
                            <label>网址</label><span>wn.budgroup.cn</span>
                        </li>
                        <li class="list-group-item">
                            <label>版本</label><span>2.0.1</span>
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    </div>


@endsection
