<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    function addPost(Request $req) 
    {
        $post = new Post;
        $post->text = $req->input('text');
        $post->photo_path = $req->file('photo')->store('images');
        $post->user_id = $req->input('user_id');
        $post->save();
        return $post;
    }
}
