import styled from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.btnText};
  background-color: ${({ theme }) => theme.colors.btnBackground};
  border: 1px solid ${({ theme }) => theme.colors.btnBorder};
  border-radius: 3px;
  height: fit-content;
  padding: 9px;

  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.highlight};
    border-color: ${({ theme }) => theme.colors.highlight};
  }
`;
