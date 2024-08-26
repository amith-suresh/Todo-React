import React from 'react'
import { useState } from 'react';

function Todo() {

    const[input,setInput]=useState();
    const[data,setData]=useState([]);
    
    function onSubmit(){
     setData([...data,{value:input,id:Date.now()}])
    }
    
    function onRemove(id){
        console.log(id);
        
       const filteredData = data.filter((item)=>item.id !== parseInt(id))
       setData(filteredData)
    }
    
    
      return (
    
        <>
         <input type="text" placeholder='Add your list here...' onChange={e=>setInput(e.target.value)}>
         
         </input> 
         <button type="submit" onClick={onSubmit}>
          Add
         </button>
         
         {data.map((e) => (
        
             <ul> 
             <li>{e.value}
             <button type="button" onClick={()=>onRemove(`${e.id}`)}>
          Remove
         </button> </li>
         </ul>
         ))
        
         }
         
    
        </>
      )
    }

export default Todo;
