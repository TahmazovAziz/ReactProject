import "./Todo.css";
export default function ViewTask(props){
    return(
        <div className="container">
            {props.copytask.map(item=>(
                <div className="task">
                    <input type="checkbox" className="task__check"  onClick={() => props.Toggle(item.id)}/>
                    <p className="task__value">{item.value}</p>
                    <button className="task__del" onClick={() => props.DeleteTask(item.id)}>x</button>
                </div>
            ))}
        </div>
    );
}