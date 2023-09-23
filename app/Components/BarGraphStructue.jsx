import { useState } from 'react'
import data from '../api/Bar-Graph-data'
import Graph from './BarGraph'

import Styles from "../GraphStructue.module.scss"
const BarGraph = () => {
    const [userdata, setUserData] = useState({
        labels: data.map(graphData => graphData.time),
        datasets: [
          {
            label: "User",
            data: data.map(graphData => graphData.user),
            backgroundColor: "#98D89E",
            borderRadius: 5,
            barThickness: 50,
          },
          {
            label: "Guest",
            data: data.map(graphData => graphData.guest),
            backgroundColor: "#EE8484",
            borderRadius: 5,
            barThickness: 50,
          }
        ],
      })
    return (
        <div className={Styles.BarGraphContainer}>
            <div className={Styles.header}>
                <h2>Activites</h2>
                <p>May - Jun 2023</p>
            </div>
            <div className={Styles.graphContainer} >
            <Graph chartData={userdata}/>
            </div>
        </div>
    ) 
}

export default BarGraph