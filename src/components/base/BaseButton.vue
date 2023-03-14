<template>
  <button class="button" @click="clickEvent">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

import { defineEmits } from "vue";

const emit = defineEmits(["clickEvent"]);

const clickEvent = () => emit("clickEvent", event);

</script>


<style lang="scss"></style>
