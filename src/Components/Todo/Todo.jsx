import { useState } from "react";
import InputTodo from "./InputTodo";
import ViewTask from "./ViewTask";
export default function Todo(){
    const [value, setValue] = useState('');
    const [task, setTask] = useState([]);

    const AddTask = () => {
        const TaskObject = {
            id:Math.round(Math.random() * 100),
            value:value,
            status:false,
        }
        const newTask = [TaskObject, ...task]
        setValue('')
        setTask(newTask)
    }
    const DeleteTask = (id) => {
        const del = task.filter((e) => {return e.id !== id});
        setTask(del)
    }
    const Toggle = (id) =>{
        const toggle = task.map((e) => { return e.id == id ? {...e , status:!e.status} : {...e}})
        setTask(toggle)
        console.log(task);
    }
    const copytask = task
    return (
        <div className="container">
            <h1>Simple Todo App</h1>
            <br />
            <InputTodo  AddTask={AddTask}  value={value} setValue={setValue}/>
            <ViewTask copytask={copytask} DeleteTask={DeleteTask} Toggle={Toggle}/>
        </div>
    );
}