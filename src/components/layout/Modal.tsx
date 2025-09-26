"use client";
import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end bg-black/50 backdrop-blur-sm"
      onClick={onClose} // close if clicking outside modal
    >
      {/* Bottom Sheet Modal */}
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        className="relative w-full max-h-[85vh] overflow-y-auto bg-white shadow-lg animate-slideUp"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <X size={28} />
        </button>

        {/* Title */}
        {title && (
          <h2 className="text-xl font-bold text-center text-[#0A1311] mt-4 mb-2">
            {title}
          </h2>
        )}

        {/* Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
