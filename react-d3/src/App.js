import React from 'react';

import BarChartWithReducer from './components/BarChartWithReducer';
import BarChartInteractive from './components/BarChartInteractive'
import './App.css';

const App = () => {

    let dataset = [];
    for (let i = 0; i < 25; i++) {
        dataset.push(Math.floor(Math.random() * 100) + 10);
    }

    return (
        <div className="ui container">
            <div className='ui padded segment'>
                <BarChartWithReducer dataset={dataset} x={0} y={0} w={800} h={200}/>
            </div>
            <div className='ui padded segment'>
                <BarChartInteractive dataset={dataset} x={0} y={0} w={800} h={200} />
            </div>
        </div>
    );
};

export default App;