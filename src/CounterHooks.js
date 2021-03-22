import React, { useState, useContext } from "react"
import { ThemeContext } from "./App"

function CounterHooks({initialCount}) {
  const [count, setCount] = useState(initialCount)
  const style = useContext(ThemeContext)
  return (
    <div>
      <div>
        <button style={style} onClick={() => setCount( prevCount => prevCount -1)}>-</button>
        <span>{count}</span>
        <button style={style} onClick={() => setCount( prevCount => prevCount + 1)}>+</button>
      </div>
    </div>
  )
}

export default CounterHooks
