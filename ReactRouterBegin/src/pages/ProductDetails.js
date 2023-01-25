import { useParams, Link } from 'react-router-dom'
//use Params gives us a params object, which contains every dynamic patch segments as a property

export default function ProductDetailsPage() {
  const params = useParams()

  return (
    <>
      <div>some info about product</div>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
        {/* relative is default  connected to route*/}
          Back
        </Link>
      </p>
    </>
  )
}
