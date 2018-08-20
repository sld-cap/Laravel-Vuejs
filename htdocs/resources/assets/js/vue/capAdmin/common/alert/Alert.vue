<template>
  <div :class="alertClass">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <i class="material-icons">close</i>
    </button>
    <slot name="message"></slot>
  </div>
</template>


<style>
</style>


<script>
export default {
  props: [ 'alertType' ],
  data() {
    return {
      alertClass: 'alert ' + this.alertType
    };
  },
  mounted: function() {
  },
  methods: {
  }
};
</script>