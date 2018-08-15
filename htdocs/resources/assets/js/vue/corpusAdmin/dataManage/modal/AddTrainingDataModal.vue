<template>
  <CommonModal>
    <div v-if="form.data_type === 1" slot="title">クラス／テキスト追加（学習データ）</div>
    <div v-if="form.data_type === 0" slot="title">クラス／テキスト追加（テストデータ）</div>
    <!-- /.title -->
    <div slot="body">
      <div class="alert alert-warning" role="alert">
        追加するデータを入力してください
      </div>
      <!-- /.alert -->
      <div class="form-group">
        <label for="addContent">追加するテキスト</label>
        <textarea v-model="form.content" class="form-control" id="addContent" rows="3" required></textarea>
        <small class="form-text text-muted">1024文字以内で入力してください。</small>
        <div class="invalid-feedback">
          テキストを入力してください
        </div>
      </div>
      <!-- /.form-group -->
      <div class="form-group">
        <label :for="'selectEditClass_' + this.form.data_type">クラス選択</label>
        <select v-model="form.corpus_class_id" class="form-control form-control-sm" :id="'selectEditClass_' + this.form.data_type">
          <template v-for="classData in trainingData">
            <option :value="classData.class_id" :key="classData.class_id">{{ classData.name }}</option>
          </template>
          <option v-if="form.data_type === 1" value="">＋クラスを追加</option>
        </select>
      </div>
      <!-- /.form-group -->
      <div v-if="form.data_type === 1 && form.corpus_class_id === ''" class="form-group">
        <label for="addClass">追加するクラス名</label>
        <input v-model="form.add_class_name" type="text" class="form-control" id="addClass">
        <div class="invalid-feedback">
          クラス名を入力してください
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
import * as Ajax from '../../../../common/core/ajax';
import ApiConfig from '../../../../common/core/apiConfig';
import CommonModal from '../../common/modal/Modal';

import { mapGetters } from 'vuex';
import MultiModalMixin from '../../common/modal/mixins/MultiModalMixin';

export default {
  name: 'AddCreativeModal',
  mixins: [MultiModalMixin],
  components: { CommonModal },
  props: [],
  data() {
    return {
      form: {
        corpus_id: this.$store.getters['commonData/corpusId'],
        data_type: this.$store.getters['multiModal/currentDataType'],
        corpus_class_id: null,
        add_class_name: '',
        content: '',
      },
    };
  },
  computed: {
    ...mapGetters({
      trainingData: 'corpusTrainingData/trainingData',
    }),
  },
  mounted() {
    this.initRender();
  },
  methods: {
    // セレクトボックス初期値設定
    initRender() {
      Core.log('[initRender]');
      let initCorpusClassId = "";
      if(this.trainingData.length > 0) {
        initCorpusClassId = this.trainingData[0].class_id;
      }
      this.form.corpus_class_id = initCorpusClassId;
    },
    // 登録
    addTrainingData() {
      Core.log('[addTrainingData]');
      Core.log(this.form);
      this.$store.dispatch('corpusTrainingData/addTrainingData', this.form);
    },
  },
};
</script>