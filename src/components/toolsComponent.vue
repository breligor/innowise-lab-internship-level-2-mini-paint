<template>
  <div class="tools is-flex is-flex-direction-column">
    <div class="fnc-btns flex">
      <base-button
        class="clear-btn button is-danger mb-2 btn-size"
        @clickEvent="store.clearCanvas"
        >AC</base-button
      >
      <base-button class="clear-btn btn-size ml-4" @clickEvent="store.eraser"
        >eraser</base-button
      >
      <base-button class="clear-btn btn-size ml-4" @clickEvent="store.brush"
        >brush</base-button
      >
      <base-button
        class="clear-btn btn-size ml-4"
        @clickEvent="store.showHideShapes"
        >shapes</base-button
      >
    </div>

    <div class="is-flex is-align-items-center mb-2">
      <baseInput
        :style="{ 'background-color': store.color }"
        v-model="store.color"
        type="color"
        class="brush-color-input mr-4 btn-size"
      ></baseInput>
      <baseInput
        title="enter your color"
        v-model="store.color"
        type="text"
        class="brush-color-value-input input"
      >
      </baseInput>
      <base-button
        @click="store.defaultColorIsBlack"
        class="btn-size clear-color-btn"
        >clear</base-button
      >
    </div>

    <div class="brush-size-wrapper mb-2">
      <baseInput
        v-model="store.size"
        type="text"
        class="brush-size-value-input input mr-4 btn-size"
      ></baseInput>
      <baseInput
        v-model="store.size"
        type="range"
        min="1"
        max="25"
        class="brush-size"
      ></baseInput>
    </div>

    <div class="colorBox mb-2">
      <div
        class="button color-brick btn-size"
        :key="index"
        @click="store.setColor(item)"
        v-for="(item, index) in store.colors"
        :style="{ 'background-color': item }"
      ></div>
    </div>
    <div class="shapes-wrapper" v-if="store.isShaped">
      <base-button class="btn-size mr-2"
        ><img class="canvas-menu__icon" src="@/assets/circle.svg"
      /></base-button>
      <base-button class="btn-size mr-2"
        ><img class="canvas-menu__icon" src="@/assets/rect.svg"
      /></base-button>
      <base-button class="btn-size mr-2"
        ><img class="canvas-menu__icon" src="@/assets/line.svg"
      /></base-button>
      <base-button class="btn-size mr-2"
        ><img class="canvas-menu__icon" src="@/assets/triangle.svg"
      /></base-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "./base/BaseButton.vue";
import { useCanvasFieldStore } from "@/store/canvasFieldStore";
import baseInput from "./base/BaseInput.vue";
const store = useCanvasFieldStore();
</script>

<style scoped>
.colorBox {
  width: 100%;
}
.tools {
  width: 300px;
  align-items: flex-start;
  height: 550px;
}
.brush-size {
  width: 200px;
}
.flex {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.clear-btn {
  text-align: center;
}
.brush-size-wrapper {
  display: flex;
  align-items: center;
}
.brush-size-value-input {
  font-size: 15px;
  text-align: center;
}
.brush-color-input {
  border-radius: 3px;
min-width: 50px;
}
.brush-color-value-input {
  font-size: 15px;
  width: 100%;
  text-align: center;
  height: 50px;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-size {
  width: 50px;
  height: 50px;
}
img {
  width: 32px;
  height: 32px;
}
.clear-color-btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
