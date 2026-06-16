# PROJECT_CONTEXT.md

## Project Overview

Project Name: Peterson Video Platform

Type:

* Frontend UI Prototype
* No Backend
* No Authentication
* No Database
* Fake Data Only

Purpose:
Build an interactive YouTube-like interface for HCI / UI Design coursework.

Tech Stack:

* React + Vite
* Tailwind CSS (preferred)
* Local State (useState)
* Static JSON Data

---

# Global Rules

## Layout

All pages use the same layout:

* Fixed Sidebar (left)
* Fixed Header (top)
* Dynamic Main Content (center)

Structure:

Sidebar
├── Trang chủ
├── Kênh đã theo dõi
├── Kênh cá nhân
│   ├── Hồ sơ
│   ├── Thống kê
│   └── Quản lý video
├── Danh sách phát
├── Video đã thích
└── Video đã xem

Header

* Search Bar
* User Avatar

Only MainContent changes between pages.

---

# Shared Components

## Layout Components

* Sidebar
* Header
* AppLayout

## Content Components

* VideoCard
* PlaylistCard
* ChannelCard
* CommentItem
* VideoPlayer
* SearchBar
* Pagination
* EmptyState

## Modal Components

* SuccessModal
* ConfirmModal
* FormModal

---

# Pages

## 1. HomePage

Purpose:
Display recommended videos.

Features:

* Video Grid
* Infinite Scroll (fake)
* Search Navigation

---

## 2. WatchVideoPage

Purpose:
Watch a selected video.

Features:

* Video Player
* Video Information
* Channel Information
* Like / Dislike
* Save Video
* Comments
* Recommended Videos

Interactions:

* Like
* Dislike
* Save
* Add Comment
* Reply Comment
* Edit Comment
* Delete Comment

---

## 3. SubscribedChannelsPage

Purpose:
Display followed channels.

Features:

* Channel List
* Search Channel
* Navigate To Channel

---

## 4. WatchHistoryPage

Purpose:
Display watched videos.

Features:

* History List
* Continue Watching

---

## 5. LikedVideosPage

Purpose:
Display liked videos.

Features:

* Video List
* Navigate To Video

---

## 6. PlaylistPage

Purpose:
Display all playlists.

Features:

* Playlist Grid
* Create Playlist
* Edit Playlist
* Delete Playlist

---

## 7. PlaylistDetailPage

Purpose:
Display videos inside playlist.

Features:

* Playlist Information
* Video List
* Remove Video From Playlist

---

## 8. ChannelProfilePage

Purpose:
Edit personal channel information.

Features:

* Avatar Upload
* Channel Name
* Description
* Social Links
* Save Changes

---

## 9. ChannelStatisticsPage

Purpose:
Display channel statistics.

Features:

* Total Videos
* Total Views
* Total Likes
* Total Subscribers
* Charts (fake data)

---

## 10. PersonalVideoManagementPage

Purpose:
Manage uploaded videos.

Features:

* Search Video
* Filter Video
* Edit Video
* Delete Video
* Upload New Video

---

## 11. UploadVideoPage

Purpose:
Upload a new video.

Fields:

* Video File
* Thumbnail
* Title
* Description
* Visibility

Actions:

* Upload
* Cancel

---

## 12. EditVideoPage

Purpose:
Edit existing video information.

Fields:

* Thumbnail
* Title
* Description
* Visibility

Actions:

* Save
* Cancel

---

# Modals

## SuccessUploadModal

Message:
Video uploaded successfully.

---

## SuccessEditVideoModal

Message:
Video updated successfully.

---

## SuccessDeleteVideoModal

Message:
Video deleted successfully.

---

## ValidationErrorModal

Message:
Please fill all required fields.

---

## CreatePlaylistModal

Fields:

* Playlist Name
* Description
* Visibility

---

## DeletePlaylistModal

Message:
Are you sure you want to delete this playlist?

---

## RemoveVideoFromPlaylistModal

Message:
Remove this video from playlist?

---

## SaveVideoToPlaylistModal

Purpose:
Select playlist to save video.

Features:

* Existing Playlists
* Create New Playlist

---

## ReplyCommentModal

Field:

* Reply Content

---

## EditCommentModal

Field:

* Comment Content

---

## DeleteCommentModal

Message:
Are you sure you want to delete this comment?

---

# Fake Data

Use local JSON files only.

videos.json
channels.json
playlists.json
comments.json
statistics.json

No API calls.

---

# Navigation

Home
-> Watch Video

Watch Video
-> Channel
-> Playlist
-> Comments

Playlist
-> Playlist Detail

Subscribed Channels
-> Channel

Liked Videos
-> Watch Video

History
-> Watch Video

Video Management
-> Upload Video
-> Edit Video

---

# Coding Rules

* Use reusable components.
* No backend code.
* No API integration.
* No authentication flow.
* Use fake data.
* Use local state only.
* Focus on UI and interaction.
* Match Figma as closely as possible.
