@extends("layout.manage")

@section("css")

@endsection

@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="card card-tab">
                <div class="card-header">
                    <ul class="nav nav-tabs">
                        <li role="tab1" class = "active">
                            <a href="#tab1" aria-controls="tab1" role="tab" data-toggle="tab">修改幻灯片</a>
                        </li>
                    </ul>
                </div>
                <div class="card-body no-padding tab-content">
                    <div role="tabpanel" class="tab-pane active" id="tab2">
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
                                        <form class="form form-horizontal" method="post" action="{{url("/update_user")}}">
                                            {{csrf_field()}}
                                            <input type="hidden" name="id" value="{{$user->id}}">
                                            <div class="section">
                                                <div class="section-title"></div>
                                                <div class="section-body">

                                                    <div class="form-group">
                                                        <label class="col-md-3 control-label">用户名</label>
                                                        <div class="col-md-9">
                                                            <input type="text" class="form-control" placeholder="用户名" name="name" value="{{$user->name}}">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-md-3 control-label">手机</label>
                                                        <div class="col-md-9">
                                                            <input type="text" class="form-control" placeholder="手机" name="iphone" value="{{$user->iphone}}">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-md-3 control-label">密码</label>
                                                        <div class="col-md-9">
                                                            <input type="password" class="form-control" placeholder="密码" name="password" value="{{$user->password}}">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-md-3 control-label">是否是管理员</label>
                                                        <div class="col-md-9">

                                                            <select class="form-control"  name="admin" >

                                                                <option value="0"@if($user->admin==0) selected @endif > 普通用户</option>
                                                                <option value="1"@if($user->admin==1) selected @endif > 管理员</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <br><br><br>
                                                    <div class="form-footer">
                                                        <div class="form-group">
                                                            <div class="col-md-9 col-md-offset-3">
                                                                <input type="submit" class="btn btn-primary" value="修改">

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