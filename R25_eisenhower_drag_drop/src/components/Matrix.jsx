import React from 'react';
import { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './Test.css';



function Matrix()
{
    const ItemType = 'ITEM';

    const initialItems = [
    { nom: "poma", caixa: "Do" },
    { nom: "pera", caixa: "Do" },
    { nom: "patata", caixa: "Decide" },
    { nom: "ceba", caixa: "Decide" },
    { nom: "préssec", caixa: "Delegate" },
    { nom: "maduixa", caixa: "Delegate" },
    { nom: "kiwi", caixa: "Delete" },
    { nom: "pinya", caixa: "Delete" },
    ]

    
const boxes = ["Do", "Decide", "Delegate", "Delete"]

    const Item = ({ name, box }) => {
        const [{ isDragging }, drag] = useDrag({
        type: ItemType,
        item: { type: ItemType, name },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
        });
    
        return (
        <div
            ref={drag}
            className="border p-4 bg-white rounded-lg italic mb-4 flex justify-between"
            style={{ opacity: isDragging ? 0.5 : 1 }}
        >
            {name}
            {box == "Delete" ? <button onClick={deleteItem} value={name} className="hover:text-red-600">X</button> : ''}
                
        </div>
        );
    };

    const Box = ({ children, title, mouItem }) => {
        const [{ isOver }, drop] = useDrop({
            accept: ItemType,
            drop: (item, monitor) => {
            // Obtenir el nom del item que s'ha deixat anar
            const itemName = item.name;
            // Obtain el nom de la caixa on es deixa anar
            const containerTitle = title;
            // Moure l'item d'un lloc a l'altre
            mouItem(itemName, containerTitle)
            },
            collect: monitor => ({
            isOver: !!monitor.isOver(),
            }),
        });
        
        return (
            <div ref={drop} className={`bg-${colorPicker(title)}-300 p-8 min-h-[400px] border ${isOver ? 'bg-blue-500' : ''} rounded-lg`}>
            <h2 className="text-xl text-center mb-4 font-bold italic" >{title}</h2>
            {children}
            </div>
        );
        };

        const [items, setItems] = useState(() => {
            const savedItems = localStorage.getItem("items");
            return JSON.parse(savedItems) || initialItems;
        }
        )

        const mouItem = (item, caixa) => {
            const nousItems = items.map(it => {
                if (it.nom === item){
                    it.caixa = caixa;
                }
                return it;
            })
            setItems(nousItems)
    }

    const [newCampus, setNewCampus] = useState("");
    
    //bg-green-300 bg-red-300 bg-blue-300 bg-slate-300
    function colorPicker(actualBox){
        switch(actualBox){
        case "Do":
            return "green";
        case "Decide":
            return "blue";
        case "Delegate":
            return "red";
        case "Delete":
            return "slate";
        default:
            return "grey";
        }
    }

    function handleChange(x){
        setNewCampus(x.target.value);
    }

    function createItem(){
        const newItem = {nom:newCampus, caixa:"Do"}
        setItems([...items, newItem]);
    }

    function deleteItem(x){
        setItems([...items.filter(a => a.nom != x.target.value)])
    }

    function guardarItems(){
        localStorage.setItem("items", JSON.stringify(items));
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="flex flex-col justify-center items-center self-auto p-6 mb-16">
                <input onChange={handleChange} value={newCampus} type="text" className='w-48 rounded-lg p-2'></input>
                <button onClick={createItem} className='bg-blue-300 p-2 rounded-lg mt-2 hover:bg-blue-400 uppercase mt-3'>Crear</button>
            </div>
            <div className="grid grid-cols-2 gap-6">
            {
                boxes.map(caixa => (
                    <Box key={caixa} title = {caixa} mouItem = {mouItem}  >
                        {
                            items.filter(e => e.caixa==caixa).map(e => <Item key={e.nom} name={e.nom} box={e.caixa}/>)
                        }
                    </Box>
                ))
            }
            </div>
            <div className='flex justify-center mt-4'><button onClick={guardarItems} className='flex bg-blue-300 rounded-lg hover:bg-blue-400 uppercase p-2'>Guardar</button></div>
        </DndProvider>
    )
    
}

export default Matrix;