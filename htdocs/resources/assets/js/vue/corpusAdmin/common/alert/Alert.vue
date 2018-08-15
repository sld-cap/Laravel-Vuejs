<template>
  <div :class="alertClass" role="alert">
    <slot name="message"></slot>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>


<style>
</style>


<script>
export default {
  props: [ 'alertType' ],
  data() {
    return {
      alertClass: 'alert alert-dismissible fade show ' + this.alertType
    };
  },
  mounted: function() {
  },
  methods: {
  }
};
</script>