import { defineStore } from "pinia";

export const useCanvasStore = defineStore({
  id: "canvasStore",

  state: () => ({   
canvas:null,
context:null,
isDrawing:false,
mouse:"",
x:0,
y:0,
startX:0,
startY:0,
endX:0,
endY:0,
shapes: [],
rect:{},
color:"",
tool:"brush"
  }),

  getters: {},
  actions: { },
});
