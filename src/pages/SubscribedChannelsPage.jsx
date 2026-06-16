import { useState } from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import './SubscribedChannelsPage.css';

// Hàm sinh dữ liệu kênh ngẫu nhiên
// Hàm sinh dữ liệu kênh ngẫu nhiên không trùng lặp
const generateRandomChannels = (count) => {
  // Kho dữ liệu tên kênh phong phú hơn
  const allNames = [
    'MixiGaming', 'Trực Tiếp Game', 'Cris Devil Gamer', 'Schannel', 'Vật Vờ Studio',
    'Spiderum', 'Hội Đồng Cừu', 'Duy Thẩm', 'Phê Phim', 'TUI TÊN SƠN',
    'Cúp Học Xem Bóng', 'Ghiền Bóng Đá', 'HLV Online nhưng rất hoài niệm',
    'FAP TV', 'Trắng TV', 'Khoa Pug', '1977 Vlog', 'Đen Vâu Official',
    'Hương Ly Cover', 'Gãy TV', 'Welax', 'Hà Nội Phố'
  ];

  const allDescs = [
    'Kênh livestream chơi game và chém gió cùng anh em mỗi tối...',
    'Cập nhật tin tức công nghệ, review điện thoại, laptop mới nhất...',
    'Đam mê bóng đá, phân tích chiến thuật và nhận định các trận đấu đỉnh cao...',
    'Kênh YouTube cộng đồng với hàng nghìn bài viết chất lượng về mọi mặt của đời sống...',
    'Những video giải trí, hài hước, mang lại tiếng cười sau những giờ làm việc căng thẳng...',
    'Kênh làm vlog du lịch, khám phá ẩm thực và văn hóa khắp mọi miền tổ quốc...',
    'Vẫn là những câu chuyện cũ, nhưng được kể dưới một góc nhìn hoàn toàn mới lạ...',
  ];

  // Xáo trộn (Shuffle) mảng tên kênh để đảm bảo lấy ra không bị trùng
  const shuffledNames = [...allNames].sort(() => 0.5 - Math.random());

  return Array.from({ length: count }, (_, index) => {
    const id = index + 1;
    // Lấy tên kênh từ mảng đã xáo trộn (sẽ không bị trùng lặp)
    const name = shuffledNames[index % shuffledNames.length];
    
    // Tạo handle viết liền không dấu (VD: @mixigaming)
    const handle = '@' + name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '').toLowerCase();
    
    const isVerified = Math.random() > 0.4; // 60% khả năng có tích xác minh
    const subscribers = (Math.random() * 100).toFixed(1) + (Math.random() > 0.5 ? ' N' : ' Tr');
    const description = allDescs[Math.floor(Math.random() * allDescs.length)];
    
    return {
      id,
      name,
      handle,
      subscribers,
      description,
      // Ảnh đại diện ngẫu nhiên
      avatar: `https://picsum.photos/seed/channel_new_${id}/48/48?grayscale`,
      isVerified,
      subscribed: true,
    };
  });
};

export default function SubscribedChannelsPage({ activeItem = 'subscriptions', onNavigate }) {
  // Sinh ngẫu nhiên 8 kênh
  const [channels, setChannels] = useState(generateRandomChannels(8));

  const toggleSubscribe = (id) => {
    setChannels((prev) =>
      prev.map((ch) => (ch.id === id ? { ...ch, subscribed: !ch.subscribed } : ch))
    );
  };

  return (
    <div className="subscribed-page">
      <Sidebar activeItem={activeItem} onNavigate={onNavigate} />
      <Header />

      <main className="subscribed-main">
        {/* Khối container bao bọc để căn giữa nội dung giống hình ảnh */}
        <div className="subscribed-container">
          <h1 className="subscribed-title">Tất cả kênh đã đăng ký</h1>

          <div className="subscribed-list">
            {channels.map((channel) => (
              <div key={channel.id} className="subscribed-card">
                <img
                  className="subscribed-avatar"
                  src={channel.avatar}
                  alt={channel.name}
                />
                <div className="subscribed-info">
                  <div className="subscribed-name-wrapper">
                    <h3 className="subscribed-name">{channel.name}</h3>
                    {/* Render icon xác minh nếu kênh có isVerified = true */}
                    {channel.isVerified && (
                      <svg className="verified-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path>
                      </svg>
                    )}
                  </div>
                  <p className="subscribed-meta">
                    <span>{channel.handle}</span>
                    <span className="subscribed-separator">·</span>
                    <span>{channel.subscribers} người đăng ký</span>
                  </p>
                  <p className="subscribed-desc">{channel.description}</p>
                </div>
                <button
                  className={`subscribed-btn ${channel.subscribed ? 'following' : 'not-following'}`}
                  onClick={() => toggleSubscribe(channel.id)}
                >
                  {channel.subscribed ? 'Đang theo dõi' : 'Theo dõi'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}