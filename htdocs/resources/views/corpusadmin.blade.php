<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="icon" href="/img/cap-icon.png">
    <title>CAP</title>
    <!-- Styles -->
    <link href="/css/bootstrap.css" rel="stylesheet">
    <link href="/css/corpusadmin.css" rel="stylesheet">
    <!-- scripts -->
    <script>
      window.Laravel = {csrfToken: "{{ csrf_token() }}"};
    </script>
  </head>
  <body>
    <div id="app">
      <router-view :me="me"></router-view>
    </div>
    <!-- /#app.row -->
  </body>

  <script src="/js/corpusadmin-core.js"></script>
  <script src="https://unpkg.com/feather-icons/dist/feather.min.js"></script>
  <script>
      feather.replace();
  </script>
  <script src="{{ mix('js/app.js') }}"></script>
</html>