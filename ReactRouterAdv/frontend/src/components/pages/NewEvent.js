import { json } from 'react-router-dom'
import EventForm from '../EventForm'

export default function NewEventPage() {
  return (
    <>
      <h1>new event page</h1>
      <EventForm></EventForm>
    </>
  )
}

export async function action({ request, params }) {
  const data = await request.FormData()
  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  }
  const response = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(eventData),
  })

  if (!response.ok) {
    throw json({ message: 'could not save event' }, { status: 500 })
  }
}
