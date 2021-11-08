import './App.css';
import ControlledComponent from './components/ControlledComponent'
import UnControlledComponent from './components/ControlledComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ControlledComponent></ControlledComponent>
        <UnControlledComponent></UnControlledComponent>
      </header>
    </div>
  );
}

export default App;
