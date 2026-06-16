import SuccessModal from "./SuccessModal";

export default function SuccessDeleteVideoModal({ isOpen, onClose }) {
  return (
    <SuccessModal
      isOpen={isOpen}
      onClose={onClose}
      message="Xóa video thành công."
      description="Video của bạn đã được xóa."
    />
  );
}