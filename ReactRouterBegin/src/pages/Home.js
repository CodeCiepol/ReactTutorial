import { Link } from "react-router-dom"

const HomePage = ()=>{
    return(
<>
<h1>My Home Page</h1>
{/* <p>Got to <a href="/products">the list of products</a></p> thats a bad thing, because its refreshing website, we lose all states and makes unnecesery job*/}
<p>Go to <Link to="/products">the linst of products</Link></p>
</>
        )
}

export default HomePage