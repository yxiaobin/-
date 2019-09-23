@extends("Layout.manage")

@section("css")

@endsection

@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="card card-tab">
                <div class="card-header">
                    <ul class="nav nav-tabs">
                        <li role="tab1" class="active">
                            <a href="#tab1" aria-controls="tab1" role="tab" data-toggle="tab">模板列表</a>
                        </li>

                    </ul>
                </div>
                <div class="card-body no-padding tab-content">
                    <div role="tabpanel" class="tab-pane active" id="tab1" style="padding-top: 100px">
                        <table class="datatable table" cellspacing="0" width="100%">
                            <thead>
                            <tr>
                                <th>问卷名称</th>
                                <th>模板分类</th>
                                <th>状态</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($objs as $obj)
                            <tr>

                               <td>{{$obj->title}}</td>

                                    @php
                                        if($obj->category >0){
                                            $category = \App\Category::find($obj->category);
                                        }else{
                                            $category = new \App\Category();
                                            $category->content = "还未分类";
                                        }
                                    @endphp
                                <td>{{$category->content}}</td>

                            <td>
                            @if($obj->status == 1)
                                <strong style="color: #4cae4c">已完成</strong>
                            @endif
                            @if($obj->status == -1)
                                <p style="color: greenyellow"><strong>未发布</strong></p>
                                @endif
                                </td>

                                <td>
                                    <a href="{{url("/view_question/$obj->link")}}" @if($obj->link == "")  disabled onclick="return false" @endif   target="view_window" class="btn btn-success btn-xs" role="button">
                                        预览
                                    </a>
                                    <a href="{{url("/question_update/$obj->id")}}"target="view_window" class="btn btn-primary btn-xs" role="button">
                                        修改
                                    </a>
                                    <a href="{{url("set_category/$obj->id")}}"  class="btn btn-warning btn-xs" role="button">
                                        分类
                                    </a>
                                     <a href="{{url("/question_delete/$obj->id")}}"  onclick="return confirm('确定要删除？')" target="view_window" class="btn btn-danger btn-xs" role="button">
                                        删除
                                    </a>
                                </td>
                            </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                    <div class="card-header">
                        <a href="{{url("question_new")}}">
                            <input type="button" class="btn btn-primary" value="新建模板">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection