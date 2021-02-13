<template>
  <div class="footer">
    <p class="copyright">&copy;2021 bolt</p>
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
  transform: translate(-50%, -50%);
  bottom: 0;
  left: 50%;
}

.copyright {
  font-family: "Roboto mono";
  font-size: 15px;
}
</style>
