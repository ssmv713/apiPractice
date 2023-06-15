import "@emotion/react";

import { CustomTheme } from "@ureca-corp/ui-kit";

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}
