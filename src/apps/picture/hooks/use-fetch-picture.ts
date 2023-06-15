import { useQuery } from 'react-query';

import { PictureApi } from '../api/picture.api';
import { FetchPictureQuery } from '../dto/fetch-picture.query';

export const useFetchPicture = (query: FetchPictureQuery) => {
  return useQuery(["useFetchPicture", query], () =>
  PictureApi.fetchPicture(query)
  );
};
