<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    //转入登录页面
    public  function index(){
        return view("login.login");
    }
    //    验证登录逻辑
    public function  login(Request $request){
//        规则验证
        $this->validate($request,[
            'name'=>'required|min:4|max:15',
            'password'=>'required|min:4|max:15'
        ]);
//        获取输入的名字和密码
        $name = $request->input('name');
        $password = $request->input('password');

            $member=User::where('name','=',$name)->get();
            if(count($member)<=0){
                //用户名不存在
                echo "<script>alert('用户名不存在！')</script>";
                session(['id'=>'']);
                echo "<script> window.location.href=\" ".url("login")." \"; </script> ";
            }else {
                $member = $member->first();
                if($password == decrypt($member->password)){
                    //登记session
                    session(['id'=>$member->id]);
                    if($member->admin ==1)
                    return redirect('manage');
                    else
                        return redirect('questionlist');
                }else{
                    //密码错误
                    echo "<script>alert('密码错误！')</script>";
                    session(['id'=>'']);
                    echo "<script> window.location.href=\" ".url("login")." \"; </script> ";
                }
            }

    }

    public function  logout(){
        Session()->flush();
        return  redirect("login");
    }
}
