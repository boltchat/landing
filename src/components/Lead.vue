<template>
  <div class="lead">
    <img src="../assets/logo-full.svg" class="logo" alt="Bolt Logo" />
    <p class="desc">
      A fast, lightweight, and secure chat
      <a
        href="https://github.com/boltchat/bolt/blob/develop/docs/protocol-spec.md"
        target="_blank"
        >protocol</a
      >,
      <a href="https://github.com/boltchat/bolt/releases" target="_blank"
        >client</a
      >
      and
      <a
        href="https://github.com/boltchat/bolt/blob/develop/docs/installation.md#server"
        target="_blank"
        >server</a
      >.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Lead extends Vue {}
</script>

<style lang="scss" scoped>
.logo {
  width: 800px;
}

.desc {
  margin-top: 25px;
  font-size: 20px;
  font-weight: 400;
  font-family: "Roboto Mono";
}

@media only screen and (max-width: 850px) {
  .logo {
    max-width: 90vw;
  }
}
</style>
