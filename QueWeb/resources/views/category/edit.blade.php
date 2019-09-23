@extends("Layout.manage")

@section("css")

@endsection

@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="card card-tab">
                <div class="card-header">
                    <ul class="nav nav-tabs">
                        <li role="tab1" class = "active">
                            <a href="#tab1" aria-controls="tab1" role="tab" data-toggle="tab">修改分类</a>
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
                                        <form class="form form-horizontal" method="post" action="" enctype="multipart/form-data">
                                            {{csrf_field()}}
                                            <div class="section">

                                                <div class="section-body __indent">
                                                    <form class="form form-horizontal" method="post" action="{{url("category")}}" enctype="multipart/form-data">
                                                        {{csrf_field()}}
                                                        <div class="section">
                                                            <div class="section-title"></div>
                                                            <div class="section-body">
                                                                <div class="form-group">
                                                                    <label class="col-md-3 control-label">模板类型</label>
                                                                    <div class="col-md-9">
                                                                        <input type="text" class="form-control" placeholder="分类名称" name="content" value="{{$obj->content}}">
                                                                    </div>
                                                                </div>
                                                                <input hidden name="id" value="{{$obj->id}}">
                                                                <div class="form-footer">
                                                                    <div class="form-group">
                                                                        <div class="col-md-9 col-md-offset-3">
                                                                            <input type="submit" class="btn btn-primary" value="修改">
                                                                            <input type="button" class="btn btn-default" value="取消">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
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