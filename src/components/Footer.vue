<template>
  <div class="footer">
    <p class="copyright">
      <span class="symbol">&copy;</span>
      <span class="text">2021 The boltchat Authors</span>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  transform: translate(-50%);
  bottom: 0;
  left: 50%;
}

.copyright {
  font-family: "Roboto Mono";
  font-size: 15px;

  .symbol {
    font-size: 1.25em;
  }
}
</style>
