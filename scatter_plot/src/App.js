import React from 'react';

import ScatterPlot from './components/ScatterPlot';

const App = () => {

    const dataset_2d = [
        [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
        [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
    ];

    return (
        <div className="ui container">
            <div className='ui padded segment'>
                <ScatterPlot data={dataset_2d} x={0} y={0} w={800} h={300} padding={30}/>
            </div>
        </div>
    );
};

export default App;
