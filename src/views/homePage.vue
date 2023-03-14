<template>
  <HeaderComp></HeaderComp>
  <div class="home is-flex is-justify-content-center ">
    <CanvasComponent></CanvasComponent>
  </div>
</template>

<script lang="ts" setup>
import CanvasComponent from '@/components/canvasComponent.vue';
import HeaderComp from '@/components/headerComp.vue';
</script>

<style lang="scss">
.home{
  width: 100%;
  max-width: 1920px;
}
</style>
