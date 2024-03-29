import { useState, useEffect } from "react";



function getRandomQuote(quotes) {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

 export default function Quotes() {
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState(null);
    const [count, setCount] = useState(0);

    useEffect(()=>{
        // fetch method
        fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((json) =>{
            setQuotes(json);
             //setQuote(json[0]);
        });
        const interval = setInterval (() => {
             getNewQuote();
            setCount (count + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [count]);



    function getNewQuote() {
        setQuote(getRandomQuote(quotes));
    }
  return (
    <main className="quote">
        <h1> Quote Generator</h1>
        <selecton>
            <button onClick={getNewQuote}>New Quote</button>
            <h3>
                <span>"</span>
                {quote?.text}
            </h3>
            <i>- {quote?.author}</i>
        </selecton>

    </main>
  );
}