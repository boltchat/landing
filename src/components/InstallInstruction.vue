<template>
  <div class="installInstruction">
    <div class="os">
      <span>{{ os }} ({{ type }})</span>
    </div>
    <div class="command">
      <span class="prompt">{{ prompt }}</span>
      <span>{{ command }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class InstallInstruction extends Vue {
  @Prop({ default: "$", required: false })
  private prompt!: string;

  @Prop({ required: true })
  private command!: string;

  @Prop({ required: true })
  private os!: string;

  @Prop({ required: true })
  private type!: string;
}
</script>

<style lang="scss" scoped>
.installInstruction {
  margin-bottom: 25px;
}

.os {
  color: gray;
  margin-bottom: 10px;
}

.command {
  font-family: "Roboto Mono";
  background: rgb(235, 235, 235);
  padding: 10px 15px;
  border-radius: 5px;
  display: inline-block;

  .prompt {
    pointer-events: none;
    color: rgb(120, 120, 120);
    margin-right: 10px;
  }
}
</style>
