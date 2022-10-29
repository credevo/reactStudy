import React, { useEffect, useState } from 'react'; 

export default function Counter() {

    const [num, setNum] = useState(0);
    useEffect(()=>{
        console.log('changeNum', num);   
    },[num])
    /**
     * useState로 데이터를 선언하고, state를 변경 했을때,
     * react 해당 컴포넌트(함수)를 호출하고, 
     * state로 선언된 값은 간직하고 있기 때문에, 다시 초기화 되지 않는다.
     * react는  return으로 정의된 부분인
     * virtual Dom를 가지고 있기에 해당 state 있는 부분만 Dom update 한다.
     * 
     * 따라서, useState는 ui가 변경이 필요한 데이타를 관리할때 사용한다.
     */
    return(
        <div className="counter">
            <span className="number">{num}</span>
            <button className="button" onClick={()=>{
                const newNum = num + 1;
                setNum(newNum);
                console.log('beforeNum:' , num);
                /** 
                 *  setNumb(num+1)
                 *  setNumb(num+1)
                 *  setNumb(num+1)
                 *  state 값을 변경했지만 현재 콜백함수가 끝나기전까진 같은 참조값을 바라보는것 같다. 
                 *  클로저 (스냅샷된 상태값)를 바라본다.
                 *  따라서 
                 *  setNum((prev)=>prev+1)
                 *  setNum((prev)=>prev+1)
                 *  setNum((prev)=>prev+1)
                 *  콜백함수 prev 이전값을 업데이트 실행시켜준다
                 * 
                 * 
                */
            }}>Add+</button>
        </div>
    );
}

