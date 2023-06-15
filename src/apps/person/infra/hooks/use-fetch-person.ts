import { useQuery } from 'react-query';

import { PersonApi } from '../api/person.api';
import { FetchPersonQuery } from '../dto/fetch-person.query';

export const useFetchPerson = (query: FetchPersonQuery) => {
  return useQuery(["useFetchPerson", query], () =>
    PersonApi.fetchPerson(query)
  );
};
