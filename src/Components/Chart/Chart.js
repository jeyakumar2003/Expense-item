import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';

function Chart(props) {
    // Extract the values of the data points
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    
    // Find the maximum value among the data points
    const totalMaximum = Math.max(...dataPointsValues);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => 
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            )}
        </div>
    );
}

export default Chart;
