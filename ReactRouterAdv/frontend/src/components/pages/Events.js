import { useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import EventsList from '../EventsList'
import EventContext from '../store/eventsContext'

export default function EventsPage() {
  const eventsCtx = useContext(EventContext)
  // console.log(eventsCtx.events)
  const events = useLoaderData()
  return (
    <>
      <EventsList events={events} />
    </>
  );
}