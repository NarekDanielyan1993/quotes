import { useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import classes from './QuoteItem.module.css';

const QuoteItem = (props) => {

  const routeMatch = useRouteMatch()
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text.length > 30 ? `${props.text.slice(0, 30)}...` : props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className='btn' to={`${routeMatch.path}/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
