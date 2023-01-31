import classes from './EventItem.module.css'
import { Link } from 'react-router-dom'

function EventItem({ event }) {
  function startDeleteHandler() {
    // ...
  }
  // console.log(event)
  return (
    <article className={classes.event}>
      <h1>{event.title}</h1>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        {/* <a href="edit">Edit</a> */}
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  )
}

export default EventItem
