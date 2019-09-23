<!DOCTYPE html>
<html>
<head>
    <title>数据分析</title>
    <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script>

        //绘制饼图

        function drawCircle(canvasId, data_arr, color_arr, text_arr)

        {

            var c = document.getElementById(canvasId);

            var ctx = c.getContext("2d");

            c.height=c.height;   //当重设画布的高度或者宽度时，画布内容就会清空
            var radius = c.height / 2 - 20; //半径

            var ox = radius + 20, oy = radius + 20; //圆心

            var width = 10, height = 10; //图例宽和高

            var posX = ox * 2 + 20, posY = 30;   //

            var textX = posX + width + 5, textY = posY + 10;

            var startAngle = 0; //起始弧度

            var endAngle = 0;   //结束弧度

            for (var i = 0; i < data_arr.length; i++)

            {

                //绘制饼图

                endAngle = endAngle + data_arr[i] * Math.PI * 2; //结束弧度
                ctx.fillStyle = color_arr[i];

                ctx.beginPath();

                ctx.moveTo(ox, oy); //移动到到圆心

                ctx.arc(ox, oy, radius, startAngle, endAngle, false);

                ctx.closePath();

                ctx.fill();

                startAngle = endAngle; //设置起始弧度

                //绘制比例图及文字

                ctx.fillStyle = color_arr[i];

                ctx.fillRect(posX, posY + 20 * i, width, height);

                ctx.moveTo(posX, posY + 20 * i);

                ctx.font = 'bold 12px 微软雅黑';    //斜体 30像素 微软雅黑字体
                ctx.fillStyle = color_arr[i]; //"#000000";

                var percent = text_arr[i] + "：" + 100 * data_arr[i] + "%";

                ctx.fillText(percent, textX, textY + 20 * i);

            }

        }

        function init(data_arr,color_arr,text_arr,id) {

            //绘制饼图

            //比例数据和颜色

            // var data_arr = [0.3,0.4, 0.1, 0.1,0.1];
            //
            // var color_arr = ["BLUE",'RED','YELLOW','GREEN','pink'];
            //
            // var text_arr = ["类目1", "类目2","类目3","类目4","类目5"];

            drawCircle(id, data_arr, color_arr, text_arr);

        }

        //页面加载时执行init()函数
        window.onload=function(){
            var color_arr = ["BLUE",'RED','YELLOW','GREEN','pink','#E1E100','#FFBB77','#3D787','#AE57A4','#977C00'];
          @foreach($tests as $test)
             @if($test->type != "tiankong")
                var data_arr0=[];
                var  data = [];//传递每个选项的比例
                var  item = [];//传递每个选项的名字
                var  color =[];//传递每个选项的颜色
                var j = 0;
                    @php
                         $sum = 0;
                         $ans=[];
                         $i = 0;
                         $choices =\App\Choice::where('testId','=',$test->id)->get();
                    @endphp
                 @foreach ($choices as $p)
                    @php
                        $sum = $sum + $p->sum;
                        $ans[$i] = $p->sum;
                    @endphp
                    data_arr0[j] = {{$ans[$i]}}
                    item[j] = "{{$p->content}}"
                        color[j] =  color_arr[j]
                        j=j+1;
                    @php
                    $i=$i+1;
                    @endphp
                @endforeach
                var  sum = {{$sum}}
                // console.log(sum);
                // console.log(data_arr0);
                for (k=0;k<data_arr0.length;k++)
                {
                    data[k] = (data_arr0[k]/sum).toFixed(2);
                }
                //console.log(data);
                init(data,color,item,"canvas_circle{{$test->seq}}")
            @endif
            @endforeach
        }
        //window.onload = init;

    </script>
    <style type="text/css">
        *{
            margin: 0;
            padding: 0;
        }
        html,body{

        }
        .whole{

            margin: 0px auto;
        }
        .title{
            height:60px;
            padding-left: 50px;
            display: inherit;
        }
        .title-left{

            height: 60px;
            line-height: 60px;
            width: 300px;
            float: left;
            font-size: 25px;
            font-style: italic;
            color: 		#808080;
            overflow: hidden;
        }
        .title-center{

            width: 200px;
            float: left;
            font-size: 18px;
            color:#A9A9A9;
            line-height: 55px;
        }
        .title-right{

            margin-top: 10px;
            line-height: 60px;
            float: right;
            margin-right: 50px;


        }
        .output{
            width:100px;
            height: 50px;
            background-color:#00CED1;
            color: white;
            font-size: 15px;


        }
        .stopcollect{
            width:100px;
            height: 50px;
            background-color: #F5FFFA;
            color: #00CED1;
            font-size: 17px;
        }
        .showtime{
            color:#A9A9A9;
            height: 25px;
            background-color: 	#E6E6FA;
            padding-left: 30px;
        }
        .show-data{
            width: 100%;
        }
        .data-border{
            border:1px solid #C0C0C0;
            margin-top: 25px;
            margin-left: 25%;
            margin-right: 25%;
        }
        .data-question{
            line-height: 40px;
            height: 40px;
            color: #808080;
            background-color:#E6E6FA;
            padding-left: 10px;
        }
        .data-graph{
            margin-right: 30%;
            margin-left: 30%;
        }
        .data-form{
            margin-top: 25px;
            padding-left: 10%;
            padding-right: 5%;
            padding-bottom: 20px;
            font-size: 15px;
        }
        .border-setting{
            width: 80%;
            border:1px solid #C0C0C0;

        }
        td,th{
            padding-left: 1em;
            border:1px solid #C0C0C0;

        }
    </style>
    <link href="{{asset("layui/layui/css/layui.css")}}" rel="stylesheet">
    <script type="text/javascript" src="{{asset("/layui/layui/layui.all.js")}}"></script>
    <script type="text/javascript" src="{{asset("/layui/layui/layui.js")}}"></script>
    <script src="{{asset("/static/js/jquery-1.8.3.min.js")}}"></script>
    <script src="{{asset("/static/js/jquery.cookie.js")}}"></script>
</head>

<body>
<div class = "whole">
    <div class = "title">
        <div class = "title-left">{{$question->title}}</div>
        <div class = "title-center">共收集到调查问卷:<span style="font-size: 23px; color: #00CED1;">{{$question->sum}}份<span></div>
        <div class = "title-right">
            <a href="{{url("/excel/$question->id")}}"> <button class = "output" >导出数据</button></a>
            <button id="{{$question->id}}" onclick="stop(this)" class = "stopcollect">停止收集</button>
            <script type="text/javascript">
                function stop(a) {
                    var _this = a;
                    var  uri = "/WorkOnline/QueWeb/public/stop_question";
                    var id = $(_this).attr('id');
                    $.post(uri,
                        {
                            id:id,
                            _token:'{{csrf_token()}}'
                        },
                        function (data) {
                            layer.open({
                                title:'信息提示'
                                ,content:'操作成功！终止数据收集'
                               
                            })
                        });
                }
            </script>
        </div>
    </div>

    <div class = "showtime">
        @if($question->status!=2)
        <div class = "showtime-left">最后更新时间:<span>{{now()}}</span></div>
        @endif
            @if($question->status==2)
                <div class = "showtime-left">此问卷已结束<span></span></div>
            @endif
    </div>

    <div class = "show-data">
        @foreach($tests as $test)
            @if($test->type == "tiankong")
                <div class = "data-border">
                    <div class = "data-question">{{$test->seq}}.{{$test->content}}(简答题)</div>
                    <div class = "data-form">
                        <table class="border-setting">
                            <tr>
                                <td width=70% style="color:#808080; ">答案</td>
                            </tr>
                            @php
                                $objs = \App\Blank::where("testId",'=',$test->id)->get();
                                $sum =  count($objs);
                                if($sum >5) $sum = 5;
                            @endphp
                            @for($i=0;$i<$sum;$i++)
                                <tr>
                                    <td>{{$objs[$i]->content}}</td>
                                </tr>
                            @endfor

                            <tr>
                                <td style="color:#808080;">受访人数：<span style="color:black;">{{$question->sum}}人</span>   &nbsp; &nbsp;  &nbsp;  <button style="width:70px;" data-toggle="modal" data-target="#myModal{{$test->id}}">详情</button>


                                </td>

                            </tr>
                        </table>


                    </div>

                </div>
                @else
                <div class = "data-border">
                    <div class = "data-question">{{$test->seq}}.{{$test->content}}@if($test->type == "danxuan")（单选)@else （多选）@endif</div>
                    <div class = "data-graph"><canvas id="canvas_circle{{$test->seq}}" width="600" height="200">
                        </canvas></div>
                    <div class = "data-form">
                        <table class="border-setting">
                            <tr style="color:#808080; ">
                                <td width=70% >选项</td>
                                <td>回复情况</td>
                            </tr>
                            @php
                                $choices = \App\Choice::where('testId','=',$test->id)->orderby("seq",'asc')->get();
                            @endphp
                            @foreach($choices as $choice)
                                <tr>
                                    <td>{{$choice->content}}</td>
                                    <td>{{$choice->sum}}票</td>
                                </tr>
                            @endforeach

                            <tr >
                                <td style="color:#808080; ">回答人数</td>
                                <td>{{$question->sum}}人</td>
                            </tr>
                        </table>

                    </div>

                </div>
                @endif
            <!--模态框-->
            @foreach($tests as $test)
                @if($test->type =="tiankong")
                    <div class="modal fade" id="myModal{{$test->id}}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                                        &times;
                                    </button>
                                    <h4 class="modal-title" id="myModalLabel">
                                       {{$test->seq}}.{{$test->content}}
                                    </h4>
                                </div>
                                <div class="modal-body" style = "margin-left: 20px; margin-right: 20px;">
                                    <table class="border-setting">
                                        <tr>
                                            <td width=90% style="color:#808080; ">答案</td>
                                        </tr>
                                        @php
                                            $objs = \App\Blank::where("testId",'=',$test->id)->get();
                                            $sum =  count($objs);

                                        @endphp
                                        @for($i=0;$i<$sum;$i++)
                                            <tr>
                                                <td>{{$objs[$i]->content}}</td>
                                            </tr>
                                        @endfor
                                            <td style="color:#808080;">受访人数：<span style="color:black;">{{$question->sum}}人</span>
                                            </td>
                                        </tr>
                                    </table>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭
                                    </button>
                                </div>
                            </div><!-- /.modal-content -->
                        </div><!-- /.modal -->
                    </div>
                @endif
                @endforeach



        @endforeach







    </div>

    <div style="height: 80px"></div>
</div>
</body>
</html>

