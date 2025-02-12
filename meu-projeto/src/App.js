import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List'; 
import React from 'react';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';

function App() {
  
  const nome = "Maria";

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <SayMyName nome="Samuel" />
      <SayMyName nome="Gustavo" />
      <SayMyName nome={nome} />
      <Pessoa 
        nome="Maria" 
        idade="25" 
        profissao="Desenvolvedora" 
        foto="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png" 
      />
      <List />
      <Evento />
      <Form />

      <h1>Renderização Condicional</h1>
       <Condicional />

    </div>
  ); 
}

export default App;
