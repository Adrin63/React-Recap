// App.js
import React from 'react';
import { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './Test.css';

const ItemType = 'ITEM';

const initialItems = [
{ nom: "poma", caixa: "caixa1" },
{ nom: "pera", caixa: "caixa1" },
{ nom: "patata", caixa: "caixa2" },
{ nom: "ceba", caixa: "caixa2" },
{ nom: "préssec", caixa: "caixa1" },
{ nom: "maduixa", caixa: "caixa2" },
]

const CAIXES = ["caixa1", "caixa2"]


const Item = ({ name }) => {
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
      className="border p-4 bg-red-200 mb-4"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {name}
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
      <div ref={drop} className={`bg-slate-100 p-8 min-h-[400px] border ${isOver ? 'bg-blue-500' : ''}`}>
        <h2 className="text-xl text-center mb-4" >{title}</h2>
        {children}
      </div>
    );
  };
  

const Test = () => {

    const [items, setItems] = useState(initialItems)

    // funció que "Mou" un element d'una caixa a l'altra
    const mouItem = (item, caixa) => {
        const nousItems = items.map(it => {
            if (it.nom === item){
                it.caixa = caixa;
            }
            return it;
        })
        setItems(nousItems)

    }


  return (
    <DndProvider backend={HTML5Backend}>
        <div className="grid grid-cols-2 gap-6">
        {
            CAIXES.map(caixa => (
                <Box key={caixa} title = {caixa} mouItem = {mouItem}  >
                    {
                        items.filter(e => e.caixa==caixa).map(e => <Item key={e.nom} name={e.nom}/>)
                    }
                </Box>
            ))
        }
        </div>
    </DndProvider>
  );
};

export default Test;
