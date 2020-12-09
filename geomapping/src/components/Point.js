import React from 'react';

import '../style.css';

const Point = ({cities, projection}) => {
    return (
        cities.map((city) => {
            return <circle cx={projection([city.lon, city.lat])[0]}
                           cy={projection([city.lon, city.lat])[1]}
                           r={Math.sqrt(parseInt(city.population) * 0.00004)}
                           key={city.rank} className='point'/>
        })

    );
};

export default Point;