import { useFetchPictures } from '@/apps/picture-list/hooks/use-fetch-pictures';
import {
  PictureListView,
  PictureTableModel,
} from '@/apps/picture-list/views/PictureListView';

const ListPage = () => {
  const models = useFetchListViewModels();
  return <PictureListView models={models} />;
};

export default ListPage;

const useFetchListViewModels = () => {
  const r = useFetchPictures({
    page: 5,
    limit: 10,
  });
  console.log(r.data);
  const resultData = r.data?.data;
  if (!resultData) return [];

  const models = resultData.map<PictureTableModel>((it) => ({
    id: it.id,
    name: it.author,
    content: it.url,
  }));

  return models;
};
