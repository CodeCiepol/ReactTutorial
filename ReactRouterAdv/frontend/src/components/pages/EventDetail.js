import { useContext } from "react"
import { useParams } from "react-router-dom"
import EventItem from "../EventItem"
import EventContext from '../store/eventsContext'


export default function EventDetailPage(){
    const eventsCtx=useContext(EventContext)
    const params=useParams()
    // console.log("params",params)
    // console.log("eventsCtx",eventsCtx.events.filter(event=>event.id===params))

    const detailedEvent=eventsCtx.events.find(event=>event.id===params.eventId)
    return<>
    <EventItem event={detailedEvent}></EventItem>
    {/* <EventItem event={eventsCtx.events.filter(event=>event.id===params.eventId).map(event=> event)}></EventItem> */}
    {/* <h1>Event detail</h1> */}
    </>
}