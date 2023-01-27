import EventsList from '../EventsList'
import { useContext } from 'react'
import EventContext from '../store/eventsContext'

export default function EventsPage() {
  const eventsCtx = useContext(EventContext)
  // console.log(eventsCtx.events)
  return (
    <>
      <h1>events:</h1>
      <EventsList events={eventsCtx.events} />
    </>
  )
}
