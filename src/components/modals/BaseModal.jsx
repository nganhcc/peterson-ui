import { X } from "lucide-react";

export default function BaseModal({ isOpen, title, children, onClose }) {
  if (!isOpen) return null;

  function handleOverlayMouseDown(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div className="modal-overlay" onMouseDown={handleOverlayMouseDown}>
      <div className="modal-panel" role="dialog" aria-modal="true" aria-label={title}>
        <div className="modal-header">
          <h3>{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="modal-close"
            aria-label="Đóng modal"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
