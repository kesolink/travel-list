import React, { useState } from 'react';
import Logo from "./Logo"
import Form from "./Form"
import  Parkinglist  from './Parkinglist';
import  Stats  from './Stats';
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Plug", quantity: 15, packed: false },
// ];
export default function App (){
  const [ items, setItems] = useState([]);
  function handleItems (item){
    setItems((items) =>[...items, item]);
  }
  function handleclearList(){
    setItems([])
  }
  function handleDelete (id){
    console.log(id)
    setItems((items)=> items.filter((item) =>{
      return item.id !==id
    } 
     ))
  }
  function handleToggleItem(id){
    setItems((items)=> items.map((item)=>item.id === id ? {...item, packed: !item.packed} : item))
  }
  return(
    <div>
    <Logo />
    <Form onAddItmes={handleItems} />
    <Parkinglist items={items} onDelete={handleDelete} onToggleitem={handleToggleItem} onhandleclearList={handleclearList} />
    <Stats items={items} />
    </div>
  )
}


;

;
;