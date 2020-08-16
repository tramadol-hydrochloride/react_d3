import React, {useState, useReducer} from 'react';
import {scaleBand, scaleLinear} from 'd3-scale';
import { range as d3range, max as d3max} from 'd3-array';

import Bar from './Bar';
import reducer from '../reducer';

const BarChartWithReducer = ({dataset, x, y, w, h}) => {

    const initial_state = {data: dataset};
    const [state, dispatch] = useReducer(reducer, initial_state);

    const scale_x = scaleBand()
        .domain(d3range(state.data.length))
        .range([0, w])
        .paddingInner(0.05);

    const scale_y = scaleLinear()
        .domain([0, d3max(state.data)])
        .range([0, h]);

    return (
        <div>
            <svg width={w} height={h}>
                <g transform={`translate(${x}, ${y})`}>
                    {state.data.map((d, i) => <Bar d={d} x={scale_x(i)} y={h - scale_y(d)}
                                                                 width={scale_x.bandwidth()} height={scale_y(d)} fill='teal'
                                                                 label_x={scale_x(i) + scale_x.bandwidth() / 2}
                                                                 label_y={h - scale_y(d) + 14}
                                                                 label_fill='white' key={i}/>
                    )}
                </g>
            </svg>

            <div className='ui segment'>
                <button onClick={() => dispatch({type: 'update_bar'})} className='ui primary basic button'>Update Bars</button>
                <button onClick={() => dispatch({type: 'add_bar'})} className='ui primary basic button'>Add Bar</button>
                <button onClick={() => dispatch({type: 'remove_bar'})} className='ui primary basic button'>Remove Bar</button>
                <button onClick={() => dispatch({type: 'sort_bar'})} className='ui primary basic button'>Sort Bar</button>
            </div>
        </div>
    );
};

export default BarChartWithReducer;
