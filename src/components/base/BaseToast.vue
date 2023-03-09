<template>
  <div class="notification is-danger is-light toast">
    <button class="delete" @click="closeToast"></button>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from "vue";

const emit = defineEmits(["closeToast"]);

const closeToast = () => emit("closeToast", event);
</script>

<style lang="scss" scoped>
.toast {
  position: absolute;
  z-index: 100;
  max-width: 250px;
}
</style>
