import React, { useState, useEffect } from "react"

const Header = () => {
  const [quotes, setquotes] = useState(null)

  useEffect(() => {
    if (!quotes) {
      getQuote()
    }
  })

  const getQuote = async () => {
    let quote = await fetch('https://quotes.rest/qod')
    .then(res => res.json())
    .catch(err => console.log(err))
    
    console.log(quote.contents.quotes[0].quote)
    console.log(quote.contents.quotes[0].author)
    setquotes(quote)
  }

  const renderQuote = quote => {
    
    return (
      <div>
        <p><i> {quote.contents.quotes[0].quote} </i></p>
        <p> {quote.contents.quotes[0].author} </p>
      </div>
    )
  }

  return (
    <div className="header">
      <div> {new Date().toDateString()} </div>
      { quotes ? renderQuote(quotes) 
      : 
      <p>It should've been a quote of the day here, but something went wrong :/</p> }
    </div>
  )
}

export default Header