import React from "react";
import "../styles/PieDePagina.module.css";

const PieDePagina = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="">CHARACTERS</a>
        </li>
        <li>
          <a href="">LOCATION</a>
        </li>
        <li>
          <a href="">EPISODE</a>
        </li>
      </ul>
      <ul>
        <a href="">SERVER STATUS</a>
      </ul>
      <ul>
        <li>
          <a href="">Git-Hub</a>
        </li>
        <li>
          <a href="">Twitter</a>
        </li>
        <li>
          <a href="">Help Us</a>
        </li>
      </ul>
      <ul>
        <a href="">DEPLOYS BY netlify</a>
      </ul>
      <ul>
        <a href="">Axel Fuhrmann</a>
      </ul>
    </footer>
  );
};

export default PieDePagina;
