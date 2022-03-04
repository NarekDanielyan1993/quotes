import { Fragment, useMemo, useEffect, useState } from 'react'

import QuoteItem from './QuoteItem'
import classes from './QuoteList.module.css'


const SORT_DIRECTION = [
    { key: 'ASC', value: 'ASC' },
    { key: 'DESC', value: 'DESC' },
]

const SORT_FIELDS = [
    { key: 'name', value: 'name' },
    { key: 'author', value: 'author' },
]

const QuoteList = ({ quotes }) => {

    const sortQuotes = useMemo(() => (quotes, sortBy, direction) => {
        return [...quotes].sort((quoteA, quoteB) => {
            if (direction.toLowerCase() === 'asc') {
                return quoteA[sortBy] > quoteB[sortBy] ? 1 : -1
            } else {
                return quoteA[sortBy] < quoteB[sortBy] ? 1 : -1
            }
        })
    }, [])
    const [sortDirection, setSortDirection] = useState(
        SORT_DIRECTION[0].key || 'ASC'
    )
    const [sortKey, setSortKey] = useState(SORT_FIELDS[0].key)
    const [updatedQuotes, setUpdatedQuotes] = useState([])

    useEffect(() => {
        setUpdatedQuotes(quotes)
    }, [quotes])

    useEffect(() => {
        const sortedQuotes = sortQuotes(updatedQuotes, sortDirection, sortKey)
        setUpdatedQuotes(sortedQuotes)
    }, [sortKey, sortDirection])

    const sortKeyHandler = (value) => {
        setSortKey(value)
    }

    const sortDirectionHandler = (value) => {
        setSortDirection(value)
    }

    return (
        <Fragment>
            <select
                onChange={(e) => sortKeyHandler(e.target.value)}
                className="btn--flat"
            >
                {SORT_FIELDS.map((item) => {
                    return (
                        <option key={item.key} value={item.value}>
                            {item.value}
                        </option>
                    )
                })}
            </select>
            <select
                onChange={(e) => sortDirectionHandler(e.target.value)}
                className="btn--flat"
            >
                {SORT_DIRECTION.map((item) => {
                    return (
                        <option key={item.key} value={item.value}>
                            {item.value}
                        </option>
                    )
                })}
            </select>
            <ul className={classes.list}>
                {updatedQuotes.map((quote) => (
                    <QuoteItem
                        key={quote.id}
                        id={quote.id}
                        author={quote.author}
                        text={quote.text}
                    />
                ))}
            </ul>
        </Fragment>
    )
}

export default QuoteList
