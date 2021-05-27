import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
    {id:'q1', author: 'Max', text:'Learning React is fun!'},
    {id:'q2', author: 'Maxmilian', text:'Learning React is Great!'}
]

const allQuotes = () => {
    return (
        <div>
           <QuoteList quotes={DUMMY_QUOTES}/>
        </div>
    )
}

export default allQuotes;