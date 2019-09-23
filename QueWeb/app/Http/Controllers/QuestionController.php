<?php

namespace App\Http\Controllers;

use App\Blank;
use App\Choice;
use App\Questionnaire;
use App\Result;
use App\Test;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    //问卷列表
    public function question_list()
    {
        $objs = Questionnaire::all();
        return view("question.list",compact("objs"));
    }
    //问卷删除
    public function question_delete(Questionnaire $p)
    {
        //删除所有的题目
        $tests = Test::where('questionnaireId','=',$p->id)->get();
        foreach ($tests as $test)
        {
            if($test->type == "tiankong")
            {
                $blanks = Blank::where("testId",'=',$test->id)->get();
                foreach ($blanks as $blank)
                {
                    $blank->delete();
                }
                $test->delete();
            }
            else
            {
                $choices = Choice::where('testId','=',$test->id)->get();
                foreach ($choices as $obj)
                {
                    $obj->delete();
                }
                $test->delete();
            }
        }
        //删除所有的回答
        $results = Result::where("questionId",'=',$p->id)->get();
        foreach ($results as $result)
        {
            $result->delete();
        }

        $p->delete();
        //dd($p);
        session(['questionnaireId'=>"","title"=>""]);
        return redirect("/questionlist");
    }
    //帖子违规
    public function question_disable(Questionnaire $p)
    {
        $p->status = 0;
        $p->save();
        return back();
    }
    //取消帖子违规
    public function  question_able(Questionnaire $p)
    {
        $p->status = -1;
        $p->save();
        return back();
    }

    //请求审核发布到问卷广成
    public function request_question(Request $request)
    {
        $p = Questionnaire::find($request->id);
        $p->global = 1; //将状态改为请求审核中
        $p->save();
        return "ok";
    }
    //取消发布到围观广场
    public function cancel_request_question(Questionnaire $p)
    {
        $p->global = 0; //将状态改为未发布
        $p->save();
        return  back();
    }
    //管理员同意
    public function admin_agree_question(Questionnaire $p){
        $p->global = 2; //将状态改为发布
        $p->save();
        return  back();
    }
    //需要审核的问卷列表
    public function list_request_question(){
        $objs = Questionnaire::where("global",'=','1')->get();
        return view("question.list",compact("objs"));
    }
    //问卷广场的问卷
    public function search_global_question(){
        $objs = Questionnaire::where("global",'=','2')->where("status",'=',"1")->orderby('id','desc')->get();
        return view("ui.guangchang",compact("objs"));
    }
}
