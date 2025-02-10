import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List'; 
import React from 'react';

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
    </div>
  ); 
}

export default App;
