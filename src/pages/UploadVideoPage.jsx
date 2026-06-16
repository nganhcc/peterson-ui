import { useRef, useState } from "react";
import { Image, UploadCloud } from "lucide-react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import SuccessUploadModal from "../components/modals/SuccessUploadModal";
import "./UploadVideoPage.css";

export default function UploadVideoPage({ activeItem = "manageVideos", onNavigate }) {
  const videoInputRef = useRef(null);
  const thumbnailInputRef = useRef(null);
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState("");
  const [visibility, setVisibility] = useState("public");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  function handleVideoChange(event) {
    const [file] = event.target.files;
    if (file) {
      setVideoFile(file);
    }
  }

  function handleThumbnailChange(event) {
    const [file] = event.target.files;
    if (!file) return;

    setThumbnailFile(file);
    setThumbnailPreview(URL.createObjectURL(file));
  }

  function handleDrop(event) {
    event.preventDefault();
    const [file] = event.dataTransfer.files;
    if (file?.type.startsWith("video/")) {
      setVideoFile(file);
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
    <div className="upload-page">
      <Sidebar activeItem={activeItem} onNavigate={onNavigate} />
      <Header />

      <main className="upload-main">
        <h1>TẢI VIDEO MỚI LÊN KÊNH</h1>

        <form className="upload-content" onSubmit={handleSubmit}>
          <section
            className={`upload-dropzone ${videoFile ? "has-file" : ""}`}
            onDragOver={(event) => event.preventDefault()}
            onDrop={handleDrop}
          >
            <div className="upload-dropzone-inner">
              <div className="upload-icon-circle">
                <UploadCloud size={32} aria-hidden="true" />
              </div>

              <strong>Kéo thả video vào đây</strong>
              <span>hoặc</span>

              <button
                type="button"
                className="upload-outline-button"
                onClick={() => videoInputRef.current?.click()}
              >
                Chọn file từ thiết bị
              </button>

              <p>{videoFile ? videoFile.name : "MP4, MOV, AVI up to 10GB"}</p>
            </div>

            <input
              ref={videoInputRef}
              type="file"
              accept="video/mp4,video/quicktime,video/x-msvideo,video/*"
              onChange={handleVideoChange}
              hidden
            />
          </section>

          <section className="upload-form-card">
            <div className="upload-field">
              <label htmlFor="video-title">
                Tiêu đề video <span>*</span>
              </label>
              <input
                id="video-title"
                type="text"
                placeholder="Nhập tiêu đề hấp dẫn cho video của bạn..."
              />
            </div>

            <div className="upload-field">
              <label htmlFor="video-description">Mô tả video</label>
              <textarea
                id="video-description"
                placeholder="Mô tả nội dung video, thêm link và thông tin liên hệ..."
              />
            </div>

            <div className="upload-meta-grid">
              <div className="upload-thumbnail">
                <label>Thumbnail</label>
                <p>Chọn một hình ảnh thu hút sự chú ý của người xem.</p>

                <div className="thumbnail-row">
                  <button
                    type="button"
                    className="thumbnail-preview"
                    onClick={() => thumbnailInputRef.current?.click()}
                    aria-label="Chọn ảnh thumbnail"
                  >
                    {thumbnailPreview ? (
                      <img src={thumbnailPreview} alt={thumbnailFile?.name || "Thumbnail"} />
                    ) : (
                      <Image size={24} aria-hidden="true" />
                    )}
                  </button>

                  <button
                    type="button"
                    className="upload-outline-button thumbnail-button"
                    onClick={() => thumbnailInputRef.current?.click()}
                  >
                    Chọn ảnh
                  </button>
                </div>

                <input
                  ref={thumbnailInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/webp,image/*"
                  onChange={handleThumbnailChange}
                  hidden
                />
              </div>

              <div className="upload-field upload-tags">
                <label htmlFor="video-tags">Tags</label>
                <p>Thêm từ khóa giúp người dùng dễ dàng tìm thấy video.</p>
                <input
                  id="video-tags"
                  type="text"
                  placeholder="vd: vlog, du lịch, ẩm thực (phân cách bằng dấu phẩy)"
                />
              </div>
            </div>

            <div className="upload-divider" />

            <fieldset className="upload-visibility">
              <legend>Quyền truy cập</legend>

              <label>
                <input
                  type="radio"
                  name="visibility"
                  value="public"
                  checked={visibility === "public"}
                  onChange={(event) => setVisibility(event.target.value)}
                />
                <span>
                  <strong>Công khai</strong>
                  <small>Mọi người đều có thể xem video này</small>
                </span>
              </label>

              <label>
                <input
                  type="radio"
                  name="visibility"
                  value="private"
                  checked={visibility === "private"}
                  onChange={(event) => setVisibility(event.target.value)}
                />
                <span>
                  <strong>Riêng tư</strong>
                  <small>Chỉ bạn và những người được chọn mới có thể xem</small>
                </span>
              </label>
            </fieldset>
          </section>

          <footer className="upload-actions">
            <button type="button" className="upload-outline-button upload-action-button" onClick={handleCancel}>
              HỦY
            </button>
            <button type="submit" className="upload-primary-button upload-action-button">
              ĐĂNG TẢI
            </button>
          </footer>
        </form>
      </main>

      <SuccessUploadModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </div>
  );
}
