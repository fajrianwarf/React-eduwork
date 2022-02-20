import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../Redux/features/Counter/actions'

export default function Redux() {
  let { count } = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div className='d-flex align-items-center justify-content-center'>
        <button onClick={() => dispatch(decrement(1))}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment(1))}>+</button>
    </div>
  )
}
