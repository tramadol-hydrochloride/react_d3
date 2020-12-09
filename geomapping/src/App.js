import React, {useState, useEffect} from 'react';

import Map from './components/Map';
import {data_loader} from './data_loader';


const App = () => {

    const [dataset, set_dataset] = useState({
        us_states_geojson: [],
        us_cities: [],
        ag_values: {},
        ag_max: null,
        ag_min: null
    });

    const {us_states_geojson, us_cities, ag_values, ag_max, ag_min} = dataset;

    useEffect(() => {
        load_data()
    }, []);

    const load_data = async () => {
        const dataset = await data_loader();
        set_dataset(dataset);
    };

    return (
        <div className='ui container'>
            <Map width={1000} height={600}
                 us_states_geojson={us_states_geojson} us_cities={us_cities}
                 ag_values={ag_values} ag_max={ag_max} ag_min={ag_min} />
        </div>
    );
}

export default App;
