<?php

namespace App\Http\Controllers;

use App\Blank;
use App\Choice;
use App\Questionnaire;
use App\Result;
use App\Test;
use App\User;
use Illuminate\Http\Request;

class BuildQesController extends Controller
{
    //建立问卷页面
    public function index()
    {
        if(session('questionnaireId')== "")
        {
            return  back();
        }else{
            return view ("Qus.index");
        }

    }
    //新建问卷页面
    public function question_new(){
        $question = new Questionnaire();
        $question->userId = session("id");
        $question->startTime = now();
        $question->endTime = 999999999;
        $question->status = -1;
        $question->title = "问卷名称";
        $user = User::find(session('id'));
        $question->modal = $user->admin;
        if($question->modal == "1")
        {
            $question->category = -1;//未分类
        }
        $question->save();
        session(['questionnaireId'=>$question->id,"title"=>$question->title]);
        return view ("Qus.index");
    }
//    问卷列表页面
    public  function  list()
    {
        $id  = session("id");
        $objs = Questionnaire::where("userId",'=',$id)->get();
        return view("ui.index",compact("objs"));
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
        if($test1->type == "danxuan" ||$test1->type == "duoxuan" )
        {
            for($i=0;$i<2;$i++)
            {
                $choice = new Choice();
                $choice->testId = $test1->id;
                $choice->content = "请输入内容";
                $choice->seq = $i+1;
                $choice->sum = 0;
                $choice->save();
            }
        }
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
        $test->content = $request->input('content');
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
    //修改选项表
    public  function  update_choice(Request $request)
    {
        $test = Choice::find($request->id);
        $test->content = $request->input('content');
        $test->save();
        return $test;
    }
    //修改问卷表标题
    public function update_question_title(Request $request)
    {
        $obj = Questionnaire::find(session("questionnaireId"));
        $obj->title = $request->input("content");
        $obj->save();
        return $obj->title;
    }

    //删除test表
    public function delete_test(Request $request)
    {
        //删除这一道题
        $test = Test::find($request->id);
        if($request->type =="shanchutiankong" )
        {
            $blanks = Blank::where("testId",'=',$test->id)->get();
            foreach ($blanks as $blank)
            {
                $blank->delete();
            }
        }else{
            //删除这一道题下的所有选项
            $choices = Choice::where("testId",'=',$test->id)->get();
            foreach ($choices as $p)
            {
                $p->delete();
            }
        }
        $test->delete();
        //重新给这套卷子的其他题目排序
        $qes = Test::where("questionnaireId",'=',$test->questionnaireId)->get();
        $i = 1;
        foreach ($qes as  $p)
        {
            $p->seq = $i;
            $i = $i+1;
            $p->save();
        }
        return "ok";
    }
    //删除choice表
    public function delete_choice(Request $request)
    {
        $p = Choice::find($request->id);
        $p->delete();
        //给其他选项重新排序
        $choices = Choice::where("testId",'=',$p->testId)->get();
        $i = 1;
        foreach ($choices as  $p)
        {
            $p->seq = $i;
            $i = $i+1;
            $p->save();
        }
        return "ok";
    }

    //问卷修改页面
    public function question_update(Questionnaire $p)
    {
        //dd($p);
        if($p->status == 1)
        {
            $p->sum = 0;//清空更新数据
            $p->status = -1;
            $p->save();
            $tests = Test::where("questionnaireId",'=',$p->id)->get();
            foreach ($tests as $test)
            {
                if($test->type !="tiankong")
                {
                    $choices = Choice::where("testId","=",$test->id)->get();
                    foreach ($choices as $choice)
                    {
                        $choice->sum = 0;
                        $choice->save();
                    }
                }
                else{
                    $blanks = Blank::where("testId",'=',$test->id)->get();
                    foreach ($blanks as $blank)
                    {
                        $blank->delete();
                    }
                }

            }
            //删除用户答题记录
            $results = Result::where("questionId",'=',$p->id)->get();
            foreach ($results as $result)
            {
                $result->delete();
            }

        }
        session(['questionnaireId'=>$p->id,"title"=>$p->title]);
        return view ("Qus.index");
    }

    //加密问卷
    public  function jiami_question(Request $request)
    {
        $p = Questionnaire::find($request->id);
        $p->status = 1;
        $p->link = base64_encode($request->id);
        $p->save();
        return $p->link;
    }
}
