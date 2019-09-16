<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMemberTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('member', function (Blueprint $table) {
            $table->increments('id');//数据记录编号
            $table->string('stuid'); //学生学号
            $table->string('name')->nullable(); //学生姓名
            $table->string('sex')->nullable(); //学生性别
            $table->string('school_id')->nullable(); //学生所在学院
            $table->string('grade')->nullable(); //学生年级
            $table->string('phone')->nullable(); //学生手机号
            $table->string('finish')->default(0); //学生完成状态
            $table->string('message_num')->default(0) ; //短信发送次数
            $table->string('term_id'); //对应的学期
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('member');
    }
}
