<template>
  <Alert v-bind:alert-type="alertClass">
    <div slot="message">{{ successMsg }}</div>
  </Alert>
</template>

<script>
import Alert from '../Alert.vue';  

export default {
  components: {
    Alert
  },
  data() {
    return {
      alertClass: 'alert alert-dismissible fade show alert-info'
    };
  },
  computed: {
    successMsg() {
      return this.$store.getters.successMsg;
    },
  },
  mounted: function() {
  },
  methods: {
  }
};
</script>