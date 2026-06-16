import { ArrowLeft, CalendarDays, ChevronDown, Info, PlayCircle, Search, UserCircle } from "lucide-react";
import { useState } from "react";
import SuccessModal from "../components/modals/SuccessModal";

const inputClass =
  "h-14 w-full rounded-[28px] border border-[#4a4a4a] bg-transparent px-5 text-sm text-[#f4f4f4] outline-none focus:border-[#707070]";
const labelClass =
  "absolute -top-2.5 left-5 bg-[#1f1f1f] px-1.5 text-xs font-semibold text-[#bcbcbc]";

function PlaylistEditHeader({ onNavigate }) {
  return (
    <header className="fixed top-0 right-0 left-0 z-20 flex h-[82px] items-center border-b border-[#3a3a3a] bg-[#232323] px-8 max-md:px-4">
      <button
        type="button"
        className="flex min-w-[260px] items-center gap-5 border-0 bg-transparent p-0 text-left text-sm font-bold text-white hover:text-[#dedede] max-lg:min-w-0 max-lg:flex-1"
        onClick={() => onNavigate?.("home")}
        aria-label="Về trang chủ"
      >
        <PlayCircle size={18} fill="white" aria-hidden="true" />
        <span>PERTERSON</span>
      </button>

      <div className="mx-auto flex h-[40px] w-[min(625px,calc(100vw-430px))] items-center gap-3 rounded-full border border-[#4a4a4a] bg-[#0f0f0f] px-4 text-[#cfcfcf] max-lg:hidden">
        <Search size={18} aria-hidden="true" />
        <input
          type="text"
          placeholder="Tìm kiếm"
          className="min-w-0 flex-1 border-0 bg-transparent text-sm text-white outline-none placeholder:text-[#aaa]"
        />
      </div>

      <button
        type="button"
        className="ml-auto inline-flex size-9 items-center justify-center rounded-full border-0 bg-transparent text-[#d8dde6] hover:text-white"
        aria-label="Tài khoản"
      >
        <UserCircle size={34} aria-hidden="true" />
      </button>
    </header>
  );
}

export default function EditPlaylistPage({ onNavigate }) {
  const [title, setTitle] = useState("Tên danh sách phát");
  const [description, setDescription] = useState("");
  const [visibility, setVisibility] = useState("private");
  const [defaultOrder, setDefaultOrder] = useState("dateAdded");
  const [showSuccess, setShowSuccess] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setShowSuccess(true);
  }

  return (
    <div className="min-h-screen bg-[#1f1f1f] text-[#f4f4f4]">
      <PlaylistEditHeader onNavigate={onNavigate} />

      <div className="grid min-h-screen grid-cols-[310px_minmax(0,1fr)] pt-[82px] max-lg:grid-cols-1">
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
            <h2 className="m-0 mt-1 text-base font-extrabold text-white">Tên danh sách phát</h2>
          </div>

          <div className="mt-7 border-t border-[#454545] pt-7">
            <button
              type="button"
              className="flex h-10 w-full items-center gap-4 rounded-full border-0 bg-[#363636] px-4 text-left text-sm font-semibold text-[#f2f2f2]"
            >
              <Info size={20} fill="#d8d8d8" className="text-[#282828]" aria-hidden="true" />
              Chi tiết
            </button>
            <button
              type="button"
              className="mt-2 flex h-10 w-full items-center gap-4 rounded-full border-0 bg-transparent px-4 text-left text-sm font-semibold text-[#cfcfcf] hover:bg-[#303030] hover:text-white"
              onClick={() => onNavigate?.("playlistVideos")}
            >
              <CalendarDays size={20} aria-hidden="true" />
              Video
            </button>
          </div>
        </aside>

        <main className="min-h-[calc(100vh-82px)] px-[60px] pt-9 pb-12 max-xl:px-8 max-md:px-4">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-between gap-5 border-b border-[#414141] pb-7 max-md:flex-col max-md:items-start">
              <h1 className="m-0 text-[22px] font-black text-white">Thông tin chi tiết về danh sách phát</h1>
              <div className="flex gap-4 max-md:w-full max-sm:flex-col">
                <button
                  type="button"
                  className="inline-flex min-h-10 min-w-[138px] items-center justify-center rounded-full border border-[#6a6a6a] bg-transparent px-5 text-sm font-semibold text-[#e7e7e7] hover:bg-[#303030] max-sm:w-full"
                  onClick={() => onNavigate?.("playlists")}
                >
                  Hủy thay đổi
                </button>
                <button
                  type="submit"
                  className="inline-flex min-h-10 min-w-[78px] items-center justify-center rounded-full border-0 bg-[#f4f4f4] px-6 text-sm font-semibold text-[#151515] hover:bg-[#dedede] max-sm:w-full"
                >
                  Lưu
                </button>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-[minmax(0,1fr)_minmax(300px,37%)] gap-10 max-xl:grid-cols-1">
              <section className="space-y-6" aria-label="Chi tiết danh sách phát">
                <label className="relative block">
                  <span className={labelClass}>Tiêu đề (bắt buộc)</span>
                  <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    className={inputClass}
                    aria-label="Tiêu đề danh sách phát"
                  />
                </label>

                <label className="relative block">
                  <span className={labelClass}>Mô tả</span>
                  <textarea
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="Thêm nội dung mô tả"
                    className="min-h-[310px] w-full resize-none rounded-[30px] border border-[#4a4a4a] bg-transparent px-5 py-5 text-sm text-[#f4f4f4] outline-none placeholder:text-[#b8b8b8] focus:border-[#707070]"
                    aria-label="Mô tả danh sách phát"
                  />
                </label>
              </section>

              <section className="space-y-6" aria-label="Thiết lập danh sách phát">
                <label className="relative block">
                  <span className={labelClass}>Chế độ hiển thị</span>
                  <select
                    value={visibility}
                    onChange={(event) => setVisibility(event.target.value)}
                    className={`${inputClass} appearance-none pr-11`}
                    aria-label="Chế độ hiển thị"
                  >
                    <option value="private" className="bg-[#1f1f1f]">Riêng tư</option>
                    <option value="unlisted" className="bg-[#1f1f1f]">Không công khai</option>
                    <option value="public" className="bg-[#1f1f1f]">Công khai</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute top-1/2 right-5 -translate-y-1/2 text-[#77808a]" size={18} aria-hidden="true" />
                </label>

                <label className="relative block">
                  <span className={labelClass}>Thứ tự video mặc định</span>
                  <select
                    value={defaultOrder}
                    onChange={(event) => setDefaultOrder(event.target.value)}
                    className={`${inputClass} appearance-none pr-11`}
                    aria-label="Thứ tự video mặc định"
                  >
                    <option value="dateAdded" className="bg-[#1f1f1f]">Sắp xếp theo ngày thêm</option>
                    <option value="popular" className="bg-[#1f1f1f]">Video phổ biến nhất</option>
                    <option value="newest" className="bg-[#1f1f1f]">Video mới nhất</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute top-1/2 right-5 -translate-y-1/2 text-[#77808a]" size={18} aria-hidden="true" />
                </label>
              </section>
            </div>
          </form>
        </main>
      </div>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        message="Lưu danh sách phát thành công."
        description="Các thay đổi của danh sách phát đã được cập nhật trong giao diện quản lý."
      />
    </div>
  );
}
