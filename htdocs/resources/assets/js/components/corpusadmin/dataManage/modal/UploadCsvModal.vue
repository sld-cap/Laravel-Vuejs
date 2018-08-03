<template>
  <CommonModal v-bind:modalId="modalId">
    <div slot="title">学習データのアップロード</div>
    <!-- /.title -->
    <div slot="body">
      <div class="alert alert-danger mt-3" role="alert">
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


<style>
</style>


<script>
import CommonModal from '../../common/CommonModal.vue';

export default {
  components: { CommonModal },
  props: ['me'],
  data() {
    return {
      modalId: 'UploadCsvModal'
    };
  },
  mounted: function() {
  },
  methods: {
  }
};
</script>