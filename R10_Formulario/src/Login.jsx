import { useEffect, useState } from "react";


function Login(props){
    
    const [validado, setValidado] = useState(false);
    const [nombre, setNombre] = useState("");
    const [password, setPassword] = useState("");

    function handleChangeLogin(x){

        if(x.target.name == "nombre"){
            setNombre(x.target.value);
        }
        else if(x.target.name == "password"){
            setPassword(x.target.value);
        }
    }

    function enviarConsulta(x){
        x.preventDefault(); 

        if(nombre == props.name && password == props.pass){
            setValidado(true);
        }
        else{
            setValidado(false);
        }
        
    }

    return (
        <>
            <h1 className="font-black bg-orange-300 p-3">2. Formulario de login</h1>
            <form onSubmit={enviarConsulta} className="bg-orange-300 flex justify-center flex-col items-center">
                <h3 className="p-3">Nombre</h3>
                <input onChange={handleChangeLogin} className="p-2 ml-2" name="nombre" value = {nombre} type="text"></input>
                <h3 className="p-3">Contraseña</h3>
                <input onChange={handleChangeLogin} className="p-2 ml-2" name="password" value = {password} type="text"></input>
                
                <button type="submit" className="bg-blue-300 rounded-lg m-5 p-2">Enviar</button>
                <h1 className="p-3 font-bold">{validado ? "ADELANTE" : "STOP"}</h1>
            </form>
        </>
    )
}

export default Login;