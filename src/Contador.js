import React, {useState}from 'react';
import './App.css';

function Contador() {
  //MODIFICANDO ESTADOS

  const initC = 0
  const [count,setCount] = useState(initC)

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={()=>{setCount(count+1)}}>contar</button>
    </div>
  );
}

export default Contador;
