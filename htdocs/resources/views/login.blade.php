<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <!-- <meta name="csrf-token" content="{{ csrf_token() }}"> -->
    <script>
      window.Laravel = {csrfToken: "{{ csrf_token() }}"};
    </script>

    <title>ログイン</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
  </head>
  <body>
    <div id="app">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </body>
  <script src="{{ mix('js/app.js') }}"></script>
</html>