import React from 'react';
import {geoPath, geoAlbersUsa} from 'd3-geo';
import {scaleQuantize} from 'd3-scale';

import Point from './Point';


const Map = ({width, height, us_states_geojson, us_cities, ag_values, ag_max, ag_min}) => {

    if(us_states_geojson.length < 1) {
        return null;
    }

    const projection = geoAlbersUsa()
        .translate([width / 2, height / 2])
        .scale([800]);

    const path = geoPath()
        .projection(projection);

    const color = scaleQuantize()
        .domain([ag_min, ag_max])
        .range(['rgb(237,248,233)', 'rgb(186,228,179)', 'rgb(116,196,118)', 'rgb(49,163,84)', 'rgb(0,109,44)']);

    return (
        <svg width={width} height={height}>
            {us_states_geojson.features.map((feature) => {
                const state = feature.properties.name;
                return <path d={path(feature)}
                             style={{fill: ag_values[state] ? color(ag_values[state]) : '#CCC'}}
                             key={feature.id}/>
            })}

            <Point cities={us_cities} projection={projection}/>
        </svg>
    );
};

export default Map;
