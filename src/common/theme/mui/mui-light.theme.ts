import { createTheme } from "@mui/material/styles";
import { defaultTheme } from "@ureca-corp/ui-kit";

import { _muiTextFieldStyle } from "./mui-overrides";

/**
 * @warning
 * ❌ - 이 파일을 직접 import해서 사용하지 마세요!
 *
 * ✅ - _app.tsx 파일에서 MUI 테마 설정 용도로만 import해서 사용하세요
 */
export const _muiLightTheme = createTheme({
  palette: {
    primary: {
      main: defaultTheme.colors.primary,
    },
  },
  typography: {
    allVariants: {
      whiteSpace: "pre-wrap",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: defaultTheme.breakpoints.sm.value + 1,
      md: defaultTheme.breakpoints.md.value + 1,
      lg: defaultTheme.breakpoints.lg.value + 1,
      xl: defaultTheme.breakpoints.xl.value + 1,
    },
  },
  shape: {
    borderRadius: defaultTheme.shapes.small.value,
  },

  // 컴포넌트별 옵션 설정
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "transparent",
        elevation: 0,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        sizeLarge: {
          padding: "12px",
        },
        sizeMedium: {
          padding: "8px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: "all 0.3s ease-in-out",

          "&:hover": {
            color: defaultTheme.colors.primaryContainer,
          },
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiAccordion: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiDialog: {
      defaultProps: {
        disableEscapeKeyDown: true,
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          ..._muiTextFieldStyle,
        },
      },
    },
  },
});
