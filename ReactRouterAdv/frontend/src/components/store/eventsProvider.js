import EventContext from "./eventsContext";

export default function EventsProvider(props){
    const DUMMYEventsList = {events: [
        {
          id: '1',
          title: 'urodziny',
          description: "coraz starszy jesteś gnoju"
        },
        {
          id: '2',
          title: 'Sprawdzian',
          desciption: 'algorytmy z gęstej sieci neuronowej'
        },
      ]}
return(
    <EventContext.Provider value={DUMMYEventsList}>
        {props.children}
    </EventContext.Provider>
)
}