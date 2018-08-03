<template>
  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4 mt-2">

    <div class="row mt-3" v-if="corpusInfo.is_production === 1">
      <div class="col-12">
        <div class="alert alert-info" role="alert">
          このコーパスは本番稼働中です
        </div>
      </div>
    </div>
    <!-- /.row -->

    <div class="row mt-3" v-if="corpusInfo.status === 3">
      <div class="col-12">
        <div class="alert alert-warning" role="alert">
          このコーパスは学習中です。学習データの登録、編集、削除の操作はできません。
        </div>
      </div>
    </div>
    <!-- /.row -->

    <div class="row mt-3">
      <div class="col-12">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item">
            <a class="btn btn-outline-brand nav-link active mr-1" id="training-tab" data-toggle="tab" href="#training" role="tab" aria-controls="training" aria-selected="true">学習データ</a>
          </li>
          <li class="nav-item">
            <a class="btn btn-outline-info nav-link" id="test-tab" data-toggle="tab" href="#test" role="tab" aria-controls="test" aria-selected="false">テストデータ</a>
          </li>
          <li class="nav-item w-50 ">
            <input class="form-control form-control-dark border-bottom ml-5" type="text" placeholder="キーワード検索" aria-label="キーワード検索">
          </li>
        </ul>
        <!-- /.nav -->
      </div>
    </div>
    <!-- /.row -->

    <div class="alert alert-success" role="alert"  v-if="successMsg !== ''">
      <a href="/corpus/training/1">学習管理ページ</a>で学習を実行しましょう。
      <a href="/corpus/training/1">学習管理ページ</a>でテストを実行しましょう。
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <!-- /.alert -->

    <div class="alert alert-danger" role="alert" v-if="errorList.length > 0">
      <span v-for="error in errorList" :key="error.message">{{ error.message }}</span>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <!-- /.alert -->

    <section class="viewCreativeContents mt-3" style="width:100%;">
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="training" role="tabpanel" aria-labelledby="training-tab" style="width:100%;"> 

          <div class="row">
            <div class="col-auto mr-auto">
            <button type="button" class="btn btn-outline-brand" data-toggle="modal" data-target="#addClassTextModal" data-datatype="1" data-mtitle="クラス/テキスト追加">
              <span data-feather="plus" style="width:20px;height:20px;"></span>
              <span>クラス/テキスト追加</span>
            </button>
            </div>
            <div class="col-auto">
              <button type="button" class="btn btn-light" data-toggle="modal" data-target="#SelectTrainingCsvModal">
                <span class="text-muted" data-feather="upload" style="width:20px;height:20px;"></span>
                <span>CSVアップロード</span>
              </button>
              <a href="/corpus/csv/download/1" class="btn btn-light" role="button" aria-pressed="true">
                <span class="text-muted" data-feather="download" style="width:20px;height:20px;"></span>
                <span>CSVダウンロード</span>
              </a>
              <button type="button" class="btn btn-link">
                <span><a href="/files/corpus-admin/training_data_sample.csv">サンプル</a></span>
              </button>
            </div>
          </div>
          <!-- /.row -->
          <div class="row mt-2" style="width:100%;height:30px;margin:0;">
            <div class="h6 col-3 border" style="margin-bottom:0;padding:5px;background-color:#E9ECEF;">クラス</div>
            <div class="h6 col-9 border" style="margin-bottom:0;padding:5px;background-color:#E9ECEF;">関連テキスト</div>
          </div>
          <!-- /.row -->

          <div class="row" style="width:100%;height:450px;margin:0;">
            <div class="col-3 border" style="height:470px;padding:5px;overflow-y:scroll;background-color:#F8F9FA;">
              <div class="nav flex-column nav-pills-brand" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link h6 active" id="v-pills-tab_1" data-toggle="pill" href="#v-pills_1" role="tab" aria-controls="v-pills_1" aria-selected="true">
                  <span>クラス名</span>
                  <span class="badge badge-pill badge-light ml-1">1</span>
                </a>
              </div>
              <!-- /.nav -->
            </div>
            <!-- /.col-3 -->
            <div class="col-9 border" style="padding:5px;height:470px;overflow-y:scroll;background-color:#F8F9FA;">
              <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show list-group active" id="v-pills_1" role="tabpanel" aria-labelledby="v-pills-tab_1" style="">
                  <ul class="corpusTextList">
                    <li><a href="javascript:void(0);" class="list-group-item list-group-item-action">関連テキスト</a></li>
                  </ul>
                </div>
              </div>
              <!-- /.tab-content -->
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->
          @endif
        </div>
        <!-- /.tab-pane  -->

        <div class="tab-pane fade" id="test" role="tabpanel" aria-labelledby="test-tab">
          <div class="row">
            <div class="col-auto mr-auto">
              <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#addClassTextModal" data-datatype="0" data-mtitle="新しいクラス/テキストの登録">
                <span data-feather="plus" style="width:20px;height:20px;"></span>
                <span>クラス/テキスト追加</span>
              </button>
            </div>
            <div class="col-auto">
              <button type="button" class="btn btn-light" data-toggle="modal" data-target="#SelectTextCsvModal">
                <span class="text-muted" data-feather="upload" style="width:20px;height:20px;"></span>
                <span>CSVアップロード</span>
              </button>
            </div>
          </div>
          <!-- /.row -->

          <div class="row mt-2" style="width:100%;height:30px;margin:0;">
            <div class="h6 col-3 border" style="margin-bottom:0;padding:5px;background-color:#E9ECEF;">クラス</div>
            <div class="h6 col-9 border" style="margin-bottom:0;padding:5px;background-color:#E9ECEF;">関連テキスト</div>
          </div>
          <div class="row" style="width:100%;height:450px;margin:0;">
            <div class="col-3 border" style="height:470px;padding:5px;overflow-y:scroll;background-color:#F8F9FA;">
              <div class="nav flex-column nav-pills-brand" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link test h6 active" id="v-pills-tab_1_2" data-toggle="pill" href="#v-pills_1_2" role="tab" aria-controls="v-pills_1_2" aria-selected="true">
                  <span>クラス名</span>
                  <span class="badge badge-pill badge-light ml-1">1</span>
                </a>
              </div>
            </div>
            <!-- /.col -->
            <div class="col-9 border" style="padding:5px;height:470px;overflow-y:scroll;background-color:#F8F9FA;">
              <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show list-group active" id="v-pills_1_2" role="tabpanel" aria-labelledby="v-pills-tab_1_2" style="">
                  <ul class="corpusTextList">
                    <li><a href="#" class="list-group-item list-group-item-action" data-toggle="modal" data-target="#editClassTextModal">関連テキスト</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.tab-pane  -->
      </div>
      <!-- /.tab-content -->
    </section>
    <!-- /#viewCreativeContents -->

  </main>
</template>


<script>
import * as Core from '../common/core/app';
import * as Api from '../common/core/apiConfig';
import * as Lib from '../common/ext/functions';

export default {
  props: ['me'],
  data() {
    return {
      myInfo: this.me,
      corpusId: this.$route.params.corpusId,
      corpusInfo: {
        id: 1,
        name: 'コーパス名',
        description: 'コーパスの説明文',
        status: 1,
        type: 0,
        is_production: 0,
        company_id: 1,
        language: 0,
        tmp_nlc_id: 'djpw3m23r2p',
        create_user_id: 1,
        update_user_id: 2
      },
      trainingData: [],
      testData: [],
      successMsg: "",
      errorList: [],
    };
  },
  mounted: function() {
    Core.log('[mounted]');
    Core.log(this.corpusInfo);

  },
  methods: {
    logout: function() {
			Core.log('[method] logout');
	
    }
  }
};
</script>