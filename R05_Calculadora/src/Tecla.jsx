function Tecla(props){
    return (
        <button className="bg-orange-400 w-50 h-50 p-3 rounded-lg hover:bg-orange-300" onClick={() => props.pulsar(props.valor)}>
            {props.valor}
        </button>
    )
}

export default Tecla;