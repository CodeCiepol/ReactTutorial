import { Outlet } from 'react-router-dom'
import MainNavigation from '../MainNavigation'
import styled from 'styled-components'

export default function RootLayout() {
  const Centered = styled.main`
    margin: 2rem auto;
    text-align: center;
  `

  return (
    <>
      <MainNavigation />
      <Centered>
        <Outlet />
      </Centered>
    </>
  )
}
