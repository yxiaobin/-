<?php

namespace App\Http\Controllers;

use App\Blank;
use App\Choice;
use App\Questionnaire;
use App\Result;
use App\Test;
use Illuminate\Http\Request;
use Excel;
class ExcelController extends Controller
{
    //
    public function index(Questionnaire $question)
    {
        $tests = Test::where("questionnaireId",'=',$question->id)->orderby("seq",'asc')->get();
        $cellData =[];//总体表
        $cellData1 =[];//填空详情表
        $cellData2 =[];//具体投票表
        $i = 0;
        $k = 0;
        foreach ($tests as $test)
        {
            $j = 0;
            $cellData[$i][$j++] = $test->seq;//序号
            $cellData[$i][$j++] = $test->content;//题目

            if($test->type=="tiankong"){
                $cellData[$i][$j++] = "详情见表二";//题目
                $blanks = Blank::where("testId",'=',$test->id)->get();
                foreach ($blanks as $blank)
                {
                    $x = 0;
                    $cellData1[$k][$x++] = $test->seq; //题号
                    $cellData1[$k][$x++] = $test->content; //题目
                    $cellData1[$k++][$x++] = $blank->content; //内容
                }
            }else{
                $choices = Choice::where("testId",'=',$test->id)->orderby("seq",'asc')->get();
                foreach ($choices as $choice)
                {
                    $cellData[$i][$j++] = $choice->content;//选项内容
                    $cellData[$i][$j++] = $choice->sum."人";//选项人数
                }
            }
            $i++;
        }
        //dd($cellData1);
        $results = Result::where("questionId",'=',$question->id)->get();
        $i = 0;
        foreach ($results as $obj)
        {
            $j=0;
            $cellData2[$i][$j++]="第".($i+1)."份投票";
            $cellData2[$i++][$j++]=$obj->content;

        }

        Array_unshift($cellData,['题号','题目','选项1','人数','选项2','人数','选项3','人数','选项4','人数','选项5','人数','选项6','人数','选项7','人数','选项8','人数','选项9','人数','选项10','人数']);
        Array_unshift($cellData1,['题号','题目','答案']);
        Array_unshift($cellData2,['投票人','答案']);
        $width = array('A'=>5,'B'=>30,'C'=>20,'D'=>5,'E'=>20,'F'=>5,'G'=>20,'H'=>5,'I'=>20,'J'=>5,'K'=>20,'L'=>5,'M'=>20,'N'=>5,'O'=>20,'P'=>5,'Q'=>20,'R'=>5,'S'=>20,'T'=>5,'U'=>20,'X'=>5);
        $width1 = array('A'=>5,'B'=>50,'C'=>100);
        $width2 = array('A'=>10,'B'=>150,);

        Excel::create('统计数据_'.now(),function($excel) use ($cellData ,$cellData1,$cellData2,$width,$width1,$width2  ){
            $excel->sheet('统计数据', function($sheet) use ($cellData,$width){
                $sheet->rows($cellData);
                $sheet->setWidth($width);
                $sheet->row(1, function($row){
                    $row->setBackground('#33AECC');     // 设置单元格北京
                    $row->setFontColor('#c73333');
                });
            });
            $excel->sheet('填空详情', function($sheet) use ($cellData1,$width1){
                $sheet->rows($cellData1);
                $sheet->setWidth($width1);
                $sheet->row(1, function($row){
                    $row->setBackground('#33AECC');     // 设置单元格北京
                    $row->setFontColor('#c73333');
                });
            });
            $excel->sheet('具体投票', function($sheet) use ($cellData2,$width2){
                $sheet->rows($cellData2);
                $sheet->setWidth($width2);
                $sheet->row(1, function($row){
                    $row->setBackground('#33AECC');     // 设置单元格北京
                    $row->setFontColor('#c73333');
                });
            });
        })->export('xls');
    }
}
