import {
  ChevronsLeft,
  ChevronsRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ListVideo,
  Plus,
} from "lucide-react";
import { useState } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import CreatePlaylistModal from "../components/modals/CreatePlaylistModal";
import DeletePlaylistModal from "../components/modals/DeletePlaylistModal";

// Thêm thuộc tính thumbnail sinh ảnh ngẫu nhiên từ picsum
const initialPlaylists = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  title: `Danh sách phát ${index + 1}`,
  subtitle: "Music Cover",
  type: "Danh sách phát",
  visibility: "Riêng tư",
  updatedAt: "25 thg 5, 2026",
  videoCount: Math.floor(Math.random() * 20) + 5,
  views: Math.floor(Math.random() * 100) + 10,
  thumbnail: `https://picsum.photos/seed/playlist_thumb_${index + 1}/124/72`,
}));

const smallActionButtonClass =
  "inline-flex min-h-10 min-w-[58px] items-center justify-center rounded-full border border-[#4a4a4a] bg-transparent px-4 text-xs font-semibold leading-tight text-[#e8e8e8] hover:bg-[#2b2b2b] hover:text-white";
const pageButtonClass =
  "inline-flex size-7 items-center justify-center rounded-full border-0 bg-transparent text-[#a8a8a8] hover:bg-[#303030] hover:text-white";

export default function PlaylistPage({ activeItem = "playlists", onNavigate }) {
  const [playlists, setPlaylists] = useState(initialPlaylists);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [deletingPlaylist, setDeletingPlaylist] = useState(null);

  function handleCreatePlaylist(nextPlaylist) {
    const title = nextPlaylist.title.trim() || "Danh sách phát mới";
    const visibilityLabel = {
      private: "Riêng tư",
      unlisted: "Không công khai",
      public: "Công khai",
    }[nextPlaylist.visibility];

    const newId = Date.now();

    setPlaylists((currentPlaylists) => [
      {
        id: newId,
        title,
        subtitle: nextPlaylist.description.trim() || "Chưa có mô tả",
        type: "Danh sách phát",
        visibility: visibilityLabel,
        updatedAt: "16 thg 6, 2026",
        videoCount: 0,
        views: 0,
        // Cấp ảnh ngẫu nhiên cho danh sách phát mới tạo
        thumbnail: `https://picsum.photos/seed/playlist_new_${newId}/124/72`,
      },
      ...currentPlaylists,
    ]);
  }

  function handleConfirmDelete() {
    if (!deletingPlaylist) return;
    setPlaylists((currentPlaylists) =>
      currentPlaylists.filter((playlist) => playlist.id !== deletingPlaylist.id),
    );
    setDeletingPlaylist(null);
  }

  return (
    <div className="min-h-screen bg-[#1f1f1f] text-[#f4f4f4]">
      <Sidebar activeItem={activeItem} onNavigate={onNavigate} />
      <Header />

      <main className="ml-[172px] min-h-screen px-[52px] pt-[104px] pb-8 max-md:ml-0 max-md:px-4 max-md:pt-[92px]">
        <section className="mx-auto w-full max-w-[1320px]" aria-label="Danh sách phát của kênh">
          <div className="mb-5 flex items-center justify-between gap-5 max-md:flex-col max-md:items-start">
            <h1 className="m-0 text-[34px] leading-tight font-black text-white max-md:text-2xl">
              Danh sách phát của kênh
            </h1>
            <button
              type="button"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border-0 bg-[#f4f4f4] px-5 text-base font-semibold text-[#151515] hover:bg-[#dedede] max-md:w-full"
              onClick={() => setIsCreateOpen(true)}
            >
              <Plus size={18} aria-hidden="true" />
              Tạo danh sách phát
            </button>
          </div>

          <div className="overflow-hidden rounded-[42px] border border-[#444] bg-[#1d1d1d] max-md:rounded-[22px]">
            <div className="grid min-h-[95px] grid-cols-[minmax(300px,1fr)_110px_150px_170px_130px_90px] items-center gap-5 border-b border-[#373737] px-8 text-[20px] font-semibold tracking-[0.01em] text-[#c9c9c9] max-2xl:grid-cols-[minmax(280px,1fr)_100px_135px_155px_115px_80px] max-2xl:gap-4 max-xl:hidden">
              <span>Danh sách phát</span>
              <span>Loại</span>
              <span>Chế độ hiển thị</span>
              <span>Lần cập nhật gần nhất</span>
              <span className="text-center">Số lượng Video</span>
              <span className="text-center">Lượt xem</span>
            </div>

            <div className="px-8 py-3 max-2xl:px-6 max-md:px-4 max-md:py-1">
              {playlists.map((playlist) => (
                <article
                  key={playlist.id}
                  className="grid min-h-[116px] grid-cols-[minmax(300px,1fr)_110px_150px_170px_130px_90px] items-center gap-5 max-2xl:grid-cols-[minmax(280px,1fr)_100px_135px_155px_115px_80px] max-2xl:gap-4 max-xl:grid-cols-1 max-xl:gap-4 max-xl:border-b max-xl:border-[#303030] max-xl:py-6 max-xl:last:border-b-0"
                >
                  <div className="flex min-w-0 items-center gap-4 max-sm:flex-col max-sm:items-start">
                    <div className="relative h-[72px] w-[124px] shrink-0 overflow-hidden rounded-[10px] bg-[#333] max-sm:h-auto max-sm:w-full max-sm:aspect-video">
                      {/* Dùng thẻ img để hiển thị ảnh thật được sinh ngẫu nhiên */}
                      <img src={playlist.thumbnail} alt={playlist.title} className="absolute inset-0 h-full w-full object-cover" />
                      <span className="absolute inset-y-0 right-0 flex w-[42px] flex-col items-center justify-center gap-1 bg-black/55 text-xs font-black text-white">
                        <span>{playlist.videoCount}</span>
                        <ListVideo size={16} aria-hidden="true" />
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h2 className="m-0 truncate text-sm font-extrabold text-white">{playlist.title}</h2>
                      <p className="m-0 mt-1 truncate text-xs text-[#c8c8c8]">{playlist.subtitle}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <button
                          type="button"
                          className={smallActionButtonClass}
                          onClick={() => onNavigate?.("editPlaylist", playlist)}
                        >
                          Chỉnh
                          <br />
                          sửa
                        </button>
                        <button
                          type="button"
                          className={smallActionButtonClass}
                          onClick={() => onNavigate?.("playlistVideos", playlist)}
                        >
                          Xem
                          <br />
                          Video
                        </button>
                        <button
                          type="button"
                          className={smallActionButtonClass}
                          onClick={() => setDeletingPlaylist(playlist)}
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  </div>

                  <span className="text-[22px] leading-none text-[#d0d0d0] max-xl:text-base">
                    <span className="hidden text-sm font-semibold text-[#8f8f8f] uppercase max-xl:mb-1 max-xl:block">Loại</span>
                    {playlist.type}
                  </span>
                  <span className="inline-flex items-center gap-2 text-[22px] text-[#d0d0d0] max-xl:text-base">
                    <span className="hidden text-sm font-semibold text-[#8f8f8f] uppercase max-xl:mb-1 max-xl:block">Chế độ hiển thị</span>
                    {playlist.visibility}
                    {/* <ChevronDown size={16} className="text-[#777]" aria-hidden="true" /> */}
                  </span>
                  <span className="text-[22px] text-[#d0d0d0] max-xl:text-base">
                    <span className="hidden text-sm font-semibold text-[#8f8f8f] uppercase max-xl:mb-1 max-xl:block">Lần cập nhật gần nhất</span>
                    {playlist.updatedAt}
                  </span>
                  <span className="text-center text-xl font-bold text-white max-xl:text-left max-xl:text-base">
                    <span className="hidden text-sm font-semibold text-[#8f8f8f] uppercase max-xl:mb-1 max-xl:block">Số lượng Video</span>
                    {playlist.videoCount}
                  </span>
                  <span className="text-center text-xl font-bold text-white max-xl:text-left max-xl:text-base">
                    <span className="hidden text-sm font-semibold text-[#8f8f8f] uppercase max-xl:mb-1 max-xl:block">Lượt xem</span>
                    {playlist.views}
                  </span>
                </article>
              ))}
            </div>
          </div>

          <footer className="mt-5 flex items-center justify-end gap-10 pr-9 text-[22px] text-[#cfcfcf] max-lg:flex-wrap max-lg:justify-start max-lg:gap-5 max-lg:pr-0 max-md:text-base">
            <label className="flex items-center gap-1.5">
              <span>Số hàng mỗi trang:</span>
              <select
                defaultValue="10"
                aria-label="Số hàng mỗi trang"
                className="rounded border-0 bg-transparent py-1 pr-1 text-[#cfcfcf] outline-none"
              >
                <option value="10" className="bg-[#1f1f1f]">10</option>
                <option value="25" className="bg-[#1f1f1f]">25</option>
              </select>
            </label>

            <span>1-6/nhiều kết quả</span>

            <nav className="flex items-center gap-1" aria-label="Phân trang danh sách phát">
              <button type="button" className={pageButtonClass} aria-label="Trang đầu">
                <ChevronsLeft size={18} aria-hidden="true" />
              </button>
              <button type="button" className={pageButtonClass} aria-label="Trang trước">
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <button type="button" className={pageButtonClass} aria-label="Trang sau">
                <ChevronRight size={18} aria-hidden="true" />
              </button>
              <button type="button" className={pageButtonClass} aria-label="Trang cuối">
                <ChevronsRight size={18} aria-hidden="true" />
              </button>
            </nav>
          </footer>
        </section>
      </main>

      <CreatePlaylistModal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} onCreate={handleCreatePlaylist} />
      <DeletePlaylistModal isOpen={Boolean(deletingPlaylist)} onClose={() => setDeletingPlaylist(null)} onConfirm={handleConfirmDelete} playlistName={deletingPlaylist?.title} />
    </div>
  );
}