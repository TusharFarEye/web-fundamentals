import logo from './logo.svg';
import './App.css';
import Fareye from './containers/fareye';
import React, {useState} from 'react';


function App() {
  const [data, setData] = useState("tushar");

  return (
    <div>
    <input onChange = {(event) => setData(event.target.value)}></input>
    <h1>{`here is the ${data}`}</h1>
    <Fareye name = "tushar"/>
    </div>
  );
}

export default App;
