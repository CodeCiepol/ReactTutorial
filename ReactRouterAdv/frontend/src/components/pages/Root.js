import { Outlet } from 'react-router-dom'
import MainNavigation from '../MainNavigation'
import styled from 'styled-components'

  const Centered = styled.main`
    margin: 2rem auto;
    text-align: center;
  `
export default function RootLayout() {

const eventsNavigationHandler=(isActive)=>{
// console.log(isActive)
}


  // console.log(Outlet)
  return (
    <>
      <MainNavigation eventsNavigationHandler={eventsNavigationHandler}/>
      <Centered>
        <Outlet />
      </Centered>
    </>
  )
}
