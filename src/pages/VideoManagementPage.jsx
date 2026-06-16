import { ChevronLeft, ChevronRight, Pencil, Search, SlidersHorizontal, Trash2, Upload } from "lucide-react";
import { useState } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import SuccessDeleteVideoModal from "../components/modals/SuccessDeleteVideoModal";
import "./VideoManagementPage.css";

const videos = [
  { id: 1, title: "Top 10 VS Code Extensions 2026", visibility: "CÔNG KHAI", duration: "15:30" },
  { id: 2, title: "Top 10 VS Code Extensions 2026", visibility: "CÔNG KHAI", duration: "15:30" },
  { id: 3, title: "Top 10 VS Code Extensions 2026", visibility: "CÔNG KHAI", duration: "15:30" },
  { id: 4, title: "Top 10 VS Code Extensions 2026", visibility: "CÔNG KHAI", duration: "15:30" },
];

export default function VideoManagementPage({ activeItem = "manageVideos", onNavigate }) {
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);

  return (
    <div className="video-management-page">
      <Sidebar activeItem={activeItem} onNavigate={onNavigate} />
      <Header />

      <main className="video-management-main">
        <div className="video-management-heading">
          <h1>QUẢN LÝ VIDEO CÁ NHÂN</h1>
        </div>

        <section className="video-management-toolbar" aria-label="Công cụ quản lý video">
          <div className="manage-search">
            <input type="text" placeholder="Tìm kiếm video..." aria-label="Tìm kiếm video" />
            <Search size={16} aria-hidden="true" />
          </div>

          <button type="button" className="manage-filter-button">
            <SlidersHorizontal size={15} aria-hidden="true" />
            Lọc
          </button>

          <button type="button" className="manage-all-button">
            Tất cả
          </button>

          <button type="button" className="manage-upload-button" onClick={() => onNavigate?.("uploadVideo")}>
            <Upload size={15} aria-hidden="true" />
            Tải video mới
          </button>
        </section>

        <section className="video-table-card">
          <div className="video-table-head">
            <span>Thumbnail</span>
            <span>Tiêu đề</span>
            <span>Trạng thái</span>
            <span>Hành động</span>
          </div>

          {videos.map((video) => (
            <article key={video.id} className="video-table-row">
              <div className="managed-thumbnail-wrap">
                <span className="managed-video-thumb">
                  <span>{video.duration}</span>
                </span>
              </div>
              <strong className="managed-video-title">{video.title}</strong>
              <span className="managed-status-pill">{video.visibility}</span>
              <div className="managed-video-actions">
                <button
                  type="button"
                  className="manage-icon-button"
                  onClick={() => onNavigate?.("editVideo")}
                  aria-label="Chỉnh sửa video"
                >
                  <Pencil size={18} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="manage-icon-button"
                  onClick={() => setShowDeleteSuccess(true)}
                  aria-label="Xóa video"
                >
                  <Trash2 size={18} aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </section>

        <nav className="video-pagination" aria-label="Phân trang video">
          <button type="button" aria-label="Trang trước">
            <ChevronLeft size={15} aria-hidden="true" />
          </button>
          <button type="button" className="active">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <span>...</span>
          <button type="button">15</button>
          <button type="button" aria-label="Trang sau">
            <ChevronRight size={15} aria-hidden="true" />
          </button>
        </nav>
      </main>

      <SuccessDeleteVideoModal
        isOpen={showDeleteSuccess}
        onClose={() => setShowDeleteSuccess(false)}
      />
    </div>
  );
}
