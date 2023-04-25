import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useContext } from "react";
import ResultContext from "../../context/ResultsContext";
import styled from "styled-components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function MonthlyAvarage() {
  const resultCtx = useContext(ResultContext);
  const fontColor = "#cfcfcf";
  let delayed: any;

  const options = {
    responsive: true,
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
      },
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
      legend: {
        display: false,
        // position: "bottom" as const,
        // labels: {
        //   font: {
        //     size: 16,
        //   },
        // },
      },
      title: {
        display: true,
        text: "Monthly PA-System generation in kW/m",
        color: fontColor,
      },
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

  const data = {
    labels,
    datasets: [
      // {
      //   label: "Dataset 1",
      //   data: [
      //     result[0],
      //     result[1],
      //     result[2],
      //     result[3],
      //     result[4],
      //     result[5],
      //     result[6],
      //     result[7],
      //     result[8],
      //     result[9],
      //     result[10],
      //     result[11],
      //   ],
      //   backgroundColor: "rgba(255, 99, 132, 0.3)",
      //   borderColor: "rgba(255, 99, 132, 1)",
      //   borderWidth: 1,
      // },
      {
        label: "Dataset",
        color: fontColor,

        data: [
          resultCtx.monthlyAvarage[0],
          resultCtx.monthlyAvarage[1],
          resultCtx.monthlyAvarage[2],
          resultCtx.monthlyAvarage[3],
          resultCtx.monthlyAvarage[4],
          resultCtx.monthlyAvarage[5],
          resultCtx.monthlyAvarage[6],
          resultCtx.monthlyAvarage[7],
          resultCtx.monthlyAvarage[8],
          resultCtx.monthlyAvarage[9],
          resultCtx.monthlyAvarage[10],
          resultCtx.monthlyAvarage[11],
        ],
        backgroundColor: "rgba(54, 162, 235, 0.3)",
        borderColor: "#b1daf5",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}
