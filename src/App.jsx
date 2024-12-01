import { useState } from 'react'
import './App.css'
import Joke from './Joke'
import Quote from './Quote'

function App() {
  let [selectedComponent, setSelectedComponent] = useState(null)
  return (
    <>
      {!selectedComponent &&
        <>
        <h2>Welcome 🙏</h2>
        <h2>Let me make your day today 😉</h2>
          <h3>
            Wanna proceed with Quotes
            <button onClick={() => setSelectedComponent("Quote")} style={{marginLeft: 10}}>Get Quotes</button>
          </h3>
          <h3>
            Wanna proceed with Jokes
            <button onClick={() => setSelectedComponent("Joke")} style={{marginLeft: 10}}>Get Jokes</button>
          </h3>
        </>
      }

      {
        selectedComponent === "Quote" && <Quote />
      }

      {
        selectedComponent === "Joke" && <Joke />
      }
    </>
  )
}

export default App
