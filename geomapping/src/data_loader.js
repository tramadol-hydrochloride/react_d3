import {csv} from "d3-fetch";
import {max, min} from "d3-array";

import us_states_geojson from './assets/us-states.json';
import us_ag_productivity_csv from './assets/us-ag-productivity.csv';
import us_cities_csv from './assets/us-cities.csv'


export const data_loader = async () => {

    const [ag_values_arr, us_cities] = await Promise.all([
        csv(us_ag_productivity_csv),
        csv(us_cities_csv)
    ]);

    const ag_values_obj = ag_values_arr.reduce((acc, obj) => ({...acc, [obj.state]: obj.value}), {});
    const ag_max = max(ag_values_arr, d => d.value);
    const ag_min = min(ag_values_arr, d => d.value);

    return ({
        us_states_geojson: us_states_geojson,
        us_cities: us_cities,
        ag_values: ag_values_obj,
        ag_max: ag_max,
        ag_min: ag_min
    });
};