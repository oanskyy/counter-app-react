// import React from 'react'
import "./App.css"
import Counter from './Counter'

function App() {


  return (
    <div className="App">
    {/* adding props to counter */}
    <Counter initialCount={0}/>
      <figure>
        <blockquote>
          “An investment in knowledge pays the best interest.”
        </blockquote>
        <figcaption>Benjamin Franklin</figcaption>
      </figure>
    </div>
  )
}

export default App
