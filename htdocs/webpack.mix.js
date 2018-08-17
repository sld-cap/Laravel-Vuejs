let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js(['resources/assets/js/app.js',
  'resources/assets/js/common/core/app.js',
  'resources/assets/js/common/core/apiConfig.js',
  'resources/assets/js/common/core/ajax.js',
  'resources/assets/js/common/ext/functions.js',
], 'public/js/app.js')
  .scripts([
    'resources/assets/js/common/ext/plugins/jquery.min.js',
    'resources/assets/js/common/ext/plugins/popper.min.js',
    'resources/assets/js/common/ext/plugins/bootstrap.min.js',
    'resources/assets/js/common/ext/plugins/jquery.circliful.min.js',
    'resources/assets/js/common/ext/plugins/chart.min.js',
  ], 'public/js/corpusadmin-core.js')
  .scripts([
    // 'resources/assets/js/common/ext/plugins/jquery.min.js', // public/js/app.jsでjquery読み込んでいるため
    'resources/assets/js/common/ext/plugins/popper.min.js',
    'resources/assets/js/common/ext/plugins/perfect-scrollbar.jquery.min.js',
    'resources/assets/js/common/ext/plugins/chartist.min.js',
    'resources/assets/js/common/ext/plugins/arrive.min.js',
    'resources/assets/js/common/ext/plugins/bootstrap-notify.js',
    'resources/assets/js/common/ext/plugins/demo.js',
    'resources/assets/js/common/ext/plugins/bootstrap-material-design.min.js',
    'resources/assets/js/common/ext/plugins/material-dashboard.js',
  ], 'public/js/dashboard-common.js')
  .sass('resources/assets/sass/app.scss', 'public/css')
  .sass('resources/assets/sass/app/login.scss', 'public/css')
  .sass('resources/assets/sass/common-dashboard.scss', 'public/css/common.css')
  .sass('resources/assets/sass/main/dashboard/corpus.scss', '../resources/assets/css/corpus.css')
  .sass('resources/assets/sass/main/dashboard/api-info.scss', '../resources/assets/css/api-info.css')
  .styles([
    'resources/assets/sass/bootstrap/bootstrap.min.css',
    'resources/assets/sass/bootstrap/bootstrap-dashboard.css',
    'resources/assets/sass/jquery.circliful.css',
  ], 'public/css/bootstrap.css')
  .styles([
    'resources/assets/css/common.css',
    'resources/assets/css/theme/corpusadmin.css',
  ], 'public/css/corpusadmin.css')
  .styles([
    'resources/assets/css/corpus.css',
    'resources/assets/css/api-info.css',
  ], 'public/css/capadmin.css')

  .version();
