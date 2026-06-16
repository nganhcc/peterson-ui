import { useState } from "react";

export default function EditPlaylistModal({ playlist, onClose, onSubmit }) {
  const [title, setTitle] = useState(playlist?.title || "");
  const [visibility, setVisibility] = useState(playlist?.visibility || "Riêng tư");

  function handleOverlayMouseDown(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit?.({ title, visibility });
  }

  return (
    <div className="modal-overlay playlist-create-overlay" onMouseDown={handleOverlayMouseDown}>
      <form className="playlist-create-panel" onSubmit={handleSubmit}>
        <h3>Sửa danh sách phát</h3>

        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Tiêu đề danh sách phát"
          aria-label="Tiêu đề danh sách phát"
        />

        <label htmlFor="edit-playlist-visibility">Chế độ hiển thị</label>
        <select
          id="edit-playlist-visibility"
          value={visibility}
          onChange={(event) => setVisibility(event.target.value)}
        >
          <option value="Riêng tư">Riêng tư</option>
          <option value="Công khai">Công khai</option>
        </select>

        <div className="playlist-create-actions">
          <button type="button" className="playlist-ghost-button" onClick={onClose}>
            Hủy
          </button>
          <button type="submit" className="playlist-light-button">
            Lưu
          </button>
        </div>
      </form>
    </div>
  );
}