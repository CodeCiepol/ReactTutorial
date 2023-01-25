import styled from 'styled-components'
import MainNavigation from '../MainNavigation'

export default function ErrorPage() {
  const Centered = styled.main`
    margin: 2rem auto;
    text-align: center;
  `

  return (
    <>
      <MainNavigation />
      <Centered>
        <h1>error occurred</h1>
        <p>Could not find this page!</p>
      </Centered>
    </>
  )
}
