
import './App.css';
import Mensaje from './mensaje.js';

const App= ()=> {
  return (
    <div className="App">
      <Mensaje color="Blue" message='Estamos trabajando'/>
      <Mensaje color="Red" message="En un curso"/>
      <Mensaje color="yellow" message= "De React"/>
    </div>
  );
}

export default App;
