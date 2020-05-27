<template>
  <div class="hello">这是B组件</div>
</template>

<script>
export default {
  name: "B",
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
