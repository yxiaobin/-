<?php

namespace App\Http\Middleware;

use App\User;
use Closure;

class AdminLogin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(session("id") != ""){
            $user = User::find(session('id'));
            if($user->admin ==0){
                return back();
            }else{
                return $next($request);
            }

        }else{
            return redirect('login');
        }


    }
}
