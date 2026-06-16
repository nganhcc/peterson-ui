import {
  ArrowLeft,
  CalendarDays,
  ChevronsLeft,
  ChevronsRight,
  ChevronLeft,
  ChevronRight,
  Eye,
  Info,
  PlayCircle,
  Search,
  UserCircle,
} from "lucide-react";
import { useState, useMemo } from "react";
import DeleteVideoModal from "../components/modals/DeleteVideoModal";

const pageButtonClass =
  "inline-flex size-7 items-center justify-center rounded-full border-0 bg-transparent text-[#a8a8a8] hover:bg-[#303030] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed";

function PlaylistStudioHeader({ onNavigate }) {
  // ... (Header giữ nguyên) ...
  return (
    <header className="fixed top-0 right-0 left-0 z-20 flex h-[82px] items-center border-b border-[#3a3a3a] bg-[#232323] px-8 max-md:px-4">
      <button type="button" className="flex min-w-[260px] items-center gap-5 border-0 bg-transparent p-0 text-left text-sm font-bold text-white hover:text-[#dedede] max-lg:min-w-0 max-lg:flex-1" onClick={() => onNavigate?.("home")}>
        <PlayCircle size={18} fill="white" aria-hidden="true" />
        <span>PERTERSON</span>
      </button>
      <div className="mx-auto flex h-[40px] w-[min(625px,calc(100vw-430px))] items-center gap-3 rounded-full border border-[#4a4a4a] bg-[#0f0f0f] px-4 text-[#cfcfcf] max-lg:hidden">
        <Search size={18} aria-hidden="true" />
        <input type="text" placeholder="Tìm kiếm" className="min-w-0 flex-1 border-0 bg-transparent text-sm text-white outline-none placeholder:text-[#aaa]" />
      </div>
      <button type="button" className="ml-auto inline-flex size-9 items-center justify-center rounded-full border-0 bg-transparent text-[#d8dde6] hover:text-white">
        <UserCircle size={34} aria-hidden="true" />
      </button>
    </header>
  );
}

// NHẬN PROP PLAYLIST VÀO SIDEBAR
function PlaylistStudioSidebar({ onNavigate, playlist }) {
  return (
    <aside className="bg-[#282828] px-8 pt-10 max-lg:hidden">
      <button
        type="button"
        className="mb-5 inline-flex items-center gap-2 border-0 bg-transparent p-0 text-sm text-[#cfcfcf] hover:text-white"
        onClick={() => onNavigate?.("playlists")}
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Nội dung của kênh
      </button>

      <div className="art-playlist-edit-cover h-[110px] w-full overflow-hidden rounded-[28px] border border-[#3d3d3d]" aria-label="Ảnh bìa danh sách phát" />

      <div className="mt-5">
        <p className="m-0 text-[15px] text-[#d0d0d0]">Danh sách phát của bạn</p>
        <h2 className="m-0 mt-1 text-base font-extrabold text-white">{playlist?.title || "Tên danh sách phát"}</h2>
      </div>

      <div className="mt-7 border-t border-[#454545] pt-7">
        <button
          type="button"
          className="flex h-10 w-full items-center gap-4 rounded-full border-0 bg-transparent px-4 text-left text-sm font-semibold text-[#cfcfcf] hover:bg-[#303030] hover:text-white"
          onClick={() => onNavigate?.("editPlaylist", playlist)}
        >
          <Info size={20} aria-hidden="true" />
          Chi tiết
        </button>
        <button
          type="button"
          className="mt-2 flex h-10 w-full items-center gap-4 rounded-full border-0 bg-[#363636] px-4 text-left text-sm font-semibold text-[#f2f2f2]"
        >
          <CalendarDays size={20} aria-hidden="true" />
          Video ({playlist?.videoCount || 0})
        </button>
      </div>
    </aside>
  );
}

// NHẬN PROP PLAYLIST VÀO PAGE CHÍNH
export default function PlaylistVideosPage({ onNavigate, playlist }) {
  const [deletingVideo, setDeletingVideo] = useState(null);
  
  // SINH DANH SÁCH VIDEO DỰA VÀO playlist.videoCount
  const [videos, setVideos] = useState(() => {
    const count = playlist?.videoCount || 0;
    return Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      title: `Video ${index + 1} - ${playlist?.title || 'Trong danh sách'}`,
      description: "Mô tả chi tiết video...",
      channel: "Kênh của bạn",
      visibility: playlist?.visibility || "Công khai",
      restriction: "Không\ncó",
      publishedAt: "10 thg 10,\n2023\nđã xuất bản",
      views: Math.floor(Math.random() * 500000) + 1000,
      comments: Math.floor(Math.random() * 5000) + 10,
    }));
  });

  // LOGIC PHÂN TRANG
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(videos.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedVideos = videos.slice(startIndex, startIndex + itemsPerPage);

  function handleConfirmDelete() {
    if (!deletingVideo) return;
    setVideos((currentVideos) => currentVideos.filter((video) => video.id !== deletingVideo.id));
    setDeletingVideo(null);
  }

  function handlePerPageChange(e) {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  }

  return (
    <div className="min-h-screen bg-[#1f1f1f] text-[#f4f4f4]">
      <PlaylistStudioHeader onNavigate={onNavigate} />

      <div className="grid min-h-screen grid-cols-[310px_minmax(0,1fr)] pt-[82px] max-lg:grid-cols-1">
        <PlaylistStudioSidebar onNavigate={onNavigate} playlist={playlist} />

        <main className="min-h-[calc(100vh-82px)] px-9 pt-8 pb-8 max-xl:px-6 max-md:px-4">
          <section className="mx-auto w-full max-w-[1500px]" aria-label="Video trong danh sách phát">
            <h1 className="m-0 mb-7 text-[27px] leading-tight font-black text-white max-md:text-2xl">
              Video trong danh sách phát
            </h1>

            <div className="max-h-[calc(100vh-230px)] overflow-hidden rounded-[42px] border border-[#444] bg-[#1d1d1d] max-xl:max-h-none max-md:rounded-[22px]">
              <div className="overflow-x-auto">
                <div className="min-w-[1340px] max-xl:min-w-0">
                  <div className="grid min-h-[88px] grid-cols-[minmax(420px,1fr)_140px_100px_120px_120px_130px_100px] items-center gap-5 border-b border-[#373737] px-10 text-[21px] font-semibold tracking-[0.01em] text-[#c9c9c9] max-xl:hidden">
                    <span>Video</span>
                    <span>Chế độ hiển thị</span>
                    <span>Hạn chế</span>
                    <span>Ngày</span>
                    <span>Lượt xem</span>
                    <span>Số bình luận</span>
                    <span />
                  </div>

                  <div className="max-h-[calc(100vh-320px)] overflow-y-auto px-10 py-4 max-xl:max-h-none max-md:px-4">
                    {videos.length === 0 ? (
                      <p className="py-10 text-center text-[#888]">Chưa có video nào trong danh sách phát này.</p>
                    ) : (
                      paginatedVideos.map((video) => (
                        <article
                          key={video.id}
                          className="grid min-h-[104px] grid-cols-[minmax(420px,1fr)_140px_100px_120px_120px_130px_100px] items-center gap-5 max-xl:grid-cols-1 max-xl:gap-4 max-xl:border-b max-xl:border-[#303030] max-xl:py-6 max-xl:last:border-b-0"
                        >
                          <div className="flex min-w-0 items-center gap-4 max-sm:flex-col max-sm:items-start">
                            <div className="relative aspect-video w-[128px] shrink-0 overflow-hidden rounded-[14px] border border-[#3c3c3c] bg-[#333] max-sm:w-full">
                              <span className="art-playlist-video-thumb absolute inset-0" aria-hidden="true" />
                              <span className="absolute right-1.5 bottom-1.5 rounded-[3px] bg-black/80 px-1.5 py-0.5 text-[11px] font-semibold text-white">
                                2:46
                              </span>
                            </div>

                            <div className="min-w-0">
                              <h2 className="m-0 truncate text-lg font-extrabold text-white max-2xl:text-base">
                                {video.title}
                              </h2>
                              <p className="m-0 mt-1 truncate text-xs text-[#c8c8c8]">{video.description}</p>
                              <span className="mt-2 inline-flex min-h-5 items-center rounded-full bg-[#343434] px-2.5 text-xs text-[#e3e3e3]">
                                {video.channel}
                              </span>
                            </div>
                          </div>

                          <span className="inline-flex items-center gap-2 text-sm text-[#d6d6d6] max-xl:text-base">
                            <span className="hidden text-sm font-semibold text-[#8f8f8f] uppercase max-xl:mb-1 max-xl:block">Chế độ hiển thị</span>
                            <Eye size={15} className="text-green-500" aria-hidden="true" />
                            {video.visibility}
                          </span>
                          <span className="whitespace-pre-line text-sm text-[#d6d6d6] max-xl:text-base">
                            <span className="hidden text-sm font-semibold text-[#8f8f8f] uppercase max-xl:mb-1 max-xl:block">Hạn chế</span>
                            {video.restriction}
                          </span>
                          <span className="whitespace-pre-line text-xs leading-relaxed text-[#d6d6d6] max-xl:text-base">
                            <span className="hidden text-sm font-semibold text-[#8f8f8f] uppercase max-xl:mb-1 max-xl:block">Ngày</span>
                            {video.publishedAt}
                          </span>
                          <span className="text-sm text-[#d6d6d6] max-xl:text-base">
                            <span className="hidden text-sm font-semibold text-[#8f8f8f] uppercase max-xl:mb-1 max-xl:block">Lượt xem</span>
                            {video.views.toLocaleString("vi-VN")}
                          </span>
                          <span className="text-sm text-[#d6d6d6] max-xl:text-base">
                            <span className="hidden text-sm font-semibold text-[#8f8f8f] uppercase max-xl:mb-1 max-xl:block">Số bình luận</span>
                            {video.comments.toLocaleString("vi-VN")}
                          </span>
                          <button
                            type="button"
                            className="inline-flex min-h-10 min-w-[94px] items-center justify-center rounded-full border border-[#4a4a4a] bg-transparent px-4 text-sm font-semibold text-[#e8e8e8] hover:bg-[#2b2b2b] hover:text-white max-xl:w-fit"
                            onClick={() => setDeletingVideo(video)}
                          >
                            Xóa
                          </button>
                        </article>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>

            <footer className="mt-5 flex items-center justify-end gap-10 pr-4 text-[22px] text-[#cfcfcf] max-lg:flex-wrap max-lg:justify-start max-lg:gap-5 max-lg:pr-0 max-md:text-base">
              <label className="flex items-center gap-1.5">
                <span>Số hàng mỗi trang:</span>
                <select
                  value={itemsPerPage}
                  onChange={handlePerPageChange}
                  aria-label="Số hàng mỗi trang"
                  className="rounded border-0 bg-transparent py-1 pr-1 text-[#cfcfcf] outline-none"
                >
                  <option value="10" className="bg-[#1f1f1f]">10</option>
                  <option value="25" className="bg-[#1f1f1f]">25</option>
                </select>
              </label>

              <span>
                {videos.length === 0 ? 0 : startIndex + 1}-
                {Math.min(startIndex + itemsPerPage, videos.length)}/
                {videos.length} kết quả
              </span>

              <nav className="flex items-center gap-1" aria-label="Phân trang video trong danh sách phát">
                <button type="button" className={pageButtonClass} onClick={() => setCurrentPage(1)} disabled={currentPage === 1 || videos.length === 0}>
                  <ChevronsLeft size={18} aria-hidden="true" />
                </button>
                <button type="button" className={pageButtonClass} onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1 || videos.length === 0}>
                  <ChevronLeft size={18} aria-hidden="true" />
                </button>
                <button type="button" className={pageButtonClass} onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages || videos.length === 0}>
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
                <button type="button" className={pageButtonClass} onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages || videos.length === 0}>
                  <ChevronsRight size={18} aria-hidden="true" />
                </button>
              </nav>
            </footer>
          </section>
        </main>
      </div>

      <DeleteVideoModal
        isOpen={Boolean(deletingVideo)}
        onClose={() => setDeletingVideo(null)}
        onConfirm={handleConfirmDelete}
        videoTitle={deletingVideo?.title}
      />
    </div>
  );
}