<template>
  <div id="app2">
    <!-- <img src="./assets/logo.png" />
     -->
     <h3>LOGO</h3>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <br />
    <router-link :to="{ path: '/app2/a' }">下级路由A</router-link>

    <router-link :to="{ path: '/app2/b' }">下级路由B</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app2",
  beforeCreate(){
    console.log('14123132');
  },
  beforeMount(){
    console.log('44123123');
  },
  mounted(){
    console.log('124354t32452535')
  },
  components: {
    HelloWorld
  }
};
</script>

<style>
#app2 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
