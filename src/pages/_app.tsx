import { QueryClient, QueryClientProvider } from "react-query";

import { _muiLightTheme } from "@/common/theme";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import { defaultTheme, GlobalReset } from "@ureca-corp/ui-kit";

import type { AppProps } from "next/app";
//
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <EmotionThemeProvider theme={defaultTheme}>
        <GlobalReset />

        <ThemeProvider theme={_muiLightTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </EmotionThemeProvider>
    </QueryClientProvider>
  );
}
