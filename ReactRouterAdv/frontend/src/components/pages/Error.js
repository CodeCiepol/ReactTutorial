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
let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }
  return (
    <>
      <MainNavigation />
      <Centered>
        <PageContent title={title}>
        <p>{message}</p>
        </PageContent>
      </Centered>
    </>
  )
}
