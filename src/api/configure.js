import { embed } from '@nebula.js/stardust';

import barchart from '@nebula.js/sn-bar-chart';
import linechart from '@nebula.js/sn-line-chart';
import piechart from '@nebula.js/sn-pie-chart';



const n = embed.createConfiguration({
  context: {
    theme: 'light',
    language: 'en-US',
  },
  types: [
      {
        name: 'barchart',
        load: () => Promise.resolve(barchart),
      },   
      {
        name: 'linechart',
        load: () => Promise.resolve(linechart),
      },
      {
        name: 'piechart',
        load: () => Promise.resolve(piechart),
      },
    ]
});

export default n;
