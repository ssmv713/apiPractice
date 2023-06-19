import {
  useEffect,
  useState,
} from 'react';

import { css } from '@emotion/react';
import {
  Checkbox,
  Stack,
  TextField,
} from '@mui/material';
import { FilledButton } from '@ureca-corp/ui-kit';

export type TermFormModel = {
  title: string;
  content: string;
  isRequired: boolean;
};

type TermsViewProps = {
  isReadOnly?: boolean;
  handleCancelClick: () => void;
  handleSubmit: (formModel: TermFormModel) => void;
  defaultFormModel?: TermFormModel;
};

export const TermsForm = ({
  isReadOnly,
  handleCancelClick,
  handleSubmit,
  defaultFormModel,
}: TermsViewProps) => {
  const [fm, setFm] = useState<TermFormModel>({
    title: "",
    content: "",
    isRequired: false,
  });
  const { title, content, isRequired } = fm;

  const handleTitleChange = (v: string) =>
    setFm((old) => ({ ...old, title: v }));

  const handleContentChange = (v: string) =>
    setFm((old) => ({ ...old, content: v }));

  const handleIsClickedChange = (b: boolean) =>
    setFm((old) => ({ ...old, isRequired: b }));

  const isValidForm = !!title && !!content;

  useEffect(() => {
    if (!defaultFormModel) return;

    setFm(defaultFormModel);
  }, [defaultFormModel]);

  return (
    <Stack css={st.root} spacing="200px">
      <Stack spacing="20px">
        <TextField
          label="제목"
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
        />
        <TextField
          label="내용"
          multiline
          rows={4}
          value={content}
          onChange={(e) => handleContentChange(e.target.value)}
        />
        <Stack direction="row" css={st.checkbox_row}>
          <p>필수여부 </p>{" "}
          <Checkbox
            checked={isRequired}
            onChange={(e) => handleIsClickedChange(e.target.checked)}
          />
        </Stack>
      </Stack>
      {!isReadOnly && (
        <Stack direction="row" css={st.buttons_row}>
          <FilledButton onClick={handleCancelClick}>취소</FilledButton>
          <FilledButton
            disabled={!isValidForm}
            onClick={() => handleSubmit(fm)}
          >
            확인
          </FilledButton>
        </Stack>
      )}
    </Stack>
  );
};

const st = {
  root: css`
    margin: 100px auto;
    border: 2px solid #ccc;
    width: 1200px;
    padding: 80px;
  `,
  checkbox_row: css`
    align-items: center;
  `,
  buttons_row: css`
    justify-content: flex-end;
    gap: 12px;
  `,
};
