@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="jumbotron">
                <h1 class="display-4 text-center">Daftar Buku Programmer!</h1>
                <p class="text-center mb-5">Daftar Buku web programming</p>   
                {{-- <p>daftar buku web programming</p> --}}
                <router-view></router-view>
            </div>
        </div>
    </div>
</div>
@endsection
