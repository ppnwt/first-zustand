import React from 'react'
import { useCounterStore } from '../store/counterStore'
import shallow from 'zustand/shallow'

const Counter = () => {
 const { count, increment, decrement } = useCounterStore(
    (state) => ({
      count: state.count,
      increment: state.increment,
      decrement: state.decrement
    }),
    shallow
  )
  return (
    <section>
      <h3>Counter</h3>
      <p>count : {count}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </section>
  )
}

export default Counter