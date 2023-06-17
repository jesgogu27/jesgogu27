import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Formulario from './Components/Formulario/Formulario';
import MiOrg from './Components/MiOrg';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)

  const cambiarMostrar =() =>{
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div>
      <Header/>
      {mostrarFormulario ? <Formulario />:<></>}
      
      <MiOrg cambiarMostrar = {cambiarMostrar}/>



    </div>
  );
}

export default App;
