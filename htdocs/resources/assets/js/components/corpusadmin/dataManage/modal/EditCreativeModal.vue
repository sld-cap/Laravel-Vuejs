<template>
  <CommonModal v-if="this.showModal" @close="closeModal">
    <div slot="title">テキスト編集（{{ modalTitle }}）</div>
    <!-- /.title -->
    <div slot="body">
      <div class="alert alert-warning" role="alert">
        クラス／テキストを変更できます
      </div>
      <!-- /.alert -->
      <div class="form-group">
        <label for="addContent">テキスト</label>
        <textarea v-model="editFromData.content" class="form-control" id="addContent" rows="3" required></textarea>
        <small class="form-text text-muted">1024文字以内で入力してください。</small>
        <div class="invalid-feedback">
          テキストを入力してください
        </div>
      </div>
      <!-- /.form-group -->
      <div class="form-group">
        <label :for="'selectEditClass_' + this.editFromData.dataType">クラス選択</label>
        <select v-model="editFromData.classId" class="form-control form-control-sm" :id="'selectEditClass_' + this.editFromData.dataType">
          <template v-for="classData in trainingData">
            <option :value="classData.class_id" :key="classData.class_id">{{ classData.name }}</option>
          </template>
        </select>
      </div>
      <!-- /.form-group -->
    </div>
    <!-- /.body -->
    <div slot="footer">
      <button @click="confirmDeleteCreative" type="button" class="btn btn-secondary">削除する</button>
      <button @click="saveCreative" type="button" class="btn btn-primary">変更する</button>
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
  props: [  'editFromData', 'showModal' ],
  data() {
    return {
      deleteData: {},
    };
  },
  computed: {
    modalTitle() {
      let title = '';
      if (this.editFromData.dataType !== '') {
        title = Core.CorpusDataType[this.editFromData.dataType].label;
      }
      return title;
    },
    trainingData() {
      return this.$store.getters.trainingData;
    },
  },
  crated() {
    this.resetDeleteCrativeModalParams();
  },
  mounted() {
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    saveCreative() {
      Core.log('[saveCreative]');
      Core.log(this.editFromData);
      this.$store.dispatch('saveCreative', this.editFromData);
    },
    showDelCreativeModal() {
      Core.log('[showDelCreativeModal]');
      this.resetDeleteCrativeModalParams();

    },
    // 削除モーダル向け
    confirmDeleteCreative() {
      Core.log('[confirmDeleteCreative]');
      if(confirm('テキストを削除しようとしています。\n本当に削除してもよろしいでしょうか？')) {
        // 削除API処理
        alert('削除処理実行: 未実装');
        Lib.closeModal();
      }
    },
    // 
    resetDeleteCrativeModalParams() {
      Core.log('[resetDeleteCrativeModalParams]');
      this.deleteData = {
        dataType: '',
        creative_id: '',
      };
    },
  },
};
</script>
