<template>
  <div class="row">
    <Loading v-if="loading" /><!-- loading -->

    <div v-else-if="corpusList.length === 0" class="col-lg-4 col-md-4 col-sm-6">
      <NoCorpusAlert></NoCorpusAlert>
    </div>
    <!-- /.col -->

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
          <p class="card-text three-dots-card" style="clear:both;margin-bottom:10px;">{{ corpus.description }}</p>
        </div>
        <div v-if="corpus.related_api_name !== ''" class="card-footer" style="padding-top:2px;border-top: 1px solid #eee;">
          <div class="stats pull-right">
            関連API:{{ corpus.related_api_name }}
          </div>
        </div>
        <div class="card-footer" style="padding-top:2px;border-top: 1px solid #eee;">
          <div class="stats pull-right">
            {{ dispCorpusTypeLabel(corpus.type) }}
          </div>
          <div class="stats pull-left">
            <i class="material-icons">update</i> 最終更新日：{{ convElapsedTime(corpus.updated_at) }}（{{ corpus.update_user_name }}）
          </div>
        </div>
      </div>
      <!-- /.detail-card -->
    </div>
    <!-- /.col -->
  </div>
  <!-- /.row -->
</template>

<script>
import * as Core from '../../../../common/core/app';
import * as Ajax from '../../../../common/core/ajax';
import * as Lib from '../../../../common/ext/functions';
import ApiConfig from '../../../../common/core/apiConfig';

import { mapGetters } from 'vuex';
import NoCorpusAlert from '../alert/NoCorpusAlert.vue';
import Loading from '../../common/loading/BasicLoading.vue';

export default {
  props: ['me'],
  components: {
    Loading, NoCorpusAlert,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      loading: 'corpusData/loading',
      corpusList: 'corpusData/corpusList',
    }),
  },
  created() {
    Core.log('[created]');
  },
  updated: function() {
    Core.log('[updated]');
    Lib.adjastCorpusCardDescriptionRows('three-dots-card');
  },
  mounted: function() {
    Core.log('[mounted]');
  },
  methods: {
    openCorpusAdminTab(corpusId) {
      Core.log('[openCorpusAdminTab]');
      const corpusIdStr = corpusId + '';
      const redirectPath = `/corpus/${corpusIdStr}/data`;
      open(redirectPath, "_blank");
    },
    convElapsedTime(dateTime) {
      Core.log('[convElapsedTime]');
      return Lib.elapsedTime(dateTime);
    },
    dispCorpusTypeLabel(typeKey) {
      return Core.CorpusType[typeKey].label;
    },
  },
};
</script>

<style>
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

.cursor-default {
  cursor: default;
}
</style>