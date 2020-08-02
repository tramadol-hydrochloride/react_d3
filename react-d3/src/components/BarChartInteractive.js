import React, {useState} from 'react';
import {scaleBand, scaleLinear} from 'd3-scale';
import {range as d3range, max as d3max} from 'd3-array';

import Bar from './Bar';

const BarChartInteractive = ({dataset, x, y, w, h}) => {

    const [data, setData] = useState(dataset);

    const scale_x = scaleBand()
        .domain(d3range(data.length))
        .range([0, w])
        .paddingInner(0.05);

    const scale_y = scaleLinear()
        .domain([0, d3max(data)])
        .range([0, h]);

    const update_bars = () => {
        let new_data = []
        for (let i = 0; i < data.length; i++) {
            new_data.push(Math.floor(Math.random() * 100));
        }
        setData(new_data);
    };

    const add_bar = () => {
        const new_value = Math.floor(Math.random() * 100);
        setData([...data, new_value]);
    };

    const remove_bar = () => {
        let new_arr = [...data];
        new_arr.shift();
        setData(new_arr);
    };

    return (
        <div>
            <svg width={w} height={h}>
                <text x={0} y={10}>Bar Chart With Transition Effect</text>
                <g transform={`translate(${x}, ${y})`}>
                    {data.map((d, i) => <Bar d={d} x={scale_x(i)} y={h - scale_y(d)}
                                                                 width={scale_x.bandwidth()} height={scale_y(d)} fill='teal'
                                                                 label_x={scale_x(i) + scale_x.bandwidth() / 2}
                                                                 label_y={h - scale_y(d) + 14}
                                                                 label_fill='white' key={i}/>
                    )}
                </g>
            </svg>

            <div className='ui segment'>
                <button onClick={update_bars} className='ui primary basic button'>Update Bars</button>
                <button onClick={add_bar} className='ui primary basic button'>Add Bar</button>
                <button onClick={remove_bar} className='ui primary basic button'>Remove Bar</button>
            </div>
        </div>
    );
};

export default BarChartInteractive;
