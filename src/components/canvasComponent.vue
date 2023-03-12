<template>
  <div class="home box is-flex is-justify-content-center">
    <div class="tools is-flex is-flex-direction-column mr-4">
      <base-button class="button is-danger mb-2" @click="clearCanvas"
        >clear</base-button
      >
      <base-button class="button mb-2" @click="drawRect">draw</base-button>

      <base-button class="button mb-2" @click="drawStroke">stroke</base-button>
      <base-button class="button mb-2" @click="drawTriangle"
        >triangle</base-button
      >
      <base-button class="button mb-2" @click="drawSmile">smile</base-button>
      <base-button class="button mb-2" @click="drawSmth">smth</base-button>
      <base-button class="button mb-2" @click="downloadImg">download</base-button>
    </div>
    <canvas
      ref="canvas"
      class="canvas box"
      width="550"
      height="550"
      @mousedown.prevent="mDown"
      @mouseup.prevent="mUp"
      @mousemove.prevent="mMove"
    ></canvas>
  </div>
</template>

<script lang="ts" setup>
import { useCanvasStore } from "@/store/canvas";
import { ref, onMounted, Ref } from "vue";

const canvasStore = useCanvasStore();

const canvas: Ref<HTMLCanvasElement | null> = ref(null);
  
  function initializeCanvas() {
    if (canvas?.value.getContext) {
    const ctx = canvas?.value.getContext("2d") as
      | CanvasRenderingContext2D
      | null
      | undefined;
    canvasStore.canvas = canvas.value;
    canvasStore.context = ctx;
    canvasStore.rect = canvasStore.canvas.getBoundingClientRect();
    canvasStore.context.fillStyle = "#FFFFFF";
    canvasStore.context.fillRect(0, 0, canvasStore.canvas.width, canvasStore.canvas.height);
  }
}

onMounted(() => {
  initializeCanvas() 
});

const downloadImg=(): void=> {    
      const url = canvasStore.canvas.toDataURL();
      const a = document.createElement("a");
      a.href = url;
      a.download = "img";
      document.body.appendChild(a);
      a.click();
    }

    const saveImgs=(): void=> {      
      const url = canvasStore.canvas.toDataURL();     
    }

const mMove=(e: MouseEvent): void=> {
 const ctx = canvasStore.context;
   const X = e.clientX - canvasStore.rect.left;
  const Y = e.clientY - canvasStore.rect.top;
     
        ctx.beginPath();
        ctx.moveTo( canvasStore.startX, canvasStore.startY);
        ctx.lineWidth = "10";
        ctx.lineCap = "round";
        ctx.strokeStyle = "red";
        ctx.lineTo(canvasStore.startX, canvasStore.startY);
        ctx.stroke();
        canvasStore.startX = X;
        canvasStore.startY = Y;
      
}


const drawStar = (r=Math.floor(Math.random() * 4) + 2) => {
  const ctx = canvasStore.context;
  
  ctx.beginPath();
  ctx.moveTo(r, 0);

    ctx.rotate(Math.PI / 5);
  
      ctx.lineTo((r / 0.525731) * 0.200811, 0);
 
 
  ctx.strokeStyle = "black";
  ctx.closePath();
  ctx.fill();
  
}




const drawSmth = () => {

  const ctx = canvasStore.context;

  for (let i=0;i<6;i++){
    for (let j=0;j<6;j++){
      ctx.fillStyle = `rgb(${Math.floor(255-42.5*i)},${Math.floor(255-42.5*j)},0)`;
      ctx.fillRect(j*25,i*25,25,25);

    }
  }
  
  for (let i=0;i<6;i++){
      for (let j=0;j<6;j++){
        ctx.strokeStyle = `rgb(0,${Math.floor(255-42.5*i)},${Math.floor(255-42.5*j)})`;
      
        ctx.beginPath();  
        ctx.moveTo(265, 265);
        ctx.arc(12.5+j*25,12.5+i*25,10,0,Math.PI*2,true);        
        ctx.stroke();
      }
    }
};

const drawStroke = () => {
  const ctx = canvasStore.context;
  ctx.outlineWidth = "19";
  ctx.strokeStyle = "white";
  ctx.rect(50, 50, 100, 100);
  ctx.stroke();
  ctx.fill();
  console.log(canvasStore.canvas.height);
  //ctx.strokeRect(50, 50, 100, 100)
};

const drawSmile = () => {
  const ctx = canvasStore.context;
  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Внешняя окружность
  ctx.moveTo(110, 75);
  ctx.arc(75, 75, 35, 0, Math.PI, false); // рот (по часовой стрелке)
  ctx.moveTo(65, 65);
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Левый глаз
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Правый глаз
  ctx.strokeStyle = "black";
  ctx.stroke();
};

const drawRect = () => {
  canvasStore.context.fillStyle = "rgba(0, 0, 200, 0.5)";
  canvasStore.context.fillRect(0, 0, 75, 75, 0.5);
};
const drawTriangle = () => {
  const ctx = canvasStore.context;
  ctx.beginPath();
  ctx.moveTo(75, 50);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.fill();
};

const clearCanvas = () => {
  canvasStore.context.clearRect(
    0,
    0,
    canvasStore.canvas.width,
    canvasStore.canvas.height
  );
};
</script>

<style lang="scss">
canvas {
  border: 1px solid rgb(148, 141, 141);
}
</style>
