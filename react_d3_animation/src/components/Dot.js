import React, {useState, useRef} from 'react';
import * as d3 from 'd3';
import {select} from 'd3-selection';
import {scaleLinear} from 'd3-scale';
import {easeCubicOut} from 'd3-ease';
import {interpolateWarm} from 'd3-scale-chromatic';

const Dot = ({_x, _y, _r, max_pos}) => {

    const [x, setX] = useState(_x);
    const [y, setY] = useState(_y);
    const [r, setR] = useState(_r);
    const [colorize, setColorize] = useState(false);

    const circle_ref = useRef(null);

    const flash = () => {
        let node = select(circle_ref.current);

        setColorize(true);

        node.transition()
            .attr('r', 20)
            .duration(250)
            .ease(easeCubicOut)
            .transition()
            .attr('r', 5)
            .duration(250)
            .ease(easeCubicOut)
            .on('end', () => setColorize(false));
    };

    const color = () => {
        const t = scaleLinear()
            .domain([0, 1.2 * max_pos ** 2])
            .range([0, 1]);

        return interpolateWarm(t(x ** 2 + y ** 2));
    };

    return (
        <circle cx={x} cy={y} r={r}
                ref={circle_ref} onMouseOver={flash}
                style={{fill: colorize ? color() : 'black'}}/>
    );
};

export default Dot;
