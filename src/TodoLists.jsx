import React from "react";
const TodoLists=(props)=>{
    
    return(
    <>
    <div className="todo_style">
        <i className="fa fa-times" aria-hidden="true" onClick={()=>{
            props.onSelect(props.id);
        } } >x</i>
    <li> {props.text} </li>
    </div>
    </> 
    )
}


export default TodoLists;