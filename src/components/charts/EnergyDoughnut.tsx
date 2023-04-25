import React from "react";
import styled from "styled-components";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useContext } from "react";
import  ResultContext  from "../../context/ResultsContext";

const DoughnutStyle = styled.div`
`

ChartJS.register(ArcElement, Tooltip, Legend);

export default function EnergyDoughnut() {
  const resultCtx = useContext(ResultContext);
  const fontColor = "#cfcfcf";
  const labels = ["Renewable", "Grid"];
  let delayed: any;

  const options = {
    responsive: true,
    layout: {
      padding: 30,
    },
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context: any) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 150 + context.datasetIndex * 100;
        } 
        return delay;
      }
    },
    plugins: {
      // tooltip: {
      //   callbacks: {
      //     label: function (context: any) {
      //       let label = context.dataset.label || "";

      //       if (label) {
      //         label += ": ";
      //       }
      //       if (context.parsed.y !== null) {
      //         label += new Intl.NumberFormat().format(context.parsed.y);
      //       }
      //       return label + "kW/m";
      //     },
      //   },
      // },
    },
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset",
        color: fontColor,

        data: [resultCtx.annualAvarage, resultCtx.annualConsumption],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)" ,'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <DoughnutStyle>
      <Doughnut options={options}data={data} />
    </DoughnutStyle>
  );
}
