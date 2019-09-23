<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//登录页面
Route::get('login', 'LoginController@index');
Route::post('login', 'LoginController@login');

Route::group(['middleware' => ['login']], function () {

    //用户创建问卷
//问卷建立逻辑页面
    Route::get('question','BuildQesController@index');
//问卷修改逻辑页面
    Route::get('question_update/{p}','BuildQesController@question_update');
//新建问卷
    Route::get('question_new','BuildQesController@question_new');


//问卷列表逻辑页面
    Route::get('questionlist','BuildQesController@list');
//post 建立test表
    Route::post('insert_test','BuildQesController@insert_test');
//post 查询test表
    Route::post('search_test','BuildQesController@search_test');
//post 修改test表
    Route::post('update_test','BuildQesController@update_test');
//删除test表
    Route::post('delete_test','BuildQesController@delete_test');
//修改问卷表标题
    Route::post('update_question_title','BuildQesController@update_question_title');
//post 添加选项表
    Route::post('insert_choice','BuildQesController@insert_choice');
//post 查询选项表
    Route::post('search_choice','BuildQesController@search_choice');
//post 修改选项表
    Route::post('update_choice','BuildQesController@update_choice');
//post 删除test表
    Route::post('delete_choice','BuildQesController@delete_choice');
//存储问卷超链接
    Route::post('jiami_question','BuildQesController@jiami_question');


//管理员后台页面
    Route::get('manage', 'ManageController@index');
//登出页面
    Route::get('logout', 'LoginController@logout');





//信息修改
    Route::get('info/{user}', 'UserController@update_info');
    Route::post('info', 'UserController@store_info');





//答题页面
    Route::get('answer_question/{id}', 'AnswerController@index');
//答题提交页面
    Route::post('answer_question/', 'AnswerController@store');
//答题预览页面
    Route::get('view_question/{id}', 'AnswerController@view_question');

//问卷结果
    Route::get('analysis_question/{id}', 'AnalysisController@index');
//停止收集
    Route::post('stop_question/', 'AnalysisController@stop_question');
    Route::post('continue_question/', 'AnalysisController@continue_question');

//数据导出
    Route::get('excel/{question}', 'ExcelController@index');


//问卷广场模块
//申请发布到广场
    Route::post('request_question', 'QuestionController@request_question');
//取消发布到广场
    Route::get('cancel_request_question/{p}', 'QuestionController@cancel_request_question');
//问卷审核
    Route::get('admin_agree_question/{p}', 'QuestionController@admin_agree_question');
//需要审核的问卷列表
    Route::get('list_request_question', 'QuestionController@list_request_question');
//查看问卷广场的问卷
    Route::get('search_global_question', 'QuestionController@search_global_question');

//模板广场-----user
    Route::get('/modalpublic', 'ModalController@public');
//模板应用
    Route::get('/modalapply/{question}', 'ModalController@apply');

});
Route::group(['middleware' => ['admin']], function () {
//模板管理 ------admin
    Route::get('/modal', 'ModalController@index');
    //设置模板分类
    Route::get('/set_category/{obj}', 'ModalController@set_category');
    Route::post('/set_category', 'ModalController@set_category_store');
//分类管理
        //主页
    Route::get('/category', 'CategoryController@index');
        //添加
    Route::post('/category', 'CategoryController@add');
        //修改
    Route::get('/edit_category/{obj}', 'CategoryController@edit_index');
    Route::post('/edit_category/{obj}', 'CategoryController@edit_store');
        //删除
    Route::get('/delete_category/{obj}', 'CategoryController@delete');

//管理员问卷管理
    //问卷列表
    Route::get('question_list_admin', 'QuestionController@question_list');

    //问卷删除
    Route::get('question_delete/{p}', 'QuestionController@question_delete');
    //问卷禁用
    Route::get('question_disable/{p}', 'QuestionController@question_disable');
    //问卷可用
    Route::get('question_able/{p}', 'QuestionController@question_able');
//用户管理
    //列表页面
    Route::get('usermanager', 'UserController@index');
    //添加用户
    Route::post('insert_user', 'UserController@insert_user');
    //修改用户_管理员
    Route::get('update_user/{id}', 'UserController@update_user');
    Route::post('update_user', 'UserController@update_user_store');
    //删除用户
    Route::get('delete_user/{id}', 'UserController@delete_user');
});


Route::get('/', function () {
    return view('welcome');
});
