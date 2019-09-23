<?php

namespace App\Http\Controllers;

use App\Category;
use App\Choice;
use App\Questionnaire;
use App\Test;
use Illuminate\Http\Request;

class ModalController extends Controller
{
    //管理员列表页
    public function index()
    {
        $objs = Questionnaire::where("modal",'=','1')->orderby('id','dsc')->get();
        return view("modal.index",compact('objs'));
    }
    //g管理员创建模板
    public function  set_category(Questionnaire $obj)
    {

        $categorys = Category::all();

        return view("modal.setcategory",compact("obj",'categorys'));
    }
    //管理员设置模板分类
    public function set_category_store(Request $request)
    {
        //dd($request);
        $question = Questionnaire::find($request->id);
        $question->category = $request->input("category");
        $question->save();
        return redirect("modal");
    }
    //用户访问模板列表
    public function public(){
        $objs = Questionnaire::where("modal",'=','1')->where("status",'>=','1')->orderby('id','dsc')->get();
        return view("ui.modal",compact('objs'));
    }
    //应用末班
    public function apply(Questionnaire $question){
        $obj = new Questionnaire();
        //复制问卷的信息
        $obj->userId = session('id');
        $obj->startTime = $question->startTime;
        $obj->endTime = $question->endTime;
        $obj->status = -1;
        $obj->title = $question->title;
        $obj->sum = 0;
        $obj->global=0;
        $obj->modal =0;
        $obj->finish =0;
        $obj->begin=0;
        $obj->category =0;
        $obj->save();

        $tests = Test::where("questionnaireId",'=',$question->id)->get();
        foreach ($tests as $test)
        {
            $obj1 = new Test();
            $obj1->questionnaireId = $obj->id;
            $obj1->seq = $test->seq;
            $obj1->type = $test->type;
            $obj1->content = $test->content;
            $obj1->save();
            if($obj1->type != "tiankong")
            {
                $choices = Choice::where("testId",'=',$test->id)->get();
                    foreach($choices as $choice)
                    {
                        $p = new Choice();
                        $p->testId = $obj1->id;
                        $p->content = $choice->content;
                        $p->seq = $choice->seq;
                        $p->sum = 0;
                        $p->save();
                    }
            }
        }
        return redirect("/question_update/$obj->id");
    }
}
