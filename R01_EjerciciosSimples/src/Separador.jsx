
const separadorUnoStyle = {
    border: "1px solid black",
    marginBottom: "4px"
}

const separadorDosStyle = {
    border: "solid black"
}


function Separador(){
    return (
    <div>
    <hr style={separadorUnoStyle}></hr>
    <hr style={separadorDosStyle}></hr>
    </div>
    )
}

export default Separador;