<template>
  <div class="row">
    <div class="col-md-4 col-md-offset-4">
      <div class="box">
        <div class="logo-contents">
          <img src="img/cap-icon.png" alt="cap_logo" width="70px" height="60px">
          <p>Cognitive AD-Check Platform</p>
          <div v-show="loginError" class="alert alert-danger">
            メールアドレスまたはパスワードが一致しません
          </div>
        </div>
        <!-- /.logo-contents -->
        <form role="form">
          <div class="divider-form"></div>
          <div class="form-group">
            <label for="email">メールアドレス</label>
            <input id="email" type="email" class="form-control" name="email" placeholder="メールアドレスを入力してください。" v-model="auth.email" required autofocus>
          </div>
          <!-- /.form-group -->
          <div class="divider-form"></div>
          <div class="form-group">
            <label for="password">パスワード</label>
            <input id="password" type="password" class="form-control" name="password" placeholder="パスワードを入力してください。" v-model="auth.password" required>
          </div>
          <!-- /.form-group -->
          <div class="divider-form"></div>
          <div class="checkbox">
            <label>
              <input v-model="auth.remember_me" type="checkbox" name="remember"> ログインを記憶する
            </label>
          </div>
          <!-- /.form-group -->
          <button @click="login" type="button" class="btn-block btn btn-lg btn-primary">サインイン</button>
          <a class="btn btn-link" href="#">
            パスワードが分からなくなった場合はこちら
          </a>
        </form>
        <!-- /form -->
      </div>
      <!-- /.box -->
    </div>
    <!-- /.col -->

    <Loading v-show="loading"></Loading>
  </div>
  <!-- /.row -->
</template>


<script>
import * as Core from '../../common/core/app';
import * as Lib from '../../common/ext/functions';

import Loading from '../common/components/Loading';
import { mapGetters } from 'vuex';

export default {
  components: {
    Loading
  },
  data() {
    return {
      auth: {
				email: "",
        password: "",
        remember_me: false,
      },
    };
  },
  computed: {
    ...mapGetters({
      loading: 'commonData/loading',
      loginError: 'commonData/loginError',
    }),
  },
  created() {
    Core.log('[created]');
    const token = Lib.getToken();
    if (token !== undefined && token !== '') {
      location.href = '/';
    }
  },
  methods: {
    login: function() {
			Core.log('[method] login');

      this.$store.commit('commonData/showLoading');
      this.$store.dispatch('commonData/login', this.auth);
    }
  }
};
</script>