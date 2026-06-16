import { useRef, useState } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import SuccessEditVideoModal from "../components/modals/SuccessEditVideoModal";
import "./EditVideoPage.css";

export default function EditVideoPage({ activeItem = "manageVideos", onNavigate }) {
  const thumbnailInputRef = useRef(null);
  const [thumbnailPreview, setThumbnailPreview] = useState("");
  const [visibility, setVisibility] = useState("public");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  function handleThumbnailChange(event) {
    const [file] = event.target.files;
    if (file) {
      setThumbnailPreview(URL.createObjectURL(file));
    }
  }

  function handleCancel() {
    onNavigate?.("manageVideos");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setShowSuccessModal(true);
  }

  return (
    <div className="edit-video-page">
      <Sidebar activeItem={activeItem} onNavigate={onNavigate} />
      <Header />

      <main className="edit-video-main">
        <form className="edit-video-form" onSubmit={handleSubmit}>
          <div className="edit-video-title-bar">
            <h1>CHỈNH SỬA VIDEO</h1>
          </div>

          <section className="edit-thumbnail-section">
            <label>Thumbnail</label>
            <div className="edit-thumbnail-row">
              <button
                type="button"
                className="edit-thumbnail-preview"
                onClick={() => thumbnailInputRef.current?.click()}
                aria-label="Thay đổi thumbnail"
              >
                {thumbnailPreview ? <img src={thumbnailPreview} alt="Thumbnail mới" /> : <span />}
              </button>

              <button
                type="button"
                className="edit-neutral-button"
                onClick={() => thumbnailInputRef.current?.click()}
              >
                Thay đổi thumbnail
              </button>
            </div>
            <input
              ref={thumbnailInputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp,image/*"
              onChange={handleThumbnailChange}
              hidden
            />
          </section>

          <section className="edit-video-fields">
            <div className="edit-field">
              <label htmlFor="edit-title">Tiêu đề</label>
              <input id="edit-title" type="text" defaultValue="Hướng dẫn Docker từ A-Z 2026" />
            </div>

            <div className="edit-field">
              <label htmlFor="edit-description">Mô tả</label>
              <textarea id="edit-description" />
            </div>

            <div className="edit-field edit-tags-field">
              <label htmlFor="edit-tags">Tags</label>
              <div className="edit-tags-control">
                <input id="edit-tags" type="text" aria-label="Tags" />
                <button type="button" className="edit-small-button">
                  + Thêm tag
                </button>
              </div>
            </div>

            <fieldset className="edit-visibility">
              <legend>Chế độ</legend>
              <label>
                <input
                  type="radio"
                  name="edit-visibility"
                  value="public"
                  checked={visibility === "public"}
                  onChange={(event) => setVisibility(event.target.value)}
                />
                <span>Công khai</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="edit-visibility"
                  value="private"
                  checked={visibility === "private"}
                  onChange={(event) => setVisibility(event.target.value)}
                />
                <span>Riêng tư</span>
              </label>
            </fieldset>
          </section>

          <footer className="edit-video-actions">
            <button type="button" className="edit-outline-button" onClick={handleCancel}>
              HỦY
            </button>
            <button type="submit" className="edit-primary-button">
              LƯU THAY ĐỔI
            </button>
          </footer>
        </form>
      </main>

      <SuccessEditVideoModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </div>
  );
}
