import { useState, useMemo } from 'react';
import PlaylistDetailHeader from '../components/layout/PlaylistDetailHeader';
import PlaylistDetailSidebar from '../components/layout/PlaylistDetailSidebar';
import SuccessModal from '../components/modals/SuccessModal';
import DeleteVideoModal from '../components/modals/DeleteVideoModal';
import './PlaylistDetailPage.css';

// Sinh dữ liệu video ngẫu nhiên dựa trên số lượng video của playlist
const generateVideos = (count) => {
  const titles = [
    'Obito - Hà Nội ft. VSTRA',
    'Chill Vibes - Lofi Beat',
    'Nhạc Trẻ Thịnh Hành 2026',
    'Acoustic Cover - Best Hits',
    'Rap Việt Nổi Bật - Top Charts',
    'Nhạc Thư Giãn - Relaxing Music',
    'Lofi Study - Focus Music',
    'Pop Mix - Summer Vibes',
  ];
  const channels = ['Music Official', 'Cover Channel', 'Lofi Studio', 'Top Hits VN', 'Chill Beats'];
  const durations = ['3:45', '4:12', '2:58', '5:30', '3:21', '4:55', '3:08', '6:10'];
  const visibilities = ['Công khai', 'Không công khai', 'Riêng tư'];

  return Array.from({ length: count }, (_, i) => {
    const randomDay = Math.floor(Math.random() * 28) + 1;
    const randomMonth = Math.floor(Math.random() * 12) + 1;
    return {
      id: i + 1,
      title: titles[i % titles.length],
      channel: channels[i % channels.length],
      thumbnail: `https://picsum.photos/seed/video${i + 1}/160/90`,
      duration: durations[i % durations.length],
      visibility: visibilities[i % visibilities.length],
      date: `${randomDay} thg ${randomMonth}, 2026`,
      views: Math.floor(Math.random() * 100000000),
      comments: Math.floor(Math.random() * 5000),
    };
  });
};

export default function PlaylistDetailPage({ playlist, onBack }) {
  // Trạng thái đã lưu (mốc khôi phục & hiển thị sidebar nhỏ bên trong)
  const [savedState, setSavedState] = useState({
    title: playlist?.title || 'Tên danh sách phát',
    description: playlist?.subtitle || '',
    visibility: playlist?.visibility || 'Riêng tư',
  });

  // Trạng thái bản nháp trên form
  const [title, setTitle] = useState(savedState.title);
  const [description, setDescription] = useState(savedState.description);
  const [visibility, setVisibility] = useState(savedState.visibility);
  const [sortBy, setSortBy] = useState('Sắp xếp theo ngày thêm');
  
  const [activeTab, setActiveTab] = useState('settings');
  const [currentPage, setCurrentPage] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [videoList, setVideoList] = useState(() => generateVideos(playlist?.videoCount || 5));
  const [showDeleteVideoModal, setShowDeleteVideoModal] = useState(false);
  const [videoToDelete, setVideoToDelete] = useState(null);
  const videosPerPage = 10;

  const videos = videoList;
  const totalVideoPages = Math.ceil(videos.length / videosPerPage);
  const videoStart = (currentPage - 1) * videosPerPage;
  const paginatedVideos = videos.slice(videoStart, videoStart + videosPerPage);

  const handleDeleteVideo = () => {
    if (videoToDelete) {
      setVideoList((prev) => prev.filter((v) => v.id !== videoToDelete.id));
      setShowDeleteVideoModal(false);
      setVideoToDelete(null);
    }
  };

  const openDeleteVideoModal = (video) => {
    setVideoToDelete(video);
    setShowDeleteVideoModal(true);
  };

  const handleSave = () => {
    setSavedState({ title, description, visibility });
    if (playlist) {
      playlist.title = title;
      playlist.subtitle = description;
      playlist.visibility = visibility;
    }
    setShowSuccessModal(true);
  };

  const handleCancel = () => {
    setTitle(savedState.title);
    setDescription(savedState.description);
    setVisibility(savedState.visibility);
  };

  return (
    <div className="playlist-detail-page">
      <PlaylistDetailHeader />

      <main className="playlist-detail-main">
        <div className="playlist-detail-layout">
          <PlaylistDetailSidebar
            thumbnail={playlist?.thumbnail}
            title={savedState.title}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            onBack={onBack}
          />

          {/* Nội dung chính */}
          <section className="playlist-detail-content">
            <div className="playlist-detail-header">
              <h1>Thông tin chi tiết về danh sách phát</h1>
              <div className="playlist-detail-actions">
                <button type="button" className="btn-cancel" onClick={handleCancel}>
                  Hủy thay đổi
                </button>
                <button type="button" className="btn-save" onClick={handleSave}>
                  Lưu
                </button>
              </div>
            </div>

            {activeTab === 'settings' && (
              <form className="playlist-detail-form" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                <div className="form-column main-col">
                  <div className="input-group">
                    <label htmlFor="playlist-title">Tiêu đề (bắt buộc)</label>
                    <input
                      id="playlist-title"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Tên danh sách phát"
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="playlist-description">Mô tả</label>
                    <textarea
                      id="playlist-description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Thêm nội dung mô tả"
                    />
                  </div>
                </div>

                <div className="form-column side-col">
                  <div className="input-group">
                    <label htmlFor="playlist-visibility">Chế độ hiển thị</label>
                    <select
                      id="playlist-visibility"
                      value={visibility}
                      onChange={(e) => setVisibility(e.target.value)}
                    >
                      <option value="Riêng tư">Riêng tư</option>
                      <option value="Không công khai">Không công khai</option>
                      <option value="Công khai">Công khai</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label htmlFor="playlist-sort">Thứ tự video mặc định</label>
                    <select
                      id="playlist-sort"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="Sắp xếp theo ngày thêm">Sắp xếp theo ngày thêm</option>
                      <option value="Sắp xếp phổ biến nhất">Sắp xếp phổ biến nhất</option>
                    </select>
                  </div>
                </div>
              </form>
            )}

            {activeTab === 'videos' && (
              <div className="playlist-videos-tab">
                <h2 className="pv-title">Video trong danh sách phát</h2>

                <div className="pv-table-container">
                  <table className="pv-table">
                    <thead>
                      <tr>
                        <th>Video</th>
                        <th>Chế độ hiển thị</th>
                        <th>Hạn chế</th>
                        <th>Ngày</th>
                        <th>Lượt xem</th>
                        <th>Số bình luận</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedVideos.map((v) => (
                        <tr key={v.id}>
                          <td className="pv-video-cell">
                            <div className="pv-video-info">
                              <div className="pv-thumb">
                                <img src={v.thumbnail} alt={v.title} />
                                <span className="pv-duration">{v.duration}</span>
                              </div>
                              <div className="pv-meta">
                                <strong className="pv-video-title">{v.title}</strong>
                                <span className="pv-channel">{v.channel}</span>
                                <span className="pv-date-added">Đã thêm {v.date}</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className={`pv-vis-badge ${v.visibility === 'Công khai' ? 'public' : ''}`}>
                              {v.visibility === 'Công khai' && <span className="pv-dot" />}
                              {v.visibility}
                            </span>
                          </td>
                          <td className="pv-restrict">Không có</td>
                          <td>{v.date}</td>
                          <td>{v.views.toLocaleString('vi-VN')}</td>
                          <td>{v.comments.toLocaleString('vi-VN')}</td>
                          <td>
                            <button
                              className="pv-delete-btn"
                              onClick={() => openDeleteVideoModal(v)}
                            >
                              Xóa
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="pv-pagination">
                  <div className="pv-pagination-left">
                    <span>Số hàng mỗi trang: </span>
                    <select defaultValue={10}>
                      <option value={10}>10</option>
                      <option value={25}>25</option>
                    </select>
                  </div>
                  <div className="pv-pagination-right">
                    <span>
                      {videoStart + 1}-{Math.min(videoStart + videosPerPage, videos.length)}/{videos.length} nhiều kết quả
                    </span>
                    <div className="pv-pagination-btns">
                      <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>«</button>
                      <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1}>‹</button>
                      <button onClick={() => setCurrentPage(Math.min(totalVideoPages, currentPage + 1))} disabled={currentPage === totalVideoPages}>›</button>
                      <button onClick={() => setCurrentPage(totalVideoPages)} disabled={currentPage === totalVideoPages}>»</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="THÔNG BÁO"
        message="Chỉnh sửa danh sách phát thành công."
      />

      <DeleteVideoModal
        isOpen={showDeleteVideoModal}
        onClose={() => {
          setShowDeleteVideoModal(false);
          setVideoToDelete(null);
        }}
        onConfirm={handleDeleteVideo}
        videoTitle={videoToDelete?.title || ''}
      />
    </div>
  );
}
