import React from "react";
import styled from "styled-components";

const LogoStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.5s;

  #flex-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 9px;
    width: 100%;
    height: fit-content;
  }

  #main-logo {
    width: fit-content;
  }

  #main-logo span {
    background-color: ${({ theme }) => theme.colors.logo};
    width: 1px;
    display: block;
    margin: 0 0.5px;
  }

  #main-logo #one {
    height: 39px;
    opacity: 1;
  }

  #main-logo .second {
    height: 24px;
    opacity: 0.9;
  }

  #main-logo .third {
    height: 15px;
    opacity: 0.6;
  }

  #main-logo .fourth {
    height: 9px;
    opacity: 0.3;
  }

  #white-logo span {
    background-color: white;
    margin: 0 3px;
  }

  #white-logo #one {
    height: 89px;
  }

  #white-logo .second {
    height: 55px;
    opacity: 0.9;
  }

  #white-logo .third {
    height: 34px;
    opacity: 0.6;
  }

  #white-logo .fourth {
    height: 21px;
    opacity: 0.3;
  }
`;

export default function Logo(props: any) {
  return (
    <LogoStyle>
      <div id="main-logo">
        <div id={props.color}>
          <div id="flex-box">
            <span className="fourth"></span>
            <span className="third"></span>
            <span className="second"></span>
            <span id="one"></span>
            <span className="second"></span>
            <span className="third"></span>
            <span className="fourth"></span>
          </div>
        </div>
      </div>
    </LogoStyle>
  );
}
