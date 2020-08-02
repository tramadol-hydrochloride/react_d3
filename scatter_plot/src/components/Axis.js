import React, {useRef, useEffect} from 'react';
import * as d3 from 'd3';


const Axis = ({x, y, scale, axis_func = 'axisBottom'}) => {
    const axis_ref = useRef(null);

    useEffect(() => {
        const axis = d3[axis_func](scale);
        d3.select(axis_ref.current).call(axis);
    });

    return <g transform={`translate(${x}, ${y})`} ref={axis_ref}/>
};


// const Axis = ({x, y, scale, axis_func = 'axisBottom'}) => {
//     const gRef = useD3((anchor) => {
//         const axis = d3[axis_func](scale);
//
//         d3.select(anchor).call(axis);
//     });
//
//     return <g transform={`translate(${x}, ${y})`} ref={gRef}/>;
// };
//
// const useD3 = (render) => {
//     const refAnchor = useRef(null);
//
//     useEffect(() => {
//         render(refAnchor.current);
//     });
//
//     return refAnchor;
// };

export default Axis;