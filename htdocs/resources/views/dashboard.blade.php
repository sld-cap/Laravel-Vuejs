<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
  <head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <!-- Favicons -->
    <link rel="icon" href="/img/cap-icon.png">
    <title>
      CAP Dashboard
    </title>
    <!-- Styles -->
    <link rel="stylesheet" type="text/css" href="{{ mix('/css/common.css') }}" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />
    <link rel="stylesheet" type="text/css" href="{{ mix('/css/capadmin.css') }}" />
    <!-- scripts -->
    <script>
      window.Laravel = {csrfToken: "{{ csrf_token() }}"};
    </script>
  </head>
  <body>
    <div id="app">
      <router-view :me="me"></router-view>
    </div>
  </body>

  <script src="{{ mix('js/app.js') }}"></script>
  <script src="{{ mix('/js/dashboard-common.js') }}"></script>
</html>