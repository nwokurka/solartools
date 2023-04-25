import React from "react";
import styled from "styled-components";
import DocsNavBar from "../nav/DocsNavBar";

const LayoutDocsStyle = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  height: 100%;
  margin-top: -0.5rem;
  min-height: 70vh;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-bottom: 2rem;

  #stage-container {
    min-height: 65vh;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  .stage {
    padding: 0 5rem 0 5rem;
    width: 100%;
    margin-right: 300px;
  }

  .stage h1 {
    font-size: 3rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primaryText};
    margin: 2rem 0 2rem 0;
  }
  
  .stage h2 {
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primaryText};
    margin: 4rem 0 0 0;
  }

  .stage hr {
    margin: 1.5rem 0 1.5rem 0;
    height: 1px;
    color: ${({ theme }) => theme.colors.lightBorder};
  }

  .stage p {
    margin: 1rem 0 1rem 0;
    color: ${({ theme }) => theme.colors.primaryText}
  }

  .stage ul {
    margin-left: 2rem;
    list-style: circle;
    color: ${({ theme }) => theme.colors.primaryText}
  }

  .page-nav {
    position: fixed;
    margin-top: 5rem;
    padding-left: 2rem;
    border-left: 1px solid ${({ theme }) => theme.colors.lightBorder};
    height: fit-content;
    width: 300px;
  }

  .page-nav li a:hover {
    color: ${({ theme }) => theme.colors.highlight};
  }
`;

function LayoutDocs(props: any) {
  return (
    <LayoutDocsStyle>
      <DocsNavBar />
      <div id="stage-container">{props.children}</div>
    </LayoutDocsStyle>
  );
}

export default LayoutDocs;
