import { useState } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

// Hàm sinh dữ liệu video trang chủ ngẫu nhiên và duy nhất
const generateUniqueHomeVideos = (count) => {
  const titles = [
    "Khám phá vũ trụ bao la cùng chúng tôi", "Hành trình xuyên Việt ngày đầu tiên", 
    "Top 10 game đáng chơi nhất năm nay", "Học ReactJS từ cơ bản trong 10 phút", 
    "Review phim bom tấn hot nhất rạp", "Trực tiếp giải đấu Esport chung kết", 
    "Vlog một ngày làm việc của lập trình viên", "Hướng dẫn nấu ăn món ngon cuối tuần", 
    "Tin tức công nghệ mới nhất tuần qua", "Phân tích chiến thuật bóng đá đỉnh cao", 
    "Nhạc Lofi cực chill để học tập", "Thử thách sinh tồn 24h trong rừng sâu", 
    "Bí kíp tự học tiếng Anh giao tiếp", "Khám phá đại dương sâu thẳm bí ẩn", 
    "Top điện thoại đáng mua nhất tầm giá", "Mẹo vặt cuộc sống hàng ngày cực hay", 
    "Trực tiếp âm nhạc đường phố cuối tuần", "Đánh giá xe hơi mới ra mắt thị trường", 
    "Hành trình leo núi mạo hiểm thử thách", "Podcast: Chuyện nghề nghiệp và đam mê"
  ];

  const channels = [
    "Vũ Trụ Ký", "Khoa Pug", "MixiGaming", "F8 Official", "Phê Phim", 
    "VETV", "Giang Ơi", "Ninh Tito", "Schannel", "Cúp Học Xem Bóng", 
    "Lofi Girl", "Lâm Vlog", "Khánh Vy HOME", "Kiến Thức Thú Vị", 
    "Vật Vờ Studio", "Mẹo Hay", "Trắng TV", "Xế Cưng", "Khoai Lang Thang", "Spiderum"
  ];

  // Xáo trộn mảng để dữ liệu lấy ra không bị trùng
  const shuffledTitles = [...titles].sort(() => 0.5 - Math.random());
  const shuffledChannels = [...channels].sort(() => 0.5 - Math.random());

  return Array.from({ length: Math.min(count, titles.length) }, (_, i) => {
    const isLive = Math.random() > 0.7; // 30% video đang phát trực tiếp
    const views = Math.floor(Math.random() * 90) + 1;
    const id = i + 1;

    return {
      id,
      title: shuffledTitles[i],
      channel: shuffledChannels[i],
      // Sinh link ảnh thumbnail ngẫu nhiên cho video (kích thước 640x360 tỉ lệ 16:9)
      thumbnail: `https://picsum.photos/seed/home_vid_${id}/640/360`,
      // Sinh link avatar ngẫu nhiên cho kênh
      avatar: `https://picsum.photos/seed/home_avatar_${id}/64/64`,
      duration: isLive ? "TRỰC TIẾP" : `${Math.floor(Math.random() * 15) + 5}:${Math.floor(Math.random() * 50) + 10}`,
      viewsText: isLive 
        ? `${views},${Math.floor(Math.random() * 9)} N người đang xem` 
        : `${views * 10} N lượt xem • ${Math.floor(Math.random() * 11) + 1} tháng trước`,
      isLive: isLive
    };
  });
};

export default function HomePage({ activeItem = "home", onNavigate }) {
  // Khởi tạo 16 video ngẫu nhiên
  const [videos] = useState(() => generateUniqueHomeVideos(16));

  return (
    <div className="min-h-screen bg-[#1f1f1f] text-[#f4f4f4]">
      <Sidebar activeItem={activeItem} onNavigate={onNavigate} />
      <Header onNavigate={onNavigate} />

      <main className="ml-[172px] min-h-screen px-10 pt-[122px] pb-12 max-md:ml-0 max-md:px-4 max-md:pt-[92px]">
        <section className="grid grid-cols-4 gap-x-12 gap-y-8 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1" aria-label="Video trang chủ">
          {videos.map((video) => (
            <button
              key={video.id}
              type="button"
              className="group min-w-0 border-0 bg-transparent p-0 text-left text-[#f1f1f1]"
              onClick={() => onNavigate?.("watchVideo")}
              aria-label={`Mở video ${video.title}`}
            >
              {/* Vùng chứa ảnh Thumbnail (đã bỏ class màu nền ảo, dùng thẻ img thật) */}
              <span className="relative block aspect-video w-full overflow-hidden rounded-[16px] bg-[#333]">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <span className={`absolute right-2 bottom-2 rounded-[5px] px-1.5 py-0.5 text-[11px] font-bold text-white ${video.isLive ? 'bg-red-600' : 'bg-black/80'}`}>
                  {video.duration}
                </span>
              </span>

              <span className="mt-3 flex gap-3">
                {/* Vùng chứa Avatar kênh (thay cho icon <UserCircle />) */}
                <img 
                  src={video.avatar} 
                  alt={video.channel} 
                  className="mt-0.5 size-10 shrink-0 rounded-full object-cover bg-[#333]" 
                />
                <span className="min-w-0">
                  <span className="block line-clamp-2 text-[17px] leading-[1.2] font-black text-white uppercase group-hover:text-[#dedede]">
                    {video.title}
                  </span>
                  <span className="mt-2 block text-sm font-medium text-[#d1d1d1] uppercase truncate">
                    {video.channel}
                  </span>
                  <span className="mt-0.5 block text-sm text-[#a7a7a7] truncate">
                    {video.viewsText}
                  </span>
                </span>
              </span>
            </button>
          ))}
        </section>
      </main>
    </div>
  );
}