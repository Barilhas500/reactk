import logo from './logo.svg';
import './App.css';
import PrimerComponente from './components/PrimerComponente';
import SegundoComponente from './components/SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Este es un repaso de React con Jaime Barillas</p>

        
        <hr/>
        <PrimerComponente/>

        <hr/>
        <SegundoComponente/>

      </header>
    </div>
  );
}

export default App;
