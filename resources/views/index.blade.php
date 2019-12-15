@extends('layouts.app')

@section('meta')
@php
    $token = auth()->user()->api_token ?? null
@endphp
@if(!is_null($token))
    <meta id='api-token' name='api-token' content={{$token}}>
@endif
@endsection

@section('content')
<main class="mx-auto main-body" id="content"></main>
@endsection

@section('scripts')
@endsection
