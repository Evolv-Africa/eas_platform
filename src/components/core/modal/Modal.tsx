import { FC, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ open, onClose, title, subtitle, children }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-100 flex items-end sm:items-center justify-center p-0 sm:p-5 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full sm:max-w-lg max-h-[92vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-white shadow-2xl p-6 md:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 rounded-full text-semantic-text-secondary hover:border-[#4CAF50] hover:text-[#4CAF50] hover:bg-gray-300 transition-colors cursor-pointer"
        >
          ✕
        </button>
        <div className="space-y-2 mb-6 pr-10">
          <h2 className="font-neue-machina font-extrabold text-2xl md:text-3xl leading-tight text-semantic-text-primary">
            {title}
          </h2>
          {subtitle && (
            <p className="font-poppins text-sm text-semantic-text-secondary leading-6">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </div>,
    document.body,
  );
};

