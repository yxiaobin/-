<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQuestionnaireTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('questionnaire', function (Blueprint $table) {
            $table->increments('id');
            $table->string("userId");//哪一个用户
            $table->string("startTime");//开始时间
            $table->string("endTime");//结束时间
            $table->string("status");//状态（未发布、已完成、进行中、审核中、）
            $table->string("title")->nullable();//问卷的标题
            $table->string("link")->nullable();//问卷的超链接
            $table->string("sum")->default(0);//问卷的回答人数
            $table->string("global")->default(0);//是否发布到问卷广场
            $table->string("modal")->default(0);//是否作为模板
            $table->string("finish")->default(0);//完成后的标语
            $table->string("begin")->default(0);//开始的标语
            $table->string("category")->default(0);//模板的分类
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('questionnaire');
    }
}
