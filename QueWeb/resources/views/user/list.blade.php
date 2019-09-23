@extends("layout.manage")

@section("css")

@endsection

@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="card card-tab">
                <div class="card-header">
                    <ul class="nav nav-tabs">
                        @php if(session('tab')){
                            $tab = session('tab');
                        }
                        @endphp
                        <li role="tab1" class="@if($tab==1){{"active"}}@endif">
                            <a href="#tab1" aria-controls="tab1" role="tab" data-toggle="tab">查看用户</a>
                        </li>
                        <li role="tab2" style="width:160px" class="@if($tab==2){{"active"}}@endif">
                            <a href="#tab2" aria-controls="tab2" role="tab" data-toggle="tab">添加用户</a>
                        </li>
                    </ul>
                </div>
                <div class="card-body no-padding tab-content">
                    <div role="tabpanel" class="tab-pane @if($tab==1){{"active"}}@endif" id="tab1" style="padding-top: 100px">
                        <table class="datatable table" cellspacing="0" width="100%">
                            <thead>
                            <tr>
                                <th>用户名</th>
                                <th>手机号</th>
                                <th>状态</th>
                                <th>注册时间</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                                @foreach($users as  $p)
                                <tr>
                                    <td>{{$p->name}}</td>
                                    <td>{{$p->iphone}}</td>
                                    <td>
                                        @if($p->admin==1)
                                            管理员
                                            @else
                                            普通用户
                                        @endif
                                    </td>
                                    <td>
                                        {{$p->created_at}}
                                    </td>
                                    <td>
                                        <a href="{{url("/update_user/$p->id")}}">
                                            <input type="button" class="btn btn-xs btn-info" value="修改">
                                        </a>
                                        <a href="{{url("/delete_user/$p->id")}}">
                                            <input type="button" class="btn btn-xs btn-danger" onclick="return confirm('确定要删除？')" value="删除">
                                        </a>
                                    </td>
                                </tr>

                            </tbody>
                            @endforeach
                        </table>
                    </div>
                    <div role="tabpanel" class="tab-pane @if($tab==2){{"active"}}@endif" id="tab2">
                        <div class="row">
                            @if (count($errors) > 0)
                                <div class="alert alert-danger">
                                    <ul>
                                        @foreach ($errors->all() as $error)
                                            <li>{{ $error }}</li>
                                        @endforeach
                                    </ul>
                                </div>
                            @endif
                            <div class="col-md-8 col-sm-12">
                                <div class="section">
                                    <div class="section-title"><i class="icon fa fa-user" aria-hidden="true"></i>请填写信息</div>
                                    <div class="section-body __indent">
                                        <form class="form form-horizontal" method="post" action="{{url("/insert_user")}}">
                                          {{csrf_field()}}
                                            <div class="section">
                                                <div class="section-title"></div>
                                                <div class="section-body">

                                                    <div class="form-group">
                                                        <label class="col-md-3 control-label">用户名</label>
                                                        <div class="col-md-9">
                                                            <input type="text" class="form-control" placeholder="用户名" name="name">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-md-3 control-label">手机</label>
                                                        <div class="col-md-9">
                                                            <input type="text" class="form-control" placeholder="手机" name="iphone">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-md-3 control-label">密码</label>
                                                        <div class="col-md-9">
                                                            <input type="text" class="form-control" placeholder="密码" name="password">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-md-3 control-label">是否是管理员</label>
                                                        <div class="col-md-9">

                                                                <select class="form-control"  name="admin" >
                                                                    <option value="0" > 普通用户</option>
                                                                    <option value="1" > 管理员</option>
                                                                </select>
                                                        </div>
                                                    </div>
                                                    <br><br><br>
                                                    <div class="form-footer">
                                                        <div class="form-group">
                                                            <div class="col-md-9 col-md-offset-3">
                                                                <input type="submit" class="btn btn-primary" value="添加">
                                                                <input type="button" class="btn btn-default" value="取消">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
@endsection