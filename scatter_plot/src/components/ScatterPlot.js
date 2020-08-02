import React from 'react';
import {scaleLinear} from 'd3-scale';
import {max} from 'd3-array';

import Axis from './Axis';

const ScatterPlot = ({data, x, y, w, h, padding}) => {

    const scale_x = scaleLinear()
        .domain([0, max(data, d => d[0])])
        .range([padding, w - padding]);

    const scale_y = scaleLinear()
        .domain([0, max(data, d => d[1])])
        .range([h - padding, padding]);

    return (
        <svg width={w} height={h}>
            <g transform={`translate(${x}, ${y})`}>
                {data.map((d, i) => (
                    <circle cx={scale_x(d[0])} cy={scale_y(d[1])} r={4} key={i}/>
                ))}

                <Axis x={0} y={h - padding} scale={scale_x} axis_func='axisBottom'/>
                <Axis x={padding} y={0} scale={scale_y} axis_func='axisLeft'/>
            </g>
        </svg>
    );
};

export default ScatterPlot;
