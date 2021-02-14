<template>
  <div id="app">
    <lead class="lead" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Lead from "@/components/Lead.vue";
import InstallInstruction from "@/components/InstallInstruction.vue";

@Component({
  components: {
    Lead,
    InstallInstruction
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.lead {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 40vh;
  left: 50vw;
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
