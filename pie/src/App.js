import React from 'react';

import Pie from './components/Pie';
import StackedBar from './components/StackedBar';
import './App.css';

const App = () => {
    const values = [5, 13, 20, 49, 4, 23];

    const stacked_bar_data = [
        {apples: 5, oranges: 10, grapes: 22},
        {apples: 4, oranges: 12, grapes: 28},
        {apples: 2, oranges: 19, grapes: 32},
        {apples: 7, oranges: 23, grapes: 35},
        {apples: 23, oranges: 17, grapes: 43}
    ];

    return (
        <div className='ui container'>
            <div className='ui padded segment'>
                <Pie values={values} width={300} height={300}/>
            </div>
            <div className='ui padded segment'>
                <StackedBar data={stacked_bar_data} width={500} height={300} />
            </div>
        </div>
    );
};

export default App;
