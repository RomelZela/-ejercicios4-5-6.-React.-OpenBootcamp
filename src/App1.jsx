import React, {useEffect, useState} from 'react'

const App1 = () => {
  
  const datosPersona = {
    nombre: 'Romel',
    apellidos: 'Zela'
  }
    const valueInitial =
        {
          fecha: new Date(),
          edad: 0
          };

    const [value, setValue] = useState(valueInitial);
    
    useEffect(() => {
        const timerID = setInterval(
          () => { tick();
          }, 1000);
      return () => clearInterval(timerID);      
    });

    
    
    const tick = () => {
      return setValue({
        fecha: new Date(),
        edad: value.edad + 1
      });
    };

  return (
    <div>
         <h2>
         Hora Actual:
         {value.fecha.toLocaleTimeString()}
         </h2>
         <h3>{datosPersona.nombre} {datosPersona.apellidos}</h3>
         <h1>Edad: {value.edad}</h1>
         </div>
  )
}

export default App1