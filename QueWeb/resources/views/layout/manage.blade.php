<!DOCTYPE html>
<html>
<head>
    <title>后台管理系统</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">

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
    @yield("css")
</head>
<body>
<div class="app app-default">

    <aside class="app-sidebar" id="sidebar" style="height: auto">
        <div class="sidebar-header">
            <a class="sidebar-brand" href="#"><span class="highlight">后台管理</span></a>
            <button type="button" class="sidebar-toggle">
                <i class="fa fa-times"></i>
            </button>
        </div>
        <div class="sidebar-menu">
            <ul class="sidebar-nav">
                <li >
                    <a href="#">
                        <div class="icon">
                            <i class="fa fa-tasks" aria-hidden="true"></i>
                        </div>
                        <div class="title">控制台首页</div>
                    </a>
                </li>
                {{--问卷管理--}}
                <li class="dropdown">
                    <a href="">
                        <div class="icon">
                            <i class="fa fa-sliders" aria-hidden="true"></i>
                        </div>
                        <div class="title">问卷管理</div>
                    </a>
                    <div class="dropdown-menu">
                        <ul>
                            <li><a href="{{url("question_list_admin")}}">问卷违规管理</a></li>
                            <li><a href="{{url("list_request_question")}}">问卷审核管理</a></li>

                        </ul>
                    </div>
                </li>
                {{--用户管理--}}
                <li class="dropdown">
                    <a href="{{url("/usermanager")}}">
                        <div class="icon">
                            <i class="fa fa-sliders" aria-hidden="true"></i>
                        </div>
                        <div class="title">用户管理</div>
                    </a>

                </li>

                {{--模板管理--}}
                <li class="dropdown">
                    <a href="">
                        <div class="icon">
                            <i class="fa fa-sliders" aria-hidden="true"></i>
                        </div>
                        <div class="title">模板管理</div>
                    </a>
                    <div class="dropdown-menu">
                        <ul>
                            <li><a href="{{url("/modal")}}">模板管理</a></li>
                            <li><a href="{{url("/category")}}">分类管理</a></li>

                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </aside>
    <script type="text/ng-template" id="sidebar-dropdown.tpl.html">
        <div class="dropdown-background">
            <div class="bg"></div>
        </div>
        <div class="dropdown-container">
        </div>
    </script>

    <div class="app-container">

        <nav class="navbar navbar-default" id="navbar">
            <div class="container-fluid">
                <div class="navbar-collapse collapse in">
                    <ul class="nav navbar-nav navbar-mobile">
                        <li>
                            <button type="button" class="sidebar-toggle">
                                <i class="fa fa-bars"></i>
                            </button>
                        </li>
                        <li class="logo">
                            <a class="navbar-brand" href="#"><span class="highlight">Flat v3</span> Admin</a>
                        </li>
                        <li>
                            <button type="button" class="navbar-toggle">
                                <img class="profile-img" src="">
                            </button>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-left">
                        <li class="navbar-brand">
                            <img src="" width="200px">
                        </li>
                        <li class="navbar-title">后台管理系统</li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li class="dropdown profile">
                            <a href="/html/pages/profile.html" class="dropdown-toggle"  data-toggle="dropdown">
                                <p>设置</p>
                                <div class="title">Profile</div>
                            </a>
                            <div class="dropdown-menu">
                                <div class="profile-info">
                                    <h4 class="username">管理员您好</h4>
                                </div>
                                <ul class="action">

                                    <li>
                                        <a href="{{url("/logout")}}">
                                            退出
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        @yield("content")
    </div>
</div>
<script type="text/javascript" src="{{asset("/assets/js/vendor.js")}}"></script>
<script type="text/javascript" src="{{asset("/assets/js/app.js")}}"></script>
@yield('js')
</body>
</html>