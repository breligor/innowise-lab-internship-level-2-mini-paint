<template>
  <div class="canvas-wrapper">
    <toolsComponent></toolsComponent>
    <canvasField :class="{ eraser: !store.isShaped }"></canvasField>
  </div>
</template>

<script lang="ts" setup>
import toolsComponent from "./toolsComponent.vue";
import canvasField from "./canvasField.vue";
import { useCanvasFieldStore } from "@/store/canvasFieldStore";

const store = useCanvasFieldStore();
</script>

<style lang="scss">
.canvas-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}
canvas {
  border: 1px solid rgb(148, 141, 141);
}
.eraser:hover {
  cursor: url(@/assets/brush.svg) 25 65, crosshair;
}
</style>
