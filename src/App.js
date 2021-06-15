import './App.css';
import Deployments from './Components/Deployments';
import LeadTimes from './Components/LeadTimes';
import RecoveryTimes from './Components/RecoveryTimes';
import ChangeFailRate from './Components/ChangeFailRate';

function App() {
  return (
    <div className="App">
      <div className="app_title">Software Devlivery Performance Metrics</div>
      <div className="app_container">
        <div className="componentLayout">
          <Deployments />
          <LeadTimes />
        </div>
        <div className="componentLayout">
          <RecoveryTimes />
          <ChangeFailRate />
        </div>
      </div>
    </div>
  );
}

export default App;
