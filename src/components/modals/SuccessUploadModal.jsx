import SuccessModal from "./SuccessModal";

export default function SuccessUploadModal({ isOpen, onClose }) {
  return (
    <SuccessModal
      isOpen={isOpen}
      onClose={onClose}
      message="Đăng tải video thành công."
      description="Video của bạn đã được xử lý và hiện đang có sẵn trên kênh của bạn."
    />
  );
}