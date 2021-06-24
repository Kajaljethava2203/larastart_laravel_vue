@extends('layouts.app')

@section('content')
<div class="container">
    <div class="content">
        <div class="container-fluid">
            <router-view></router-view>
        </div>
    </div>
</div>
@endsection
<script>
    export default {
        components: {
       }
    }
</script>
