<template>
  <Alert v-bind:alert-type="alertClass">
    <div slot="message">テストデータが登録されていません。まずは登録を行いましょう。</div>
  </Alert>
</template>

<script>
import Alert from '../../common/base/Alert.vue';  

export default {
  components: {
    Alert
  },
  data() {
    return {
      alertClass: 'alert alert-dismissible fade show alert-secondary'
    };
  },
  mounted: function() {
  },
  methods: {
  }
};
</script>