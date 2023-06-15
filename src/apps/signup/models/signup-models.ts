type TermModel = {
  id: number;
  title: string;
  isRequired: boolean;
};

export const termModels: TermModel[] = [
  {
    id: 1,
    title: "[필수] 개인정보 처리방침",
    isRequired: true,
  },
  {
    id: 2,
    title: "[필수] 서비스 이용약관",
    isRequired: true,
  },
  {
    id: 3,
    title: "[필수] 제 3자 이용동의",
    isRequired: true,
  },
  {
    id: 4,
    title: "[선택] 광고성 메시지 수신 동의",
    isRequired: false,
  },
];
