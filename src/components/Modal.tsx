import { X } from "lucide-react";
import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50">
      <div
        className="relative bg-[#D2E1E3] text-[#2B1F09] font-baskervville shadow-lg w-full max-w-full max-h-[80vh] overflow-y-auto p-6"
        // Bottom sheet: full width, 80% viewport height, scrollable, rounded top corners
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold text-[#061517] hover:text-[#91671D]"
        >
          <X size={48} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
