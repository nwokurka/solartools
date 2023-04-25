import type { NextPage } from "next";
import { useContext } from "react";
import styled from "styled-components";
import MonthlyAvarageChart from "../src/components/charts/MonthlyAvarageChart";
import DailyAvarageChart from "../src/components/charts/DailyAvarageChart";
import EnergyDoughnut from "../src/components/charts/EnergyDoughnut";
import AnnualAvarage from "../src/components/Infobox";
import CalculatorForm from "../src/components/CalculatorForm";
import { Card } from "../src/components/styles/Card.style";
import { ResultContextProvider } from "../src/context/ResultsContext";
import ResultContext from "../src/context/ResultsContext";
import { toNamespacedPath } from "path/posix";

const CalculatorStyle = styled.div`
  display: grid;
  padding: 0px;
  grid-template-areas: "form stage side-bar";
  grid-template-columns: 400px 6fr 2fr;
  grid-gap: 0.5rem;
  margin-bottom: 3rem;

  #stage {
    grid-area: stage;
    display: grid;
    padding: 0px;
    grid-template-areas:
      "monthly-avarage monthly-avarage"
      "daily-avarage energy-doughnut"
      "infobox energy-doughnut";
    grid-template-columns: 3fr 3fr;
    grid-gap: 0.5rem;
  }

  #monthly-avarage-chart-container {
    grid-area: monthly-avarage;
  }

  #calc-form {
    grid-area: form;
    height: fit-content;
  }

  #side-bar {
    grid-area: side-bar;
  }

  #daily-avarage {
    grid-area: daily-avarage;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  #daily-avarage div {
  }

  #energy-doughnut {
    grid-area: energy-doughnut;
    width: 100%;
  }

  #infobox {
    grid-area: infobox;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: left;
    min-height: 200px;
    flex-direction: column;
  }

  //Desktop Computer 1200px
  @media (max-width: 94rem) {
    #stage {
      grid-template-areas:
        "monthly-avarage monthly-avarage"
        "daily-avarage daily-avarage"
        "infobox energy-doughnut";
    }
  }

  //Desktop Computer 1200px
  @media (max-width: 75rem) {
    grid-template-areas:
      "form stage"
      "side-bar stage";
    grid-template-rows: auto 1fr;
    grid-template-columns: 3fr 6fr;
  }

  //Notebook 1024px
  @media (max-width: 64rem) {
  }

  //Tablet 768px
  @media (max-width: 48rem) {
    grid-template-areas:
      "form"
      "stage"
      "sidebar";
    grid-template-columns: 100%;

    height: 110rem;
  }

  //Smartphone 480px
  @media (max-width: 30rem) {
    height: 90rem;
  }
`;

const Calculator: NextPage = () => {
  // const resultCtx = useContext(ResultContext);
  // resultCtx.addNasaData(props)
  return (
    <ResultContextProvider>
      <CalculatorStyle>
        <div id="calc-form">
          <CalculatorForm />
        </div>
        <aside id="side-bar">
          <Card>
            <h3>SIDE BAR</h3>
            <div className="card-main">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae consequatur aspernatur id quis esse temporibus
                maxime, ipsam hic officia incidunt nobis, iste tempora! Quam
                autem provident reprehenderit perferendis nulla quas? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Minus
                blanditiis iure labore voluptate vero rem accusantium quia.
                Aperiam hic delectus sequi maiores animi recusandae pariatur
                porro, quisquam illum, inventore quae.
              </p>
            </div>
          </Card>
        </aside>
        <div id="stage">
          <Card id="monthly-avarage-chart-container">
            <h3 id="title-monthly-avarage">MONTHLY AVRAGE GENERATION </h3>
            <MonthlyAvarageChart />
          </Card>
          <Card id="daily-avarage">
            <h3>DAILY AVARAGE GENERATION</h3>
            <div className="show-case">
              <DailyAvarageChart />
            </div>
          </Card>
          <Card id="energy-doughnut">
            <h3>ENERGY CONSUMPION</h3>
            <EnergyDoughnut />
          </Card>
          <Card id="infobox">
            <h3>INFO </h3>
            <AnnualAvarage />
          </Card>
        </div>
      </CalculatorStyle>
    </ResultContextProvider>
  );
};

// // This function gets called at build time on server-side.
// // It won't be called on client-side, so you can even do
// // direct database queries.
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch("https://power.larc.nasa.gov/api/temporal/monthly/point?parameters=ALLSKY_SFC_SW_DWN,CLRSKY_SFC_SW_DWN,ALLSKY_SRF_ALB,ALLSKY_KT&community=RE&longitude=13.3290&latitude=52.5548&format=JSON&start=2020&end=2020");
//   const data = await res.json();

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       nasa: data,
//     },
//   };
// }
export default Calculator;