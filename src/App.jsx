import { useState } from "react";
import ChannelProfilePage from "./pages/ChannelProfilePage";
import GuestChannelProfilePage from "./pages/GuestChannelProfilePage";
import EditPlaylistPage from "./pages/EditPlaylistPage";
import EditVideoPage from "./pages/EditVideoPage";
import HomePage from "./pages/HomePage";
import LikedVideosPage from "./pages/LikedVideosPage";
import PlaylistPage from "./pages/PlaylistPage";
import PlaylistVideosPage from "./pages/PlaylistVideosPage";
import StatisticsPage from "./pages/StatisticsPage";
import SubscribedChannelsPage from "./pages/SubscribedChannelsPage";
import UploadVideoPage from "./pages/UploadVideoPage";
import VideoManagementPage from "./pages/VideoManagementPage";
import WatchHistoryPage from "./pages/WatchHistoryPage";
import WatchVideoPage from "./pages/WatchVideoPage";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [selectedChannel, setSelectedChannel] = useState(null); // Thêm state cho Kênh

  function handleNavigate(nextPage, data) {
    const validPages = [
      "home", "subscriptions", "profile", "guestProfile", "statistics", 
      "manageVideos", "uploadVideo", "editVideo", "watchVideo", "history", 
      "likedVideos", "playlists", "editPlaylist", "playlistVideos"
    ];

    if (validPages.includes(nextPage)) {
      if (data) {
        // Phân loại dữ liệu truyền vào thuộc về Playlist hay Channel
        if (nextPage === "editPlaylist" || nextPage === "playlistVideos") {
          setSelectedPlaylist(data);
        } else if (nextPage === "guestProfile") {
          setSelectedChannel(data);
        }
      }
      setPage(nextPage);
    }
  }

  if (page === "home") return <HomePage activeItem={page} onNavigate={handleNavigate} />;
  if (page === "watchVideo") return <WatchVideoPage activeItem="home" onNavigate={handleNavigate} />;
  if (page === "subscriptions") return <SubscribedChannelsPage activeItem={page} onNavigate={handleNavigate} />;
  if (page === "history") return <WatchHistoryPage activeItem={page} onNavigate={handleNavigate} />;
  if (page === "likedVideos") return <LikedVideosPage activeItem={page} onNavigate={handleNavigate} />;
  if (page === "playlists") return <PlaylistPage activeItem={page} onNavigate={handleNavigate} />;
  if (page === "editPlaylist") return <EditPlaylistPage onNavigate={handleNavigate} playlist={selectedPlaylist}/>;
  if (page === "playlistVideos") return <PlaylistVideosPage onNavigate={handleNavigate} playlist={selectedPlaylist} />;
  if (page === "profile") return <ChannelProfilePage activeItem={page} onNavigate={handleNavigate} />;
  
  // Route mới cho trang hồ sơ của khách (Guest)
  if (page === "guestProfile") {
    return <GuestChannelProfilePage activeItem="subscriptions" onNavigate={handleNavigate} channel={selectedChannel} />;
  }

  if (page === "statistics") return <StatisticsPage activeItem={page} onNavigate={handleNavigate} />;
  if (page === "uploadVideo") return <UploadVideoPage activeItem="manageVideos" onNavigate={handleNavigate} />;
  if (page === "editVideo") return <EditVideoPage activeItem="manageVideos" onNavigate={handleNavigate} />;
  
  return <VideoManagementPage activeItem={page} onNavigate={handleNavigate} />;
}