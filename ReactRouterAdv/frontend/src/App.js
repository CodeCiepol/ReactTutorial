// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EditEventPage from './components/pages/EditEvent'
import ErrorPage from './components/pages/Error'
import EventDetailPage, { detailLoader, action as deleteEventAction } from './components/pages/EventDetail'
import EventsPage, { eventLoader } from './components/pages/Events'
import HomePage from './components/pages/Home'
import NewEventPage, { action as newEventAction } from './components/pages/NewEvent'
import RootLayout from './components/pages/Root'
import RootEventsLayout from './components/pages/RootEvents'
import EventsProvider from './components/store/eventsProvider'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      { path: '', element: <HomePage /> },
      {
        path: 'events',
        element: <RootEventsLayout />,
        children: [
          {
            path: '',
            element: <EventsPage />,
            loader: eventLoader,
          },
          {
            path: ':eventId',
            id: 'eventDetail',
            loader: detailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              }, // we using ":" to set a dynamic path

              {
                path: 'edit',
                element: <EditEventPage />,
              },
            ],
          }, // we using ":" to set a dynamic path
          {
            path: 'new',
            element: <NewEventPage />,
            action: newEventAction,
          },
        ],
      },
    ],
  },
])

function App() {
  return (
    <>
      <EventsProvider>
        <RouterProvider router={router} />{' '}
      </EventsProvider>
    </>
  )
}

export default App
