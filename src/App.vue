<template>
  <div id="app">
    <navbar></navbar>
    <lead></lead>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Lead from "./components/Lead.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

@Component({
  components: {
    Lead,
    Navbar,
    Footer
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Mono:wght@400&display=swap");

#app {
  font-family: Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
