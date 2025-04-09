import { useEffect, useState } from "react"
import "./Timer.css"
export default function Timer(){
    const [time, setTime] = useState(0)
    const [run, setRun] = useState(false)
    useEffect(()=>{
        if(run){
            const interval = setInterval(()=>{
                if(time > 0){
                    setTime(time - 1)
                }
                else{
                    setRun(false)
                }
            }, 1000)
            return () => clearInterval(interval);
        }
    }, [time, run])
    return(
        <div className="container-timer">
            <div className="timer-progress-ring">
                <svg className="progress-ring" viewBox="0 0 100 100">
                    <circle className="progress-ring__circle" cx="50" cy="50" r="45" />
                </svg>
                <div className="timer-value">{time}</div>
            </div>

            <div className="timer-controls">
                <div className="timer-primary-controls">
                    <button className="timer-start" onClick={() => setRun(true) }>▶</button>
                    <button className="stop" onClick={() => setRun(false)}>⏸</button>
                    <button className="timer-restart" aria-label="Restart timer" onClick={() => setTime(0)}>⟳</button>
                </div>
                <div className="time-presets">
                    <button className="time-preset" onClick={(e) => setTime(time + parseInt(e.currentTarget.textContent))}>5</button>
                    <button className="time-preset" onClick={(e) => setTime(time + parseInt(e.currentTarget.textContent))}>10</button>
                    <button className="time-preset" onClick={(e) => setTime(time + parseInt(e.currentTarget.textContent))}>20</button>
                </div>
            </div>
        </div>


    )
}