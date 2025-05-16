import {
  Chart as ChartJS,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  plugins,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  plugins
);

const options = {
  plugins: {
    legend: {
      position: "bottom",
      //   maxWidth: 150,
      labels: {
        boxWidth: 5,
        boxHeight: 5,
        padding: 20,
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
    title: {
      display: true,
      text: "Monthly Issuance",
      align: "start",
      color: "#121212",
      padding: {
        top: 10,
        bottom: 30,
      },
      font: {
        size: 18,
        weight: 500,
      },
    },
  },
  elements: {
    bar: {
      borderRadius: {
        topLeft: 7,
        topRight: 7,
        bottomRight: 7,
        bottomleft: 7,
        barThickness: 40,
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,

  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
      ticks: {
        font: {
          family: "satoshiRegular",
        },
      },
    },
    y: {
      // stacked: true,
      beginAtZero: true,
      max: 100,
      grace: "5%",
      suggestedMin: 10,
      suggestedMax: 100,
      ticks: {
        maxTicksLimit: 7,

        font: {
          family: "satoshiRegular",
        },
      },
    },
  },
};

const labels = ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];

const data = {
  labels,
  datasets: [
    {
      label: "Personalized",
      data: [10, 20, 7, 10, 10, 20, 10],
      backgroundColor: "#014DAF",
      boderColor: "#014DAF",
    },
    {
      label: "Instant",
      data: [54, 72, 35, 60, 50, 82, 75],
      backgroundColor: "#CCE2FF",
      borderColor: "#CCE2FF",
    },
  ],
};

const BarChart = () => {
  return (
    <div className="w-full h-[350px] bg-white border relative border-[#E2E2E2] my-3 rounded-[12px] py-3 px-5">
      <Bar options={options} data={data} />
      <hr className="absolute bottom-2 left-0 py-5 border-t border-[#E2E2E2] w-full" />
    </div>
  );
};

export default BarChart;
