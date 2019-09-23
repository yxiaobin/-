@extends("layout.manage")

@section("css")

@endsection

@section('content')

    <div class="row">
        <div class="col-md-12 col-sm-12">
            <div class="card">
                <div class="card-header">页面列表</div>
                <div class="card-body">
                    <table class=" table">
                        <thead>
                        <th>问卷名称</th>
                        <th>发起者</th>

                        <th>超链接</th>
                        <th>状态</th>
                        <th>问卷广场</th>
                        <th>操作</th>
                        </thead>
                        <tbody>
                            @foreach($objs as $obj)
                            <tr>

                                <td>{{$obj->title}}</td>
                                <td>
                                    @php
                                     $usr = \App\User::find($obj->userId);
                                    @endphp
                                    {{$usr->name}}</td>
                                <td>
                                    @if($obj->status ==-1) <p style="color: red"> 未生成</p> @endif  </td>
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
                                            <strong style="color: darkgreen"> 未发布 </strong>
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
                                <td>

                                    <a href="{{url("/view_question/$obj->link")}}" @if($obj->status==0 || $obj->status==-1)  disabled onclick="return false" @endif target="view_window" class="btn btn-primary btn-xs" role="button">
                                        预览
                                    </a>
                                    <a href="{{url("question_able/$obj->id")}}" class="btn btn-success btn-xs" role="button">
                                        解除违规
                                    </a>
                                    <a href="{{url("question_disable/$obj->id")}}" class="btn btn-danger btn-xs" role="button" onclick="return confirm('确认要禁用吗？')">
                                        违规
                                    </a>
                                    <a href="{{url("admin_agree_question/$obj->id")}}" class="btn btn-success btn-xs" role="button">
                                        同意
                                    </a>
                                    <a href="{{url("cancel_request_question/$obj->id")}}" class="btn btn-warning btn-xs" role="button">
                                        拒绝
                                    </a>

                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>
@endsection
