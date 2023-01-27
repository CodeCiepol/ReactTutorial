import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import EventsNavigation from '../EventsNavigation'

  const Centered = styled.main`
    margin: 2rem auto;
    text-align: center;
  `
export default function RootEventsLayout() {

  // console.log(Outlet)
  return (
    <>
      <EventsNavigation/>
      <Centered>
        <Outlet />
      </Centered>
    </>
  )
}
