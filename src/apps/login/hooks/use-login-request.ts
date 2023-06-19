import { MembersApi } from '../../members/infra/api';

export const useLoginRequest = () => {
  const requestLogin = async (email: string, pw: string) => {
    const result = await MembersApi.fetchMembers({ results: 5 });
  };

  return {
    requestLogin,
  };
};
