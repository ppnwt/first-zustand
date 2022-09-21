import React from 'react'
import { useFishStore } from '../store/fishStore';

const Counter = () => {
 const { fishes, addAFish } = useFishStore(
    (state) => ({
      fishes: state.fishes,
      addAFish: state.addAFish,
    }),
  )
  return (
    <section>
      <h3>Fish Persist in sessionStorage</h3>
      <p>fishes : {fishes}</p>
      <button onClick={addAFish}>Increase Fish</button>
    </section>
  )
}

export default Counter