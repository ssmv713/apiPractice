import { useRouter } from 'next/router';

import { TermFormModel } from '@/apps/terms/common/components/TermsForm';
import { DetailView } from '@/apps/terms/detail/views/DetailView';

const DetailPage = () => {
  const router = useRouter();

  const termId = router.query.id;
  if (!termId) return <></>;

  const formModel: TermFormModel = {
    title: "제목입니다",
    content: "내용입니다. ",
    isRequired: true,
  };

  return <DetailView termId={+termId} formModel={formModel} />;
};

export default DetailPage;
