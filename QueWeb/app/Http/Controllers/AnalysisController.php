<?php

namespace App\Http\Controllers;

use App\Questionnaire;
use App\Test;
use Illuminate\Http\Request;

class AnalysisController extends Controller
{
    //问卷分析
    public function index($id)
    {
        $pid = base64_decode($id);
        $question = Questionnaire::find($pid);
        //dd($question);
        $tests = Test::where("questionnaireId","=",$question->id)->orderby("seq",'asc')->get();
        //dd($tests);
        return view("answer.analysis",compact("question",'tests'));
    }
    //停止收集数据
    public function stop_question(Request $request)
    {
        $p = Questionnaire::find($request->id);
        $p->status = 2;
        $p->save();
        return "ok";
    }

    public function continue_question(Request $request)
    {
        $p = Questionnaire::find($request->id);
        $p->status = 1;
        $p->save();
        return "ok";
    }
}
