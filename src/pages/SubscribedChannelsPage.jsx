import { BadgeCheck, Gamepad2, Radio, Trophy, UserCircle } from "lucide-react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

const subscribedChannels = [
  {
    id: 1,
    name: "PeterSon",
    handle: "@sondinhtuan",
    subscribers: "81,8 N người đăng ký",
    description: "Tôi tập bắn súng Roblox cho mọi người đã theo dõi và ủng hộ! Follow các social khác tại đây...",
    avatar: "person",
  },
  {
    id: 2,
    name: "TUI TÊN SƠN",
    handle: "@TUITENSON",
    subscribers: "2,21 Tr người đăng ký",
    description: "Kênh livestream chơi game và chém gió...",
    avatar: "person",
    verified: true,
  },
  {
    id: 3,
    name: "Cúp Học Xem Bóng",
    handle: "@CupHocXemBong",
    subscribers: "13,6 N người đăng ký",
    description: "Bê cúp học, lớn làm video phân tích bóng đá! Nếu các bạn đã chán xem nội dung thể thao kiểu truyền thống...",
    avatar: "football",
  },
  {
    id: 4,
    name: "Spiderum",
    handle: "@Spiderum",
    subscribers: "1,19 Tr người đăng ký",
    description: "Kênh Youtube chính thức của Spiderum - cộng đồng viết với tên gọi thân thương 'Động Nhện' - địa bàn hoạt động của gần 200.000 thành viên...",
    avatar: "dark",
    verified: true,
  },
  {
    id: 5,
    name: "HLV Online nhưng rất hoài niệm",
    handle: "@HLVOnlineClassic",
    subscribers: "31,8 N người đăng ký",
    description: "Vẫn là Huấn luyện viên Online, nhưng ở đây chúng tôi chỉ làm video về những đội bóng/cầu thủ xưa cũ.",
    avatar: "game",
  },
  {
    id: 6,
    name: "PeterSon",
    handle: "@sondinhtuan",
    subscribers: "81,8 N người đăng ký",
    description: "Tôi tập bắn súng Roblox cho mọi người đã theo dõi và ủng hộ! Follow các social khác tại đây...",
    avatar: "person",
  },
  {
    id: 7,
    name: "PeterSon",
    handle: "@sondinhtuan",
    subscribers: "81,8 N người đăng ký",
    description: "Tôi tập bắn súng Roblox cho mọi người đã theo dõi và ủng hộ! Follow các social khác tại đây...",
    avatar: "person",
  },
];

const avatarClass = {
  person: "bg-[#e8ebf5] text-[#6f7782]",
  football: "bg-[#343434] text-[#505050]",
  dark: "bg-black text-[#2f2f2f]",
  game: "bg-[#343434] text-[#555]",
};

function ChannelAvatar({ channel }) {
  const baseClass =
    "flex size-[84px] shrink-0 items-center justify-center rounded-full max-md:size-[68px]";

  if (channel.avatar === "football") {
    return (
      <span className={`${baseClass} ${avatarClass[channel.avatar]}`} aria-hidden="true">
        <Trophy size={31} strokeWidth={1.8} />
      </span>
    );
  }

  if (channel.avatar === "dark") {
    return (
      <span className={`${baseClass} ${avatarClass[channel.avatar]}`} aria-hidden="true">
        <Radio size={32} strokeWidth={1.4} />
      </span>
    );
  }

  if (channel.avatar === "game") {
    return (
      <span className={`${baseClass} ${avatarClass[channel.avatar]}`} aria-hidden="true">
        <Gamepad2 size={32} strokeWidth={1.6} />
      </span>
    );
  }

  return <UserCircle className={`${baseClass} ${avatarClass[channel.avatar]}`} strokeWidth={1.4} aria-hidden="true" />;
}

export default function SubscribedChannelsPage({ activeItem = "subscriptions", onNavigate }) {
  return (
    <div className="min-h-screen bg-[#1f1f1f] text-[#f4f4f4]">
      <Sidebar activeItem={activeItem} onNavigate={onNavigate} />
      <Header />

      <main className="ml-[172px] min-h-screen px-[52px] pt-[122px] pb-12 max-md:ml-0 max-md:px-4 max-md:pt-[92px]">
        <section className="mx-auto w-full max-w-[970px]" aria-label="Kênh đã theo dõi">
          <h1 className="m-0 mb-4 text-[34px] leading-tight font-black text-[#f2f2f2] max-md:text-2xl">
            Tất cả kênh đã đăng ký
          </h1>

          <div>
            {subscribedChannels.map((channel) => (
              <article
                key={`${channel.name}-${channel.id}`}
                className="grid min-h-[126px] grid-cols-[84px_minmax(0,1fr)_150px] items-center gap-7 border-b border-[#303030] py-[18px] max-md:grid-cols-[68px_minmax(0,1fr)] max-md:gap-4"
              >
                <button
                  type="button"
                  className="rounded-full border-0 bg-transparent p-0"
                  onClick={() => onNavigate?.("profile")}
                  aria-label={`Mở hồ sơ kênh ${channel.name}`}
                >
                  <ChannelAvatar channel={channel} />
                </button>

                <button
                  type="button"
                  className="min-w-0 border-0 bg-transparent p-0 text-left"
                  onClick={() => onNavigate?.("profile")}
                  aria-label={`Mở hồ sơ kênh ${channel.name}`}
                >
                  <span className="flex min-w-0 items-center gap-1.5">
                    <span className="truncate text-base font-extrabold text-[#f2f2f2] hover:text-white">
                      {channel.name}
                    </span>
                    {channel.verified ? (
                      <BadgeCheck size={15} className="shrink-0 text-[#9aa0a6]" fill="#9aa0a6" stroke="#1f1f1f" aria-label="Đã xác minh" />
                    ) : null}
                  </span>
                  <span className="mt-1 block truncate text-[13px] text-[#b8b8b8]">
                    {channel.handle}
                    <span className="px-2 text-[#8f8f8f]">•</span>
                    {channel.subscribers}
                  </span>
                  <span className="mt-2 block line-clamp-2 text-[13px] leading-relaxed text-[#9f9f9f]">
                    {channel.description}
                  </span>
                </button>

                <button
                  type="button"
                  className="justify-self-end rounded-full border border-[#494949] bg-transparent px-5 py-2 text-[13px] font-semibold text-[#e7e7e7] hover:border-[#666] hover:bg-[#2b2b2b] hover:text-white max-md:col-start-2 max-md:justify-self-start"
                  aria-label={`Đang theo dõi ${channel.name}`}
                >
                  Đang theo dõi
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
