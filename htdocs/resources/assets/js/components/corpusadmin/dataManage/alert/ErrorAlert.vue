<template>
  <Alert v-bind:alert-type="alertClass">
    <div slot="message">
      <ul>
        <li v-for="(error, i) in errors" :key="i">
          {{ error.message }}
        </li>
      </ul>
    </div>
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
      alertClass: 'alert alert-dismissible fade show alert-danger'
    };
  },
  computed: {
    errors() {
      return this.$store.getters.errors;
    },
  },
  mounted: function() {
  },
  methods: {
  }
};
</script>