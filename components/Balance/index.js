import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "@mui/material/Container";
import { Line } from "react-chartjs-2";
import { dataChart } from "./data.js";
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";

ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Title,
  Tooltip,
  SubTitle
);

const Balance = () => {
  const [dataLineChart, setDataLineChart] = useState({
    labels: [],
    datasets: [
      {
        data: [],
      },
    ],
  });

  useEffect(() => {
    setDataLineChart({
      labels: dataChart.map((item) => item.day),
      datasets: [
        {
          data: dataChart.map((item) => item.profit),
          borderColor: "#9aebba",
        },
      ],
    });
  }, []);

  return (
    <>
      <div className="balance">
        <Container className="container">
          <div className="card">
            <p className="title">Wallet Balance</p>
            <p className="balance-total">$ 2,000,000.00</p>
            <p className="activity">+3% ($ 10)</p>
            <div className="chart">
              <Line
                className="line-chart"
                options={{ maintainAspectRatio: false }}
                data={dataLineChart}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Balance;
