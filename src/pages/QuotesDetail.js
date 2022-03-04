import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY_DATA = [
    { id: '1', author: 'Maximillian', text: 'React complete guide ...' },
    { id: '2', author: 'Max', text: 'React complete guide ...' },
]

const QuotesDetail = () => {
    const params = useParams()
    const routeMatch = useRouteMatch()
    const location = useLocation()
    const quote = DUMMY_DATA.find((item) => item.id === params.quoteId)

    if (!quote) {
        return <p>Quote not found</p>
    }

    return (
        <div>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={`${routeMatch.path}`} exact>
                <div style={{ textAlign: 'center' }}>
                    <Link
                        to={`${location.pathname}/comments`}
                        className="btn--flat"
                    >
                        OPEN COMMENTS
                    </Link>
                </div>
            </Route>
            <Route path={`${routeMatch.path}/comments`}>
                <Comments />
            </Route>
        </div>
    )
}

export default QuotesDetail
