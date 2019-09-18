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


//问卷建立逻辑页面
Route::get('question','BuildQesController@index');
//问卷列表逻辑页面
Route::get('questionlist','BuildQesController@list');


//post 建立test表
Route::post('insert_test','BuildQesController@insert_test');
//post 查询test表
Route::post('search_test','BuildQesController@search_test');
//post 修改test表
Route::post('update_test','BuildQesController@update_test');
//post 添加选项表
Route::post('insert_choice','BuildQesController@insert_choice');
//post 查询选项表
Route::post('search_choice','BuildQesController@search_choice');
//post 修改选项表
Route::post('update_choice','BuildQesController@update_choice');


//管理员后台页面
Route::get('manage', 'ManageController@index');



















Route::get('/', function () {
    return view('welcome');
});
