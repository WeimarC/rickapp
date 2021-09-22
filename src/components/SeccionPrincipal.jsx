import React from "react";
import Tarjeta from "./Tarjeta";
import "../styles/SeccionPrincipal.module.css";

const infoPersonajes = [
  {
    nombre:"blin",
    urlImagen:"https://rickandmortyapi.com/api/character/avatar/4.jpeg",
  },

  {
    nombre:"blin",
    urlImagen:"https://rickandmortyapi.com/api/character/avatar/4.jpeg",
  },

  {
    nombre:"blin",
    urlImagen:"https://rickandmortyapi.com/api/character/avatar/4.jpeg",
  },
]

const transformarInfoPersonaje = ({nombre, urlImagen}) => {
  return (<Tarjeta urlImagen={urlImagen} nombrePersonaje={nombre}/>);
}

const  tarjetas = infoPersonajes.map(transformarInfoPersonaje);{
 
};

const SeccionPrincipal = () => {
  return (
    <main>
      <div>
        <h1>The Rick and Morty API</h1>
      </div>
      <div className="Tarjetero">
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
      </div>
    </main>
  );
};

export default SeccionPrincipal;
