import SuccessModal from "./SuccessModal";

export default function ValidationErrorModal({ isOpen, onClose }) {
  return (
    <SuccessModal
      isOpen={isOpen}
      onClose={onClose}
      title="THIẾU THÔNG TIN"
      message="Bạn chưa nhập tiêu đề hoặc mô tả"
      description="Vui lòng nhập đầy đủ"
      variant="warning"
    />
  );
}
