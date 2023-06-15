import { RequestSignupDto } from '../infra/dto';

export const useSignUpRequest = () => {
  const requestSignIn = (dto: RequestSignupDto) => {
    const { email, password, termIds } = dto;

    alert(`회원가입 완료 ${email}, ${password} 이용약관:${termIds}`);
  };
  return { requestSignIn };
};
