import React from "react";

const DUMMYEventsList = [
    {
      id: '1',
      title: 'urodziny',
    },
    {
      id: '2',
      title: 'Sprawdzian',
    },
  ]

const EventContext = React.createContext({events:DUMMYEventsList})

export default EventContext;