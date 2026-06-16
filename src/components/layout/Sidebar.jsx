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

import "./Sidebar.css";

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
    <aside className="sidebar">
      <div className="sidebar-logo">
        <PlayCircle size={18} fill="white" />
        <span>PERTERSON</span>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              type="button"
              onClick={() => onNavigate?.(item.key)}
              className={`sidebar-item ${item.child ? "child" : ""} ${
                item.key === activeItem ? "active" : ""
              }`}
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
