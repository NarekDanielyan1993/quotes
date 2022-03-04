import { useState } from 'react';
import { Input } from '../Input/Input';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {

  const [quote, setQuote] = useState({
    author: "",
    content: ""
  })

  const submitFormHandler = (e) => {
    e.preventDefault();
    const enteredAuthor = quote.author;
    const enteredText = quote.content;
    props.onAddQuote({ author: enteredAuthor, text: enteredText })
  }

  const fieldChangeHanlder = (e) => {
    setQuote({
      ...quote,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler} autoComplete="off">
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
            <Input 
              type="text"
              name="author" 
              placeholder="Author name"
              label="Author name"
              value={quote.author}
              onChange={(e) => fieldChangeHanlder(e)}
            />
        </div>
        <div className={classes.control}>
            <Input 
              type="textarea"
              name="content" 
              placeholder="Add content..."
              value={quote.content}
              onChange={(e) => fieldChangeHanlder(e)}
            />
        </div>
        <div className={classes.actions}>
            <button className='btn'>Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
