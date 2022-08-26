import {} from "styled-components";
import { theme } from "../styles/themes/";

declare module "styled-components" {
  export interface DefaultTheme extends theme {}
}
