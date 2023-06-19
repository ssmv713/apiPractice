import { TermsForm } from '../../common/components/TermsForm';

export const CreateView = () => {
  const handleCancelClick = () => {
    alert("정말 취소하시겠습니까?");
  };
  const handleSubmit = () => {
    alert("저장되었습니다.");
  };
  return (
    <TermsForm
      isReadOnly={false}
      handleCancelClick={handleCancelClick}
      handleSubmit={handleSubmit}
    />
  );
};
