function Capital(props){
    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            <a style={{fontSize: "150px"}}>{props.text[0]}</a>
            <a>{props.text}</a>
        </div>
    )
}

export default Capital;