import React from "react";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useContext } from "react";
import ResultContext from "../../context/ResultsContext";

const LineStyle = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function DailyAvarageChart() {
  const resultCtx = useContext(ResultContext);
  const fontColor = "#cfcfcf";
  let delayed: any;

  const options = {
    responsive: true,
    radius: 3,
    hitRadius: 30,
    hoverRadius: 6,
    layout: {
      padding: 15,
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
    scales: {
      y: {
        ticks: {
          color: fontColor,
          callback: function (value: any) {
            return value + "kW";
          },
        },
      },
      x: {
        ticks: {
          color: fontColor,
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: any) {
            let label = context.dataset.label || "";

            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat().format(context.parsed.y);
            }
            return label + "kW";
          },
        },
      },
      legend: {
        display: false ,
      },
    },
  };

  const labels = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];


  //Gradient Fill

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset",
        color: fontColor,

        data: [
          resultCtx.dailyAvarage[0],
          resultCtx.dailyAvarage[1],
          resultCtx.dailyAvarage[2],
          resultCtx.dailyAvarage[3],
          resultCtx.dailyAvarage[4],
          resultCtx.dailyAvarage[5],
          resultCtx.dailyAvarage[6],
          resultCtx.dailyAvarage[7],
          resultCtx.dailyAvarage[8],
          resultCtx.dailyAvarage[9],
          resultCtx.dailyAvarage[10],
          resultCtx.dailyAvarage[11],
        ],
        backgroundColor: "rgba(54, 162, 235, 0.3)",
        borderColor: "rgba(54, 162, 235, 1)",
        pointBackgroundColor: "rgb(54, 162, 235, 1)",
        tension: 0.2,
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  return (
    <LineStyle>
      <Line options={options} data={data} />
    </LineStyle>
  );
}
