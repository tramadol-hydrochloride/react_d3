import React, {useState, useEffect, useRef} from 'react';
import {select} from 'd3-selection';
import {easeLinear} from 'd3-ease';

const Bar = ({d, x, y, width, height, fill, label_x, label_y, label_fill}) => {

    return (
        <React.Fragment>
            <rect x={x} y={y} width={width} height={height} fill={fill}/>
            <text x={label_x} y={label_y} fill={label_fill} textAnchor='middle' fontFamily='helvetica'>{d}</text>
        </React.Fragment>
    );
};

export default Bar;
