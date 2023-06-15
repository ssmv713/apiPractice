import { css } from '@emotion/react';
import {
  Checkbox,
  Stack,
  TextField,
} from '@mui/material';
import { FilledButton } from '@ureca-corp/ui-kit';

import {
  useSignInForm,
  useSignUpRequest,
  useSignupTerms,
} from '../hooks';
import { termModels } from '../models';

export const SignupView = () => {
  const {
    email,
    handleEmailChange,
    emailError,
    emailErrorMessage,

    handlePwChange,
    password,
    pwError,
    pwErrorMessage,

    handlePwCheckChange,
    passwordCheck,
    pwCheckError,
    pwCheckErrorMessage,

    isValidForm,
  } = useSignInForm();

  const { requestSignIn } = useSignUpRequest();

  const {
    isAllChecked,
    toggleCheckAll,
    checkedTerms,
    toggleTermId,
    isButtonEnabled,
  } = useSignupTerms();

  const handleSubmit = () => {
    requestSignIn({
      email: email,
      password: password,
      termIds: checkedTerms,
    });
  };

  const isRequestEnabled = isButtonEnabled && isValidForm;

  return (
    <Stack css={st.main_root}>
      <Stack css={st.root}>
        <TextField
          label="이메일"
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
          error={emailError}
          helperText={emailErrorMessage}
        />
        <TextField
          label="비밀번호"
          onChange={(e) => handlePwChange(e.target.value)}
          value={password}
          error={pwError}
          helperText={pwErrorMessage}
        />
        <TextField
          label="비밀번호 확인"
          onChange={(e) => handlePwCheckChange(e.target.value)}
          value={passwordCheck}
          error={pwCheckError}
          helperText={pwCheckErrorMessage}
        />
      </Stack>

      <Stack css={st.root}>
        <div css={st.row}>
          <Checkbox checked={isAllChecked} onClick={() => toggleCheckAll()} />
          <p>{"모두 동의"}</p>
        </div>
        {termModels.map((it) => (
          <div css={st.row} key={it.id}>
            <Checkbox
              checked={checkedTerms.includes(it.id)}
              onClick={() => toggleTermId(it.id)}
            />
            <p>{it.title}</p>
          </div>
        ))}
        <FilledButton
          // onClick={() => handleTemrsSubmit(checkedTerms)}
          onClick={handleSubmit}
          disabled={!isRequestEnabled}
          css={st.button}
          fullWidth
        >
          {"회원가입 완료"}
        </FilledButton>
      </Stack>
    </Stack>
  );
};

const st = {
  main_root: css`
    padding: 20px;
    gap: 40px;
  `,
  root: css`
    width: 300px;

    gap: 20px;
  `,

  head_title: css`
    text-align: center;
  `,
  row: css`
    display: flex;
    align-items: center;
  `,
  button: css`
    margin-top: 20px;
  `,
};
