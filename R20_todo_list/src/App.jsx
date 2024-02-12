import { useState } from "react";
import Tarea from './Tarea.jsx';

function App()
{
  const [listaTareas, setListaTareas] = useState([]);
  const [tarea, setTarea] = useState("");
  const [newIndex, setNewIndex] = useState(0);
  const [type, setNewType] = useState("TRABAJO");

  function handleChange(x){
    if(x.target.name == "tarea")
    {
      setTarea(x.target.value);
    }
  }

  function nuevaTarea(){
    var newObj = {"id":newIndex, "name":tarea,"type":type}
    setListaTareas([...listaTareas, newObj])
    setTarea("");
    setNewIndex(newIndex+1);
  }

  function eliminaTarea(id){
    setListaTareas(listaTareas.filter(x=> x.id != id));
  }

  function setType(x){
    switch(x.target.name){
      case "TRABAJO":
        return setNewType("TRABAJO");
      case 'PERSONAL':
        return setNewType("PERSONAL");
      case 'URGENTE':
        return setNewType("URGENTE");
      case 'FAMILIA':
        return setNewType("FAMILIA");
    }
  }

  return (
    <>
    <h1 className="font-bold italic text-center p-3">TO DO LIST</h1>
    <div className="flex flex-row gap-2 justify-center rounded">
      <div className="bg-slate-300 flex flex-col p-4 h-fit">
        <h3 className="font-bold p-4 text-center">Tarea</h3>
        <div className="flex flex-col items-center">
          <input onChange={handleChange} name="tarea" value={tarea} className="border border-indigo-500 mb-5" type="text"></input>
          <div className="flex flex-row gap-2">
            <button onClick={setType} name="TRABAJO" className="bg-blue-300 p-2 rounded-md hover:bg-blue-400">Trabajo</button>
            <button onClick={setType} name="PERSONAL" className="bg-green-300 p-2 rounded-md hover:bg-green-400">Personal</button>
            <button onClick={setType} name="URGENTE" className="bg-red-300 p-2 rounded-md hover:bg-red-400">Urgente</button>
            <button onClick={setType} name="FAMILIA" className="bg-orange-300 p-2 rounded-md hover:bg-orange-400">Familia</button>
          </div>
          <button onClick={nuevaTarea} className="bg-blue-500 rounded-lg text-white w-48 p-1 mt-5">Enviar</button>
        </div>
      </div>
      <div className="bg-slate-300 flex flex-col p-4 rounded w-96 items-center">
        <h3 className="font-bold p-4 text-center">Tasques</h3>
        {listaTareas.map(x => <Tarea id={x.id} name={x.name} type={x.type} delete={() => eliminaTarea(x.id)}/>)}
      </div>
    </div>
    </>
  )
}

export default App;