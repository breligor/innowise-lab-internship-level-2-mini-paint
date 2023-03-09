import { useStore } from "@/store/index";
const store = useStore();

export function useNotificationHandler() {
  const closeToast = () => {
    store.errMessage = "";   
  };

  const autoHideToast = () => {
    setTimeout(() => (store.errMessage = ""), 3000);
  };

  const showToastWithDelay = (value: string) => {
    setTimeout(() => (store.errMessage = value), 1000);
  };

  return { closeToast, autoHideToast, showToastWithDelay };
}
