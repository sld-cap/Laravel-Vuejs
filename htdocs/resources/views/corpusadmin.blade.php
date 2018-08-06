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
    
  <header>
    <nav class="navbar navbar-dark fixed-top flex-md-nowrap p-0 shadow" style="background-color:#00A1EA;">
      <div>
        <a class="navbar-brand text-center" href="/corpus/view/1" style="padding:10px 20px 10px 10px;">
          <img src="/img/cap-icon.png" alt="cap_logo" width="25px" height="20px">
          CAP コーパス管理画面
        </a>
      </div>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#" style="color:white;font-weight:bold;font-size:1rem;"> - <span id="navCorpusName"></span></a>
        </li>
      </ul>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" onClick="window.close();">閉じる</a>
        </li>
      </ul>
    </nav>
  </header>
  <!-- /.header -->

  <div class="container-fluid">
    <div class="row">
      <nav class="col-md-2 d-none d-md-block bg-light sidebar" style="font-size:1rem;">
        <div class="sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link" href="/corpus/view/1">
                <span data-feather="file-text"></span>
                基本情報
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/corpus/data/view/1">
                <span data-feather="database"></span>
                データ管理
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/corpus/training/1">
                <span data-feather="edit"></span>
                学習管理
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/corpus/deploy/1">
                <span data-feather="refresh-ccw"></span>
                本番切替
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/corpus/stop/1">
                <span data-feather="zap-off"></span>
                停止
              </a>
            </li>

          </ul>
        </div>
      </nav>
      <!-- /nav -->
    </div>
    <!-- /.row -->

    <div id="app" class="row">
      <router-view :me="me"></router-view>
    </div>
    <!-- /#app.row -->

  </div>
  <!-- /.container-fluid -->
</body>

  <script src="/js/corpusadmin-core.js"></script>
  <script src="https://unpkg.com/feather-icons/dist/feather.min.js"></script>
  <script>
      feather.replace();
  </script>
  <script src="{{ mix('js/app.js') }}"></script>
</html>