import { useQuery } from 'react-query';

import { PictureApi } from '../api/picture.api';
import { FetchPictureQuery } from '../dto/fetch-picture.query';

export const useFetchPictures = (query: FetchPictureQuery) => {
  return useQuery(["useFetchPictures", query], () =>
    PictureApi.fetchPictures(query)
  );
};
