import { Outlet, useNavigation } from 'react-router-dom'
import MainNavigation from '../MainNavigation'
import styled from 'styled-components'

const Centered = styled.main`
  margin: 2rem auto;
  text-align: center;
`
export default function RootLayout() {
  const navigation = useNavigation()
  const eventsNavigationHandler = (isActive) => {
    // console.log(isActive)
  }

  // console.log(Outlet)
  return (
    <>
      <MainNavigation eventsNavigationHandler={eventsNavigationHandler} />
      <Centered>
        {navigation.state === 'loading' && <p>Loading data...</p>}
        <Outlet />
      </Centered>
    </>
  )
}
