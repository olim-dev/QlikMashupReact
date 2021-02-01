import React from 'react';
import Header from './Header';
import AppProvider from './AppProvider';

const App = () => {
    return (
        <div className="ui container">
            <AppProvider>
                <Header />
            </AppProvider>
        </div>
    );
}

export default App;