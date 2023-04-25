import styled from "styled-components";

export const Card = styled.div`
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryText};
  border-radius: 3px;
  overflow: hidden;
  position: relative;

  h3 {
    color: ${({ theme }) => theme.colors.lighText};
    font-size: 16px;
    font-weight: 100;
    border-left: solid ${({ theme }) => theme.colors.highlight};
    border-bottom: solid 1px ${({ theme }) => theme.colors.lightBorder};
    padding: 9px 18px 9px 15px;
    height: fit-content;
    display: flex;
    justify-content: space-between;
  }

  .col-40 {
    float: left;
    width: 40%;
  }

  .col-60 {
    float: left;
    width: 60%;
  }

  .titel {
    float: left;
    width: fit-content;
    margin: 0;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 6px 9px;
    color: ${({ theme }) => theme.colors.lightText};
  }

  .card-main {
    padding: 20px;
  }

  .filler {
    width: 100%;
    border-bottom: solid;
    border-left: solid;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.primaryBorder};
  }

  .show-case {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
