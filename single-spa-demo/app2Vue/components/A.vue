<template>
  <div class="hello">这是A组件</div>
</template>

<script>
export default {
  name: "A",
  methods: {
    goCurrentUrl() {
      window.singleSpa.navigateToUrl("/app1/b");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
