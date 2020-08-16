import React, {useState, useEffect} from 'react';
import {geoPath, geoAlbersUsa} from 'd3-geo';
import {scaleQuantize} from 'd3-scale';
import {min, max} from 'd3-array';
import {csv} from 'd3-fetch';

import Point from './Point';

import us_states from '../assets/us-states.json';
import us_ag_productivity_csv from '../assets/us-ag-productivity.csv';
import us_cities_csv from '../assets/us-cities.csv'


const Map = ({width, height}) => {

    const [ag_values, set_ag_values] = useState({});
    const [ag_max, set_ag_max] = useState(0);
    const [ag_min, set_ag_min] = useState(0);
    const [us_cities, set_us_cities] = useState([])

    useEffect(() => {
        load_data();
    }, []);

    const load_data = async () => {
        const [ag_values_arr, us_cities] = await Promise.all([
            csv(us_ag_productivity_csv),
            csv(us_cities_csv)
        ]);

        const ag_values_obj = ag_values_arr.reduce((acc, obj) => ({...acc, [obj.state]: obj.value}), {});
        const ag_max = max(ag_values_arr, d => d.value);
        const ag_min = min(ag_values_arr, d => d.value);

        set_ag_values(ag_values_obj);
        set_ag_max(ag_max);
        set_ag_min(ag_min);
        set_us_cities(us_cities);
    };

    const projection = geoAlbersUsa()
        .translate([width / 2, height / 2])
        .scale([500]);

    const path = geoPath()
        .projection(projection);

    const color = scaleQuantize()
        .domain([ag_min, ag_max])
        .range(['rgb(237,248,233)', 'rgb(186,228,179)', 'rgb(116,196,118)', 'rgb(49,163,84)', 'rgb(0,109,44)']);

    return (
        <svg width={width} height={height}>
            {us_states.features.map((feature) => {
                const state = feature.properties.name;
                return <path d={path(feature)}
                             style={{fill: ag_values[state] ? color(ag_values[state]) : '#CCC'}}
                             key={feature.id}/>
            })}

            <Point cities={us_cities} projection={projection}/>

            {/*{us_cities.map((city) => {*/}
            {/*    const style = {'fill': 'yellow', 'stroke': 'gray', 'strokeWidth': 0.25, 'opacity': 0.75};*/}
            {/*    return <circle cx={projection([city.lon, city.lat])[0]}*/}
            {/*                   cy={projection([city.lon, city.lat])[1]}*/}
            {/*                   r={5} style={style} key={city.rank}/>*/}
            {/*})}*/}
        </svg>
    );
};

export default Map;
