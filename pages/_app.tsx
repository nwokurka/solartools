import "../src/styles/globals.css";
import React, { useState } from "react";
import type { AppProps } from "next/app";
import Layout from "../src/components/layout/Layout";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../src/context/ThemeContext";
import { GlobalStyles } from "../src/components/styles/GlobalStyles";
import {
  lightTheme,darkTheme,
  darkThemeTwo,darkThemeThree
} from "../src/components/styles/Themes";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
