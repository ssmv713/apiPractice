import { useRouter } from 'next/router';

import { TermFormModel } from '@/apps/terms/common/components/TermsForm';
import {
  useFetchPicture,
} from '@/apps/terms/detail/infra/hooks/use-fetch-picture';
import { DetailView } from '@/apps/terms/detail/views/DetailView';

const DetailPage = () => {
  const router = useRouter();
  const termId = router.query.id ?? 0;

  const r = useFetchPicture(+termId);
  const resultData = r.data?.data;

  if (!termId || !resultData) return <></>;

  const model: TermFormModel = {
    title: resultData.author,
    content: resultData.url,
    isRequired: true,
  };

  return <DetailView termId={+termId} formModel={model} />;
};

export default DetailPage;
