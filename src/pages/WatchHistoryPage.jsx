import { ChevronsLeft, ChevronsRight, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

const watchedVideos = [
  {
    id: 1,
    title: "Obito - Hà Nội ft. VSTRA",
    description: "Obito - Hà Nội ft. VSTRA Download/Stream",
    channel: "Obito Official",
    watchedAt: "25 thg 5, 2026",
    views: "1000000",
    comments: "1000000",
  },
  {
    id: 2,
    title: "Obito - Hà Nội ft. VSTRA",
    description: "Obito - Hà Nội ft. VSTRA Download/Stream",
    channel: "Obito Official",
    watchedAt: "25 thg 5, 2026",
    views: "1000000",
    comments: "1000000",
  },
  {
    id: 3,
    title: "Obito - Hà Nội ft. VSTRA",
    description: "Obito - Hà Nội ft. VSTRA Download/Stream",
    channel: "Obito Official",
    watchedAt: "25 thg 5, 2026",
    views: "1000000",
    comments: "1000000",
  },
  {
    id: 4,
    title: "Obito - Hà Nội ft. VSTRA",
    description: "Obito - Hà Nội ft. VSTRA Download/Stream",
    channel: "Obito Official",
    watchedAt: "25 thg 5, 2026",
    views: "1000000",
    comments: "1000000",
  },
];

const pageButtonClass =
  "inline-flex size-7 items-center justify-center rounded-full border-0 bg-transparent text-[#a8a8a8] hover:bg-[#303030] hover:text-white";

export default function WatchHistoryPage({ activeItem = "history", onNavigate }) {
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
              {watchedVideos.map((video) => (
                <article
                  key={video.id}
                  className="grid min-h-[118px] grid-cols-[minmax(460px,1fr)_180px_180px_190px] items-center gap-10 px-2 max-xl:grid-cols-[minmax(420px,1fr)_150px_150px_160px] max-xl:gap-6 max-lg:grid-cols-1 max-lg:gap-4 max-lg:border-b max-lg:border-[#303030] max-lg:pb-6 max-lg:last:border-b-0"
                >
                  <div className="flex min-w-0 items-center gap-5 max-sm:flex-col max-sm:items-start">
                    <button
                      type="button"
                      className="relative block aspect-video w-[238px] shrink-0 overflow-hidden rounded-[4px] border-0 bg-transparent p-0 text-left max-xl:w-[210px] max-sm:w-full"
                      onClick={() => onNavigate?.("watchVideo")}
                      aria-label={`Xem video ${video.title}`}
                    >
                      <span className="art-sakura-thumb absolute inset-0" aria-hidden="true" />
                      <span className="absolute right-1.5 bottom-1.5 rounded-[3px] bg-black/80 px-1.5 py-0.5 text-[11px] font-semibold text-white">
                        2:46
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

            <span>1-5/nhiều kết quả</span>

            <nav className="flex items-center gap-1" aria-label="Phân trang video đã xem">
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
    </div>
  );
}
