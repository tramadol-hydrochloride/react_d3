import React, {useState, useEffect, useRef} from 'react';
import {select} from 'd3-selection';
import {easeLinear} from 'd3-ease';

const BarWithTransitionEffect = (props) => {
    const [x, setX] = useState(props.x);
    const [y, setY] = useState(props.y);
    const [width, setWidth] = useState(props.width);
    const [height, setHeight] = useState(props.height);
    const [label_x, setLabel_x] = useState(props.label_x);
    const [label_y, setLabel_y] = useState(props.label_y);

    const rect_ref = useRef(null);
    const label_ref = useRef(null);

    useEffect(() => {
        const rect_node = select(rect_ref.current);
        const label_node = select(label_ref.current);

        rect_node
            .transition()
            .duration(500)
            .ease(easeLinear)
            .attr('x', props.x)
            .attr('y', props.y)
            .attr('width', props.width)
            .attr('height', props.height)
            .on('end', () => {
                setX(props.x);
                setY(props.y);
                setWidth(props.width);
                setHeight(props.height);
            });

        label_node
            .transition()
            .duration(500)
            .ease(easeLinear)
            .attr('x', props.label_x)
            .attr('y', props.label_y)
            .on('end', () => {
                setLabel_x(props.label_x);
                setLabel_y(props.label_y);
            });
    }, [props.x, props.y, props.x, props.height, props.label_x, props.label_y]);

    return (
        <g>
            <rect x={x} y={y} width={width} height={height}
                  fill={props.fill} ref={rect_ref}/>
            <text x={label_x} y={label_y} fill={props.label_fill}
                  textAnchor='middle' fontFamily='helvetica' ref={label_ref}>
                {props.d}
            </text>
        </g>
    );
};

export default BarWithTransitionEffect;
