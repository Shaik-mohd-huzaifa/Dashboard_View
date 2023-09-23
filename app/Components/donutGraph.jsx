import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Styles from './../donut.module.scss';

const DonutChart = () => {
  const data = {
    labels: ['Basic tees', 'Custom Short Pants', 'Super Hoodies'],
    datasets: [
      {
        data: [30, 20, 50],
        backgroundColor: ['#98D89E', '#F6DC7D', '#EE8484'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
      plugins: {
          legend: {
              display: false, // Hide the legend
            },
        },
        responsive: true,
        maintainAspectRatio: true, 
        aspectRatio: 1,
        cutout:"75%",  // Adjust the cutout percentage to control the circular area
      }

  return (
    <div className={Styles.DonutChartContainer}>
      <div className={Styles.header}>
        <h2>Top products</h2>
        <p>May-June 2023</p>
      </div>
      <div className={Styles.Dougnutcontainer}>
      <Doughnut data={data} options={options} />
      </div>
        <div className={Styles.labelContainer}>
        <div className={Styles.label}>
            <div className={Styles.circle}  style={{backgroundColor: '#98D89E'}}>
            </div>
            <div className={Styles.labeltext}>
                <p>Basic Tees</p>
                <span>55%</span>
            </div>
        </div>
        <div className={Styles.label}>
            <div className={Styles.circle}  style={{backgroundColor: '#F6DC7D'}}>
            </div>
            <div className={Styles.labeltext}>
                <p>Custom Short Pants</p>
                <span>31%</span>
            </div>
        </div>
        <div className={Styles.label}>
            <div className={Styles.circle}  style={{backgroundColor: '#EE8484'}}>
            </div>
            <div className={Styles.labeltext}>
                <p>Super Hoodies</p>
                <span>14%</span>
            </div>
        </div>
        </div>
    </div>
  );
};

export default DonutChart;
