import { X } from "lucide-react";
import { useState } from "react";

export default function EditCommentModal({
  isOpen,
  onClose,
  onSave,
  initialComment = "Video rất hữu ích cho sinh viên CNTT.",
}) {
  const [comment, setComment] = useState(initialComment);

  if (!isOpen) return null;

  function handleOverlayMouseDown(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSave?.(comment);
    onClose();
  }

  return (
    <div className="modal-overlay comment-edit-overlay" onMouseDown={handleOverlayMouseDown}>
      <form
        className="comment-edit-panel"
        onSubmit={handleSubmit}
        role="dialog"
        aria-modal="true"
        aria-label="Popup sửa bình luận"
      >
        <header className="compact-modal-header">
          <h3>Popup sửa bình luận (modal popup)</h3>
          <button type="button" onClick={onClose} aria-label="Đóng modal">
            <X size={16} aria-hidden="true" />
          </button>
        </header>

        <div className="comment-edit-content">
          <p>Chỉ chủ bình luận mới được chỉnh sửa. Sau khi lưu sẽ gắn nhãn “đã chỉnh sửa”.</p>
          <label htmlFor="edit-comment">NỘI DUNG BÌNH LUẬN CŨ</label>
          <textarea
            id="edit-comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            aria-label="Nội dung bình luận cũ"
          />
        </div>

        <footer className="comment-edit-actions">
          <button type="button" className="text-button" onClick={onClose}>
            Hủy
          </button>
          <button type="submit" className="compact-light-button">
            Lưu
          </button>
        </footer>
      </form>
    </div>
  );
}
