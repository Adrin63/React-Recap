import { useState } from "react";
import Tecla from "./Tecla";
import Display from "./Display";

function Panel(){
    let [display, setDisplay] = useState(0);
    let [valor1, setValor1] = useState();
    let [valor2, setValor2] = useState();
    let [operacion, setOperacion] = useState();

    function borrarDisplay(){
        setDisplay(0);
        console.log("borrar display");
    }

    function pulsar(x){
        if(x == 'C'){
            setDisplay(0);
            setValor1(null);
            setValor2(null);
            setOperacion(null);
            console.log('Todo borrado');
        }
        else if(x == '+' || x == '-' || x == '*' || x == '/'){
            setValor1(display);
            setOperacion(x);
        }
        else if(x == '='){
            if(!(valor1 == null || operacion == null || display == 0))
            {
                setValor2(display);
                console.log("val2 en el igual=" + valor2);
                ejecutar();
            }
        }
        else{
            setDisplay(x);
        }
    }

    function ejecutar(){
        console.log("valor1=" + valor1);
        console.log("valor2=" + valor2);
        console.log("op=" + operacion);
        setDisplay(eval("" + valor1 + operacion + valor2));
        setValor1(display);
    }

    return (
        <div className="flex flex-col bg-slate-800 w-1/2 items-center">
            <div className="bg-white">
                <Display contenido={display}/>
            </div>
            <div>
                <Tecla pulsar={pulsar} valor={7}/>
                <Tecla pulsar={pulsar} valor={8}/>
                <Tecla pulsar={pulsar} valor={9}/>
                <Tecla pulsar={pulsar} valor='*'/>
                <Tecla pulsar={pulsar} valor='/'/>
            </div>
            <div>
                <Tecla pulsar={pulsar} valor={4}/>
                <Tecla pulsar={pulsar} valor={5}/>
                <Tecla pulsar={pulsar} valor={6}/>
                <Tecla pulsar={pulsar} valor='+'/>
                <Tecla pulsar={pulsar} valor='-'/>
            </div>
            <div>
                <Tecla pulsar={pulsar} valor={1}/>
                <Tecla pulsar={pulsar} valor={2}/>
                <Tecla pulsar={pulsar} valor={3}/>
                <Tecla pulsar={borrarDisplay} valor='C'/>
                <Tecla pulsar={pulsar} valor='='/>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Panel;