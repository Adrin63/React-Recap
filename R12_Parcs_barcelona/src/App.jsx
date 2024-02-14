import {Link, Outlet } from "react-router-dom";
import vistas from './parcs.json';
import {useState} from "react";
import Context from "./Context.js";

function App() {

  const [idioma, setIdioma] = useState("es");
  const datos = {idioma: idioma, setIdioma: setIdioma}

  function changeLanguage(){
    if(idioma === "es"){
      setIdioma("ca");
    }
    else{
      setIdioma("es");
    }
  }

  return (
    <Context.Provider value={datos}>    
        <button onClick={changeLanguage} className="bg-orange-300">cambio idioma</button>
        <p>{idioma}</p>
        <h1>Los mejores parques de Barcelona</h1>
        <p className="bg-green-300">¿Te gusta la naturaleza? Debes saber que, aunque vivas en Barcelona o en su área metropolitana, cerca de la ciudad encontrarás espacios naturales que son perfectos para perderse y disfrutar de un día al aire libre. En este listado de Salir.com hemos recopilado los mejores parques naturales cerca de Barcelona y el más lejano de todos está a menos de 1 hora y media, por tanto, podrás hacer una escapada de un día tranquilamente. Todos estos espacios son ideales para descubrir junto a tus amigos o familia y te ofrecen bellos rincones donde la naturaleza muestra su mejor faceta. ¡Descúbrelos!</p>
        
        <div className="bg-orange-300 rounded-lg text-center p-3 w-fit">
          <h2 className="text-center font-bold italic">PARQUES</h2>
          {vistas.map(p => <Link to={"/parques/"+p.id}><h1 className="hover:text-blue-700">{p.titol}</h1></Link>)}
        </div>
        <Outlet/>
    </Context.Provider>
  )
}

export default App;