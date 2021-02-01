import React, { useContext, useEffect } from 'react';
import AppContext from './AppContext';
import chartStyles from './ChartStyles';

const BarChart = () => {

    const app = useContext(AppContext);

    const render = async () => {
        const sel = await app.nbl.selections();
        sel.mount(document.querySelector('#chartBarToolbarRender'))

        app.nbl.render({
            element: document.querySelector('#chartBarRender'),
            type: 'barchart',
            fields: ['title', '=avg(rating)'],
            properties: {
              showTitles: true,
              title: 'Line Chart - Avg Rating',
              subtitle: 'Visualizing Movie Data using a Bar Chart 📊',
            },
        });
    };

    useEffect(() => {
        if(app.nbl) render();
    }, [app.nbl]); 

    return(
        <div>
            <div id="chartBarToolbarRender"></div>
            <div id="chartBarRender" style={chartStyles.chart}></div>
        </div>
    );
}

export default BarChart;




// Reference from Nebula Tutorial:

// (await n.selections()).mount(document.querySelector('.toolbar'));
// // Visualizing Data! - Render from App
// n.render({
//   element: document.querySelector('.object'),
//   id: 'EAjjuyE', // Right click on Sheet > Developer // Grab Object ID
// });

