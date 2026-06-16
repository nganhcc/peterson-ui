import { useState } from "react";
import { ChevronsLeft, ChevronsRight, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

// Hàm sinh dữ liệu video ngẫu nhiên và duy nhất
const generateUniqueHistoryVideos = (count) => {
  const titles = [
    "Obito - Hà Nội ft. VSTRA", "SƠN TÙNG M-TP | CHÚNG TA CỦA HIỆN TẠI",
    "Chill Vibes - Lofi Beat 24/7", "Đen - Trốn Tìm ft. MTV band",
    "HIEUTHUHAI - Ngủ Một Mình", "MCK - Chìm Sâu ft. Trung Trần",
    "Rap Việt Mùa 3 - Tập 1 Full", "Tlinh - Nếu Lúc Đó",
    "B Ray - Ex's Hate Me", "Karik - Người Lạ Ơi",
    "Vũ. - Bước Qua Nhau", "Wren Evans - Thích Em Hơi Nhiều",
    "MONO - Waiting For You", "Grey D - Dự Báo Thời Tiết",
    "JustaTee - Đã Lỡ Yêu Em Nhiều",
  ];
  
  const channels = [
    "Obito Official", "Sơn Tùng M-TP", "Lofi Girl", "Đen Vâu Official",
    "HIEUTHUHAI", "MCK Official", "Vie Channel", "tlinh",
    "B Ray Official", "Karik", "Vũ. Official", "Wren Evans",
    "MONO Official", "GREY D", "JustaTee"
  ];

  // Xáo trộn mảng để dữ liệu lấy ra không bị trùng
  const shuffledIndices = Array.from({ length: titles.length }, (_, i) => i).sort(() => 0.5 - Math.random());

  return Array.from({ length: Math.min(count, titles.length) }, (_, i) => {
    const idx = shuffledIndices[i];
    return {
      id: i + 1,
      title: titles[idx],
      description: `${titles[idx]} Download/Stream`,
      channel: channels[idx],
      watchedAt: "25 thg 5, 2026",
      views: Math.floor(Math.random() * 5000000) + 1000000,
      comments: Math.floor(Math.random() * 500000) + 100000,
      duration: `${Math.floor(Math.random() * 5) + 2}:${Math.floor(Math.random() * 50) + 10}`,
      thumbnail: `https://picsum.photos/seed/hist_vid_${idx}/238/134`
    };
  });
};

const pageButtonClass =
  "inline-flex size-7 items-center justify-center rounded-full border-0 bg-transparent text-[#a8a8a8] hover:bg-[#303030] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#a8a8a8] disabled:cursor-not-allowed transition-all";

export default function WatchHistoryPage({ activeItem = "history", onNavigate }) {
  // Khởi tạo 15 video (tùy chỉnh số lượng theo ý bạn)
  const [videos] = useState(() => generateUniqueHistoryVideos(15));
  
  // State phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Logic tính toán phân trang
  const totalPages = Math.ceil(videos.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const paginatedVideos = videos.slice(start, start + itemsPerPage);

  const handlePerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset về trang 1 khi đổi số dòng
  };

  return (
    <div className="min-h-screen bg-[#1f1f1f] text-[#f4f4f4]">
      <Sidebar activeItem={activeItem} onNavigate={onNavigate} />
      <Header />

      <main className="ml-[172px] min-h-screen px-[52px] pt-[104px] pb-8 max-md:ml-0 max-md:px-4 max-md:pt-[92px]">
        <section className="mx-auto w-full max-w-[1320px]" aria-label="Video đã xem">
          <h1 className="m-0 mb-7 text-[34px] leading-tight font-black text-white max-md:text-2xl">
            Video đã xem
          </h1>

          <div className="overflow-hidden rounded-[42px] border border-[#444] bg-[#1d1d1d] px-12 py-9 max-xl:px-7 max-md:rounded-[22px] max-md:px-4 max-md:py-5">
            <div className="grid grid-cols-[minmax(460px,1fr)_180px_180px_190px] items-center gap-10 px-2 text-[23px] font-semibold tracking-[0.02em] text-[#c9c9c9] uppercase max-xl:grid-cols-[minmax(420px,1fr)_150px_150px_160px] max-xl:gap-6 max-lg:hidden">
              <span>Video</span>
              <span className="text-center">Ngày xem</span>
              <span className="text-center">Lượt xem</span>
              <span className="text-center">Số bình luận</span>
            </div>

            <div className="mt-6 space-y-6 max-lg:mt-0">
              {paginatedVideos.map((video) => (
                <article
                  key={video.id}
                  className="grid min-h-[118px] grid-cols-[minmax(460px,1fr)_180px_180px_190px] items-center gap-10 px-2 max-xl:grid-cols-[minmax(420px,1fr)_150px_150px_160px] max-xl:gap-6 max-lg:grid-cols-1 max-lg:gap-4 max-lg:border-b max-lg:border-[#303030] max-lg:pb-6 max-lg:last:border-b-0"
                >
                  <div className="flex min-w-0 items-center gap-5 max-sm:flex-col max-sm:items-start">
                    <button
                      type="button"
                      className="relative block aspect-video w-[238px] shrink-0 overflow-hidden rounded-[4px] border-0 bg-transparent p-0 text-left max-xl:w-[210px] max-sm:w-full bg-[#333]"
                      onClick={() => onNavigate?.("watchVideo")}
                      aria-label={`Xem video ${video.title}`}
                    >
                      {/* Dùng ảnh thumbnail thật */}
                      <img src={video.thumbnail} alt={video.title} className="absolute inset-0 h-full w-full object-cover" />
                      <span className="absolute right-1.5 bottom-1.5 rounded-[3px] bg-black/80 px-1.5 py-0.5 text-[11px] font-semibold text-white">
                        {video.duration}
                      </span>
                    </button>

                    <button
                      type="button"
                      className="min-w-0 border-0 bg-transparent p-0 text-left"
                      onClick={() => onNavigate?.("watchVideo")}
                      aria-label={`Xem video ${video.title}`}
                    >
                      <span className="block truncate text-[20px] font-semibold text-[#f2f2f2] hover:text-white max-xl:text-lg">
                        {video.title}
                      </span>
                      <span className="mt-1 block truncate text-[15px] text-[#c8c8c8]">
                        {video.description}
                      </span>
                      <span className="mt-1.5 inline-flex min-h-5 items-center rounded-full bg-[#343434] px-2.5 text-xs text-[#e3e3e3]">
                        {video.channel}
                      </span>
                    </button>
                  </div>

                  <span className="text-center text-[24px] text-[#cfcfcf] max-xl:text-xl max-lg:text-left">
                    <span className="hidden text-sm font-semibold text-[#8f8f8f] uppercase max-lg:mb-1 max-lg:block">Ngày xem</span>
                    {video.watchedAt}
                  </span>
                  <span className="text-center text-[24px] text-[#cfcfcf] max-xl:text-xl max-lg:text-left">
                    <span className="hidden text-sm font-semibold text-[#8f8f8f] uppercase max-lg:mb-1 max-lg:block">Lượt xem</span>
                    {video.views}
                  </span>
                  <span className="text-center text-[24px] text-[#cfcfcf] max-xl:text-xl max-lg:text-left">
                    <span className="hidden text-sm font-semibold text-[#8f8f8f] uppercase max-lg:mb-1 max-lg:block">Số bình luận</span>
                    {video.comments}
                  </span>
                </article>
              ))}
            </div>
          </div>

          <footer className="mt-5 flex items-center justify-end gap-10 pr-9 text-[22px] text-[#cfcfcf] max-lg:flex-wrap max-lg:justify-start max-lg:gap-5 max-lg:pr-0 max-md:text-base">
            <label className="flex items-center gap-1.5">
              <span className="text-[16px]">Số hàng mỗi trang:</span>
              <select
                value={itemsPerPage}
                onChange={handlePerPageChange}
                aria-label="Số hàng mỗi trang"
                className="rounded border-0 bg-transparent py-1 pr-1 text-[#cfcfcf] outline-none text-[16px]"
              >
                <option value={5} className="bg-[#1f1f1f]">5</option>
                <option value={10} className="bg-[#1f1f1f]">10</option>
                <option value={20} className="bg-[#1f1f1f]">20</option>
              </select>
            </label>

            <span className="text-[16px]">
              {start + 1}-{Math.min(start + itemsPerPage, videos.length)}/{videos.length} kết quả
            </span>

            <nav className="flex items-center gap-1" aria-label="Phân trang video đã xem">
              <button 
                type="button" 
                className={pageButtonClass} 
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                aria-label="Trang đầu"
              >
                <ChevronsLeft size={18} aria-hidden="true" />
              </button>
              <button 
                type="button" 
                className={pageButtonClass} 
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                aria-label="Trang trước"
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <button 
                type="button" 
                className={pageButtonClass} 
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                aria-label="Trang sau"
              >
                <ChevronRight size={18} aria-hidden="true" />
              </button>
              <button 
                type="button" 
                className={pageButtonClass} 
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
                aria-label="Trang cuối"
              >
                <ChevronsRight size={18} aria-hidden="true" />
              </button>
            </nav>
          </footer>
        </section>
      </main>
    </div>
  );
}