import { Bar } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 500,
        ticks: {
          stepSize: 100,
        },
      },
      x: {
        type: 'category', // Use the 'category' scale
        grid: {
          display: false,
        },
      },
    },
  };

const Graph = ({chartData}) => {
    return <Bar data={chartData} options={options}/>
}

export default Graph;