import SuccessModal from "./SuccessModal";

export default function SuccessEditVideoModal({ isOpen, onClose }) {
  return (
    <SuccessModal
      isOpen={isOpen}
      onClose={onClose}
      message="Chỉnh sửa video thành công."
      description="Video của bạn đã được xử lý và hiện đang có sẵn trên kênh của bạn."
    />
  );
}