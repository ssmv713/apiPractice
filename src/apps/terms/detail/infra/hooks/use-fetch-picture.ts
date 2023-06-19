import { useQuery } from 'react-query';

import { PictureApi } from '@/apps/picture-list/api/picture.api';

export const useFetchPicture = (id: number) => {
  return useQuery(["useFetchPicture", id], () => PictureApi.fetchPicture(id));
};
