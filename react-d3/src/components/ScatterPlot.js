import React from 'react';
import {scaleLinear} from 'd3-scale';
import {max} from 'd3-array';

import Axis from './Axis';

const ScatterPlot = ({data, x, y, w, h}) => {

    const scale_x = scaleLinear()
        .domain([0, max(data, d => d[0])])
        .range([0, w]);

    const scale_y = scaleLinear()
        .domain([0, max(data, d => d[1])])
        .range([0, h]);

    return (
        <svg width={w} height={h}>
            <g transform={`translate(${x}, ${y})`}>
                {data.map((d, i) => (
                    <circle
                        cx={scale_x(d[0])}
                        cy={scale_y(d[1])}
                        r={Math.sqrt(h - d[1])}
                        key={i}/>
                ))}

                <Axis x={0} y={h} scale={scale_x} axis_func='axisBottom'/>
            </g>
        </svg>
    );
};

export default ScatterPlot;
