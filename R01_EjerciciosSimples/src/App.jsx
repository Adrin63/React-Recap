import HolaMundo from "./HolaMundo";
import Bola from "./Bola";
import Cuadrado from "./Cuadrado";
import Separador from "./Separador";
import Titulo from "./Titulo";
import BolaX from "./BolaX";
import CuadradoB from "./CuadradoB";
import Mariposa from "./Mariposa";
import Capital from "./Capital";
import Gato from "./Gato";


function App(){
  
  return (
  <>
  <Mariposa color="blue"/>
  <HolaMundo/>
  <Bola/>
  <Cuadrado/>
  <Separador/>
  <br/>
  <br/>
  <Titulo text="Hola React!"/>
  <BolaX talla="80px" margen="10px" fondo="#ff0000" />
  <CuadradoB talla="70px" margen="8px" grosor="5px" color="blue"/>
  <Capital text="Barcelona"/>
  <Gato width="300" height="250" name="Nugget"/>
  </>)
}

export default App;