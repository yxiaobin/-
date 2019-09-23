<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    //
    public function  index()
    {
        session(["tab"=>1]);
        $users = User::all();
        return view("user.list",compact("users"));
    }
    public function insert_user(Request $request)
    {
        $this->validate($request,[
            'name'=>'required|min:4|max:15',
            'password'=>'required|min:4|max:15',
            "iphone"=>'required'
        ]);
        $usr = new User();
        $usr->name = $request->input("name");
        $usr->iphone = $request->input("iphone");
        $usr->password =encrypt($request->input("password")) ;
        $usr->admin = $request->input("admin");
        $usr->created_at = now();
        $usr->save();
        return redirect("usermanager");
    }

    public  function update_user(User $id)
    {
        $user = $id;
        //dd($user);
        return view("user.edit",compact("user"));
    }
    public function update_user_store(Request $request)
    {
        $p = User::find($request->input('id'));
        $p->name = $request->input('name');
        $p->iphone = $request->input('iphone');
        if($request->input('password') != null){
            $p->password = encrypt($request->input('password')) ;
        }
        $p->admin = $request->input('admin');
        $p->save();
        return redirect("usermanager");
    }
    public function delete_user( User $id)
    {
        $id->delete();
        return redirect("usermanager");
    }
     public function update_info(User $user){
        return  view("ui.info",compact("user"));
     }
    public function store_info(Request $request){

        $p = User::find($request->input('id'));
        $p->name = $request->input('name');
        $p->iphone = $request->input('iphone');
        $p->admin = 0;
        if($request->input('password') != ""    ){
            if($request->input('password') ==$request->input('password2')){
                $p->password = encrypt($request->input('password')) ;
                $p->save();
                echo "<script>alert('密码修改成功！')</script>";
            }else{
                echo "<script>alert('两次密码输入不一致！')</script>";
            }
        }else{
            $p->save();
            echo "<script>alert('密码修改成功！')</script>";
        }


        // return  view("ui.info",compact("user"));
        echo "<script> window.location.href=\" ".url("info/".$p->id)." \"; </script> ";
    }
}
