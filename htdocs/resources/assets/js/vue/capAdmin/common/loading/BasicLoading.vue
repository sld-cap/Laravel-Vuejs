<template>
  <div class="loading-block">
    <BallSpinFadeLoader size="5px" color="black"/>
    <div class="vue-loaders-text pl-1">Loading</div>
  </div>
</template>

<script>

export default {
  components: {},
  props: [],
  data() {
    return {};
  },
  methods: {
  },
};
</script>

<style>
.loading-block > .vue-loaders,
.loading-block > .vue-loaders-text {
  display: inline-block;  /* インラインブロック化 */
  vertical-align: middle; /* 中央を揃える */
}
</style>