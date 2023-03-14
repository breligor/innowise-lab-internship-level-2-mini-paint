import { defineStore } from "pinia";
import { colors } from "@/store/data";
export const useCanvasFieldStore = defineStore({
  id: "canvasStore",

  state: () => ({
    canvas: null,
    context: null,
    size: "1",
    mouseEvent: "up",
    tool: "brush",
    x: 0,
    y: 0,
    color: "#000000",
    isShaped: false,
  }),

  getters: {
    brushSize: (state) => +state.size,
    colors: () => colors,
  },

  actions: {
    mouseUp() {
      this.mouseEvent = "up";
    },
    clearCanvas() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.size = "1";
      this.color = "#000000";
    },
    defaultColorIsBlack() {
      this.color = "#000000";
    },
    eraser() {
      this.color = "#ffffff";
      this.size = "15";
    },
    brush() {
      this.isShaped = false;
    },
    showHideShapes() {
      this.isShaped = !this.isShaped;
    },
    setColor(color: string) {
      this.color = color;
    },
  },
});
