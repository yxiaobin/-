<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    //转到分类主页
    public function index(){
        session(['tab'=>'1']);
        $objs = Category::all();
        return view("category.index",compact('objs'));
    }
    //类型添加
    public  function  add(Request $request)
    {
        $this->validate($request,[
            'content'=>'required|max:15',
        ]);
        $obj = new Category();
        $obj->content =$request->input("content");
        $obj->save();
        return back();
    }
    public function edit_index(Category $obj){
        return view("category.edit",compact("obj"));
    }
    public function edit_store(Request $request){
        $obj = Category::find($request->id);
        $obj->content = $request->input("content");
        $obj->save();
        return redirect("category");
    }
    public function delete(Category $obj){
        $obj->delete();
        return back();
    }
}
