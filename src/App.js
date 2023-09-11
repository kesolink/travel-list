import React, { useState } from 'react';
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Plug", quantity: 15, packed: false },
];
export default function App (){
  const [ items, setItems] = useState([]);
  function handleItems (item){
    setItems((items) =>[...items, item]);
  }
  function handleDelete (id){
    setItems((items)=> items.filter((item) =>{
      console.log(item)
      return item.id ===id
    } 
     ))
  }
  return(
    <div>
    <Logo />
    <Form onAddItmes={handleItems} />
    <Parkinglist items={items} onDelete={handleDelete} />
    <Stats />
    </div>
  )
}
function Logo (){
  return( <h1>Far Away</h1>

)};
function Form ({onAddItmes}){
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)
  

 

  function handleSubmit(e){
    e.preventDefault();
    if(!description) return;
    const newItem = {description, quantity, package: false, id: Date.now()}
    // console.log(newItem)
    
    setDescription("")
    setQuantity("")
    onAddItmes(newItem)
  }
  
 
  return(
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for trip</h3>
      <select value={quantity} onChange={(e)=> setQuantity(Number(e.target.value))}>
        {Array.from({length: 20}, (_, i) => i +1).map((num)=>(
          <option value={num} key={num}> {num} </option>
        ))}
      </select>
      <input type="text"
      placeholder = "item...." value={description} onChange={(e)=> setDescription(e.target.value)}>
      
      </input>
    </form>
   )

};
function Parkinglist ({items, onDelete}){
  return(
    <div className="list">
        <ul>{items.map(items => (<Item item={items} onDelete={onDelete} />))}</ul>
   </div>

)};

function Item ({item, onDelete}){
 
  return (
    <li>
      <span style={item.packed ? {textDecoration: "line-through"} : {}} >  {item.quantity} {item.description}  </span>
      <button onClick={()=>onDelete(item.id)}>X</button>
    </li>
  )
};
// style={item.packed ? {textDecoration: "line-through"} : {}} 

function Stats (){
  return(
  <footer className="stats" >
    <em>you have x time on your list, and you already pack x</em>
  </footer>

)};