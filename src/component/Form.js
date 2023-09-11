import { useState } from "react";
export default function Form ({onAddItmes}){
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