import React, { useState } from 'react'

const Quote = () => {
    let [quote, setQuote] = useState("Click below to see quotes 👇")

    let fetchQuote = async() => {
        try {
            let response = await fetch("https://quotes-api-self.vercel.app/quote")
            let data = await response.json()
          if (data) {
            setQuote(`"${data.quote}" \n- ${data.author}`)
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
      <p style={{whiteSpace: "pre-line"}}>{quote}</p>
      <button onClick = {utter} style={{marginRight: 10}}>Utter</button>
      <button onClick={fetchQuote}>Click</button>
    </div>
  )
}

export default Quote
