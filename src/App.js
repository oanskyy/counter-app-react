// import React from 'react'
import "./App.css"
import Counter from "./Counter"
import CounterHooks from "./CounterHooks"

function App() {
  return (
    <div className="App">
      {/* adding props to counter */}
      Counter
      <Counter initialCount={0} />
      Counter Hooks
      <CounterHooks initialCount={3} />
      <figure>
        <blockquote>
          “An investment in knowledge pays the best interest.”
        </blockquote>
        <figcaption>- Benjamin Franklin</figcaption>
      </figure>
    </div>
  )
}

export default App
