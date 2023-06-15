import { Regex } from "@/common/utils/regex";
import { useState } from "react";

export const useSignInForm = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (v: string) => {
    setEmail(v);
  };
  const isEmailValid = Regex.email.test(email);
  const emailError = !!email && !isEmailValid;
  const emailErrorMessage = emailError && "이메일 형식이 틀렸습니다.";

  const [password, setPassword] = useState("");
  const handlePwChange = (v: string) => {
    setPassword(v);
  };
  const [passwordCheck, setPasswordCheck] = useState("");
  const handlePwCheckChange = (v: string) => {
    setPasswordCheck(v);
  };
  const isPwValid = Regex.password.test(password);
  const pwError = !!password && !isPwValid;
  const pwErrorMessage = pwError && "비밀번호 양식이 틀립니다.";

  const ispwCheckValid = password === passwordCheck;
  const pwCheckError = !!passwordCheck && !ispwCheckValid;
  const pwCheckErrorMessage = pwCheckError && "비밀번호가 일치하지 않습니다.";

  const isValidForm = isEmailValid && isPwValid && ispwCheckValid;
  return {
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
  };
};
