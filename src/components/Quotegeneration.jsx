import React, {useState , useEffect} from 'react'
import './quote.css'

function Quotegeneration() {

    const [quote,setQuote]=useState({});
    const [quotes,setQuotes]=useState([]);

    const getQuotes = async() => {
        try{
            const response = await fetch("/quotes.json");
            const data = await response.json();
            setQuotes(data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getQuotes();
    },[]);

    const showQuotes =  async() => {
        const randquote= Math.floor (Math.random() * quotes.length);
        setQuote(quotes[randquote]);
    }
    return(
        <div className='Quotegen'>
            <h1>Generate a Random Quote</h1>
            <button className='Quotebutton' onClick={showQuotes}>Get Quote</button>
            {quote && quote.quote && (
                <div className='Quotebox'>
                <h3 className='Quotetext'>"{quote.quote}"</h3>
                <h3 className='Quoteauthor'> - {quote.author}</h3>
            </div>
            )}
        </div>
    )
}

export default Quotegeneration;