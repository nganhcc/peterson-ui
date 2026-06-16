import { X } from "lucide-react";

export default function DeleteCommentModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  function handleOverlayMouseDown(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div className="modal-overlay comment-delete-overlay" onMouseDown={handleOverlayMouseDown}>
      <section
        className="comment-delete-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Xác nhận xóa bình luận"
      >
        <header className="compact-modal-header">
          <h3>Xác nhận xóa bình luận</h3>
          <button type="button" onClick={onClose} aria-label="Đóng modal">
            <X size={15} aria-hidden="true" />
          </button>
        </header>

        <p>
          Bạn có chắc muốn xóa bình luận này? Bình luận và toàn bộ phần trả lời quan sẽ
          bị xóa. Hành động này không thể hoàn tác.
        </p>

        <div className="comment-delete-actions">
          <button type="button" className="compact-outline-button" onClick={onClose}>
            Hủy
          </button>
          <button type="button" className="compact-red-button" onClick={onConfirm}>
            Xác nhận xóa
          </button>
        </div>
      </section>
    </div>
  );
}
