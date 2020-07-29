import React, {useState} from 'react';
import {scaleBand, scaleLinear} from 'd3-scale';
import {range as d3range, max as d3max} from 'd3-array';
import {select as d3select} from 'd3-selection';

const BarChartInteractive = ({dataset, x, y, w, h}) => {

    const [data, setData] = useState(dataset);

    const scale_x = scaleBand()
        .domain(d3range(data.length))
        .range([0, w])
        .paddingInner(0.05);

    const scale_y = scaleLinear()
        .domain([0, d3max(data)])
        .range([0, h]);

    const handle_click = () => {
        let new_data = []
        for (let i = 0; i < data.length; i++) {
            new_data.push(Math.floor(Math.random() * 100));
        }
        setData(new_data);
    };

    return (
        <div>
            <svg width={w} height={h}>
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

            <div>
                <button onClick={handle_click} className='ui button'>CLICK</button>
            </div>
        </div>
    );
};

export default BarChartInteractive;
