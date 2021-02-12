// #region Global Imports
import * as React from "react";
import type { AppProps /*, AppContext */ } from 'next/app'
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import withRedux from "next-redux-wrapper";
// #endregion Global Imports

// #region Local Imports
import { theme } from "@Definitions/Styled";
import { appWithTranslation } from "@Server/i18n";

import "@Static/css/main.scss";
// #endregion Local Imports

function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default (appWithTranslation(App));
