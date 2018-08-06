<template>
  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4 mt-2">

    <div class="row mt-3">
      <div class="col-12">
        <ProductionStatus v-if="corpusInfo.is_production === 1" v-bind:alert-type="alertInfo">
          <div slot="message">このコーパスは本番稼働中です</div>
        </ProductionStatus>
        <!-- /.alert -->
        <CorpusStatus v-if="corpusInfo.status === 3" v-bind:alert-type="alertWarning">
          <div slot="message">このコーパスは学習中です。学習データの登録、編集、削除の操作はできません。</div>
        </CorpusStatus>
        <!-- /.alert -->
      </div>
    </div>
    <!-- /.row alert-area-->

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

    <SuccessMsg v-if="successMsg !== ''" v-bind:alert-type="alertInfo">
      <div slot="message">{{ successMsg }}</div>
    </SuccessMsg>
    <!-- /.alert -->

    <ErrorMsg v-if="errorList.length > 0" v-bind:alert-type="alertDanger">
      <div slot="message">
        <ul>
          <li v-for="(error, i) in errorList" :key="i">
            {{ error.message }}
          </li>
        </ul>
      </div>
    </ErrorMsg>
    <!-- /.alert -->

    <section class="viewCreativeContents mt-3" style="width:100%;">
      <div class="tab-content" id="pills-tabContent">

        <!-- // 学習データタブ // -->
        <div class="tab-pane fade show active" id="training" role="tabpanel" aria-labelledby="training-tab" style="width:100%;"> 
          <div class="row">
            <div class="col-auto mr-auto">
            <button type="button" class="btn btn-outline-brand" data-toggle="modal" data-target="#AddCreativeModal">
              <span data-feather="plus" style="width:20px;height:20px;"></span>
              <span>クラス/テキスト追加</span>
            </button>
            </div>
            <div class="col-auto">
              <button type="button" class="btn btn-light" data-toggle="modal" data-target="#UploadCsvModal">
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

          <div class="row mt-2" v-if="corpusInfo.status === 1" >
            <div class="col-12">
              <NoTrainingData v-bind:alert-type="alertSecondary">
                <div slot="message">学習データが登録されていません。まずは登録を行いましょう。</div>
              </NoTrainingData>
            </div>
            <!-- /.col-12 -->
          </div>
          <!-- /.row -->

          <div v-else id="trainingDataList">
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
            </div>
            <!-- /.row -->
          </div>
          <!-- /#trainingDataList -->
        </div>
        <!-- /.tab-pane  -->
        <!-- // 学習データタブ // -->

        <!-- // テストデータタブ // -->
        <div class="tab-pane fade" id="test" role="tabpanel" aria-labelledby="test-tab">
          <div v-if="corpusInfo.status !== 1" class="row">
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

          <div class="row mt-2" v-if="corpusInfo.status === 1">
            <div class="col-12">
              <NoTrainingData v-bind:alert-type="alertSecondary">
                <div slot="message">学習データが登録されていません。まずは登録を行いましょう。</div>
              </NoTrainingData>
            </div>
            <!-- /.col-12 -->
          </div>
          <!-- /.row -->
          <div v-else id="testDataList">
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
          <!-- /#testDataList -->
        </div>
        <!-- /.tab-pane  -->
        <!-- // テストデータタブ // -->

      </div>
      <!-- /.tab-content -->
    </section>
    <!-- /#viewCreativeContents -->


    <AddCreativeModal></AddCreativeModal>
    <!-- /.クラステキスト追加モーダル -->
    <UploadCsvModal></UploadCsvModal>
    <!-- /.CSVアップロードモーダル -->

  </main>
</template>


<script>
import * as Core from '../../../common/core/app';
import * as Api from '../../../common/core/apiConfig';
import * as Ajax from '../../../common/core/ajax';
import * as Lib from '../../../common/ext/functions';

// モーダル
import AddCreativeModal from './modal/AddCreativeModal.vue';
import UploadCsvModal from './modal/UploadCsvModal.vue';

// アラート
import ProductionStatus from '../common/Alert.vue';
import CorpusStatus from '../common/Alert.vue';
import NoTrainingData from '../common/Alert.vue';
import SuccessMsg from '../common/Alert.vue';
import ErrorMsg from '../common/Alert.vue';

export default {
  components: {
    AddCreativeModal, 
    UploadCsvModal,
    ProductionStatus,
    CorpusStatus,
    NoTrainingData,
    SuccessMsg,
    ErrorMsg
  },
  props: ['me'],
  data() {
    return {
      myInfo: this.me,
      corpusId: this.$route.params.corpusId,
      corpusInfo: {},
      trainingData: [],
      testData: [],
      successMsg: "",
      errorList: [],
      // alert
      alertInfo: 'alert-info',
      alertDanger: 'alert-danger',
      alertWarning: 'alert-warning',
      alertSecondary: 'alert-secondary',
    };
  },
  async created() {
    Core.log('[created]');
    Core.log(this.corpusId);

    let apiOption = Api.API_ENDPOINT_LIST['getCorpus'];
    apiOption.url = apiOption.url.replace(/{corpus}/g, this.corpusId);

    const res = await Ajax.execAjax(apiOption);
    if('status' in res && res.status === 200) {
      // 通信成功
      const data = res.data;
      if(data.code === 200 || data.code === 202) {
        Core.log('成功');
        this.corpusInfo = data.data;
        Lib.setCorpusAdminTitle(this.corpusInfo.name);
      } else {
        this.errorList = [data.message];
      }
      
    } else {
      this.errorList = [res];
    }
    
  },
  updated: function() {
    Core.log('[updated]');
    Core.log(this.corpusInfo);
  },
  mounted: function() {
    Core.log('[mounted]');
    feather.replace();
  },
  methods: {
  }
};
</script>

