import { useQuery } from 'react-query';

import { PictureApi } from '@/apps/picture-list/api/picture.api';

export const useUpdatePicture = (id: number) => {
  return useQuery(["useUpdatePicture", id], () => PictureApi.fetchPicture(id));
};
