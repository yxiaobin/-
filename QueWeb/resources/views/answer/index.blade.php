<!DOCTYPE html>
<html>
<head>
    <title>问卷调查</title>
</head>

    <link href="{{asset("css/option.css")}}" rel="stylesheet">
    <!--@import url();-->
<body style="background-color:	#87CEEB">
<div class = "wholl">
    <div class = "front">
        <h1 style="margin: center"><font face="楷体" > {{$question->title}}</h1></font></h1>
        <div class = "from">hahahaha</div>
    </div>
    <br>
    <div class = "xuhao"><div class  = "xuhao-left">&nbsp;</div>&nbsp;&nbsp;<div class = "xuhao-right">&nbsp;</div></div>
    <hr>

    <form action="{{url("answer_question")}}" method="post">
        <input type="hidden" name="questionnaireId", value="{{$question->id}}">
        <input type="hidden" name="all", value="{{count($tests)}}">
        <div class = "center">
            @if (count($errors) > 0)
                <div class="alert alert-danger">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li style="color: red">{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

        {{csrf_field()}}
        @foreach($tests as $test)
                <input type="hidden" name="test-{{$test->seq}}", value="{{$test->id}}">
                <input type="hidden" name="test-type-{{$test->seq}}", value="{{$test->type}}">
            @if($test->type == "tiankong")
                <div>
                    <div class = "title">
                        <div>
                            <div class = "content-left">
                                <p>{{$test->seq}}.{{$test->content}}</p>
                            </div>
                            <div class = "content-right">
                                <p>(填空)</p>
                            </div>
                        </div>
                        <div class = "option">
                            <div class="form-group div_bottom">
                                <input  name="answer-{{$test->seq}}" v-model="body" placeholder="请输入内容" class="textarea-inherit" rows="1" style="font-size: 20px;padding-left: 1em;padding-right: 1em;
	            padding-bottom: 1em;">
                            </div>
                        </div>
                    </div>
                </div>
                @else <div>
                        <div class = "title">
                            <div class = "content-left">
                                <p>{{$test->seq}}.{{$test->content}}</p>
                            </div>
                            <div class = "content-right">
                                <p>(单选)</p>
                            </div>
                        </div>
                        <div class = "option">
                            @php
                                $objs = \App\Choice::where("testId",$test->id)->orderby('seq','asc')->get();
                            @endphp
                            @foreach($objs as $obj)
                            <p>
                                <label>
                                    <input  @if($test->type=="danxuan") name="answer-{{$test->seq}}[]" type="radio" @else name="answer-{{$test->seq}}[]" type="checkbox" @endif value="{{$obj->id}}" />{{$obj->content}}
                                </label>
                                <br>
                            </p>
                            @endforeach
                        </div>
                    </div>
                @endif

        @endforeach


        <div class = "next">
           <button type="submit" style="width: 80px;height: 50px;background-color: #00BFFF;border-radius: 12px;color: white;font-size: 17px;">提交</button></a>
        </div>
    </div>
    </form>

</div>
</div>
</body>
</html>