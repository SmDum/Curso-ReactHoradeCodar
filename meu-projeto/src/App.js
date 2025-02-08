import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  
  const nome = "Maria";

  return (
    <div className="App">
      <SayMyName nome="Samuel" />
      <SayMyName nome="Gustavo" />
      <SayMyName nome={nome} />
      <Pessoa 
        nome="Maria" 
        idade="25" 
        profissao="Desenvolvedora" 
        foto="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png" 
      />
    </div>
  );
}

export default App;
