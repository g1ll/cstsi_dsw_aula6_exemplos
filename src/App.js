import React, {useState} from 'react';
import Contador from './Contador'
import ShowProduto from './ShowProduto';
import './App.css';

function App() {
  //TRABALHANDO COM ESTADOS
  const msg = "Olá Mundo!"
  const [texto,setTexto] = useState(msg)
  
  ///setTimeout(()=>{setTexto('asdf')},1000)

  return (
    <div className="App">
      <p>{msg}</p>
      <input type='text' value={texto} onChange={(e)=>setTexto(e.target.value)}/>
      <p>{texto}</p>
      <Contador />
      <ShowProduto/>
    </div>
  );
}

export default App;