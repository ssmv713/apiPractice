import { useFetchPerson } from '@/apps/person/infra/hooks/use-fetch-person';
import { PersonView } from '@/apps/person/views/PersonView';

const PersonPage = () => {
  const r = useFetchPerson({
    page: 1,
    results: 10,
  });
  const resultData = r.data?.data;
  console.log(resultData);
  return <PersonView />;
};

export default PersonPage;
