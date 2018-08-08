<template>
  <Alert v-bind:alert-type="alertClass">
    <div slot="message">このコーパスは学習中です。学習データの登録、編集、削除の操作はできません。</div>
  </Alert>
</template>

<script>
import Alert from '../../common/Alert.vue';  

export default {
  components: {
    Alert
  },
  data() {
    return {
      alertClass: 'alert alert-dismissible fade show alert-warning'
    };
  },
  mounted: function() {
  },
  methods: {
  }
};
</script>