import { useState, useEffect } from "react";


function App()
{
  const [data, setData] = useState([]);
  const [busqueda, setBusqueda] = useState(0);

  useEffect( ()=>{
    
        fetch('https://api.citybik.es/v2/networks/bicing')
        .then(resp => resp.json())
        .then(resp => resp.network.stations)
        .then(a => setData(a))
        .catch(err => console.log(err))
  }, [])

  if (!data.length){
  return (
    <div>
    <h1 className="font-bold italic text-center p-3 uppercase">bicing</h1>
    <h1 className="text-center p-5">Carregant...</h1>
    </div>
    )
  }

  return (
    <>
      <h1 className="font-bold italic text-center p-3 uppercase">bicing</h1>
      <div className="flex justify-center p-4">
        <h3 className="italic p-3">Minimo Bicis Disponibles:</h3>
        <input className="border-2 rounded-lg w-8 text-center" onChange={(x)=> setBusqueda(x.target.value)} value={busqueda}></input>
      </div>
      <div className="flex justify-center">
        <table>
          <tr className="border">
            <th>Estación</th>
            <th>Bicis Disponibles</th>
            <th>Slots Libres</th>
            <th>Latitud</th>
            <th>Longitud</th>
          </tr>
          {data.filter(a => a.free_bikes >= busqueda).map(station =>
          <tr className="border text-center">
            <td>{station.name}</td>
            <td>{station.free_bikes}</td>
            <td>{station.empty_slots}</td>
            <td>{station.latitude}</td>
            <td>{station.longitude}</td>
          </tr>
          )}
        </table>
      </div>
      
    </>
  )
}

export default App;