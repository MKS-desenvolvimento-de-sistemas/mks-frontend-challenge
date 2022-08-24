import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    main: {
      color: {
        primary: string;
      };
    };
  }
}
