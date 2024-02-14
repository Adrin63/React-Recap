import ciutats from "./ciutats.json";
import { useEffect, useState } from "react";
import Login from "./Login";
function App(){

  const [busqueda, setBusqueda] = useState("");
  const [resultado, setResultado] = useState([...ciutats]);

  //Filtro, valores sugeridos
  function handleChange(x){
    const filtro = x.target.value;
    setBusqueda(filtro);
    setResultado(ciutats.filter(obj => obj.municipi.toLowerCase().includes(filtro.toLowerCase())));
  }

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [validacion, setValidacion] = useState("");

  const passTester = new RegExp('/^(?=.*[a-zA-Z])(?=.*\d).+$/');

  function handlePassword(x){
    if(x.target.name == "user"){
      setUser(x.target.value);
    }
    else if(x.target.name == "password"){
      setPassword(x.target.value);
    }
    else if(x.target.name == "validacion"){
      setValidacion(x.target.value);
    }


      if(passTester.test(password))
      {
        console.log("a")
      }
    
  }

  return (
    <>    
    <div className="bg-green-200 p-3">
      <h1 className="font-black">3. Validar password</h1>
      <form className="flex flex-col items-center">
        <h3 className="p-3">Usuario</h3>
        <input onChange={handlePassword} className="p-2 ml-2" name="user" value = {user} type="text"></input>
        <h3 className="p-3">Contraseña</h3>
        <input onChange={handlePassword} className="p-2 ml-2" name="password" value = {password} type="text"></input>
        <h3 className="p-3">Validar Contraseña</h3>
        <input onChange={handlePassword} className="p-2 ml-2" name="validacion" value = {validacion} type="text"></input>
        <div className="bg-red-500 p-5 rounded-full m-5"></div>
      </form>
    </div>

    <Login name="Adrian" pass="1234"/>

    <div className="bg-blue-200 p-3">
      <h1 className="font-black">1. Filtro, valores sugeridos</h1>
      <div className="flex justify-center p-4"><input onChange={handleChange} name="busqueda" value = {busqueda} type="text"></input></div>
      <div className="rounded-lg h-50 w-50"></div>
      <br/>
      
      <h1 className="text-center italic p-4">Busqueda</h1>
      <div className="bg-blue-300">{resultado.map(x => <h1>{x.municipi}</h1>)}</div>
      <br/>
    </div>
    </>
  )
}

export default App;