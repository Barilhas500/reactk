import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import SegundoComponentes from './SegundoComponentes';
import TercerComponente from './TercerComponente';
import EventosComponente from './EventosComponente';

function App() {

  const ficha_medica={
    altura: "188cm",
    gurpo: "H+",
    estado: "Bueno",
    alergias: "Ninguno"
  }

  const numero = 123456;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al Master en react!!
        </p>  

           {/*Cargar mi primer componente */}
      
      <div className='componentes'>

          <hr/>
          <EventosComponente/>
          <hr/>
          <TercerComponente
            ficha={ficha_medica}
          />
          <hr/>
          <MiComponente/>
          <hr/>
          <SegundoComponentes/>
        </div>
      
      </header>
    </div>
  );
}

export default App;
