<template>
  <CommonModal v-if="this.showModal" @close="closeModal" modalSize="modal-lg">
    <div slot="title">学習データのアップロード（{{ modalTitle }}）</div>
    <!-- /.title -->
    <div slot="body">
      <div class="alert alert-danger mt-1" role="alert">
        <ul style="margin-bottom: 0;">
          <li>既に登録されている学習データは削除されます。</li>
          <li>学習データは5-15,000件での範囲で準備してください。</li>
          <li>学習データのテキストはそれぞれ1,024文字以内で準備してください。</li>
        </ul>
      </div>
      <!-- /.alert -->
      <div class="form-group mt-4">
        <input type="file" value="ファイルを選択" name="csv_file" required="">
      </div>
    </div>
    <!-- /.body -->
    <div slot="footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">閉じる</button>
      <button type="submit" class="btn btn-primary">アップロードする</button>
    </div>
    <!-- /.footer -->
  </CommonModal>
</template>

<script>
import * as Core from '../../../../common/core/app';
import * as Ajax from '../../../../common/core/ajax';
import ApiConfig from '../../../../common/core/apiConfig';
import CommonModal from '../../common/Modal.vue';

export default {
  components: { CommonModal },
  props: [ 'uploadFormData', 'showModal' ],
  data() {
    return {
      deleteData: {},
    };
  },
  computed: {
    modalTitle() {
      let title = '';
      if (this.uploadFormData.dataType !== '') {
        title = Core.CorpusDataType[this.uploadFormData.dataType].label;
      }
      return title;
    },
  },
  crated() {
  },
  mounted() {
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>
