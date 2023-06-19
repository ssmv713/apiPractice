import {
  useFetchMemberList2,
} from '@/apps/member-list/infra/hooks/use-fetch-members';
import {
  MemberListView,
  TableDataModel,
} from '@/apps/member-list/views/MemberListView';

const MemberListPage = () => {
  const models = useFetchMemberListViewModels();

  return <MemberListView models={models} />;
};

export default MemberListPage;

//
//
//

const useFetchMemberListViewModels = () => {
  const r = useFetchMemberList2({
    page: 1,
    results: 10,
  });

  const resultData = r.data?.data;
  if (!resultData) return [];

  const models = resultData.results.map<TableDataModel>((it) => ({
    id: it.id.value,
    name: it.name.last,
    age: it.dob.age,
    gender: it.gender,
    createdDate: it.registered.date,
  }));

  return models;
};
