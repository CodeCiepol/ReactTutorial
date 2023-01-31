import { json, useLoaderData } from 'react-router-dom'
import { useContext } from 'react'
import EventsList from '../EventsList'
import EventContext from '../store/eventsContext'

export default function EventsPage() {
  const eventsCtx = useContext(EventContext)
  // console.log(eventsCtx.events)
  const data = useLoaderData()
  const events = data.events
  return (
    <>
      <EventsList events={events} />
    </>
  )
}

//this executes on browser, not server!!
export async function eventLoader() {
  const response = await fetch('http://localhost:8080/events')

  if (!response.ok) {
    // setError('Fetching events failed.');
    //     throw new Response(
    // JSON.stringify(

    //   {message: 'could not fetch events'}

    //     )
    throw json({ message: 'could not fetch events.' }, { status: 500 })
  } else {
    //we dont need to manually extract data from the response, we can return the response
    return response
    // const resData = await response.json()
    // return resData.events
  }
}
