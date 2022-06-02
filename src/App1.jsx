import React, {useEffect, useState} from 'react'

const App1 = () => {

    const valueInitial = [
        {
            fecha: new Date(),
            edad: 0,
            nombre: 'Martín',
            apellidos: 'San José'
        }
    ]

    const [value, setValue] = useState(valueInitial);

    useEffect(() => {
      
        const timerID = setInterval(() => {
            setValue(value.edad +1)
            setValue(value.fecha = new Date())
        },1000)
        
      return () => {
        clearInterval(timerID);
      }
    });

  return (
    <div>
         <h2>
         Hora Actual:
         {value.fecha}
         </h2>
         <h3>{value.nombre} {value.apellidos}</h3>
         <h1>Edad: {value.edad}</h1>
         </div>
  )
}

export default App1