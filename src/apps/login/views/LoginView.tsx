import { css } from '@emotion/react';
import {
  Stack,
  TextField,
} from '@mui/material';
import { FilledButton } from '@ureca-corp/ui-kit';

import {
  useLoginForm,
  useLoginRequest,
} from '../hooks';

export const LoginView = () => {
  const {
    handleEmailChange,
    handlePwChange,
    isValidForm,
    email,
    pw,
    emailErrorText,
  } = useLoginForm();

  const { requestLogin } = useLoginRequest();
  const handleSubmit = () => {
    requestLogin(email, pw);
  };

  return (
    <Stack css={st.root}>
      <p>{"LOGIIN"}</p>
      <TextField
        label="Email"
        error={!!emailErrorText}
        value={email}
        helperText={emailErrorText}
        onChange={(e) => handleEmailChange(e.target.value)}
      />
      <TextField
        label="Password"
        value={pw}
        onChange={(e) => handlePwChange(e.target.value)}
      />

      <FilledButton
        onClick={handleSubmit}
        color="primary"
        disabled={!isValidForm}
      >
        {"로그인"}
      </FilledButton>
    </Stack>
  );
};

const st = {
  root: css`
    width: 400px;
    border: solid 1px #666;
    gap: 50px;
    padding: 20px;
  `,
};
