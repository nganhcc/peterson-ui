import {
  Home,
  Tv,
  UserSquare,
  User,
  BarChart3,
  PlaySquare,
  ListVideo,
  ThumbsUp,
  History,
  PlayCircle,
} from "lucide-react";

const menuItems = [
  { key: "home", label: "Trang chủ", icon: Home },
  { key: "subscriptions", label: "Kênh đã theo dõi", icon: Tv },
  { key: "channel", label: "Kênh cá nhân", icon: UserSquare },
  { key: "profile", label: "Hồ sơ", icon: User, child: true },
  { key: "statistics", label: "Thống kê", icon: BarChart3, child: true },
  { key: "manageVideos", label: "Quản lý video", icon: PlaySquare, child: true },
  { key: "playlists", label: "Danh sách phát", icon: ListVideo },
  { key: "likedVideos", label: "Video đã thích", icon: ThumbsUp },
  { key: "history", label: "Video đã xem", icon: History },
];

export default function Sidebar({ activeItem = "manageVideos", onNavigate }) {
  return (
    <aside className="fixed top-0 left-0 z-20 h-screen w-[172px] bg-[#272727] text-[#d6d6d6] max-md:hidden">
      <button
          type="button"
          className="flex h-[72px] w-full items-center gap-[12px] border-0 border-b border-[#3a3a3a] bg-transparent pl-[20px] text-left text-sm font-bold text-white hover:bg-[#303030]"
          onClick={() => onNavigate?.("home")}
          aria-label="Về trang chủ"
        >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
          <div className="ml-[2px] h-0 w-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-[#272727]" />
        </div>

        <span className="text-base font-bold">PERTERSON</span>
      </button>

      <nav className="flex flex-col pt-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.key === activeItem;

          return (
            <button
              key={item.label}
              type="button"
              onClick={() => onNavigate?.(item.key)}
              className={`flex h-[60px] items-center gap-3 border-0 bg-transparent text-left text-[13px] hover:bg-[#303030] hover:text-white ${
                item.child ? "pl-12" : "pl-4"
              } ${isActive ? "font-semibold text-white" : "text-[#cfcfcf]"}`}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
