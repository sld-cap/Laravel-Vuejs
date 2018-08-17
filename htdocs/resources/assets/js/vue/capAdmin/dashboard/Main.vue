<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <!--  AIコーパス総数  -->
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-icon">
              <div class="card-icon">
                <i class="material-icons">content_copy</i>
              </div>
              <p class="card-category">AIコーパス数</p>
              <h3 class="card-title">3/5
              </h3>
            </div>
            <div class="card-footer">
              <div class="stats">
                <i class="material-icons">settings</i>
                <a href="#">新規登録・編集・削除</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-icon">
              <div class="card-icon">
                <i class="material-icons">school</i>
              </div>
              <p class="card-category">当月AI学習数</p>
              <h3 class="card-title">100 <small>回</small></h3>
            </div>
            <div class="card-footer">
              <div class="stats">
                <i class="material-icons">update</i> 更新
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-icon">
              <div class="card-icon">
                <i class="material-icons">play_circle_outline</i>
              </div>
              <p class="card-category">APIコール数</p>
              <h3 class="card-title">75 <small>回</small></h3>
            </div>
            <div class="card-footer">
              <div class="stats">
                <i class="material-icons">update</i> 更新
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-icon">
              <div class="card-icon">
                <i class="material-icons">group</i>
              </div>
              <p class="card-category">管理ユーザー数</p>
              <h3 class="card-title">3 <small>人</small></h3>
            </div>
            <div class="card-footer">
              <div class="stats">
                <i class="material-icons">settings</i>
                <a href="/acount">新規登録・削除</a>
              </div>
            </div>
          </div>
        </div>            
      </div>

      <div class="row">
        <div class="col-md-12 col-lg-6">
          <div class="card" style="margin-top: 25px;">
            <div class="card-header card-header-tabs card-header-default">
              <div class="nav-tabs-navigation">
                <div class="nav-tabs-wrapper">
                  <span class="nav-tabs-title">API応答確信度推移:</span>
                  <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      60日
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">3日</a>
                      <a class="dropdown-item" href="#">10日</a>
                      <a class="dropdown-item" href="#">30日</a>
                      <a class="dropdown-item" href="#">60日</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body" style="padding:0;">
              <div class="container" style="width:100%;height:100%;">
                <canvas id="classifyChart" style="width:100%;height:300px;"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-6">
          <div class="card" style="margin-top: 25px;">
            <div class="card-header card-header-tabs card-header-default">
              <div class="nav-tabs-navigation">
                <div class="nav-tabs-wrapper">
                  <span class="nav-tabs-title">APIコール数推移:</span>
                  <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      60日
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">3日</a>
                      <a class="dropdown-item" href="#">10日</a>
                      <a class="dropdown-item" href="#">30日</a>
                      <a class="dropdown-item" href="#">60日</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body" style="padding:0;">
              <div class="container" style="width:100%;height:100%;">
                <canvas id="apiCallChart" style="width:100%;height:300px;"></canvas>
              </div>
            </div>
          </div>
        </div>            
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style></style>
