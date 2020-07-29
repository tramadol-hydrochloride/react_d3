import React, {useState, useEffect} from 'react';
import {scalePoint} from 'd3-scale';
import {range as d3range} from 'd3-array';

import Dot from './components/Dot';

const App = () => {

    const width = 600;
    const n = 50;
    const pos = scalePoint()
        .domain(d3range(n))
        .range([0, width])
        .padding(5)
        .round(true);

    return (
        <svg width='600' height='600'>
            {d3range(n).map(x =>
                d3range(n).map(y =>
                    <Dot _x={pos(x)} _y={pos(y)} _r={5} max_pos={width} key={`${x}-${y}`}/>
                )
            )}
        </svg>
    );
}

export default App;
