import { useRouteLoaderData,json } from "react-router-dom"
import EventItem from "../EventItem"


export default function EventDetailPage(){
    const data= useRouteLoaderData("eventDetail")
    // console.log("params",params)
    // console.log("eventsCtx",eventsCtx.events.filter(event=>event.id===params))

    // const detailedEvent=eventsCtx.events.find(event=>event.id===params.eventId)
    return<>
    <EventItem event={data.event}></EventItem>
    {/* <EventItem event={eventsCtx.events.filter(event=>event.id===params.eventId).map(event=> event)}></EventItem> */}
    {/* <h1>Event detail</h1> */}
    </>
}

export async function detailLoader({request,params}){
    const response= await fetch(`http://localhost:8080/events/${params.eventId}`)
    if (!response.ok){
        throw json({message:"couldnt fetch details of current event"},{status: 500})
    }else{
        return response
    }
}