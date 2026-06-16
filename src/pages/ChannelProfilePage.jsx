import { Link2 } from "lucide-react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import "./ChannelProfilePage.css";

const videos = [
  {
    title: "Arsenal và PSG đang che giấu à lÊM YÊU gì?",
    meta: "5,1 N lượt xem • 4 giờ trước",
    duration: "9:57",
    theme: "field",
  },
  {
    title: "Xabi Alonso sẽ GIẢI CLU Chelsea nhWthQ nào?",
    meta: "19 N lượt xem • 1 ngày trước",
    duration: "10:26",
    theme: "mountain",
  },
  {
    title: "De Zerbi đã giúp Tottenham TRp HẠNG nhWthQ nào?",
    meta: "17 N lượt xem • 7 ngày trước",
    duration: "9:27",
    theme: "cosmos",
  },
  {
    title: "Một ngày làm việc cùng đội phân tích chiến thuật",
    meta: "8,7 N lượt xem • 2 tuần trước",
    duration: "12:08",
    theme: "studio",
  },
  {
    title: "Điều gì khiến bóng đá hiện đại thay đổi nhanh?",
    meta: "11 N lượt xem • 3 tuần trước",
    duration: "14:12",
    theme: "city",
  },
  {
    title: "Nhìn lại mùa giải qua những con số",
    meta: "6,4 N lượt xem • 1 tháng trước",
    duration: "8:45",
    theme: "skyline",
  },
];

export default function ChannelProfilePage({ activeItem = "profile", onNavigate }) {
  return (
    <div className="channel-profile-page">
      <Sidebar activeItem={activeItem} onNavigate={onNavigate} />
      <Header />

      <main className="channel-profile-main">
        <h1>HỒ SƠ KÊNH</h1>

        <section className="channel-hero" aria-label="Ảnh bìa kênh" />

        <section className="channel-info">
          <div className="channel-avatar" aria-label="Ảnh đại diện kênh" />
          <div className="channel-copy">
            <h2>Cúp Học Xem Bóng</h2>
            <p>@CupHocXemBong</p>
            <p>13,6 N người đăng ký • 85 video</p>
          </div>
        </section>

        <section className="channel-description">
          <h3>Mô tả:</h3>
          <p>
            <Link2 size={16} aria-hidden="true" />
            Đây là kênh chuyên phân tích bóng đá
          </p>
        </section>

        <section className="channel-video-grid" aria-label="Video của kênh">
          {videos.map((video) => (
            <article key={video.title} className="channel-video-card">
              <div className={`channel-video-thumb channel-video-thumb-${video.theme}`}>
                <span>{video.duration}</span>
              </div>
              <h3>{video.title}</h3>
              <p>{video.meta}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
