import { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  ListPlus,
  MessageCircleReply,
  MessageSquareText,
  Pencil,
  Trash2,
  Upload,
} from "lucide-react";
import CreatePlaylistModal from "../components/modals/CreatePlaylistModal";
import DeleteCommentModal from "../components/modals/DeleteCommentModal";
import DeletePlaylistModal from "../components/modals/DeletePlaylistModal";
import EditCommentModal from "../components/modals/EditCommentModal";
import ReplyCommentModal from "../components/modals/ReplyCommentModal";
import SaveVideoModal from "../components/modals/SaveVideoModal";
import SuccessUploadModal from "../components/modals/SuccessUploadModal";
import SuccessEditVideoModal from "../components/modals/SuccessEditVideoModal";
import SuccessDeleteVideoModal from "../components/modals/SuccessDeleteVideoModal";
import ValidationErrorModal from "../components/modals/ValidationErrorModal";
import DeleteVideoModal from "../components/modals/DeleteVideoModal";

const modalActions = [
  { id: "upload", label: "Upload thành công", icon: Upload },
  { id: "edit", label: "Sửa thành công", icon: Pencil },
  { id: "deleteSuccess", label: "Xóa thành công", icon: CheckCircle2 },
  { id: "validation", label: "Thiếu thông tin", icon: AlertCircle },
  { id: "createPlaylist", label: "Tạo danh sách phát", icon: ListPlus },
  { id: "saveVideo", label: "Lưu video", icon: CheckCircle2 },
  { id: "replyComment", label: "Trả lời bình luận", icon: MessageCircleReply },
  { id: "editComment", label: "Sửa bình luận", icon: MessageSquareText },
  { id: "deleteComment", label: "Xóa bình luận", icon: Trash2, danger: true },
  { id: "deletePlaylist", label: "Xóa danh sách phát", icon: Trash2, danger: true },
  { id: "delete", label: "Xóa video khỏi playlist", icon: Trash2, danger: true },
];

export default function DemoModalPage() {
  const [modal, setModal] = useState(null);

  return (
    <div className="demo-page">
      <div className="demo-shell">
        <div className="demo-header">
          <span>Peterson UI</span>
          <h1>Kiểm thử modal</h1>
        </div>

        <div className="demo-actions" aria-label="Danh sách modal">
          {modalActions.map(({ id, label, icon: Icon, danger }) => (
            <button
              key={id}
              type="button"
              className={danger ? "demo-button demo-button-danger" : "demo-button"}
              onClick={() => setModal(id)}
            >
              <Icon size={18} aria-hidden="true" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      <SuccessUploadModal
        isOpen={modal === "upload"}
        onClose={() => setModal(null)}
      />

      <SuccessEditVideoModal
        isOpen={modal === "edit"}
        onClose={() => setModal(null)}
      />

      <SuccessDeleteVideoModal
        isOpen={modal === "deleteSuccess"}
        onClose={() => setModal(null)}
      />

      <ValidationErrorModal
        isOpen={modal === "validation"}
        onClose={() => setModal(null)}
      />

      <DeleteVideoModal
        isOpen={modal === "delete"}
        onClose={() => setModal(null)}
        onConfirm={() => setModal("deleteSuccess")}
      />

      <CreatePlaylistModal
        isOpen={modal === "createPlaylist"}
        onClose={() => setModal(null)}
        onCreate={() => setModal(null)}
      />

      <DeletePlaylistModal
        isOpen={modal === "deletePlaylist"}
        onClose={() => setModal(null)}
        onConfirm={() => setModal("deleteSuccess")}
      />

      <SaveVideoModal
        isOpen={modal === "saveVideo"}
        onClose={() => setModal(null)}
        onSave={() => setModal(null)}
      />

      <ReplyCommentModal
        isOpen={modal === "replyComment"}
        onClose={() => setModal(null)}
        onSubmit={() => setModal(null)}
      />

      <DeleteCommentModal
        isOpen={modal === "deleteComment"}
        onClose={() => setModal(null)}
        onConfirm={() => setModal("deleteSuccess")}
      />

      <EditCommentModal
        isOpen={modal === "editComment"}
        onClose={() => setModal(null)}
        onSave={() => setModal(null)}
      />
    </div>
  );
}
