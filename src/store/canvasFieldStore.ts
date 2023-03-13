import { defineStore } from "pinia";

export const useCanvasFieldStore = defineStore({
  id: "canvasStore",

  state: () => ({  
    canvas: null, 
    context: null,
    size: "",
    mouseEvent: "up",
    tool: "brush",
  }),

  getters: {},

  actions: {
    mouseUp() {
      this.mouseEvent = "up";
    },
    clearCanvas() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
  },
});
