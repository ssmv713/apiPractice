import { defaultTheme } from "@ureca-corp/ui-kit";

const highlightColor = defaultTheme.colors.primaryContainer;
const idleBorderColor = defaultTheme.colors.outline;
const errorColor = defaultTheme.colors.error;

// mui - 텍스트 필드 스타일
export const _muiTextFieldStyle = {
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: `${idleBorderColor} !important`,

    transition: "border-color 0.3s ease-in-out",
  },

  "& .Mui-focused": {
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: `${highlightColor} !important`,
    },
  },

  "&:hover": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: `${highlightColor} !important`,
    },
  },

  "& .Mui-error": {
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: `${errorColor} !important`,
    },
  },

  "& .Mui-disabled": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: `${idleBorderColor} !important`,
    },
  },
};
