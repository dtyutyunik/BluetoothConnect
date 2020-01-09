import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [device, setDevice]= useState('');


  const runBluetooth=()=>{

    navigator.bluetooth.requestDevice({

      // filters: [{
      //   services: ['heart_rate'],
      // }]


      acceptAllDevices:true
    })



  }


  return (
    <div className="App">
     

     <button onClick={runBluetooth}>bluetooth</button>
    </div>
  );
}

export default App;
