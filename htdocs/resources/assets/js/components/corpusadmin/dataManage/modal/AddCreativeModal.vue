<template>
  <CommonModal v-bind:modalId="modalId">
    <div slot="title">モーダルタイトル</div>
    <!-- /.title -->
    <div slot="body">
      <div class="alert alert-warning" role="alert">
        追加するデータを入力してください
      </div>
      <!-- /.alert -->
    </div>
    <!-- /.body -->
    <div slot="footer">
      <button type="submit" class="btn btn-primary">保存する</button>
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
  data() {
    return {
      modalId: 'AddCreativeModal'
    };
  },
  mounted: function() {
  },
  methods: {
  }
};
</script>