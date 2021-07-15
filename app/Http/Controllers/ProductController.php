<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return Product::all();

    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description'=>'required',
            'category' => 'required',
            'price' => 'required',
        ]);


        $image = ['image' => base64_encode(file_get_contents($request->file('image')))];
        $product=new Product;
        $product->name = $request['name'];
        $product->description = $request['description'];
        $product->category = $request['category'];
        $product->image = $image['image'];
        $product->price = $request['price'];
        $product->save();
        return response('success',200);

    }


    public function show($id)
    {
//        return $product;
        $product = Product::where ('id',$id)->get();
        return $product;
    }

    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name' => 'required',
            'description'=> 'required',
            'category' => 'required',
            'price' => 'required',
        ]);

        $product->update($request->all());

        return response('',200);

    }

    public function destroy(Product $product)
    {
        $product->delete();
        return response('', 204);
    }
}
