import React, { useState } from 'react';
import './PlaylistManagementPage.css';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import CreatePlaylistModal from '../components/modals/CreatePlaylistModal';
import EditPlaylistModal from '../components/modals/EditPlaylistModal';
import DeletePlaylistModal from '../components/modals/DeletePlaylistModal';

const PlaylistManagementPage = ({ activeItem = 'playlists', onNavigate }) => {
  const [playlists, setPlaylists] = useState([
    {
      id: 1,
      title: 'Girl',
      subtitle: 'Music Cover',
      thumbnail: 'https://via.placeholder.com/160x90?text=Girl+Music',
      type: 'Danh sách phát',
      visibility: 'Riêng tư',
      lastUpdated: '25 thg 5, 2026',
      videoCount: 5,
      views: 4,
    },
    {
      id: 2,
      title: 'Girl',
      subtitle: 'Music Cover',
      thumbnail: 'https://via.placeholder.com/160x90?text=Girl+Music',
      type: 'Danh sách phát',
      visibility: 'Riêng tư',
      lastUpdated: '25 thg 5, 2026',
      videoCount: 5,
      views: 4,
    },
    {
      id: 3,
      title: 'Girl',
      subtitle: 'Music Cover',
      thumbnail: 'https://via.placeholder.com/160x90?text=Girl+Music',
      type: 'Danh sách phát',
      visibility: 'Riêng tư',
      lastUpdated: '25 thg 5, 2026',
      videoCount: 5,
      views: 4,
    },
    {
      id: 4,
      title: 'Girl',
      subtitle: 'Music Cover',
      thumbnail: 'https://via.placeholder.com/160x90?text=Girl+Music',
      type: 'Danh sách phát',
      visibility: 'Riêng tư',
      lastUpdated: '25 thg 5, 2026',
      videoCount: 5,
      views: 4,
    },
    {
      id: 5,
      title: 'Girl',
      subtitle: 'Music Cover',
      thumbnail: 'https://via.placeholder.com/160x90?text=Girl+Music',
      type: 'Danh sách phát',
      visibility: 'Riêng tư',
      lastUpdated: '25 thg 5, 2026',
      videoCount: 5,
      views: 4,
    },
    {
      id: 6,
      title: 'Girl',
      subtitle: 'Music Cover',
      thumbnail: 'https://via.placeholder.com/160x90?text=Girl+Music',
      type: 'Danh sách phát',
      visibility: 'Riêng tư',
      lastUpdated: '25 thg 5, 2026',
      videoCount: 5,
      views: 4,
    },
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleCreatePlaylist = (formData) => {
    const newPlaylist = {
      id: playlists.length + 1,
      title: formData.title,
      subtitle: '',
      thumbnail: 'https://via.placeholder.com/160x90?text=' + formData.title,
      type: 'Danh sách phát',
      visibility: formData.visibility,
      lastUpdated: new Date().toLocaleDateString('vi-VN'),
      videoCount: 0,
      views: 0,
    };
    setPlaylists([...playlists, newPlaylist]);
    setShowCreateModal(false);
  };

  const handleEditPlaylist = (formData) => {
    setPlaylists(
      playlists.map((p) =>
        p.id === selectedPlaylist.id
          ? { ...p, title: formData.title, visibility: formData.visibility }
          : p
      )
    );
    setShowEditModal(false);
    setSelectedPlaylist(null);
  };

  const handleDeletePlaylist = () => {
    setPlaylists(playlists.filter((p) => p.id !== selectedPlaylist.id));
    setShowDeleteModal(false);
    setSelectedPlaylist(null);
  };

  const openEditModal = (playlist) => {
    setSelectedPlaylist(playlist);
    setShowEditModal(true);
  };

  const openDeleteModal = (playlist) => {
    setSelectedPlaylist(playlist);
    setShowDeleteModal(true);
  };

  const totalPages = Math.ceil(playlists.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPlaylists = playlists.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="playlist-management-page">
      <Sidebar activeItem={activeItem} onNavigate={onNavigate} />
      <Header />

      <main className="playlist-management-main">
        <div className="playlist-header">
          <h1>Danh sách phát của kênh</h1>
          <button
            className="btn-create-playlist"
            onClick={() => setShowCreateModal(true)}
          >
            + Tạo danh sách phát
          </button>
        </div>

        <div className="playlist-table-container">
          <table className="playlist-table">
            <thead>
              <tr>
                <th>Danh sách phát</th>
                <th>Loại</th>
                <th>Chế độ hiển thị</th>
                <th>Lần cập nhật gần nhất</th>
                <th>Số lượng Video</th>
                <th>Lượt xem</th>
              </tr>
            </thead>
            <tbody>
              {paginatedPlaylists.map((playlist) => (
                <tr key={playlist.id}>
                  <td className="playlist-name-cell">
                    <div className="playlist-name-content">
                      <img src={playlist.thumbnail} alt={playlist.title} />
                      <div className="playlist-info">
                        <h4>{playlist.title}</h4>
                        <span>{playlist.subtitle}</span>
                        <div className="playlist-actions-inline">
                          <button
                            className="action-btn-inline edit-btn-inline"
                            onClick={() => openEditModal(playlist)}
                          >
                            Chỉnh sửa
                          </button>
                          <button className="action-btn-inline view-btn-inline">
                            Xem Video
                          </button>
                          <button
                            className="action-btn-inline delete-btn-inline"
                            onClick={() => openDeleteModal(playlist)}
                          >
                            Xóa
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{playlist.type}</td>
                  <td>
                    <span className="visibility-select">
                      {playlist.visibility} <span className="dropdown-arrow">▾</span>
                    </span>
                  </td>
                  <td>{playlist.lastUpdated}</td>
                  <td>{playlist.videoCount}</td>
                  <td>{playlist.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <div className="pagination-left">
            <span>Số hàng mỗi trang: </span>
            <select className="pagination-select" defaultValue={10}>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>
          <div className="pagination-right">
            <span className="pagination-range">
              {startIndex + 1}-{Math.min(startIndex + itemsPerPage, playlists.length)}/{playlists.length} nhiều kết quả
            </span>
            <div className="pagination-controls">
              <button
                className="pagination-btn"
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
              >
                «
              </button>
              <button
                className="pagination-btn"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                ‹
              </button>
              <button
                className="pagination-btn"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                ›
              </button>
              <button
                className="pagination-btn"
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
              >
                »
              </button>
            </div>
          </div>
        </div>
      </main>

      {showCreateModal && (
        <CreatePlaylistModal
          onClose={() => setShowCreateModal(false)}
          onSubmit={handleCreatePlaylist}
        />
      )}

      {showEditModal && selectedPlaylist && (
        <EditPlaylistModal
          playlist={selectedPlaylist}
          onClose={() => {
            setShowEditModal(false);
            setSelectedPlaylist(null);
          }}
          onSubmit={handleEditPlaylist}
        />
      )}

      {showDeleteModal && selectedPlaylist && (
        <DeletePlaylistModal
          playlist={selectedPlaylist}
          onClose={() => {
            setShowDeleteModal(false);
            setSelectedPlaylist(null);
          }}
          onConfirm={handleDeletePlaylist}
        />
      )}
    </div>
  );
};

export default PlaylistManagementPage;