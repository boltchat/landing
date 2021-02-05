<template>
  <div id="app">
    <lead></lead>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Lead from "./components/Lead.vue";

@Component({
  components: {
    Lead
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
  margin-top: 150px;
}
</style>
