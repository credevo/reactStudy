import React,{useState} from 'react'; 
import Counter from './components/Counter';
import './App.css';
export default function AppCounter() {
    const [count, setCount] = useState(0);
    const upCounter = ()=>{
        setCount((prev)=>prev+1);
    }
    return(
        <div className="container">
            <div className="banner" >
                Total Counter : {count} {count > 10 ? '🧨' : '👍'}
            </div>
            <div className="counters" >
                <Counter total={count} onClick={upCounter}/>
                <Counter total={count} onClick={upCounter}/>
            </div>
            
        </div>
            );
}

