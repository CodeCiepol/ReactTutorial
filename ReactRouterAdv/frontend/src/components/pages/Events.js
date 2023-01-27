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
export async function eventLoader(){ 
  const response = await fetch('http://localhost:8080/events')

  if (!response.ok) {
    // setError('Fetching events failed.');
  } else {
    const resData = await response.json()
    return resData.events
    // setFetchedEvents(resData.events);
  }
}