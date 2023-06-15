export const useTermsRequest = () => {
  const handleTemrsSubmit = (termId: number[]) => {
    alert(`이용약관에 동의했습니다.${termId}`);
  };
  return {
    handleTemrsSubmit,
  };
};
