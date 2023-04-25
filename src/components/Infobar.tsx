import { useEffect, useState } from "react";
import styled from "styled-components";
import { ResultContext } from "../context/ResultsContext";
import { useContext } from "react";

const InfobarStyle = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  height: 42px;
  margin-top: 1px;
  border: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primaryBorder};
  display: flex;
  align-items: center;
  justify-content: center;

  .preview {
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryText};
    width: fit-content;
    height: 100%;
    padding: 6px;
    border-right: solid;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.primaryBorder};
    transition: all 0.5s linear;
    margin: 1px;
  }

  .highlight-number {
    margin-left: 9px;
  }
`;

function Infobar() {
  const { result } = useContext(ResultContext);
  const [annual, setAnnual] = useState(0);

  useEffect(() => {
    annualHandler();
  });

  function annualHandler() {
    var annualHandler = 0;
    for (let i = 0; i < 11; i++) {
      annualHandler += result[i];
    }
    setAnnual(annualHandler);
  }

  return (
    <InfobarStyle>
      <div className="preview">
        <p>Annual : </p>
        <span className="highlight-number">
          {Math.round(annual * 100) / 100}
        </span>
        <p>kW/y</p>
      </div>
      <div className="preview">
        <p>max Daily : </p>
        <span className="highlight-number">
          {Math.round(annual * 100) / 100}
        </span>
        <p>kW/y</p>
      </div>
      <div className="preview">
        <p>min Daily : </p>
        <span className="highlight-number">
          {Math.round(annual * 100) / 100}
        </span>
        <p>kW/y</p>
      </div>
    </InfobarStyle>
  );
}

export default Infobar;
