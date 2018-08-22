<template>
  <div class="wrapper">
    <div class="sidebar" data-color="azure" data-background-color="white">
      <div class="logo">
        <a href="#" class="simple-text logo-normal">
          <img src="img/cap-icon.png" alt="cap_logo" width="50px" height="45px">
          <img src="img/cap-char-logo.png" alt="cap_char" width="70px" height="45px">
        </a>
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <router-link :to="{ name: 'dashboard' }" tag="li" class="nav-item">
            <a class="nav-link">
              <i class="material-icons">dashboard</i>
              <p>ダッシュボード</p>
            </a>
          </router-link>
          <!-- /.nav-item -->
          <router-link :to="{ name: 'corpusManage' }" tag="li" class="nav-item">
            <a class="nav-link">
              <i class="material-icons">school</i>
              <p>コーパス管理</p>
            </a>
          </router-link>
          <!-- /.nav-item -->
          <router-link :to="{ name: 'apiManage' }" tag="li" class="nav-item">
            <a class="nav-link">
              <i class="material-icons">play_for_work</i>
              <p>API管理</p>
            </a>
          </router-link>
          <!-- /.nav-item -->
          <router-link :to="{ name: 'serviveManage' }" tag="li" class="nav-item">
            <a class="nav-link">
              <i class="material-icons">settings</i>
              <p>サービス管理</p>
            </a>
          </router-link>
          <!-- /.nav-item -->
          <router-link :to="{ name: 'help' }" tag="li" class="nav-item">
            <a class="nav-link">
              <i class="material-icons">help_outline</i>
              <p>ヘルプ</p>
            </a>
          </router-link>
          <!-- /.nav-item -->
        </ul>
      </div>
    </div>
    <!-- /.sidebar -->
    <div class="main-panel">
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            パンくずナビ
          </div>
          <div class="collapse navbar-collapse justify-content-end" id="navigation">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link" href="" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="material-icons">person</i>
                  <p>
                    <span class="d-lg-none d-md-block">Some Actions</span>
                  </p>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink2">
                  <a class="dropdown-item" href="#">アカウント情報の確認</a>
                  <a @click="logout" class="dropdown-item" href="javascript:void(0);">ログアウト</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- End Navbar -->

      <router-view :me="me"></router-view>

    </div>
    <!-- /.main-panel -->

    <MultiModal></MultiModal>
    <Loading v-show="loading"></Loading>
  </div>
  <!-- /.wrapper -->
</template>


<script>
import * as Core from '../../common/core/app';
import * as Api from '../../common/core/apiConfig';
import * as Lib from '../../common/ext/functions';

import MultiModal from './common/modal/MultiModal';
import Loading from '../common/components/Loading';
import { mapGetters } from 'vuex';

export default {
  props: ['me'],
  components: {
    MultiModal, Loading,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      loading: 'commonData/loading',
    }),
  },
  created() {
    Core.log('[created]');
    Core.log('me/corpusId');
    Core.log(this.me);
    this.$store.state.commonData.me = this.me;
    // 各種データ取得
    // ダッシュボードで表示する情報 / コーパス一覧 / API一覧 / アカウント一覧
    // Todo: 利用ログ一覧や請求一覧の情報も取得する（ite2）
    this.$store.dispatch('corpusData/getCorpusList');
    this.$store.dispatch('accountData/getAccountList');
  },
  mounted() {
    Core.log('[mounted]');
  },
  methods: {
    logout() {
      Lib.logout();
    }
  }
};
</script>