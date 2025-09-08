"use client";
import { X } from "lucide-react";
import React, { useEffect, useRef } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      onClick={onClose} // clicking overlay closes modal
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50"
    >
      <div
        className="relative bg-[#D2E1E3] text-[#2B1F09] font-baskervville shadow-lg w-full max-w-full max-h-[80vh] overflow-y-auto p-6"
        // Bottom sheet: full width, 80% viewport height, scrollable, rounded top corners
        ref={modalRef}
        onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold text-[#061517] hover:text-[#91671D] transition-colors duration-300"
        >
          <X size={48} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
