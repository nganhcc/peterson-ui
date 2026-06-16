import { X } from "lucide-react";
import { useState } from "react";

export default function ReplyCommentModal({
  isOpen,
  onClose,
  onSubmit,
  commenterName = "Nguyễn Văn A",
}) {
  const [reply, setReply] = useState("");

  if (!isOpen) return null;

  function handleOverlayMouseDown(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit?.(reply);
    onClose();
  }

  return (
    <div className="modal-overlay comment-reply-overlay" onMouseDown={handleOverlayMouseDown}>
      <form
        className="comment-reply-panel"
        onSubmit={handleSubmit}
        role="dialog"
        aria-modal="true"
        aria-label="Trả lời bình luận"
      >
        <header className="compact-modal-header">
          <h3>Trả lời bình luận</h3>
          <button type="button" className="compact-close-pill" onClick={onClose} aria-label="Đóng modal">
            <span>Đóng</span>
            <X size={10} aria-hidden="true" />
          </button>
        </header>

        <div className="comment-reply-content">
          <p>Đang trả lời bình luận của {commenterName}.</p>
          <textarea
            value={reply}
            onChange={(event) => setReply(event.target.value)}
            placeholder={`@${commenterName} Nhập nội dung trả lời... (textbox)`}
            aria-label="Nội dung trả lời bình luận"
          />
        </div>

        <footer className="comment-reply-actions">
          <button type="submit" className="compact-light-button">
            Đăng
          </button>
          <button type="button" className="compact-outline-button" onClick={onClose}>
            Hủy
          </button>
        </footer>
      </form>
    </div>
  );
}
