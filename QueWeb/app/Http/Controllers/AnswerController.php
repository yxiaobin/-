<?php

namespace App\Http\Controllers;

use App\Blank;
use App\Choice;
use App\Questionnaire;
use App\Result;
use App\Test;
use Illuminate\Http\Request;
use function PHPSTORM_META\elementType;

class AnswerController extends Controller
{
    //转到答题页面
    public function index($id)
    {
        $pid = base64_decode($id);
        $question = Questionnaire::find($pid);
        //dd($question);
        $tests = Test::where("questionnaireId","=",$question->id)->orderby("seq",'asc')->get();
        //dd($tests);
        return view("answer.index",compact("question",'tests'));
    }
    //存储答题信息
    public function store(Request $request)
    {
        $str = [];
        for($i=1;$i<=$request->all;$i++)
        {
            $key = "answer-".$i;
            $str[$key]='required';
        }
        $this->validate($request,$str);

        //建立一个用户回答详情表
        $result = new Result();
        $result->questionId = $request->questionnaireId;
        $result->content ="答案";
        //1.该问卷的回答人数加1
        $question = Questionnaire::find($request->questionnaireId);
        //dd($request);
        $question->sum = $question->sum +1;
        $question->save();
        //所有试题答题情况
        for($i=1;$i<=$request->all;$i++)
        {
            $result->content = $result->content."-";
            $key = "answer-".$i;
            //获取每一个题目的testid
            $p =  $request->input($key);
            if(is_array($p))
            {
               //此题是选择题
                foreach($p as $obj)
                {
                    $choice = Choice::find($obj);
                    $choice->sum = $choice->sum+1;
                    $choice->save();
                    $result->content = $result->content.$choice->content.";";
                }
            }
            else{
             //tiankongti
                $obj = new Blank();
                $key = "test-".$i;
                $obj->testId =$request->input($key);
                $obj->content = $p;
                $obj->save();
                $result->content = $result->content.$obj->content;
            }
        }
        $result->save();
        return "ok";
    }
    public function view_question($id)
    {
        $pid = base64_decode($id);
        $question = Questionnaire::find($pid);
        //dd($question);
        $tests = Test::where("questionnaireId","=",$question->id)->orderby("seq",'asc')->get();
        //dd($tests);
        return view("answer.previwe",compact("question",'tests'));
    }
}
