import './App.css';
import React from 'react';
import HeatMap from './HeatMap'
/* import PieChart from './PieChart'
import CalendarTable from './CalendarTable'
import GrafanaChannel from './GrafanaChannel'*/

function App(): React.Component {
  console.log('Hello');
  
  return (
    <div>
      <div className="App">
        <header className="App-header">
        <p >SEB Building</p>
        </header>
      </div>
	  <div>
		<iframe src="https://ec2-3-140-252-185.us-east-2.compute.amazonaws.com:3000/d/pSc0RlYMzd/pnnl-seb-influx?orgId=1"
		 width="100%" height="700px"></iframe>
	  </div>
      <div>
        <HeatMap title={"Heat Map of ZoneTemperature"} labels={["Summer Occurrence", "Controlled Summer", "Controlled Winter", "Override Release"]} />
      </div>
      <div>
        <HeatMap title={"Heat Map of ZoneAirflow"} labels={["Normal Operation", "Hunting", "Constant", "Override"]} />
      </div>
    </div>
  );
}

export default App;