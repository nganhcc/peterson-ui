import { ArrowLeft } from "lucide-react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

export default function PlaceholderPage({
  activeItem = "playlists",
  onNavigate,
  title,
  description,
}) {
  return (
    <div className="min-h-screen bg-[#1f1f1f] text-[#f4f4f4]">
      <Sidebar activeItem={activeItem} onNavigate={onNavigate} />
      <Header />

      <main className="ml-[172px] min-h-screen px-[52px] pt-[112px] pb-10 max-md:ml-0 max-md:px-4 max-md:pt-[92px]">
        <section className="mx-auto flex min-h-[420px] w-full max-w-[980px] flex-col justify-center border-y border-[#343434]">
          <p className="m-0 mb-3 text-sm font-semibold tracking-[0.12em] text-[#9f9f9f] uppercase">Tạo sau</p>
          <h1 className="m-0 text-[34px] leading-tight font-black text-white max-md:text-2xl">{title}</h1>
          <p className="mt-4 max-w-[620px] text-base leading-relaxed text-[#bcbcbc]">{description}</p>
          <button
            type="button"
            className="mt-7 inline-flex min-h-10 w-fit items-center gap-2 rounded-full border border-[#4a4a4a] bg-[#252525] px-5 text-sm font-bold text-[#f2f2f2] hover:bg-[#303030]"
            onClick={() => onNavigate?.("playlists")}
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Quay lại danh sách phát
          </button>
        </section>
      </main>
    </div>
  );
}
