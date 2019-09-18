<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChoiceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('choice', function (Blueprint $table) {
            $table->increments('id');
            $table->string("testId");//属于哪一个测试题的选项
            $table->string("content");//选项的内容
            $table->string("seq");//选项的序号ABCD
            $table->integer("sum")->default(0);//每有一个人选择 数字加1


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('choice');
    }
}
