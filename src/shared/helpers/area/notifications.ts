import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifySuccess = (message: string) => {
  toast.success(message);
}