<template>
  <CommonModal>
    <div v-if="form.data_type === 1" slot="title">クラス／テキスト編集（学習データ）</div>
    <div v-if="form.data_type === 0" slot="title">クラス／テキスト編集（テストデータ）</div>
    <!-- /.title -->
    <div slot="body">
      <div class="alert alert-warning" role="alert">
        クラス／テキストを変更できます
      </div>
      <!-- /.alert -->
      <div class="form-group">
        <label for="addContent">テキスト</label>
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
        </select>
      </div>
      <!-- /.form-group -->
    </div>
    <!-- /.body -->
    <div slot="footer">
      <button type="button" class="btn btn-secondary">削除する</button>
      <button @click="saveTrainingData" type="button" class="btn btn-primary">変更する</button>
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
  name: 'EditTrainingDataModal',
  mixins: [MultiModalMixin],
  components: { CommonModal },
  props: [],
  data() {
    return {
      form: {
        corpus_id: this.$store.getters['commonData/corpusId'],
        data_type: this.$store.getters['multiModal/currentDataType'],
        corpus_class_id: null,
        creative_id: null,
        content: '',
      },
    };
  },
  computed: {
    ...mapGetters({
      trainingData: 'corpusTrainingData/trainingData',
    }),
  },
  crated() {
  },
  mounted() {
    this.setEditData();
  },
  methods: {
    // 編集データセット
    setEditData() {
      Core.log('[setEditData]');
      const editData = this.$store.getters['multiModal/editTrainingData'];
      this.form.corpus_class_id = editData.class_id;
      this.form.creative_id = editData.creative_id;
      this.form.content = editData.content;
      
      Core.log(this.form);
    },
    // 更新
    saveTrainingData() {
      Core.log('[saveTrainingData]');
      Core.log(this.form);
      this.$store.dispatch('corpusTrainingData/saveTrainingData', this.form);
    },
  },
};
</script>
