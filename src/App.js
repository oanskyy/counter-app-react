import React, { useState } from "react"
import "./App.css"
import Counter from "./Counter"
import CounterHooks from "./CounterHooks"

export const ThemeContext = React.createContext()
function App() {
  const [theme, setTheme] = useState("red")

  return (
    <ThemeContext.Provider value={{backgroundColor: theme}}>
      <div className="App">
        {/* adding props to counter */}
        Counter
        <Counter initialCount={0} />
        Counter Hooks
        <CounterHooks initialCount={3} />
        <button onClick={()=> setTheme(prevTheme => { 
          return prevTheme === 'red' ? 'blue' : 'red'
        })}></button>
        <figure>
          <blockquote>
            “An investment in knowledge pays the best interest.”
          </blockquote>
          <figcaption>- Benjamin Franklin</figcaption>
        </figure>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
