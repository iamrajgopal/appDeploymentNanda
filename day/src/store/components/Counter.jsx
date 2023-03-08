import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {increment} from '../reduxSlice/counterSlice'

function Counter() {
    let dispatch = useDispatch(); 
    let count = useSelector((store)=> store.counter.count)
  return (
    <div>
        <h3>Count :{count}</h3>
        <button onClick={()=>dispatch(increment())}>Count</button>
    </div>
  )
}

export default Counter