<template>
  <div id="app">
    <lead class="lead" />
    <div class="instructions">
      <install-instruction
        os="Arch Linux"
        type="client"
        command="yay -S boltchat-client"
      />
      <install-instruction
        os="Docker"
        type="server"
        command="docker run -p 3300:3300 --tty boltchat/server:latest"
      />
      <span class="more">
        more can be found
        <a
          href="https://github.com/boltchat/bolt/blob/develop/docs/installation.md"
          target="_blank"
          >here</a
        >.
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Lead from "./components/Lead.vue";
import InstallInstruction from "./components/InstallInstruction.vue";

@Component({
  components: {
    Lead,
    InstallInstruction
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

a {
  color: inherit;
  text-decoration-style: dotted;
}
</style>

<style lang="scss" scoped>
.lead {
  margin-bottom: 50px;
}

.instructions {
  margin: 0 8%;

  .more {
    display: inline-block;
    margin-top: 20px;
    color: gray;
  }
}
</style>
