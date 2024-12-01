import React, { useState } from 'react'

const Quote = () => {
    let [quote, setQuote] = useState("Click below to see quotes 👇")

    let fetchQuote = async() => {
        try {
            let response = await fetch("https://zenquotes.io/api/random")
            let data = await response.json()
            console.log(data)
          if (data && data[0]) {
            setQuote(`"${data[0].q}" - ${data[0].a}`)
          } else {
            setQuote('No quote found, try again!')
          }

        } catch (error) {
            console.log("The error is - ", error)
            alert("Error occurred while fetching the quote")
        }
    }

    let utter = () => {
      const utterance = new SpeechSynthesisUtterance(quote)
      window.speechSynthesis.speak(utterance);
    }

  return (
    <div>
      <h2>Let me make you super pumped with quotes buddy 😉</h2>
      <p>{quote}</p>
      <button onClick = {utter} style={{marginRight: 10}}>Utter</button>
      <button onClick={fetchQuote}>Click</button>
    </div>
  )
}

export default Quote
