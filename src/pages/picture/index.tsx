import { useFetchPicture } from '@/apps/picture/hooks/use-fetch-picture';
import { PictureView } from '@/apps/picture/views/PictureView';

const PicturePage = () => {
  const r = useFetchPicture({
    page: 1,
    limit: 10,
  });

  const resultData = r.data?.data;

  console.log(resultData);
  return <PictureView />;
};

export default PicturePage;
