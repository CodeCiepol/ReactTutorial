import EventForm from "../EventForm";
import {useRouteLoaderData} from "react-router-dom"

export default function EditEventPage(){
    const data= useRouteLoaderData("eventDetail")

    return<>
    <h1>EditEvent </h1>
    <EventForm event={data.event} method="patch"/>
    </>

}