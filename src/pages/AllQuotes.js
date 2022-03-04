import React, { useEffect, useState } from 'react'
import apiCall from '../apiCall'
import NoQuotesFound from '../components/quotes/NoQuotesFound'
import QuoteList from '../components/quotes/QuoteList'

const AllQuotes = () => {
    const [allQuotes, setAllQuotes] = useState([])

    useEffect(() => {
        const getQuotes = async () => {
            try {
                const { data: quotes } = await apiCall({ url: '/quotes.json' })
                const quotes_arr = []
                for (const item in quotes) {
                    quotes_arr.push({ id: item, ...quotes[item] })
                }
                setAllQuotes(quotes_arr)
            } catch (error) {
                console.log(error)
            }
        }
        getQuotes()
    }, [])

    // if (allQuotes.length < 1) {
    //     return <NoQuotesFound />
    // }

    return (
        <div>
            <QuoteList quotes={allQuotes} />
        </div>
    )
}

export default AllQuotes
