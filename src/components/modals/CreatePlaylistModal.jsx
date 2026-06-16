import { useState } from "react";

export default function CreatePlaylistModal({ isOpen, onClose, onCreate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [visibility, setVisibility] = useState("private");

  if (!isOpen) return null;

  function handleOverlayMouseDown(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    onCreate?.({ title, description, visibility });
    onClose();
  }

  return (
    <div className="modal-overlay playlist-create-overlay" onMouseDown={handleOverlayMouseDown}>
      <form className="playlist-create-panel" onSubmit={handleSubmit}>
        <h3>Danh sách phát mới</h3>

        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="chọn một tiêu đề"
          aria-label="Tiêu đề danh sách phát"
        />

        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="nhập mô tả"
          aria-label="Mô tả danh sách phát"
        />

        <label htmlFor="playlist-visibility">Chế độ hiển thị</label>
        <select
          id="playlist-visibility"
          value={visibility}
          onChange={(event) => setVisibility(event.target.value)}
        >
          <option value="private">Riêng tư</option>
          <option value="unlisted">Không công khai</option>
          <option value="public">Công khai</option>
        </select>

        <div className="playlist-create-actions">
          <button type="button" className="playlist-ghost-button" onClick={onClose}>
            Hủy
          </button>
          <button type="submit" className="playlist-light-button">
            Tạo
          </button>
        </div>
      </form>
    </div>
  );
}
