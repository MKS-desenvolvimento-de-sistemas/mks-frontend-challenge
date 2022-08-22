import React from "react";
import {ThemeProvider} from "styled-components";
import {theme} from "../theme";

export const withTheme = (Component: JSX.Element) => {
    return <ThemeProvider theme={theme}>
        {Component}
    </ThemeProvider>
}