import { useRouter } from 'next/router';

import {
  TermFormModel,
  TermsForm,
} from '../../common/components/TermsForm';

type UpdateViewProps = {
  formModel: TermFormModel;
};

export const UpdateView = ({ formModel }: UpdateViewProps) => {
  const router = useRouter();
  const handleCancelClick = () => {
    alert("정말 취소하시겠습니까?");
    router.push({ pathname: "/list" });
  };
  const handleSubmit = (fm: TermFormModel) => {
    alert(JSON.stringify(fm));
  };

  return (
    <TermsForm
      isReadOnly={false}
      handleCancelClick={handleCancelClick}
      handleSubmit={handleSubmit}
      defaultFormModel={formModel}
    />
  );
};
