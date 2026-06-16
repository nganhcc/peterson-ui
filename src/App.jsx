import { useState } from "react";
import ChannelProfilePage from "./pages/ChannelProfilePage";
import EditVideoPage from "./pages/EditVideoPage";
import StatisticsPage from "./pages/StatisticsPage";
import UploadVideoPage from "./pages/UploadVideoPage";
import VideoManagementPage from "./pages/VideoManagementPage";

export default function App() {
  const [page, setPage] = useState("manageVideos");

  function handleNavigate(nextPage) {
    if (["profile", "statistics", "manageVideos", "uploadVideo", "editVideo"].includes(nextPage)) {
      setPage(nextPage);
    }
  }

  if (page === "profile") {
    return <ChannelProfilePage activeItem={page} onNavigate={handleNavigate} />;
  }

  if (page === "statistics") {
    return <StatisticsPage activeItem={page} onNavigate={handleNavigate} />;
  }

  if (page === "uploadVideo") {
    return <UploadVideoPage activeItem="manageVideos" onNavigate={handleNavigate} />;
  }

  if (page === "editVideo") {
    return <EditVideoPage activeItem="manageVideos" onNavigate={handleNavigate} />;
  }

  return <VideoManagementPage activeItem={page} onNavigate={handleNavigate} />;
}
