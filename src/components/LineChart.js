import React, { useContext, useEffect } from 'react';
import AppContext from './AppContext';
import chartStyles from './ChartStyles';

const LineChart = () => {

    const app = useContext(AppContext);

    const render = async () => {
        const sel = await app.nbl.selections();
        sel.mount(document.querySelector('#chartLineToolbarRender'))

        app.nbl.render({
            element: document.querySelector('#chartLineRender'),
            type: 'linechart',
            fields: ['title', '=(revenue)'],
            properties: {
              showTitles: true,
              title: 'Line Chart - Revenue',
              subtitle: 'Visualizing Movie Data using a Line Chart 📉',
            },
        });
    };

    useEffect(() => {
        if(app.nbl) render();
    }, [app.nbl]); 

    return(
        <div>
            <div id="chartLineToolbarRender"></div>
            <div id="chartLineRender" style={chartStyles.chart}></div>
        </div>
    );
}

export default LineChart;




// Reference from Nebula Tutorial:

// (await n.selections()).mount(document.querySelector('.toolbar'));
// // Visualizing Data! - Render from App
// n.render({
//   element: document.querySelector('.object'),
//   id: 'EAjjuyE', // Right click on Sheet > Developer // Grab Object ID
// });

