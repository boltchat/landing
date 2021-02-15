<template>
  <div id="app">
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
import InstallInstruction from "@/components/InstallInstruction.vue";

@Component({
  components: {
    InstallInstruction
  }
})
export default class Install extends Vue {}
</script>

<style lang="scss" scoped>
.instructions {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 40vh;
  left: 50vw;

  .more {
    display: inline-block;
    margin-top: 20px;
    color: gray;
  }
}
</style>
