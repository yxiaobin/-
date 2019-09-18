<?php

namespace App\Http\Controllers;

use App\Choice;
use App\Questionnaire;
use App\Test;
use Illuminate\Http\Request;

class BuildQesController extends Controller
{
    //建立问卷页面
    public function index()
    {
        if(session('questionnaireId')== null)
        {
            $question = new Questionnaire();
            $question->userId = session("id");
            $question->startTime = now();
            $question->endTime = 999999999;
            $question->status = 0;
            $question->save();
            session(['questionnaireId'=>$question->id]);
        }
        return view ("Qus.index");
    }
//    问卷列表页面
    public  function  list()
    {
        $id  = session("id");
        $objs = Questionnaire::find($id)->get();
        return view("Qus.list",compact("objs"));
    }
//    给问卷建立题目
    public function insert_test(Request $request)
    {
        $test1 = new Test();
        $test1->questionnaireId = session("questionnaireId");
        $tests = Test::where("questionnaireId","=",session("questionnaireId"))->get();
        $test1->seq= count($tests)+1;
        $test1->type = $request->tag;
        $test1->content="请输入内容";
        $test1->save();
        return  $test1;
    }
//  查询问卷的所有题目
    public  function  search_test()
    {
        if(session('questionnaireId') != null)
        {
            $objs =Test::where("questionnaireId","=",session("questionnaireId"))->get();
        }else{
            $objs =new Test();
        }
        return $objs;
    }
    //更新test表
    public function update_test(Request $request)
    {
        $test = Test::find($request->id);
        $test->content = $request->content;
        $test->save();
        return $test;
    }
    //添加选项表
    public function insert_choice(Request $request)
    {
        $id = $request->id;
        $choice = new Choice();
        $choice->testId = $id;
        $choices = Choice::where('testId','=',$id)->get();
        $choice->seq = count($choices)+1;
        $choice->content= "请输入选项内容";
        $choice->sum = 0;
        $choice->save();
        return "ok";
    }
    //查询选项表
    public function search_choice(Request $request)
    {
        $id = $request->id;
        $choices = Choice::where('testId','=',$id)->get();
        if(count($choices)==0)
        {
            $choices = new Choice();
        }
        return $choices;
    }

}
