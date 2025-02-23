import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../styles/index.css";
// components
import Counter from './components/Counter';
let counter = 0;
setInterval(()=> {
  counter++
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Counter contador={counter}/>
  </React.StrictMode>,
)
}, 1000);