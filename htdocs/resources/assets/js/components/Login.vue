<template>
  <div class="container">
    <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="navbar-header">

          <!-- Collapsed Hamburger -->
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse" aria-expanded="false">
              <span class="sr-only">Toggle Navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
        </div>

        <div class="collapse navbar-collapse" id="app-navbar-collapse">
          <!-- Left Side Of Navbar -->
          <ul class="nav navbar-nav">
            &nbsp;
          </ul>

          <!-- Right Side Of Navbar -->
          <ul class="nav navbar-nav navbar-right">
            <!-- Authentication Links -->
          </ul>
        </div>
      </div>
    </nav>
    
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div class="panel panel-default">
          <div class="panel-heading">Login</div>

          <div class="panel-body">
            <form class="form-horizontal">
              <div class="form-group">
                <label for="email" class="col-md-4 control-label">E-Mail Address</label>
                <div class="col-md-6">
                  <input id="email" type="email" class="form-control" name="email" v-model="auth.email" required autofocus>
                </div>
              </div>

              <div class="form-group">
                <label for="password" class="col-md-4 control-label">Password</label>
                <div class="col-md-6">
                  <input id="password" type="password" class="form-control" name="password" v-model="auth.password" required>
                </div>
              </div>
                
              <div class="form-group">
                <div class="col-md-6 col-md-offset-4">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" name="remember"> Remember Me
                    </label>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <div class="col-md-8 col-md-offset-4">
                  <button type="button" class="btn btn-primary" @click="login">
                    Login
                  </button>

                  <a class="btn btn-link">
                    Forgot Your Password?
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</div>
</template>


<script>
import * as Core from '../common/core/app';
import * as Ajax from '../common/core/ajax';
import * as Lib from '../common/ext/functions';
import ApiConfig from '../common/core/apiConfig';

export default {
  data() {
    return {
      auth: {
				email: "",
				password: ""
			}
    };
  },
  methods: {
    login: function() {
			Core.log('[method] login');

      const apiOption = Object.assign({}, ApiConfig['login']);
      apiOption.data = {
        email: this.auth.email,
        password: this.auth.password
      };

			Ajax.login(apiOption);
    }
  }
};
</script>