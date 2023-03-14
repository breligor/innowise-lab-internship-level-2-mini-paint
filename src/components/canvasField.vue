<template>
  <canvas
    ref="canvas"
    class="canvas"
    width="780"
    height="550"
    @mousedown="mouseDown"
    @mouseup="store.mouseUp"
    @mousemove="mouseMove"
  >
  </canvas>
</template>

<script setup lang="ts">
import { useCanvasFieldStore } from "@/store/canvasFieldStore";
import { ref, onMounted, Ref } from "vue";
const store = useCanvasFieldStore();
const canvas: Ref<HTMLCanvasElement | null> = ref(null);

const initializeCanvas = () => {
  const context: CanvasRenderingContext2D | null | undefined =
    canvas?.value.getContext("2d");  
  store.context = context;
  store.canvas = canvas.value;
};

const mouseDown = (e: MouseEvent): void => {
  store.mouseEvent = "down";
  drawPoint(e);
};

const mouseMove = (e: MouseEvent): void => {
  if (store.mouseEvent === "down") {
    drawPoint(e);
  }
};

const drawPoint = (e: MouseEvent) => {
  const coordinates = getCoordinates(e);
  const ctx = store.context;
  ctx.beginPath();
  ctx.strokeStyle = store.color;
  ctx.lineWidth = store.brushSize;
  ctx.lineCap = "round";
  ctx.moveTo(coordinates.x, coordinates.y);
  ctx.lineTo(coordinates.x - coordinates.mX, coordinates.y - coordinates.mY);
  ctx.stroke();
  ctx.closePath();
};

const getCoordinates = (e: MouseEvent): { [key: string]: number } => {
  return {
    x: e.offsetX,
    y: e.offsetY,
    mX: e.movementX,
    mY: e.movementY,
  };
};

onMounted(() => {
  initializeCanvas();
});

</script>

<style scoped>

</style>
