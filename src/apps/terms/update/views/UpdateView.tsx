import {
  TermFormModel,
  TermsForm,
} from '../../common/components/TermsForm';

const FakeFormModel: TermFormModel = {
  title: "제목입니다",
  content: "내용입니다. ",
  isRequired: true,
};

export const UpdateView = () => {
  const handleCancelClick = () => {
    alert("정말 취소하시겠습니까?");
  };
  const handleSubmit = (fm: TermFormModel) => {
    alert(JSON.stringify(fm));
  };

  return (
    <TermsForm
      isReadOnly={false}
      handleCancelClick={handleCancelClick}
      handleSubmit={handleSubmit}
      defaultFormModel={FakeFormModel}
    />
  );
};
