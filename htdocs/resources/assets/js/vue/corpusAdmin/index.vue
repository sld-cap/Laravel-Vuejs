<template>
  <div id="app-container">
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
            <a class="nav-link" href="#" style="color:white;font-weight:bold;font-size:1rem;"> - {{ corpusInfo.name }}</a>
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
                <router-link :to="{ name: 'base-info' }" class="nav-link">
                  <span data-feather="file-text"></span>
                  基本情報
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'data-view' }" class="nav-link">
                  <span data-feather="database"></span>
                  データ管理
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'training' }" class="nav-link">
                  <span data-feather="edit"></span>
                  学習管理
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
        <!-- /nav -->
      </div>
      <!-- /.row -->

      <div class="row">
        <router-view :me="me" :corpusId="corpusId"></router-view>
        <!-- /main -->
      </div>
      <!-- /.row -->
      
    </div>
    <!-- /.container-fluid -->
    <MultiModal></MultiModal>
    <Loading v-show="loading"></Loading>
  </div>
</template>

<script>
import * as Core from '../../common/core/app';
import { mapActions, mapGetters } from 'vuex';
// 共通モーダル
import MultiModal from './common/modal/MultiModal';
import Loading from '../common/components/Loading';

export default {
  components: {
    MultiModal, Loading,
  },
  props: ['me', 'corpusId'],
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      corpusInfo: 'corpusData/corpusInfo',
      loading: 'commonData/loading',
    }),
  },
  watch: {
    'corpusInfo': {
      handler: function (val, oldVal) {
        Core.log('[watch] corpusAdmin/index.vue');
        Core.log(oldVal);
        Core.log(val);
        
        // 初回のコーパスデータ取得時に、学習完了を確認するタイマー処理を実行する
        const oldValLength = Object.keys(oldVal).length;
        if ( (oldValLength === 0 || oldVal.status === '2') && val.status === '3' ) {
          this.$store.commit('corpusData/execCheckCorpusTrainingTimer')
        }
      },
      deep: true
    }
  },
  created() {
    Core.log('[created]');
    Core.log('me/corpusId');
    Core.log(this.me);
    Core.log(this.corpusId);

    this.$store.commit('commonData/setCorpusId', { corpusId: this.corpusId });
    // 各種情報取得
    this.getCorpusInfo();
    this.getTrainingData();
    this.getApiList();
  },
  updated: function() {
    Core.log('[updated]');
  },
  mounted: function() {
    Core.log('[mounted]');
    feather.replace();
  },
  methods: {
    ...mapActions({
      getCorpusInfo: 'corpusData/getCorpusInfo',
      getTrainingData: 'corpusTrainingData/getTrainingData',
      getApiList: 'apiData/getApiList',
    }),
  },
};
</script>

<style>
.sidebar .nav-link.router-link-exact-active {
  color: #007bff;
}
</style>