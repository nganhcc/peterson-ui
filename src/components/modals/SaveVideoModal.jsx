import { CheckCircle2, X } from "lucide-react";
import { useState } from "react";

const playlists = ["Xem sau", "Học lập trình", "Video yêu thích"];

export default function SaveVideoModal({ isOpen, onClose, onSave }) {
  const [selectedPlaylist, setSelectedPlaylist] = useState("Học lập trình");
  const [newPlaylistName, setNewPlaylistName] = useState("");

  if (!isOpen) return null;

  function handleOverlayMouseDown(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  function handleSave() {
    onSave?.({ selectedPlaylist, newPlaylistName });
    onClose();
  }

  return (
    <div className="modal-overlay save-video-overlay" onMouseDown={handleOverlayMouseDown}>
      <section
        className="save-video-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Popup lưu video"
      >
        <header className="compact-modal-header">
          <h3>Popup lưu video</h3>
          <button type="button" onClick={onClose} aria-label="Đóng modal">
            <X size={15} aria-hidden="true" />
          </button>
        </header>

        <div className="save-video-content">
          <p>
            Người dùng nhấn nút Lưu dưới video. Hệ thống thêm video vào playlist đã chọn;
            nút Lưu cũng có thể nhận lại để bỏ lưu.
          </p>

          <span className="compact-label">CHỌN PLAYLIST</span>
          <div className="playlist-chip-row" role="group" aria-label="Chọn playlist">
            {playlists.map((playlist) => (
              <button
                key={playlist}
                type="button"
                className={selectedPlaylist === playlist ? "playlist-chip playlist-chip-active" : "playlist-chip"}
                onClick={() => setSelectedPlaylist(playlist)}
              >
                {selectedPlaylist === playlist && <CheckCircle2 size={12} aria-hidden="true" />}
                <span>{playlist}</span>
              </button>
            ))}
          </div>

          <span className="compact-label">TẠO PLAYLIST MỚI</span>
          <input
            type="text"
            value={newPlaylistName}
            onChange={(event) => setNewPlaylistName(event.target.value)}
            placeholder="Nhập tên playlist mới..."
            aria-label="Tên playlist mới"
          />

          <div className="save-video-inline-actions">
            <button type="button" className="compact-outline-button" onClick={handleSave}>
              Lưu
            </button>
            <button type="button" className="compact-light-button" onClick={onClose}>
              <CheckCircle2 size={12} aria-hidden="true" />
              <span>Đã lưu</span>
            </button>
            <button type="button" className="compact-light-button" onClick={handleSave}>
              Tạo playlist
            </button>
          </div>
        </div>

        <footer className="save-video-footer">
          <button type="button" className="compact-outline-button" onClick={onClose}>
            ĐÓNG
          </button>
        </footer>
      </section>
    </div>
  );
}
