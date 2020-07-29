import React from 'react';

const Circles = ({data, x, y, w, h}) => {
    return (
        <svg width={w} height={h}>
            <g transform={`translate(${x}, ${y})`}>
                {data.map((d, i) => (
                    <circle cx={i * 50 + 25} cy={100} r={d / 10} key={i}/>
                ))}
            </g>
        </svg>
    );
};

export default Circles;
