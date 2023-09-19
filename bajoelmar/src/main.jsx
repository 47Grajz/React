import React from 'react'
import ReactDOM from 'react-dom/client'
// import {App} from './App.jsx'
import './styles.css'
import {animales} from './animales.js'



const titulo = "";
const mostrarFondo = true;


const imagenes = [

]

const fondo=(
  <img
  
  className='fondo'
  alt='fondoOceano'
  src='imagenes/fondoOceano.png'
  />
);

for (const animal in animales) {
  imagenes.push(
    <img 
      key={animal}
      className="animal"
      alt={animal}
      src={animales[animal].imagen}
      ariaLabel={animal}
      role="button"
      onClick={mostrarHecho}
    />
  )
}


const hechosSobreAnimales = (
  <div>
    <h1>{titulo === "" ? "Click Sobre un Animal" : titulo}</h1>
    {mostrarFondo && fondo}
    <p id='hecho'></p>
    <div className="animales">
      {imagenes}
    </div>
  </div>
);





function mostrarHecho(e) {
  const animalSeleccionado = e.target.alt;
  const animalInfo = animales[animalSeleccionado];
  const indiceOpcion = Math.floor(Math.random() * animalInfo.hechos.length);
  const hecho = animalInfo.hechos[indiceOpcion];
  document.getElementById("hecho").innerHTML = hecho;
}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {hechosSobreAnimales}
  </div>
);

  


