

function Tarea(props)
{
    function colorPicker()
    {
        switch(props.type){
            case 'TRABAJO':
                return "blue";
            case 'PERSONAL':
                return "green";
            case 'URGENTE':
                return "red";
            case 'FAMILIA':
                return "orange";
        }
    }

    return (
        <div className={"flex flex-row justify-between w-80 h-auto p-4  mb-3 rounded-lg bg-" + colorPicker() + "-300"}>
            <div>
                <p className="line-clamp-3 py-2">{props.name}</p>
                <p className="font-light text-sm italic">{props.type}</p>
            </div>
            <button onClick={props.delete} className="w-30  p-1 hover:font-bold hover:text-red-600">X</button>
        </div>
    )
}

export default Tarea;