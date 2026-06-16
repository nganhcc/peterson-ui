import { useState } from "react";
import { BadgeCheck, Gamepad2, Radio, Trophy, UserCircle, Bell, ChevronRight, Link as LinkIcon } from "lucide-react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

// Hàm sinh video ngẫu nhiên riêng cho kênh
const generateChannelVideos = (count, channelName) => {
  const titles = [
    "Cập nhật thông tin mới nhất hôm nay", "Hướng dẫn chi tiết từ A-Z phần 1", 
    "Livestream giao lưu cùng anh em", "Đánh giá chi tiết sản phẩm mới", 
    "Vlog một ngày làm việc của mình", "Giải đáp thắc mắc Q&A tuần này",
    "Reaction video hot nhất hiện nay", "Top 10 điều bạn chưa biết về mình", 
    "Thử thách 24h không sử dụng điện thoại", "Chia sẻ kinh nghiệm cá nhân quý báu"
  ];
  
  return Array.from({ length: count }, (_, i) => {
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    return {
      id: i + 1,
      title: `${randomTitle} | ${channelName}`,
      views: Math.floor(Math.random() * 500) + 10 + " N",
      time: Math.floor(Math.random() * 23) + 1 + " giờ trước",
      duration: `${Math.floor(Math.random() * 15) + 3}:${Math.floor(Math.random() * 50) + 10}`,
      thumbnail: `https://picsum.photos/seed/guest_${channelName.replace(/\s/g, '')}_${i}/320/180`
    };
  });
};

const avatarClass = {
  person: "bg-[#e8ebf5] text-[#6f7782]",
  football: "bg-[#343434] text-[#505050]",
  dark: "bg-black text-[#2f2f2f]",
  game: "bg-[#343434] text-[#555]",
};

function ChannelLargeAvatar({ avatar }) {
  const baseClass = "flex size-[128px] shrink-0 items-center justify-center rounded-full border-4 border-[#1f1f1f] bg-[#333]";

  if (avatar === "football") return <span className={`${baseClass} ${avatarClass.football}`}><Trophy size={48} strokeWidth={1.8} /></span>;
  if (avatar === "dark") return <span className={`${baseClass} ${avatarClass.dark}`}><Radio size={48} strokeWidth={1.4} /></span>;
  if (avatar === "game") return <span className={`${baseClass} ${avatarClass.game}`}><Gamepad2 size={48} strokeWidth={1.6} /></span>;
  return <UserCircle className={`${baseClass} ${avatarClass.person}`} strokeWidth={1.4} />;
}

export default function GuestChannelProfilePage({ activeItem = "home", onNavigate, channel }) {
  // Dữ liệu dự phòng nếu reload trang trực tiếp
  const currentChannel = channel || {
    id: 99, name: "Kênh Ẩn Danh", handle: "@unknown", subscribers: "0", description: "Chưa có mô tả", avatar: "person", verified: false, isSubscribed: false
  };

  const [isSubscribed, setIsSubscribed] = useState(currentChannel.isSubscribed);
  const [videos] = useState(() => generateChannelVideos(12, currentChannel.name));
  const videoCount = Math.floor(Math.random() * 200) + 20;

  return (
    <div className="min-h-screen bg-[#1f1f1f] text-[#f4f4f4]">
      <Sidebar activeItem={activeItem} onNavigate={onNavigate} />
      <Header />

      <main className="ml-[172px] min-h-screen pt-[72px] max-md:ml-0">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-6">
          
          {/* Banner */}
          <div className="relative aspect-[6/1] w-full overflow-hidden rounded-2xl bg-[#333]">
            <img 
              src={`https://picsum.photos/seed/banner_${currentChannel.id}/1200/200`} 
              alt="Banner" 
              className="absolute inset-0 h-full w-full object-cover" 
            />
          </div>

          {/* Thông tin kênh */}
          <div className="mt-6 flex flex-wrap items-start gap-6">
            <ChannelLargeAvatar avatar={currentChannel.avatar} />
            <div className="flex-1 min-w-[280px]">
              <h1 className="flex items-center gap-2 text-[32px] font-bold text-white leading-tight">
                {currentChannel.name}
                {currentChannel.verified && <BadgeCheck size={22} className="text-[#9aa0a6]" fill="#9aa0a6" stroke="#1f1f1f" />}
              </h1>
              <div className="mt-1 flex items-center gap-2 text-sm text-[#aaa]">
                <span className="font-medium text-white">{currentChannel.handle}</span>
                <span>•</span>
                <span>{currentChannel.subscribers}</span>
                <span>•</span>
                <span>{videoCount} video</span>
              </div>
              <div className="mt-3 flex items-center gap-1 text-sm text-[#aaa] hover:text-white cursor-pointer line-clamp-1 max-w-[600px]">
                <LinkIcon size={14} />
                <span>{currentChannel.description}</span>
                <ChevronRight size={16} />
              </div>
              
              <div className="mt-4 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsSubscribed(!isSubscribed)}
                  className={`inline-flex h-9 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition ${
                    isSubscribed
                      ? "bg-[#303030] text-[#f1f1f1] hover:bg-[#3f3f3f]"
                      : "bg-[#f1f1f1] text-[#0f0f0f] hover:bg-[#d9d9d9]"
                  }`}
                >
                  {isSubscribed && <Bell size={16} />}
                  {isSubscribed ? "Đã đăng ký" : "Đăng ký"}
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="mt-8 flex gap-8 border-b border-[#3f3f3f] text-[15px] font-medium text-[#aaa]">
            <button className="border-b-2 border-transparent pb-3 hover:text-white">Trang chủ</button>
            <button className="border-b-2 border-white pb-3 text-white">Video</button>
            <button className="border-b-2 border-transparent pb-3 hover:text-white">Danh sách phát</button>
            <button className="border-b-2 border-transparent pb-3 hover:text-white">Cộng đồng</button>
          </nav>

          {/* Lưới video */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
            {videos.map((video) => (
              <button 
                key={video.id} 
                className="group flex flex-col items-start text-left bg-transparent border-none p-0"
                onClick={() => onNavigate?.("watchVideo")}
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#333]">
                  <img src={video.thumbnail} alt={video.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                  <span className="absolute bottom-1.5 right-1.5 rounded bg-black/80 px-1.5 py-0.5 text-xs font-medium text-white">
                    {video.duration}
                  </span>
                </div>
                <div className="mt-3 pr-6">
                  <h3 className="line-clamp-2 text-[15px] font-semibold text-white leading-tight">{video.title}</h3>
                  <div className="mt-1 flex items-center text-[13px] text-[#aaa]">
                    <span>{video.views} lượt xem</span>
                    <span className="mx-1.5">•</span>
                    <span>{video.time}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}