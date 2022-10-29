import React,{useState} from 'react'; 
import Counter from './components/Counter';
import './App.css';
export default function AppCounter() {
    const [total, setTotal] = useState(0);
    const upCounter = ()=>{
        setTotal((prev)=>prev+1);
    }
    return(
        <div>
            <div className="totalCounter" >
                <span className="total">{total}</span>
            </div>
            <div className="container">
                <Counter upCounter={upCounter}/>
                <Counter upCounter={upCounter}/>
            </div>
        </div>
    );
}

