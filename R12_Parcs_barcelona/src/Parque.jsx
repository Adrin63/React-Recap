import {useParams} from "react-router-dom";
import parques from './parcs.json';
import {useContext} from "react";
import Context from "./Context.js";

function Parque(){
    const {id} = useParams();
    const parque = parques.find(a => a.id == id);
    const {idioma} = useContext(Context);

    return (
        <div className="bg-slate-200 flex flex-col text-center">
        <h1>{idioma == "es" ? parque.titol : parque.titol_ca}</h1>
        <p>{idioma == "es" ? parque.text : parque.text_ca}</p>
        <img src={parque.imatge}/>
        </div>
    )
}

export default Parque;