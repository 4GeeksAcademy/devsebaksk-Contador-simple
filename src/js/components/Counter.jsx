
import React from "react";


function Counter(props) {
  let primer = (props.contador/1)%10;
    let segundo = Math.floor(props.contador/10)%10;
    let tercer = Math.floor(props.contador/100)%10;
    let cuarto = Math.floor(props.contador/1000)%10;
  return (
    
  <div className="contenedor">
    <div><p className="numero">{cuarto}</p></div>
    <div><p className="numero">{tercer}</p></div>
    <div><p className="numero">{segundo}</p></div>
    <div><p className="numero">{primer}</p></div>
  </div>
);
};

export default Counter




