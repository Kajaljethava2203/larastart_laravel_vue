<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function index()
    {
        return User::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required',
            'email'=>'require',
            'password'=>'require'

        ]);
     User::create($request->all());
     return response('',200);
    }

    public function show(User $user)
    {
        return $user;
    }

    public function update(Request $request, User $user)
    {
        $request->validate([
            'name'=>'required',
            'email'=>'require',
            'password'=>'require'

        ]);
        $user->update($request->all());
        return response('',200);
    }


    public function destroy(User $user)
    {
        $user->delete();
        return response('', 204);
    }
}
