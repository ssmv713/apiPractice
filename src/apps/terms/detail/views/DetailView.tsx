import { css } from '@emotion/react';
import { Stack } from '@mui/material';

import {
  TermFormModel,
  TermsForm,
} from '../../common/components/TermsForm';
import { DeleteTermButton } from '../../delete/components/DeleteTermButton';
import { UpdateButton } from '../../update/components/UpdateButton';

export type DetailViewProps = {
  termId: number;
  formModel: TermFormModel;
};

export const DetailView = ({ termId, formModel }: DetailViewProps) => {
  const handleCancelClick = () => {
    alert("정말 취소하시겠습니까?");
  };
  const handleSubmit = (fm: TermFormModel) => {
    alert(JSON.stringify(fm));
  };

  return (
    <Stack css={st.root}>
      <Stack css={st.buttons_row} direction="row" spacing="12px">
        <UpdateButton termId={termId} />
        <DeleteTermButton />
      </Stack>
      <TermsForm
        isReadOnly={true}
        handleCancelClick={handleCancelClick}
        handleSubmit={handleSubmit}
        defaultFormModel={formModel}
      />
    </Stack>
  );
};

const st = {
  root: css``,
  buttons_row: css`
    justify-content: flex-end;
    padding-top: 40px;
    padding-right: 60px;
    margin-bottom: -40px;
  `,
};
