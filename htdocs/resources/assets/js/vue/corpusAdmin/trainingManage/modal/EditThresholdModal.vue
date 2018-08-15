<template>
  <CommonModal modalSize="modal-lg">
    <div slot="title">確信度の閾値設定</div>
    <!-- /.title -->
    <div slot="body">
      <div class="alert alert-info">
        閾値を設定することで、AI判定の精度を調整することができます。閾値は、0 ～ 1 の範囲で設定でき、確信度（confidence）が閾値以上の場合に判定結果（passed_classes）として出力されます。<br>
        以下フォームに閾値を入力してください。 例）0.5、0.8123
      </div>
      <!-- /.alert -->
      <form class="container mt-4">
        <div class="form-group row">
          <label for="commonThresholdField" class="col-sm-3 col-form-label">共通</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" id="commonThresholdField" aria-describedby="commonThresholdFieldHelp">
            <small id="commonThresholdFieldHelp" class="text-muted">
              全クラスの初期値として設定されます。
            </small>
          </div>
        </div>
        <!-- /.form-group -->
        <div v-for="(classData, i) in corpusClass" :key="classData.class_id" class="form-group row">
          <label :for="'ThresholdField_' + i" class="col-sm-3 col-form-label">{{ classData.name }}</label>
          <div class="col-sm-9">
            <input :name="'class_id_' + i" type="text" :id="'ThresholdField_' + i " class="form-control">
          </div>
        </div>
        <!-- /.form-group -->
      </form>
      <!-- form -->
    </div>
    <!-- /.body -->
    <div slot="footer">
      <button @click="saveThreshold" type="button" class="btn btn-primary">保存</button>
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
  name: 'EditThresholdModal',
  mixins: [MultiModalMixin],
  components: { CommonModal },
  props: [],
  data() {
    return {
      corpusClass: this.$store.getters['corpusTrainingData/trainingData'],
    };
  },
  computed: {
    ...mapGetters({
    }),
  },
  mounted() {
    Core.log('[mounted]');
  },
  methods: {
    saveThreshold() {
      Core.log('[saveThreshold]');
    },
  },
};
</script>

<style>
input.form-control {
  width: 300px;
}
</style>