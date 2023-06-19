import Link from 'next/link';

import { FilledButton } from '@ureca-corp/ui-kit';

type UpdateButtonProps = {
  termId: number;
};

export const UpdateButton = ({ termId }: UpdateButtonProps) => {
  return (
    <Link
      href={{
        pathname: "/update",
        query: {
          id: termId,
        },
      }}
    >
      <FilledButton>{"수정"}</FilledButton>
    </Link>
  );
};
