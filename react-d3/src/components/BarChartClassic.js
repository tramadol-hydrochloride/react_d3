import React from 'react';
import * as d3 from 'd3';


const BarChartClassic = ({data, translate_x, translate_y, width, height}) => {
    const translate = `translate(${translate_x}, ${translate_y})`;
    const bar_width = width / data.length;

    return (
        <g className="bars" transform={translate}>
            {data.map((d, i) => (
                <g>
                    <rect
                        x={i * bar_width}
                        y={height - d}
                        width={bar_width - 1}
                        height={d}
                        fill='teal'/>
                    <text
                        x={i * bar_width + bar_width / 2}
                        y={height - d + 15}
                        fill="white"
                        textAnchor="middle">
                        {d}
                    </text>
                </g>
            ))}
        </g>
    );
};

export default BarChartClassic;
