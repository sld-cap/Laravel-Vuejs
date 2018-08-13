<template>
  <CommonModal v-if="this.showModal" @close="closeModal">
    <div slot="title">クラス／テキスト追加（{{ modalTitle }}）</div>
    <!-- /.title -->
    <div slot="body">
      <div class="alert alert-warning" role="alert">
        追加するデータを入力してください
      </div>
      <!-- /.alert -->
      <div class="form-group">
        <label for="addContent">追加するテキスト</label>
        <textarea v-model="addFromData.content" class="form-control" id="addContent" rows="3" required></textarea>
        <small class="form-text text-muted">1024文字以内で入力してください。</small>
        <div class="invalid-feedback">
          テキストを入力してください
        </div>
      </div>
      <!-- /.form-group -->
      <div class="form-group">
        <label :for="'selectEditClass_' + this.addFromData.dataType">クラス選択</label>
        <select v-model="addFromData.classId" class="form-control form-control-sm" :id="'selectEditClass_' + this.addFromData.dataType">
          <template v-for="classData in trainingData">
            <option :value="classData.class_id" :key="classData.class_id">{{ classData.name }}</option>
          </template>
          <option v-if="this.addFromData.dataType === 1" value="">＋クラスを追加</option>
        </select>
      </div>
      <!-- /.form-group -->
      <div v-if="this.addFromData.dataType === 1 && addFromData.classId === ''" class="form-group">
        <label for="addClass">追加するクラス名</label>
        <input v-model="addFromData.newClassName" type="text" class="form-control" id="addClass">
        <div class="invalid-feedback">
          クラス名を入力してください
        </div>
      </div>
      <!-- /.form-group -->
    </div>
    <!-- /.body -->
    <div slot="footer">
      <button @click="addCreative" type="button" class="btn btn-primary">保存する</button>
    </div>
    <!-- /.footer -->
  </CommonModal>
</template>

<script>
import * as Core from '../../../../common/core/app';
import * as Ajax from '../../../../common/core/ajax';
import ApiConfig from '../../../../common/core/apiConfig';
import CommonModal from '../../common/base/Modal.vue';

export default {
  components: { CommonModal },
  props: [  'addFromData', 'showModal' ],
  data() {
    return {  
    };
  },
  computed: {
    modalTitle() {
      let title = '';
      if (this.addFromData.dataType !== '') {
        title = Core.CorpusDataType[this.addFromData.dataType].label;
      }
      return title;
    },
    trainingData() {
      return this.$store.getters.trainingData;
    },
  },
  mounted() {
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    addCreative() {
      Core.log('[addCreative]');
      Core.log(this.addFromData);
      this.$store.dispatch('addCreative', this.addFromData);
    },
  },
};
</script>