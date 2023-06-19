import { FilledButton } from '@ureca-corp/ui-kit';

export const DeleteTermButton = () => {
  const handleDeleteTerm = () => {
    alert("정말 삭제하시겠습니까?");
  };
  return <FilledButton onClick={handleDeleteTerm}>{"삭제"}</FilledButton>;
};
