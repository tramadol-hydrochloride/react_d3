import React from 'react';
import {scaleBand, scaleLinear} from 'd3-scale';
import {range, max} from 'd3-array';

const BarChart = ({data, x, y, w, h}) => {

    const scale_x = scaleBand()
        .domain(range(data.length))
        .range([0, w])
        .paddingInner(0.05);

    const scale_y = scaleLinear()
        .domain([0, max(data)])
        .range([0, h]);

    return (
        <svg width={w} height={h}>
            <text x={x} y={y}>Bar Chart</text>
            <g transform={`translate(${x}, ${y})`}>
                {data.map((d, i) => (
                    <g key={i}>
                        <rect
                            x={scale_x(i)}
                            y={h - scale_y(d)}
                            width={scale_x.bandwidth()}
                            height={scale_y(d)}
                            fill='teal'/>

                        <text
                            x={scale_x(i) + scale_x.bandwidth() / 2}
                            y={h - scale_y(d) + 14}
                            textAnchor='middle'
                            fontFamily='helvetica'
                            fill='white'>
                            {d}
                        </text>
                    </g>
                ))}
            </g>
        </svg>
    );
};

export default BarChart;
