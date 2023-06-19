import { useState } from 'react';

export const useTermsForm = () => {
  const [title, setTitle] = useState("123");
  const handleTitleChange = (v: string) => setTitle(v);

  const [content, setContent] = useState("");
  const handleContentChange = (v: string) => setContent(v);

  const [isClicked, setIsClicked] = useState(false);

  const handleIsClickedChange = () => {
    setIsClicked(!isClicked);
  };

  return {
    title,
    handleTitleChange,
    content,
    handleContentChange,
    isClicked,
    handleIsClickedChange,
  };
};
