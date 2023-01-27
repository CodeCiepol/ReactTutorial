import styled from 'styled-components'
import MainNavigation from '../MainNavigation'
import PageContent from '../PageContent'
import { useRouteError } from 'react-router-dom'
  const Centered = styled.main`
    margin: 2rem auto;
    text-align: center;
  `


export default function ErrorPage() {
const error =useRouteError();
  return (
    <>
      <MainNavigation />
      <Centered>
        <PageContent title="an error occurred!">
        <p>Could not find this page!</p>
        </PageContent>
      </Centered>
    </>
  )
}
