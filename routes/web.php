<?php

use Illuminate\Support\Facades\Route;

//Route::get('/', function () {
//    return view('home');
//});
//Route::get('/admin', function () {
//    return view('layouts.master');
//});

//Route::get('/ShowProduct',function (){
//    return \App\Models\Product::all();
//});

Route::view('/', 'home');
Route::view('/admin', 'layouts.master');
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/show/{id}',[\App\Http\Controllers\ProductController::class,'show']);
