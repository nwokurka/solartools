import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  h1, h2 , h3 {
    color: ${({ theme }) => theme.colors.primaryText};
  }

  a {
    color: ${({ theme }) => theme.colors.primaryText};
  }
  `