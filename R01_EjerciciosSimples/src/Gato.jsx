function Gato(props){
    return (
        <div style={{width:"fit-content", border:"solid 1px blue", textAlign:"center"}}>
            <img src={"http://placekitten.com/"+props.width+"/"+props.height} style={{margin:"5px", maxWidth:props.width, maxHeight:props.height}}/>
            <h1>{props.name}</h1>
        </div>
    )
}

export default Gato;