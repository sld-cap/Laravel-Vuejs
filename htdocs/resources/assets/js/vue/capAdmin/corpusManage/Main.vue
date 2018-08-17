<template>
  <div class="content">
    <div class="container-fluid">

      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-default">
              <h4 class="card-title">稼動コーパス一覧</h4>
            </div>
            <!-- /.card-header -->
            <div class="card-body" style="padding: 10px 25px;">

              <div class="row">
                <div class="col-12">
                  <div class="bd-callout bd-callout-warning">
                    <p>作成できるコーパスは8個までです。</p>
                  </div>
                </div>
              </div>
              <!-- /.row -->

              <div class="row mt-2">
                <button type="button" class="btn btn-danger" style="margin-left:15px;" data-toggle="modal" data-target="#NlCreateModal">新規作成</button>
              </div>
              <!-- /.row -->

              <div class="row">

                <div v-for="(corpus) in corpusList" :key="corpus.id" class="col-lg-4 col-md-4 col-sm-6">
                  <div @click="openCorpusAdminTab(corpus.id)" class="card detail-card" style="margin:10px 0;">
                    <span v-if="corpus.is_production === '1'" class="ribbon13-2">本番</span>
                    <span v-else class="ribbon13-3">検証</span>
                    <div class="card-body" style="padding: 15px 15px 10px 15px;">
                      <h4 class="card-title" style="width:95%;float:left;font-weight:600;">{{ corpus.name }}</h4>
                      <div class="nav-item dropdown" style="width:5%;float:right;">
                        <a class="nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="padding:0;">
                          <i class="material-icons">more_vert</i>
                        </a>
                      </div>
                      <p class="card-text" style="clear:both;margin-bottom:10px;">{{ corpus.description }}</p>
                    </div>
                    <div class="card-footer" style="padding-top:2px;border-top: 1px solid #eee;">
                      <div class="stats pull-right">
                        関連API:「」
                      </div>
                    </div>
                    <div class="card-footer" style="padding-top:2px;border-top: 1px solid #eee;">
                      <div class="stats pull-right">
                        {{ corpus.type }}
                      </div>
                      <div class="stats pull-left">
                        <i class="material-icons">update</i> 最終更新日：{{ corpus.updated_at }}（{{ corpus.update_user_name }}）
                      </div>
                    </div>
                  </div>
                  <!-- /.detail-card -->
                </div>
                <!-- /.col -->

              </div>
              <!-- /.row -->
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->

    </div>
    <!-- /.container-fluid -->
  </div>
  <!-- /.content -->
</template>

<script>
import * as Core from '../../../common/core/app';
import * as Ajax from '../../../common/core/ajax';
import * as Lib from '../../../common/ext/functions';
import ApiConfig from '../../../common/core/apiConfig';

import { mapGetters } from 'vuex';

export default {
  props: ['me'],
  components: {
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      corpusList: 'corpusData/corpusList',
    }),
  },
  created() {
    Core.log('[created]');
  },
  updated: function() {
    Core.log('[updated]');
  },
  mounted: function() {
    Core.log('[mounted]');
  },
  methods: {
    openCorpusAdminTab(corpusId) {
      const corpusIdStr = corpusId + '';
      const redirectPath = `/corpus/${corpusIdStr}/data`;
      open(redirectPath, "_blank");
    },
  },
};
</script>

<style>
.bd-callout {
  padding: 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  border: 1px solid #eee;
  border-left-width: .25rem;
  border-radius: .25rem;
}
.bd-callout p {
  margin-bottom: 0;
}
.bd-callout-warning {
  border-left-color: #f0ad4e;
}

#my_corpus_list .card:hover {
  cursor: pointer;
}
.three-dots-card {
  overflow: hidden; /* overflow: hidden;　がキモ。*/
  /* width: 245px; */
  height: 50px;
  /* font-size: 16px; */
}

.detail-card:hover {
  cursor: pointer;
}
</style>