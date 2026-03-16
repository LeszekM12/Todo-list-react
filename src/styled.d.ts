import "styled-components";
import { minimalTheme } from "./core/theme";

type Theme = typeof minimalTheme;

declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}
