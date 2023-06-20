import { useRouter } from 'next/router';

import { TermFormModel } from '@/apps/terms/common/components/TermsForm';
import {
  useUpdatePicture,
} from '@/apps/terms/update/infra/hooks/use-update-picture';
import { UpdateView } from '@/apps/terms/update/views/UpdateView';

const UpdatePage = () => {
  const router = useRouter();
  const termId = router.query.id ?? 0;

  const r = useUpdatePicture(+termId);
  const resultData = r.data?.data;

  if (!termId || !resultData) return <></>;

  const model: TermFormModel = {
    title: resultData.author,
    content: resultData.url,
    isRequired: true,
  };

  return <UpdateView formModel={model} />;
};

export default UpdatePage;
