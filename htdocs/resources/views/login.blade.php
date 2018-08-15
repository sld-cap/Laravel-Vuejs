<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  	<title>CAP ログイン</title>
    <link rel="icon" href="/img/cap-icon.png">
    <link href="/css/login.css" rel="stylesheet">
    <!-- Styles -->
    <script>
      window.Laravel = {csrfToken: "{{ csrf_token() }}"};
    </script>
    <!-- CSRF Token -->
  </head>
  <body class="container-fluid">
    <div id="app">
      <router-view></router-view>
    </div>
  </body>

  <script src="{{ mix('js/app.js') }}"></script>
</html>