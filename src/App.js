import React from 'react';
import logo from './logo.svg';
import './App.css';

function esPalindromo(palabra){
  //Eliminar la palabra y convertir a minusculas
  palabra = palabra.toLowerCase();
  //Comparar la palabra con su reverso
  return palabra === palabra.split("").reverse().join("");
  
}
function verificarPalindromo() {
  const texto = document.getElementById('texto').value;
  if (esPalindromo(texto)) {
    alert("Es palindromo");
  } else {
    alert("No espalindromo");
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-link">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hola Mundo</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          Learn React
        </a>
        <table> 
        <caption>Lista de Integrantes</caption>
        <thead>
            <tr>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Correo</th>
                <th>Celular</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Samuel</td>
                <td>Andrae</td>
                <td>samAndre@gmail.com</td>
                <td>(324) 456-7890</td>
            </tr>
            <tr>
                <td>Nicol</td>
                <td>Perez</td>
                <td>nicoperez@.com</td>
                <td>(398) 765-4321</td>
            </tr>
            <tr>
                <td>Pedro</td>
                <td>Martínez</td>
                <td>pedro.martinez@example.com</td>
                <td>(355) 123-4590</td>
            </tr>
            <tr>
                <td>Laura</td>
                <td>Rivas</td>
                <td>laura.rivas@example.com</td>
                <td>(344) 987-9543</td>
            </tr>
        </tbody>        
        </table>
      </header>

    <p class="title">Que es Babel</p>
    <p class="parrafo">Babel es un transpilador de JavaScript. Su función principal es convertir el código JavaScript moderno (ES6/ES7 y superior) en una versión más antigua de JavaScript (como ES5) que los navegadores puedan entender. Esto es crucial porque no todos los navegadores soportan las últimas características de JavaScript.</p>
    <p class="title">Que es WebPack</p>
    <p class="parrafo">Webpack es un empaquetador de módulos. Su trabajo es tomar todos los módulos de tu aplicación (JavaScript, CSS, imágenes, etc.) y empaquetarlos en uno o más archivos que puedan ser utilizados en un navegador.</p>
    
    <body>
      <h1>Verificador de palindromos</h1>
      <input
        type="text"
        id="texto"
        placeholder="Ingrse una palabra"
        />
      <button
        onClick={verificarPalindromo}>
          click aqui!
          </button>  
    </body>

        </div>
  );
}

export default App;
