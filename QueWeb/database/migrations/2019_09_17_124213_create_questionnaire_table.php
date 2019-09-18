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
