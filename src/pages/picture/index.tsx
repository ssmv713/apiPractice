import { useFetchPicture } from '@/apps/picture/hooks/use-fetch-picture';

const PicturePage = () => {
  const r = useFetchPicture({
    page: 1,
    limit: 10,
  });

  const resultData = r.data?.data;

  return <>{/* <PictureView /> */}</>;
};

export default PicturePage;
