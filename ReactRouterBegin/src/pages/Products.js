import { Link } from 'react-router-dom'

const dummy_products = [
  { id: 'p1', name: 'product 1', description: 'blah blah' },
  { id: 'p2', name: 'product 2', description: 'blah blah' },
  { id: 'p3', name: 'product 3', description: 'blah blah' },
]
const ShowListHandler = () => {
  return dummy_products.map((product) => (
    <li key={product.id}>
      <Link to={product.id}>{product.name}</Link>
    </li>
  ))
}
export default function ProductsPage() {
  return (
    <>
      <h1>The product Pages</h1>
      <ul>

        <ShowListHandler/>
        {/* {dummy_products.map((product) => {
          return<li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        })} */}
      </ul>
    </>
  )
}
