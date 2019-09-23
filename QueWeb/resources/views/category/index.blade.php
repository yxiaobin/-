@extends("Layout.manage")

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
                            <a href="#tab1" aria-controls="tab1" role="tab" data-toggle="tab">分类列表</a>
                        </li>
                        <li role="tab2" style="width:160px" class="@if($tab==2){{"active"}}@endif">
                            <a href="#tab2" aria-controls="tab2" role="tab" data-toggle="tab">添加</a>
                        </li>
                    </ul>
                </div>
                <div class="card-body no-padding tab-content">
                    <div role="tabpanel" class="tab-pane @if($tab==1){{"active"}}@endif" id="tab1" style="padding-top: 100px">
                        <table class="datatable table" cellspacing="0" width="100%">
                            <thead>
                            <tr>
                                <th>名称</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                          <tr>
                              @foreach($objs as $obj)
                              <td>{{$obj->content}}</td>
                              <td>
                                  <a href="{{url("edit_category/$obj->id")}}">
                                      <input type="button" class="btn btn-xs btn-info" value="修改">
                                  </a>
                                  <a href="{{url("delete_category/$obj->id")}}">
                                      <input type="button" onclick="return confirm('确定要删除吗？');" class="btn btn-xs btn-warning" value="删除">
                                  </a>

                              </td>
                              @endforeach
                          </tr>
                            </tbody>
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
                                        <form class="form form-horizontal" method="post" action="{{url("category")}}" enctype="multipart/form-data">
                                            {{csrf_field()}}
                                            <div class="section">
                                                <div class="section-title"></div>
                                                <div class="section-body">
                                                    <div class="form-group">
                                                        <label class="col-md-3 control-label">模板类型</label>
                                                        <div class="col-md-9">
                                                            <input type="text" class="form-control" placeholder="分类名称" name="content">
                                                        </div>
                                                    </div>
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