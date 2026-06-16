import { AlertTriangle, Check } from "lucide-react";
import BaseModal from "./BaseModal";

export default function SuccessModal({
  isOpen,
  onClose,
  title = "THÔNG BÁO",
  message,
  description,
  variant = "success",
}) {
  const Icon = variant === "warning" ? AlertTriangle : Check;

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="modal-body modal-body-centered">
        <div className={`modal-status modal-status-${variant}`}>
          <div>
            <Icon size={18} strokeWidth={3} aria-hidden="true" />
          </div>
        </div>

        <p className="modal-message">{message}</p>

        {description && (
          <p className="modal-description">{description}</p>
        )}

        <button
          type="button"
          onClick={onClose}
          className="modal-primary-button"
        >
          ĐÓNG
        </button>
      </div>
    </BaseModal>
  );
}
