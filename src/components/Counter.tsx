import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { decrement, increment, incrementByAmount, reset } from '../features/counter/counterSlice';


const Counter = () => {
    const count=useAppSelector((state)=>state.counter.value)
  const dispatch=useAppDispatch();

    return (
    <div style={{textAlign:"center",padding:'2rem'}} >
<h2>Count:{count}</h2>
<div style={{display:'flex',gap:'1rem',justifyContent:'center'}}></div>
  <button onClick={()=>dispatch(increment())}>+Increment</button>
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
 <button onClick={()=>dispatch(reset())}>Reset</button>
 <button onClick={()=>dispatch(incrementByAmount(5))}>+5</button>
    </div>
  )
}

export default Counter