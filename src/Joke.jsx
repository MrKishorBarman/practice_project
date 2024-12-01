import React, { useState } from 'react'

const Joke = () => {
  let [joke, setJoke] = useState("Click below to get jokes 👇")

  let fetchJoke = async () => {
    try {
      let response = await fetch("https://official-joke-api.appspot.com/random_joke")
      let data = await response.json()
      if (data) {
        setJoke(`${data.setup}\n${data.punchline}`)
      } else {
        setJoke("Joke not found")
      }
    } catch (error){
      console.log("Error - ", error)
      alert("Error occurred while fetching jokes!")
    }    
  }

  let utter = () => {
    const utterance = new SpeechSynthesisUtterance(joke)
    window.speechSynthesis.speak(utterance);
  }
  return (
    <div>
      <h2>Are you ready for the jokes buddy? 😁</h2>
      <p style={{ whiteSpace: "pre-line" }}>{joke}</p>
      <button onClick = {utter} style={{marginRight: 10}}>Utter</button>
      <button onClick={fetchJoke}>Click</button>
    </div>
  )
}

export default Joke
