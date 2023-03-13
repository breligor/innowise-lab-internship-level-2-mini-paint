<template>
  <button class="button" @click="Click">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

import { defineEmits } from "vue";

const emit = defineEmits(["Click"]);

const Click = () => emit("Click", event);

</script>


<style lang="scss"></style>
