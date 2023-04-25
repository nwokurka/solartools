import type { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import Logo from "../src/components/Logo";

const IndexStyle = styled.div`
  #showcase {
    position: relative;
    background-color: rgb(29, 36, 48);
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    height: fit-content;
    margin-top: -0.5rem;
  }

  #video {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.6;
  }

  #intro-box-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #intro-box {
    color: white;
    text-align: center;
    margin: 0 3rem 3rem 3rem;
  }

  #intro-box h1 {
    font-size: 2.5rem;
    font-family: "Roboto", sans-serif;
    color: white;
  }

  #intro-box p {
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    font-weight: 100;
  }

  //Notebook 1024px
  @media (max-width: 64rem) {
    #intro-box h1 {
      font-size: 1.5rem;
    }
  }

  //Tablet 768px
  @media (max-width: 48rem) {
    #intro-box {
      margin: 0 1.5rem 0 1.5rem;
    }
  }

  //Smartphone 480px
  @media (max-width: 30rem) {
  }
`;

const Home: NextPage = () => {
  const white: string = "white-logo";

  return (
    <IndexStyle>
      <div id="showcase">
        <video autoPlay loop muted id="video">
          <source src="/LandingVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div id="intro-box-container">
          <div id="intro-box">
            <Logo color="white-logo" />
            <h1>SOLAR DESIGN SOFTWARE</h1>
            <p>
              Build on state of the art technologies for optimal workflow and
              accuracy
            </p>
          </div>
        </div>
      </div>
    </IndexStyle>
  );
};

export default Home;
