<template>
  <div>
    <toolsComponent ></toolsComponent>
    <canvasField></canvasField>
  </div>
</template>

<script lang="ts" setup>
import toolsComponent from "./toolsComponent.vue";
import canvasField from "./canvasField.vue";
import { useCanvasFieldStore } from "@/store/canvasFieldStore";

const store = useCanvasFieldStore();


</script>

<style lang="scss">
canvas {
  border: 1px solid rgb(148, 141, 141);
}
</style>
