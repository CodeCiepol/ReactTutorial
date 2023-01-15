import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
// import { uiActions } from './store/index'
import { sendCartData, fetchCartData } from './store/cart-actions'
import Notification from './components/UI/Notification'

let isInitial = true

function App() {
  const dispatch = useDispatch()
  const cartApperance = useSelector((state) => state.ui.showCart)
  const cart = useSelector((state) => state.cart)
  const notification = useSelector((state) => state.ui.notification)

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }
    if(cart.changed)dispatch(sendCartData(cart))
  }, [cart, dispatch])
  //      THIS useEffect was moved to cart-slice, when we using creator Thunk
  // useEffect(() => {
  // const sendCartData = async () => {
  // dispatch(
  //   uiActions.showNotification({
  //     status: 'pending',
  //     title: 'sending..',
  //     message: 'sending card data!',
  //   })
  // )

  // const response = await fetch(
  //   'https://reactguide-d1e11-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
  //   {
  //     method: 'PUT',
  //     body: JSON.stringify(cart),
  //   }
  // )
  // if (!response.ok) {
  //   throw new Error('sending cart data failed')
  // }
  // dispatch(
  //   uiActions.showNotification({
  //     status: 'success',
  //     title: 'Success!',
  //     message: 'sending cart data successfully!',
  //   })
  // )
  // }

  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }

  //   sendCartData().catch((error) => {
  //     dispatch(
  //       uiActions.showNotification({
  //         status: 'error',
  //         title: 'Error!',
  //         message: 'sending cart data failed!',
  //       })
  //     )
  //   })
  // }, [cart, dispatch])
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        ></Notification>
      )}
      <Layout>
        {cartApperance && <Cart />}
        <Products />
      </Layout>
    </>
  )
}

export default App
