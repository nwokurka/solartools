import React from "react";
import Footer from "../nav/Footer";
import Navbar from "../nav/Navbar";
import styled from "styled-components";

const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  

  main {
    height: 100%;
    min-height: 65vh;
    margin-top: 4.5rem;
  }
`;

function Layout(props: any) {
  return (
    <LayoutStyle>
      <header>
        <Navbar />
      </header>
      <main>{props.children}</main>
      <Footer />
    </LayoutStyle>
  );
}

export default Layout;
