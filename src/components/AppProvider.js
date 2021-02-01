import React, {useState, useEffect} from 'react';

import AppContext from './AppContext';

import embed from '../api/configure';
import connect from '../api/connect';

//Connection 
const nblConnect = async () => {
    const app = await connect({
      url: 'https://4xjevcx9zfmrwlp.us.qlikcloud.com', //Tenant URL
      webIntegrationId: 'neAASL2XGeP4o2E5nJF5B_h1hWkSBnHe', // qlik-web-intergration-id
      appId: '283aab41-425b-4dd9-a4c8-d0602b037df4', // app GUID
    });
    return embed(app);
}

const AppProvider = ({children}) => {

    //useState
    const [nbl, setNbl] = useState(null); 

    //Setting state
    const funcSetNbl = async () => {
        const tmpNbl = await nblConnect();
        console.log(tmpNbl);
        setNbl(tmpNbl);
    }

    //useEffect
    useEffect(() => {
        funcSetNbl();
    }, []);

    return (
        <AppContext.Provider value={{nbl}}>
            {children}
        </AppContext.Provider>
    );
}


export default AppProvider;