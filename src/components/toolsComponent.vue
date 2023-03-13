<template>
  <div class="home box is-flex is-justify-content-center">
    <div class="tools is-flex is-flex-direction-column mr-4">
      <base-button class="button is-danger mb-2" @Click="store.clearCanvas"
        >clear</base-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "./base/BaseButton.vue";
import { useCanvasFieldStore } from "@/store/canvasFieldStore";
const store = useCanvasFieldStore();
</script>

<style scoped></style>
