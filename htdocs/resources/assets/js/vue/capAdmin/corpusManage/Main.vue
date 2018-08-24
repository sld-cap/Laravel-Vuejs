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
              <div v-if="corpusList.length > 0 && corpusList.length < 8" class="row mt-2">
                <button @click="openAddCorpusModal" type="button" class="btn btn-danger" style="margin-left:15px;">新規作成</button>
              </div>
              <div v-else-if="corpusList.length === 8" class="row mt-2">
                <button type="button" class="btn btn-danger cursor-default" style="margin-left:15px;" disabled>新規作成</button>
              </div>
              <!-- /.row -->

              <CorpusList /><!-- // コーパス一覧 -->
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
import * as Lib from '../../../common/ext/functions';

import { mapGetters } from 'vuex';
import CorpusList from './list/CorpusList.vue';

export default {
  props: [],
  components: {
    CorpusList,
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
  mounted: function() {
    Core.log('[mounted]');
  },
  updated: function() {
    Core.log('[updated]');
  },
  methods: {
    openAddCorpusModal() {
      Core.log('[openAddCorpusModal]');
      this.$store.dispatch('multiModal/showAddCorpusInfoModal');
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
</style>