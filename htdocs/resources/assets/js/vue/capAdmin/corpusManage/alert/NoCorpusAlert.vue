<template>
  <Alert v-bind:alert-type="alertClass">
    <div slot="message">稼働コーパスはありません</div>
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
      alertClass: '',
    };
  },
  mounted: function() {
  },
  methods: {
  }
};
</script>