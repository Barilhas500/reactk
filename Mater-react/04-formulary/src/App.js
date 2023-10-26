import logo from './logo.svg';
import './App.css';
import ForumularioComponent from './components/FormularioComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ForumularioComponent/>
        
      </header>
    </div>
  );
}

export default App;
