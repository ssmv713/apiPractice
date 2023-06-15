import { useQuery } from 'react-query';

import { MembersApi2 } from '../api';
import { FetchMemberListQuery } from '../dto';

export const useFetchMemberList2 = (query: FetchMemberListQuery) => {
  return useQuery(["useFetchMemberList2", query], () =>
    MembersApi2.fetchMemberList(query)
  );
};
