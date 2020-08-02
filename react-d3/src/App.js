import React from 'react';

import BarChart from './components/BarChart';
import BarChartInteractive from './components/BarChartInteractive'
import './App.css';

const App = () => {

    let dataset = [];
    for (let i = 0; i < 25; i++) {
        dataset.push(Math.floor(Math.random() * 100));
    }

    const dataset_2d = [
        [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
        [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
    ];

    return (
        <div className="ui container">
            <div className='ui padded segment'>
                <BarChart data={dataset} x={0} y={10} w={800} h={200}/>
            </div>
            <div className='ui padded segment'>
                <BarChartInteractive dataset={dataset} x={0} y={10} w={800} h={200} />
            </div>
        </div>
    );
};

export default App;