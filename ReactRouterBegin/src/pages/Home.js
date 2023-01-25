import { Link, useNavigate } from "react-router-dom"

const HomePage = ()=>{

const navigate = useNavigate()

const navigateHandler=()=>{
    navigate('/products')
}

    return(
<>
<h1>My Home Page</h1>
{/* <p>Got to <a href="/products">the list of products</a></p> thats a bad thing, because its refreshing website, we lose all states and makes unnecesery job*/}
<p>Go to <Link to="products">the list of products</Link></p>
<button onClick={navigateHandler}>navigate</button>
</>
        )
}

export default HomePage