import React, { useState } from "react";
import TodoLists from "./TodoLists";

const App=()=>{
  const [inputList,setInputList]=useState("");
  const [item,setItem]=useState([]);



  const inputEvent= (event) =>{
    setInputList(event.target.value)
  }

  const ListOfItems=()=>{
      setItem((olditem)=>{
        return [...olditem,inputList];  
      });
      setInputList("");
  }
  const deleteItem=(id)=>{
console.log("nice");
    setItem((olditem)=>{
      return olditem.filter((arrEl,index)=>{
        return id!==index;
      })
    })
  }
  return(
    <>
    <div className="main_div">
      <div className="center">
        <h1>To Do List</h1>
        
        <input 
        type="text" 
        placeholder="Add the item"
         onChange={inputEvent}
          value={inputList}
           />
        <button onClick={ListOfItems}> + </button>
        
        <ol>
          
            {/* {inputList} */}
            {
              item.map((itemVal,index)=>{
                return <TodoLists 
                key={index}
                id={index}
                text={itemVal }
                onSelect={deleteItem}
                />
              })
            }
          
        </ol>
      </div>
    </div>
    </>
  )
}
export default App;
