// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styles/styles.css'; // Import your custom CSS
import Navbar from './components/Navbar';
import SecurityCard from './components/SecurityCard';
import DeviceList from './components/DeviceList';
import TrafficMonitoring from './components/TrafficMonitoring';
import DevicesAtRisk from './components/BandwidthUsage';
import ConsoleOutput from './components/console';
import FetchDataButton from "./components/fetchData";
import SystemData from './components/systemData';


function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <h3 className="mb-4">🛡️ Network & Device Security</h3>
            <SecurityCard />
            <DevicesAtRisk />
            <h3 className='mt-4 mb-3'>🖳 System Console</h3>
            <ConsoleOutput />
          </div>
          <div className="col-md-8">
            <TrafficMonitoring />
            <DeviceList /> 
          </div>
          <SystemData />
        </div>
      </div>
    </div>
  );
}

export default App;
