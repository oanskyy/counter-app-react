import React, { useState } from "react"

function CounterHooks({initialCount}) {
  const [count, setCount] = useState(initialCount)
  return (
    <div>
      <div>
        <button onClick={() => setCount( prevCount => prevCount -1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount( prevCount => prevCount + 1)}>+</button>
      </div>
    </div>
  )
}

export default CounterHooks
