import { useState } from "react";
import "./Counter.css";

export default function Counter(){
    const [count, setCount] = useState(0)
    return(
        <div className="container container-counter">
            <div className="counter">
                <div className="counter-taimer">
                    <h1 onClick={() => {setCount(count + 1)}}>{count}</h1>
                </div>
                <div className="restart-taimer">
                    <button onClick={() => {setCount(0)}}>⟳</button>
                </div>
            </div>
        </div>
    )
}