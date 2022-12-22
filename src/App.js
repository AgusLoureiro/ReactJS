import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <ItemListContainer greeting="Construido con React-Bootstrap y con la ayuda de Flaticon"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido a Clancys!
        </p>
      </header>
    </div>
  );
}

export default App;
