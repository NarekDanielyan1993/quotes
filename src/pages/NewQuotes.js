import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import apiCall from '../apiCall'
import QuoteForm from '../components/quotes/QuoteForm'

const NewQuotes = () => {
    const history = useHistory()
    const addQuoteHandler = async ({ author, text }) => {
        const data = {
            author,
            text,
        }
        try {
            await apiCall({ method: 'post', url: '/quotes.json', data: data })
            history.push('/quotes')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Fragment>
            <QuoteForm onAddQuote={addQuoteHandler} />
        </Fragment>
    )
}

export default NewQuotes
