import React from 'react';
import logo from './logo.svg';
import './App.css';

function printHola(){
  console.log("hola")
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          onMouseOver={printHola()}
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
    </div>
  );
}

export default App;
