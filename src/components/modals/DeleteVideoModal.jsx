import { Trash2 } from "lucide-react";

export default function DeleteVideoModal({
  isOpen,
  onClose,
  onConfirm,
  videoTitle = "Ultimate 2024 UI Setup",
}) {
  if (!isOpen) return null;

  function handleOverlayMouseDown(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div className="modal-overlay delete-video-overlay" onMouseDown={handleOverlayMouseDown}>
      <section
        className="delete-video-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Xác nhận xóa video"
      >
        <div className="delete-video-icon">
          <Trash2 size={20} aria-hidden="true" />
        </div>

        <h3>Xác nhận xóa video</h3>

        <p>
          Bạn có chắc chắn muốn xóa video <strong>“{videoTitle}”</strong> khỏi danh sách phát
          không? Hành động này không thể hoàn tác.
        </p>

        <div className="delete-video-actions">
          <button type="button" className="playlist-outline-button" onClick={onClose}>
            Hủy
          </button>
          <button type="button" className="playlist-light-button" onClick={onConfirm}>
            Xác nhận
          </button>
        </div>
      </section>
    </div>
  );
}
