import { useState } from "react";

export default function InputTodo(props){
    return(
        <div className="input-add">
            <input type="text" id='myInput' placeholder='Enter task' value={props.value} required onChange={(e)=>{props.setValue(e.target.value)}}/>
            <button className='add-task' onClick={props.AddTask}>+</button>
        </div>
    );
}