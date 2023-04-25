import { useEffect, useContext } from "react";
import styled from "styled-components";
import ResultContext from "../context/ResultsContext";

const AnnualAvarageStyle = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  ul {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  li {
    display: flex;
    margin-left: 2rem;
    font-size: 0.9rem;
    color: ;
  }

  .number {
    position: absolute;
    right: 2rem;
  }
  
  hr {
    border-color: ${({ theme }) => theme.colors.lightBorder};
  }
`;

function AnnualAvarage() {
  const resultCtx = useContext(ResultContext);

  return (
    <AnnualAvarageStyle>
      <ul>
        <li>
          <p className="name">DAILY MIN</p>
          <span className="number">
            {Math.round(Math.min(...resultCtx.dailyAvarage) * 100) / 100}kW
          </span>
        </li>
        <li>
          <p className="name">DAILY MAX</p>
          <span className="number">
            {Math.round(Math.max(...resultCtx.dailyAvarage) * 100) / 100}kW
          </span>
        </li>
        <li>
          <p className="name">MONTHLY MIN</p>
          <span className="number">
            {Math.round(Math.min(...resultCtx.monthlyAvarage) * 100) / 100}kW
          </span>
        </li>
        <li>
          <p className="name">MONTHLY MAX</p>
          <span className="number">
            {Math.round(Math.max(...resultCtx.monthlyAvarage) * 100) / 100}kW
          </span> 
        </li>
        <hr />
        <li>
          <p className="name">ANNUAL GENERATION</p>
          <span className="number">
            {Math.round(resultCtx.annualAvarage * 100) / 100}kW
          </span>
        </li>
      </ul>
    </AnnualAvarageStyle>
  );
}

export default AnnualAvarage;
