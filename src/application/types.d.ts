import { theme } from "./theme";

type ThemeConfig = typeof theme;
declare module "@emotion/react" {
  export interface Theme extends ThemeConfig {}
}
