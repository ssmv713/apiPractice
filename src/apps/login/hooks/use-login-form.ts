import { Regex } from "@/common/utils/regex";
import { useState } from "react";

export const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (v: string) => {
    setEmail(v);
  };
  const isEmailValid = Regex.email.test(email);
  const emailError = !isEmailValid && email !== "";
  const emailErrorText = emailError && "이메일 형식이 틀립니다.";

  const [pw, setPw] = useState("");
  const handlePwChange = (v: string) => {
    setPw(v);
  };

  const isValidForm = pw !== "" && isEmailValid;

  return {
    handleEmailChange,
    handlePwChange,
    isValidForm,
    email,
    pw,
    emailErrorText,
  };
};
