<template>
  <CommonModal>
    <div v-if="data.data_type === 1" slot="title">クラス／テキスト追加（学習データ）</div>
    <div v-if="data.data_type === 0" slot="title">クラス／テキスト追加（テストデータ）</div>
    <!-- /.title -->
    <div slot="body">
      <div class="alert alert-warning" role="alert">
        追加するデータを入力してください
      </div>
      <!-- /.alert -->
      <div class="form-group">
        <label for="addContent">追加するテキスト</label>
        <textarea v-model="data.content" :class="'form-control' + err.content.invalid" id="addContent" rows="3" maxlength="1024"></textarea>
        <small class="form-text text-muted">1024文字以内で入力してください。</small>
        <div class="invalid-feedback">
          {{ err.content.message }}
        </div>
      </div>
      <!-- /.form-group -->
      <div class="form-group">
        <label :for="'selectEditClass_' + this.data.data_type">クラス選択</label>
        <select v-model="data.corpus_class_id" :class="'form-control form-control-sm' + err.corpus_class_id.invalid" :id="'selectEditClass_' + this.data.data_type">
          <template v-for="classData in trainingData">
            <option :value="classData.class_id" :key="classData.class_id">{{ classData.name }}</option>
          </template>
          <option v-if="data.data_type === 1" value="">＋クラスを追加</option>
        </select>
        <div class="invalid-feedback">
          {{ err.corpus_class_id.message }}
        </div>
      </div>
      <!-- /.form-group -->
      <div v-if="data.data_type === 1 && data.corpus_class_id === ''" class="form-group">
        <label for="addClass">追加するクラス名</label>
        <input v-model="data.add_class_name" type="text" :class="'form-control' + err.add_class_name.invalid" id="addClass" maxlength="30">
        <small class="form-text text-muted">30文字以内で入力してください。</small>
        <div class="invalid-feedback">
          {{ err.add_class_name.message }}
        </div>
      </div>
      <!-- /.form-group -->
    </div>
    <!-- /.body -->
    <div slot="footer">
      <button @click="addTrainingData" type="button" class="btn btn-primary">保存する</button>
    </div>
    <!-- /.footer -->
  </CommonModal>
</template>

<script>
import * as Core from '../../../../common/core/app';
import * as Lib from '../../../../common/ext/functions';
import CommonModal from '../../common/modal/Modal';

import { mapGetters } from 'vuex';
import MultiModalMixin from '../../common/modal/mixins/MultiModalMixin';
import SetErrDataMixin from '../../common/form/mixins/SetErrData';

export default {
  name: 'AddCreativeModal',
  mixins: [MultiModalMixin, SetErrDataMixin],
  components: { CommonModal },
  props: [],
  data() {
    return {
      data: {},
      option: {},
      err: [],
    };
  },
  watch: {
    'errors': {
      handler: function (errors) {
        Core.log('[watch] errors');
        // エラー表示処理
        this.resetErr();
        this.setErrData(errors);
      },
      deep: true
    },
  },
  computed: {
    ...mapGetters({
      trainingData: 'corpusTrainingData/trainingData',
      errors: 'multiModal/trainingDataAddError',
    }),
  },
  created() {
    Core.log('[created]');
    this.loadApiConfig('addTrainingData');
    this.resetErr();
  },
  mounted() {
    Core.log('[mounted]');
    this.setParams();
  },
  methods: {
    loadApiConfig(configName) {
      Core.log('[method] loadApiConfig');
      const config = Lib.getApiConfig(configName);
      this.option = config;
      this.data = config.data;
      Core.log(this.data);
    },
    // エラーリセット
    resetErr() {
      Core.log('[method] resetErr');
      this.err = Lib.resetFormError(this.data);
      Core.log(this.err);
    },
    // 
    setParams() {
      Core.log('[method] setParams');
      let initCorpusClassId = "";
      if(this.trainingData.length > 0) {
        initCorpusClassId = this.trainingData[0].class_id;
      }
      this.data.corpus_class_id = initCorpusClassId;
      this.data.corpus_id = this.$store.getters['commonData/corpusId'];
      this.data.data_type = this.$store.getters['multiModal/currentDataType'];
    },
    // 登録
    addTrainingData() {
      Core.log('[method] addTrainingData');
      this.option.data = this.data;
      this.$store.dispatch('corpusTrainingData/add', { option: this.option });
    },
  },
};
</script>