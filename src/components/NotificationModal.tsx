import { X, CheckCircle, AlertCircle } from "lucide-react";
import React, { useEffect } from "react";

interface NotificationModalProps {
  open: boolean;
  onClose: () => void;
  type: "success" | "error";
  message: string;
  autoClose?: boolean;
  autoCloseDelay?: number;
}

const NotificationModal: React.FC<NotificationModalProps> = ({
  open,
  onClose,
  type,
  message,
  autoClose = true,
  autoCloseDelay = 5000,
}) => {
  useEffect(() => {
    if (open && autoClose) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [open, autoClose, autoCloseDelay, onClose]);

  if (!open) return null;

  const bgColor = type === "success" ? "bg-green-100" : "bg-red-100";
  const borderColor =
    type === "success" ? "border-green-400" : "border-red-400";
  const textColor = type === "success" ? "text-green-800" : "text-red-800";
  const Icon = type === "success" ? CheckCircle : AlertCircle;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        className={`relative ${bgColor} ${borderColor} border-2 ${textColor} font-baskervville shadow-lg w-full max-w-md p-6 rounded-lg`}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-lg font-bold hover:opacity-70"
        >
          <X size={24} />
        </button>

        <div className="flex items-center gap-3">
          <Icon size={32} className="flex-shrink-0" />
          <div>
            <h3 className="text-xl font-baskervvilleSC font-bold mb-2">
              {type === "success" ? "Success!" : "Error!"}
            </h3>
            <p className="text-lg">{message}</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className={`mt-4 w-full py-2 px-4 ${
            type === "success"
              ? "bg-green-600 hover:bg-green-700"
              : "bg-red-600 hover:bg-red-700"
          } text-white font-baskervvilleSC rounded transition-colors`}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default NotificationModal;
