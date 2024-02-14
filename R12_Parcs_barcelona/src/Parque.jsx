import {useParams} from "react-router-dom";
import parques from './parcs.json';
import {useContext} from "react";
import Context from "./Context.js";

function Parque(){
    const {id} = useParams();
    const parque = parques.find(a => a.id == id);
    const {idioma} = useContext(Context);

    return (
        <div className="bg-green-200 flex flex-col items-center p-3">
        <h1 className="font-bold text-xl p-3">{idioma == "es" ? parque.titol : parque.titol_ca}</h1>
        <p className="p-3 text-center">{idioma == "es" ? parque.text : parque.text_ca}</p>
        <img className="h-60 rounded-lg" src={parque.imatge}/>
        </div>
    )
}

export default Parque;