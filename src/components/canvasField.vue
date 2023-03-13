<template>
  <canvas
    ref="canvas"
    class="canvas box"
    width="550"
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
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.moveTo(coordinates.x, coordinates.y);
  ctx.lineTo(coordinates.x - coordinates.dx, coordinates.y - coordinates.dy);
  ctx.stroke();
  ctx.closePath();
};

const getCoordinates = (e: MouseEvent): { [key: string]: number } => {
  return {
    x: e.offsetX,
    y: e.offsetY,
    dx: e.movementX,
    dy: e.movementY,
    cX: e.clientX,
    cY: e.clientY,
  };
};

onMounted(() => {
  initializeCanvas();
});

</script>

<style scoped>

.canvas {
  cursor: pointer;
}

</style>
