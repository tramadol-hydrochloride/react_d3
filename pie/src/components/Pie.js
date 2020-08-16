import React from 'react';
import {pie as d3pie, arc as d3arc} from 'd3-shape';
import {scaleOrdinal} from 'd3-scale';
import {schemeCategory10} from 'd3-scale-chromatic';

const Pie = ({values, width, height}) => {

    const inner_r = 0;
    const outer_r = width / 2;
    const color = scaleOrdinal(schemeCategory10);

    const arc = d3arc()
        .innerRadius(inner_r)
        .outerRadius(outer_r);

    const pie_func = d3pie();
    const pie = pie_func(values);

    return (
        <svg width={width} height={height} className='pie'>
            <g transform={`translate(${outer_r}, ${outer_r})`} className='arc'>
                {pie.map((d, i) => (
                    <g key={i}>
                        <path d={arc(d, i)} fill={color(i)} />
                        <text transform={`translate(${arc.centroid(d)})`} textAnchor='middle'>{d.value}</text>
                    </g>
                ))}
            </g>
        </svg>
    );
};

export default Pie;
