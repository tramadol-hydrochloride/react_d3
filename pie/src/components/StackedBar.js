import React, {useState} from 'react';
import {stack, stackOrderDescending, stackOrderAscending} from 'd3-shape';
import {scaleBand, scaleLinear, scaleOrdinal} from 'd3-scale';
import {schemeCategory10} from 'd3-scale-chromatic';
import {range, max} from 'd3-array';


const StackedBar = ({data, width, height}) => {

    const [order, setOrder] = useState({fn: stackOrderAscending});

    const stack_func = stack()
        .keys(Object.keys(data[0]))
        .order(order.fn);

    const series = stack_func(data);

    const scale_x = scaleBand()
        .domain(range(data.length))
        .range([0, width])
        .paddingInner(0.05);

    const scale_y = scaleLinear()
        .domain([0, max(data, d => d.apples + d.oranges + d.grapes)])
        .range([0, height]);

    const colors = scaleOrdinal(schemeCategory10);

    const toggle_order = () => {
        if (order.fn === stackOrderAscending) {
            setOrder({...order, fn: stackOrderDescending})
        } else {
            setOrder({...order, fn: stackOrderAscending})
        }
    };

    return (
        <div>
            <svg width={width} height={height}>
                {series.map((category, i) => (
                    <g style={{fill: colors(i)}} key={category}>
                        {category.map((d, i) => (
                            <rect key={i} x={scale_x(i)} y={scale_y(d[0])}
                                  height={scale_y(d[1]) - scale_y(d[0])} width={scale_x.bandwidth()}/>
                        ))}
                    </g>
                ))}
            </svg>
            <div className='ui segment'>
                <button onClick={toggle_order}
                        className='ui primary basic button'>{order.fn === stackOrderAscending ? 'Descending' : 'Ascending'}</button>
            </div>
        </div>

    );
};

export default StackedBar;
