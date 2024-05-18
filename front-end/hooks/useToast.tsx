import ShowToast from "@/components/Toast";
import { createContext, ReactNode, useContext, useState } from "react";

type Toast = {
  show: boolean;
  title: "Success" | "Error" | "Warning";
  message: string;
};

type ToastContextProps = {
  toast: Toast;
  showToast: (title: "Success" | "Error" | "Warning", message: string) => void;
};

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

type ToastProviderProps = {
  children: ReactNode;
};

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toast, setToast] = useState<Toast>({
    show: false,
    title: "Warning",
    message: "",
  });
  const showToast = (
    title: "Success" | "Error" | "Warning",
    message: string
  ) => {
    setToast({ show: true, title, message });
    setTimeout(() => {
      setToast({ show: false, title: "Warning", message: "" });
    }, 2000);
  };

  return (
    <ToastContext.Provider value={{ toast, showToast }}>
      {children}
      {toast.show && <ShowToast title={toast.title} message={toast.message} />}
    </ToastContext.Provider>
  );
};
