import React from 'react';
import Navbar from './components/Navbar/Navbar';
import SwitchRoutes from './routes/SwitchRoutes';
import './styles/common.scss';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <div className="container">
                <SwitchRoutes />
            </div>
        </div>
    );
};

export default App;
