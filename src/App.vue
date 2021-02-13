<template>
  <div id="app">
    <!-- TODO: navbar -->
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

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

a {
  color: inherit;
  text-decoration-style: dotted;
}
</style>
