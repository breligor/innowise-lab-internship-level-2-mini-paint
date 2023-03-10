import { defineStore } from "pinia";

export const useCanvasStore = defineStore({
  id: "canvasStore",

  state: () => ({   
canvas:null,
context:null,
isDrawing:false,
startX:0,
startY:0,
points: [],
rect:{}
  }),

  getters: {
    currentRoute(state) {
      return;
    },
},
  actions: { },
});
