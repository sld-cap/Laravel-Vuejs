<template>
  <Alert v-bind:alert-type="alertClass">
    <div slot="message">このコーパスは本番稼働中です</div>
  </Alert>
</template>

<script>
import Alert from '../../common/alert/Alert.vue';

export default {
  components: {
    Alert
  },
  data() {
    return {
      alertClass: 'alert alert-dismissible fade show alert-info'
    };
  },
  mounted: function() {
  },
  methods: {
  }
};
</script>