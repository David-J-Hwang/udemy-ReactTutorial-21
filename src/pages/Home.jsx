// Link: react style of "a href" + "to"
import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <>
      <h1>My Homepage!</h1>

      <p>Go to <Link to="/products">Products</Link></p>
    </>
  )
}

